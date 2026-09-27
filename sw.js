/* Ilm-fan olami: 3D — offline ishlash uchun service worker.
   Ilovani yangilaganingizda CACHE nomidagi raqamni oshiring (v1 -> v2). */
var CACHE = "ilm-fan-3d-v8";
var CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); })
    .then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET") return;
  if (new URL(r.url).origin !== self.location.origin) return;  // AI so'rovlari va boshqa saytlar keshlanmaydi

  if (r.mode === "navigate") {                                  // sahifa: avval tarmoq (yangi versiya), bo'lmasa kesh
    e.respondWith(fetch(r).then(function (res) {
      if (res.ok) { var cp = res.clone(); caches.open(CACHE).then(function (c) { c.put("index.html", cp); }); }
      return res;
    }).catch(function () {
      return caches.match("index.html").then(function (m) { return m || caches.match("./"); });
    }));
    return;
  }
  e.respondWith(caches.match(r).then(function (m) {             // ikonka va boshqalar: avval kesh
    return m || fetch(r).then(function (res) {
      if (res.ok) { var cp = res.clone(); caches.open(CACHE).then(function (c) { c.put(r, cp); }); }
      return res;
    });
  }));
});
