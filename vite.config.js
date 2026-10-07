import fs from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { marked } from 'marked';

// Turns src/posts/*.md into `{ title, date, ..., html }` at build time,
// so the markdown parser never ships to the browser.
function markdownPosts() {
  return {
    name: 'markdown-posts',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md')) return null;
      const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(code);
      const meta = {};
      let body = code;
      if (match) {
        body = match[2];
        match[1].split(/\r?\n/).forEach((line) => {
          const field = /^(\w+):\s*(.*)$/.exec(line);
          if (!field) return;
          const value = field[2].trim().replace(/^["']|["']$/g, '');
          meta[field[1]] = value === 'true' ? true : value === 'false' ? false : value;
        });
      }
      const post = { ...meta, html: marked.parse(body) };
      return { code: `export default ${JSON.stringify(post)};`, map: null };
    },
  };
}

// `pnpm preview` serves the same security headers Netlify does, so CSP
// problems show up locally before deploy. netlify.toml stays the source.
function netlifyHeaders() {
  const toml = fs.readFileSync(new URL('./netlify.toml', import.meta.url), 'utf8');
  const block = toml.split('[[headers]]').find((section) => /for = "\/\*"/.test(section)) ?? '';
  const headers = Object.fromEntries(
    [...block.matchAll(/^\s*([A-Z][A-Za-z-]+) = "(.*)"$/gm)].map(([, name, value]) => [name, value])
  );
  // Local preview is plain http, so skip the https-only bits.
  delete headers['Strict-Transport-Security'];
  headers['Content-Security-Policy'] = headers['Content-Security-Policy']?.replace(/;\s*upgrade-insecure-requests/, '');
  return headers;
}

export default defineConfig({
  plugins: [markdownPosts(), react()],
  preview: { headers: netlifyHeaders() },
  define: {
    // Same value in the server and client builds, so hydration matches.
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
});
