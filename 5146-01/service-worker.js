const CACHE_NAME = 'to-do-pwa-cache-v1';
const FILES_TO_CACHE = [
    '/Todo-App-Web-Trends/',
    '/Todo-App-Web-Trends/index.html',
    '/Todo-App-Web-Trends/style.css',
    '/Todo-App-Web-Trends/app.js',
    '/Todo-App-Web-Trends/manifest.json',
    '/Todo-App-Web-Trends/icons/icon-128.png',
    '/Todo-App-Web-Trends/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
