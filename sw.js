var cacheName = 'twilight-alarm';
var filesToCache = [
    '/civil-twilight/',
    '/civil-twilight/index.html',
    '/civil-twilight/css/style.css',
    '/civil-twilight/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
    self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
