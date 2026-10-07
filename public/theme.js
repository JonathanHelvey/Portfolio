// Applies a saved light/dark choice before the page paints, so there's no
// flash of the wrong theme. Loaded as a tiny blocking script in <head>
// (an inline script would be blocked by the Content-Security-Policy).
// No saved choice → the CSS follows the visitor's system setting.
(function () {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.dataset.theme = theme;
    }
  } catch {
    // Storage blocked (private mode, etc.): fall back to the system setting.
  }
})();
