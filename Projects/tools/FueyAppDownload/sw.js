const CACHE_NAME = "fuey-site-cache-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
    const url = new URL(e.request.url);
    if (url.origin !== location.origin) return;
    if (!/\.(css|js|mjs|json|png|jpe?g|gif|webp|svg|ico|woff2?|ttf|otf|eot|mp4|webm)(\?|$)/i.test(url.pathname)) return;
    e.respondWith(caches.open(CACHE_NAME).then(cache => cache.match(e.request).then(cached => cached || fetch(e.request).then(res => { if (res && res.ok) cache.put(e.request, res.clone()); return res; }).catch(() => cached))));
});