// The old Gatsby site (gatsby-plugin-offline) installed a service worker at
// /sw.js that serves a cached copy of the old site. Browsers re-check this
// file on every visit, so this version replaces it, wipes its caches,
// unregisters itself and reloads open tabs onto the new site.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const tabs = await self.clients.matchAll({ type: 'window' });
      tabs.forEach((tab) => tab.navigate(tab.url));
    })()
  );
});
