'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "128cbfe717d7764ee1497cab92f60000",
"manifest.json": "cc8a58711655d837fa2957794279f1a9",
"index.html": "6573550203e8732bd8e5d8d1a8fd52a0",
"/": "6573550203e8732bd8e5d8d1a8fd52a0",
"assets/CHANGELOG.it.md": "351f4fc6934af4e965ab22d3c346c404",
"assets/CHANGELOG.en.md": "35ba708e1d78ddc8c25d65294c34b55b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "508276ddb4977990a59f5e6a742173c5",
"assets/assets/logo_outlined.png": "b39ca5bee47099d46d52d07509e1b3dd",
"assets/assets/images/notifications.png": "dc329e21b61120b9295f4300761100dc",
"assets/assets/images/students.png": "806852e7f985cf4968b3d6e30f4dfd3e",
"assets/assets/images/timer_background.png": "5f459ba30214c2fc2ccf90a8c07d2576",
"assets/assets/images/logo_unibs.png": "9f590388861cf2e8f0626257cc04ac59",
"assets/assets/images/loginbouncer.webp": "41d96397a4b2f54a3a2e4b7aba5836ef",
"assets/assets/images/logo_scritta_nera.png": "0cb17e5f3c0043250680d3785e92c9bf",
"assets/assets/images/login.png": "277cd551566e668acab98a883461e983",
"assets/assets/images/logo_scritta.png": "815a71ffc372cdd1a5a753bdbff94828",
"assets/assets/images/logo_scritta_white_bg.png": "8b00002f7f6f236809a04a5947284ff7",
"assets/assets/wallpapers/LOFI.jpg": "a4f0f13eba2476790ec2bb525c6bd8db",
"assets/assets/wallpapers/previews/Fog.webp": "33eef1497ba9cc71414c48761709df23",
"assets/assets/wallpapers/previews/Gandalf.webp": "9380968d0b597509cb1cc2413cf1738c",
"assets/assets/wallpapers/previews/Winter.webp": "52d27e8e69af4c6beb71b9508a8c72d6",
"assets/assets/wallpapers/previews/Clouds.webp": "8c24d6f9ccfa28098e8a1ff99cac2cb9",
"assets/assets/wallpapers/previews/Rocks.webp": "ccc5d22c3d69b66af9e4765747e7868d",
"assets/assets/wallpapers/previews/Alice.webp": "94b6bcc0a597b518ef5e4de4d012757e",
"assets/assets/wallpapers/previews/Mountain.webp": "0fdcc7ddd21d912c4e1f0da0b0ac19f4",
"assets/assets/wallpapers/previews/Cafe.webp": "5e28ba2a858923ef69f3a5a4f9b61854",
"assets/assets/wallpapers/previews/Ghibli.webp": "da2cd3d10e1738e801c9cd754ba876ec",
"assets/assets/wallpapers/previews/Wave.webp": "c3f095e9ef8b9ae6e3733f0e7f1f2e0a",
"assets/assets/wallpapers/previews/Lake.webp": "4b8aab2f7804bfc752ad303e35eef3d1",
"assets/assets/wallpapers/previews/Beach.webp": "fb2c7d5d6a31acbb5b47cafa222f1a48",
"assets/assets/wallpapers/previews/Forest.webp": "1b07b7dad1d929fae7a79e47e083274c",
"assets/assets/wallpapers/previews/Vaporwave.webp": "1dbf454e789f781844dbe0ce02bf68ac",
"assets/assets/wallpapers/previews/Autumn.webp": "91ba890b77601a600ca9f9d460494136",
"assets/assets/wallpapers/previews/Rain.webp": "2e0bfc3d0d0afc2212670f309d3fb34a",
"assets/assets/wallpapers/previews/Barbie.webp": "9df635275d61a66d1fe78976507d779b",
"assets/assets/wallpapers/previews/Hogwarts.webp": "2a7cd74cf9e0424bf09b38984de3007b",
"assets/assets/wallpapers/previews/Aurora.webp": "25d1d698186cccb94093901c63a054d6",
"assets/assets/wallpapers/previews/OG.webp": "84b41fb3cf33a7d852b251da3c6ee911",
"assets/assets/wallpapers/previews/Space.webp": "96306fba27f514b1fbcf26b042db7255",
"assets/assets/wallpapers/previews/Space.jpg": "bc0e44c301437441843fcf3fcb0f01e6",
"assets/assets/wallpapers/previews/LOFI.webp": "9fd7c8d8af285f9c88c21600222ed7b5",
"assets/assets/wallpapers/previews/nyc.webp": "975d78eb19712cadac2b5e107d9009ca",
"assets/assets/wallpapers/previews/Oppenheimer.webp": "92e38949bb21e30e1f3df1e565e0e53a",
"assets/assets/wallpapers/previews/Dune.webp": "13f1a7505370f7cf7b3f14220830e973",
"assets/assets/wallpapers/previews/Purple.webp": "eaf9e09f25d1d5efa79fadcfc4706970",
"assets/assets/wallpapers/previews/Library.webp": "a3ad1a961c5dcd0d928ab20f05baec3b",
"assets/assets/wallpapers/previews/Waterfall.webp": "d30499afcf36efe9ad650e7ec3fdf937",
"assets/assets/wallpapers/previews/City.webp": "965ead0694fc4890e96bb74a34217298",
"assets/assets/wallpapers/previews/Night.webp": "1b12b52ad4b6b5b3b3594abfa6bc2a9f",
"assets/assets/wallpapers/Autumn.jpeg": "066995988b61d75ffada412387634553",
"assets/assets/wallpapers/Alice.gif": "75fbf28ef7b8f8149ac704f9cee458ee",
"assets/assets/changelog.md": "230bc0173c8e2881257a1b71b709fc40",
"assets/assets/data/universities.json": "0d2f741cfe41c3c4e253b02851ae02dc",
"assets/assets/logo.png": "bed5aeec39249ddd05d608eea8768d05",
"assets/assets/sounds/rain.mp3": "a1f3405a1617972803172f4dd131502f",
"assets/assets/sounds/campfire.mp3": "b0ae03cd2b275b4746a42858831b1822",
"assets/assets/sounds/rutto.mp3": "e1e8501d4f68ded2803a80ee787ebfe0",
"assets/assets/sounds/lo-fi.mp3": "0ba7aac760cd0fb18fac002974072635",
"assets/assets/sounds/cafe.mp3": "bca22c93610a87cd2a2b6e077409155a",
"assets/assets/sounds/gong.mp3": "ea87cdd814d376170570dc4629c01241",
"assets/assets/sounds/default.mp3": "cecd508848d6ccc6679f6ebc5ddb2b0e",
"assets/assets/pomodori_demo.json": "b203573f7df9e2b4175379386b17ca30",
"assets/fonts/MaterialIcons-Regular.otf": "c6b444546bae151e2df7c70fa1c9b306",
"assets/NOTICES": "849fa4c5a76e38de63adf5c72ac66465",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1f62ac0b40991ad428ef9c1329e8884d",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "7c5ad4970dfc9f6ab0f8d4cb3295c3bb",
"assets/AssetManifest.json": "8b2f083817915652e35575e34c08672b",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "17667cf4accef375b9c8d18cecc34c2f",
"logo.png": "ce4c3dd40829a37a5b6fe69be0a215bf",
"favicon.ico": "17667cf4accef375b9c8d18cecc34c2f",
"flutter_bootstrap.js": "f5db2c4cb032db6b79fac7474931007a",
"version.json": "6940a8fb5968d4ecacfd69214827a61c",
"logo_scritta_black.png": "20357f00a0d4171efe7562757c1b05bc",
"logo_scritta.png": "c7ab7d18368f5428f2df72ba6ff588d3",
"main.dart.js": "6585f15c39edb55a9bbc0d8b0a7c0e33"};
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
