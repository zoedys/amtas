const CACHE_NAME = 'amtas-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Hanya bypass untuk PWABuilder agar lolos tes
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
