'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"index.html": "a0f8623761504f91e1c8145acc5f6a5f",
"/": "a0f8623761504f91e1c8145acc5f6a5f",
"assets/NOTICES": "02ede3b21daa5fa6b0ec569312dbc402",
"assets/assets/wallpapers/previews/LOFI.webp": "9fd7c8d8af285f9c88c21600222ed7b5",
"assets/assets/wallpapers/previews/Gandalf.webp": "9380968d0b597509cb1cc2413cf1738c",
"assets/assets/wallpapers/previews/Cafe.webp": "5e28ba2a858923ef69f3a5a4f9b61854",
"assets/assets/wallpapers/previews/Aurora.webp": "25d1d698186cccb94093901c63a054d6",
"assets/assets/wallpapers/previews/Purple.webp": "eaf9e09f25d1d5efa79fadcfc4706970",
"assets/assets/wallpapers/previews/Hogwarts.webp": "2a7cd74cf9e0424bf09b38984de3007b",
"assets/assets/wallpapers/previews/Mountain.webp": "0fdcc7ddd21d912c4e1f0da0b0ac19f4",
"assets/assets/wallpapers/previews/Oppenheimer.webp": "92e38949bb21e30e1f3df1e565e0e53a",
"assets/assets/wallpapers/previews/Autumn.webp": "91ba890b77601a600ca9f9d460494136",
"assets/assets/wallpapers/previews/Clouds.webp": "8c24d6f9ccfa28098e8a1ff99cac2cb9",
"assets/assets/wallpapers/previews/Beach.webp": "fb2c7d5d6a31acbb5b47cafa222f1a48",
"assets/assets/wallpapers/previews/OG.webp": "84b41fb3cf33a7d852b251da3c6ee911",
"assets/assets/wallpapers/previews/Dune.webp": "13f1a7505370f7cf7b3f14220830e973",
"assets/assets/wallpapers/previews/Forest.webp": "1b07b7dad1d929fae7a79e47e083274c",
"assets/assets/wallpapers/previews/Barbie.webp": "9df635275d61a66d1fe78976507d779b",
"assets/assets/wallpapers/previews/Space.webp": "96306fba27f514b1fbcf26b042db7255",
"assets/assets/wallpapers/previews/Rocks.webp": "ccc5d22c3d69b66af9e4765747e7868d",
"assets/assets/wallpapers/previews/Night.webp": "1b12b52ad4b6b5b3b3594abfa6bc2a9f",
"assets/assets/wallpapers/previews/Fog.webp": "33eef1497ba9cc71414c48761709df23",
"assets/assets/wallpapers/previews/Vaporwave.webp": "1dbf454e789f781844dbe0ce02bf68ac",
"assets/assets/wallpapers/previews/Lake.webp": "4b8aab2f7804bfc752ad303e35eef3d1",
"assets/assets/wallpapers/previews/Winter.webp": "52d27e8e69af4c6beb71b9508a8c72d6",
"assets/assets/wallpapers/previews/City.webp": "965ead0694fc4890e96bb74a34217298",
"assets/assets/wallpapers/previews/nyc.webp": "975d78eb19712cadac2b5e107d9009ca",
"assets/assets/wallpapers/previews/Alice.webp": "94b6bcc0a597b518ef5e4de4d012757e",
"assets/assets/wallpapers/previews/Rain.webp": "2e0bfc3d0d0afc2212670f309d3fb34a",
"assets/assets/wallpapers/previews/Library.webp": "a3ad1a961c5dcd0d928ab20f05baec3b",
"assets/assets/wallpapers/previews/Waterfall.webp": "d30499afcf36efe9ad650e7ec3fdf937",
"assets/assets/wallpapers/previews/Space.jpg": "bc0e44c301437441843fcf3fcb0f01e6",
"assets/assets/wallpapers/previews/Ghibli.webp": "da2cd3d10e1738e801c9cd754ba876ec",
"assets/assets/wallpapers/previews/Wave.webp": "c3f095e9ef8b9ae6e3733f0e7f1f2e0a",
"assets/assets/wallpapers/LOFI.jpg": "a4f0f13eba2476790ec2bb525c6bd8db",
"assets/assets/wallpapers/Autumn.jpeg": "066995988b61d75ffada412387634553",
"assets/assets/wallpapers/Alice.gif": "75fbf28ef7b8f8149ac704f9cee458ee",
"assets/assets/logo_outlined.png": "b39ca5bee47099d46d52d07509e1b3dd",
"assets/assets/sounds/gong.mp3": "ea87cdd814d376170570dc4629c01241",
"assets/assets/sounds/rain.mp3": "a1f3405a1617972803172f4dd131502f",
"assets/assets/sounds/default.mp3": "cecd508848d6ccc6679f6ebc5ddb2b0e",
"assets/assets/sounds/campfire.mp3": "b0ae03cd2b275b4746a42858831b1822",
"assets/assets/sounds/lo-fi.mp3": "0ba7aac760cd0fb18fac002974072635",
"assets/assets/sounds/cafe.mp3": "bca22c93610a87cd2a2b6e077409155a",
"assets/assets/sounds/rutto.mp3": "e1e8501d4f68ded2803a80ee787ebfe0",
"assets/assets/logo.png": "bed5aeec39249ddd05d608eea8768d05",
"assets/assets/images/notifications.png": "dc329e21b61120b9295f4300761100dc",
"assets/assets/images/timer_background.png": "5f459ba30214c2fc2ccf90a8c07d2576",
"assets/assets/images/students.png": "806852e7f985cf4968b3d6e30f4dfd3e",
"assets/assets/images/login.png": "277cd551566e668acab98a883461e983",
"assets/assets/images/logo_scritta.png": "815a71ffc372cdd1a5a753bdbff94828",
"assets/assets/pomodori_demo.json": "b203573f7df9e2b4175379386b17ca30",
"assets/assets/data/universities.json": "c2f4c19f7fe7c8acc531df83aaa685a5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8f8d818ea57545f66eb75e4359b85b9d",
"assets/fonts/MaterialIcons-Regular.otf": "d99c88a12ace20e647e6cf49e72cb4ef",
"assets/FontManifest.json": "7735189998bf436a6fe6d9cc012ffd63",
"assets/AssetManifest.bin.json": "39667c83ab22bdaa13649d72d960b106",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/flutter_iconpicker/fonts/fa-brands-400.ttf": "b7dee83cb5ee2c47b053e2620f4bbb78",
"assets/packages/flutter_iconpicker/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flutter_iconpicker/fonts/fa-regular-400.ttf": "3c264849ff4eb9b6e99eab9cd54c80ae",
"assets/packages/flutter_iconpicker/fonts/fa-solid-900.ttf": "0a95f951745ba02faa8773ea6a1ebaed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2bfdd14c8d1643133fbb0387c16e4090",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/AssetManifest.json": "efb1d4473b7678690c0ad4b83b0239e4",
"version.json": "288e9224cdec40cd82ca6687f861cc72",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.ico": "17667cf4accef375b9c8d18cecc34c2f",
"main.dart.js": "a2c011c8a93d6d9cd36fec67bbaf729f",
"logo.png": "ce4c3dd40829a37a5b6fe69be0a215bf",
"icons/Icon-512.png": "128cbfe717d7764ee1497cab92f60000",
"logo_scritta_black.png": "20357f00a0d4171efe7562757c1b05bc",
"manifest.json": "cc8a58711655d837fa2957794279f1a9",
"favicon.png": "17667cf4accef375b9c8d18cecc34c2f",
"logo_scritta.png": "c7ab7d18368f5428f2df72ba6ff588d3",
"flutter_bootstrap.js": "1e36881eacdac527e4196b7f3b341a45"};
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
