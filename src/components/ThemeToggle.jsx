// Light ⇄ dark switch. Both icons are always rendered and CSS shows the one
// for the current theme, so the pre-rendered HTML never mismatches.
function currentTheme() {
  const chosen = document.documentElement.dataset.theme;
  if (chosen) return chosen;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function toggleTheme() {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {
    // Storage blocked: the choice just won't persist across pages.
  }
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Switch between light and dark mode"
      title="Light / dark mode"
    >
      <span className="theme-icon theme-icon-sun" aria-hidden="true">
        ☀️
      </span>
      <span className="theme-icon theme-icon-moon" aria-hidden="true">
        🌙
      </span>
    </button>
  );
}
