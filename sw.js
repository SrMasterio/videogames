const STATIC_CACHE ="static";

const APP_SHELL = [
    "/",
    "index.html",
    "styles/style.css",
    "js/functions.js",
    "js/main.js",
    "js/script1",
    "js/script2",
    "images/beer.js-logo.png"
];
self.addEventListener("install", (e) => {
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));
e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
console.log("Fetch: ", e.request);

e.respondWitch(
    caches
    .match(e.request)
    .then(res => res || fetch(e.request))
);
});