self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      cache.addAll(
        [
          '/',
          'test.css',
          'index.html',
          'app.js',
          'sw-cache.js'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(cached => cached)
  );
});