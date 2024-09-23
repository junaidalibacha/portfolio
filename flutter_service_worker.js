'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "83292240182b4b0980fcfb46c68f802b",
"assets/assets/translations/fr.json": "a88c5c62625f638e12961fdf6f856762",
"assets/assets/translations/en.json": "f7696d4a88ba025776b2642c48f4aaae",
"assets/assets/icons/flags/united-states-of-america.svg": "cfe34e9f0aee58b9de91362c139a90bd",
"assets/assets/icons/flags/france.svg": "5e0abb6d24264435255a8f94c369ac1d",
"assets/assets/icons/software-development/css3.svg": "558e249dab7d9199273e6666aeb04501",
"assets/assets/icons/software-development/mariadb.svg": "eb44ec19eb33d4146eba2d878478aca3",
"assets/assets/icons/software-development/flutter.svg": "030f81e13f1a723e090651610a5d8c11",
"assets/assets/icons/software-development/html-5.svg": "3ddf9449edce26e2d2d6c5137cbece7f",
"assets/assets/icons/software-development/mongodb.svg": "bc514c84ded5abfcefd05e1f89c70033",
"assets/assets/icons/software-development/docker.svg": "f3138330e03a6625e41dc78e20c096dd",
"assets/assets/icons/software-development/flask.svg": "44fcfcf73e810db529833d2a47b32e81",
"assets/assets/icons/software-development/postgresql.svg": "fba21228676cd99444651c12a1371c5c",
"assets/assets/icons/software-development/python.svg": "5a2e6e251257f03ebc51e5918cfcb4ae",
"assets/assets/icons/software-development/typescript.svg": "2b714d9e71c4df9f537371456581aa8b",
"assets/assets/icons/software-development/nodejs.svg": "44acb407fa21eee9ef24809d95678a09",
"assets/assets/icons/software-development/javascript.svg": "62b193700e3f66c40b98c5d990062369",
"assets/assets/icons/other/riverpod.svg": "f2b1b9903bc86c6aeee1f506892c77e5",
"assets/assets/icons/other/dart.svg": "4a0a9df85742ff469633877bd6e7bdaf",
"assets/assets/icons/other/bootstrap.svg": "73b76d86a93d5386bfa2cc3364d32e56",
"assets/assets/icons/other/firebase.svg": "a4cdca210685e2b66e70f9863d03a2de",
"assets/assets/icons/other/express-js.svg": "1c0e6598cd54bc9ffd8bdecb10f44579",
"assets/assets/images/gsb-rv-dr.png": "9cae33c5226005d87431d9389233a2fb",
"assets/assets/images/logo.png": "ec4e40868695ea191ece5a171600c7bf",
"assets/assets/images/logo.svg": "df08988fdc848d0a0722655527f00dcd",
"assets/assets/images/spinner-light.apng": "0aa2c9bee051117e80ffaafb604e9258",
"assets/assets/images/gsb-rv-visiteur-serveur.png": "aa279e9a72f05f8041d4259f1ffbc640",
"assets/assets/images/profile.png": "94c965eb114f2a5a00fcc920a2a242d1",
"assets/assets/images/spinner-dark.apng": "d7f6e0cca2ae052bdb7973799975027a",
"assets/assets/images/L_L-android.png": "db3e9c1894de34c3ee3a31c619836538",
"assets/assets/images/learnflow-backoffice.png": "2aafdd0e7748d2cd630f2fefc1724361",
"assets/assets/images/fluently-android.png": "1b670ee2633a9a33d1ad4da6b77e287b",
"assets/assets/images/sehr-android.png": "21e9de80850ac9bb235848710d942f93",
"assets/assets/images/learnflow-api.png": "106bf340d0676bdcccdc17c8c29e4d6f",
"assets/assets/images/gsb-frais.png": "6cd08121c9fa313d0e1ec93ef8075e4a",
"assets/assets/images/flashsend_android.png": "941f8743600bc9395ca2d838ae1a2b01",
"assets/assets/images/portfolio.png": "77a58b35cdeafc34a8f06fa5c8a14598",
"assets/assets/fonts/BoxIcons.ttf": "92ba7cbb384d35ae4858f9b59d8fc373",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/FontAwesome.ttf": "de6bf66865cf2734984feeeb9c638a3a",
"assets/assets/fonts/OctIcons.ttf": "71c7d381e58ae844420306f7a3bbbe5a",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/AssetManifest.bin.json": "833e39891e28492f01421a65c90f77fb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "51144953fabbefe76ddf559c5fc68453",
"assets/FontManifest.json": "0361baae30adca8ebc149077152a854a",
"assets/NOTICES": "e6364614b096e9e69c361f1b1635cc79",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"main.dart.js": "48bb6a3a6aeadf580ffbf921c19a4f36",
"icons/Icon-512.png": "94c965eb114f2a5a00fcc920a2a242d1",
"icons/Icon-192.png": "57f852e07baf8cb2d4eb6826f367d096",
"icons/Icon-maskable-512.png": "94c965eb114f2a5a00fcc920a2a242d1",
"icons/Icon-maskable-192.png": "57f852e07baf8cb2d4eb6826f367d096",
"flutter_bootstrap.js": "2383624d6db054c4a2f6d4a5254421b6",
"favicon.png": "7e5045f40fc994795e84657c7d4f116b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"index.html": "924352b121cdf3e409e057ead5450e40",
"/": "924352b121cdf3e409e057ead5450e40",
"version.json": "009c9e65172e010890f7f65fde438006",
"manifest.json": "3c00bfb5fa6c03e5efff656e896ed43c",
"splash/img/light-2x.png": "f262b9c6adac4504ac4240388b261d1d",
"splash/img/dark-4x.png": "7a08e8e8c5e8efbd817575f489ec69e3",
"splash/img/dark-1x.png": "c6fd8dd64c2826d0c49c91d360f2f270",
"splash/img/light-1x.png": "8961658c72fd5e13ba89a3d87b95f5ea",
"splash/img/dark-2x.png": "d4298fa1d61c750418bf13f6417375cb",
"splash/img/dark-3x.png": "42db1d8672c72994536a350e2b15be5d",
"splash/img/light-4x.png": "211a30d09cccdcc2cc6a0d1fd48f0844",
"splash/img/light-3x.png": "dc1f96cf873f419a86add1618d72b0fa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
