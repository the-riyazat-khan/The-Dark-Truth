const CACHE_NAME = "dark-truth-v1";

const urlsToCache = [

    "/",
    "/index.html",
    "/about.html",
    "/contact.html",
    "/privacy-policy.html",
    "/terms.html",
    "/disclaimer.html",

    "/css/style.css",
    "/css/header.css",
    "/css/footer.css",
    "/css/cards.css",
    "/css/hero.css",

    "/js/app.js",
    "/js/menu.js",
    "/js/ticker.js",
    "/js/search.js",

    "/offline.html"

];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => {

                return cache.addAll(urlsToCache);

            })

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        fetch(event.request)

            .catch(() => {

                return caches.match(event.request)

                    .then(response => {

                        return response ||
                            caches.match("/offline.html");

                    });

            })

    );

});