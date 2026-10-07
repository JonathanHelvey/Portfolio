// Renders every route to static HTML after `vite build`, plus sitemap.xml
// and robots.txt. Output goes to dist/client, which Netlify publishes.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const clientDir = path.join(root, 'dist/client');
const template = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf8');
const { render, ROUTES, SITE } = await import(pathToFileURL(path.join(root, 'dist/server/entry-server.js')).href);

const escape = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

function head(route) {
  const url = `${SITE.url}${route.path === '/404' ? '/' : route.path}`;
  const tags = [
    `<title>${escape(route.title)}</title>`,
    `<meta name="description" content="${escape(route.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${route.type ?? 'website'}" />`,
    `<meta property="og:site_name" content="${escape(SITE.name)}" />`,
    `<meta property="og:title" content="${escape(route.title)}" />`,
    `<meta property="og:description" content="${escape(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE.url}/og-image.jpg" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@JonathanHelvey" />`,
  ];
  if (route.noindex) tags.push('<meta name="robots" content="noindex" />');
  return tags.join('\n    ');
}

for (const route of ROUTES) {
  const html = template.replace('<!--app-head-->', head(route)).replace('<!--app-html-->', render(route));
  const file = route.path === '/404' ? '404.html' : path.join(route.path, 'index.html');
  const target = path.join(clientDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
  console.log(`prerendered ${route.path} → ${file}`);
}

const indexed = ROUTES.filter((route) => !route.noindex);
fs.writeFileSync(
  path.join(clientDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexed.map((route) => `  <url><loc>${SITE.url}${route.path}</loc></url>`).join('\n')}
</urlset>
`
);
fs.writeFileSync(path.join(clientDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

fs.rmSync(path.join(root, 'dist/server'), { recursive: true, force: true });
