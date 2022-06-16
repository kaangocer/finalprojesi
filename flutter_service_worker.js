'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "dc00cde533372a0c0f5d6c1a6b22edc2",
".git/config": "ea2252887dccc3e3fcdfc8d59bd81570",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8cc908c2c202a53c832c8f26df60faef",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c84c39410e422b982c348962709c7bed",
".git/logs/refs/heads/master": "c84c39410e422b982c348962709c7bed",
".git/logs/refs/remotes/origin/master": "7f0cad245a432cbffcb8d1e06e1dc5cf",
".git/objects/01/343c75f941c1b988471a3c2daa942659957b82": "8a918d99d62fb0b824fd8f0877bcd66f",
".git/objects/38/8ef890871ee47d522be8760031859bf0e3689e": "efc32024c5f0430beff9312702b82c5f",
".git/objects/7c/64095cd0b3005895eaed060fe6272b1149322f": "ad61a1f5e378056f4c431d2c298a19a6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/76093daf158300193b5136421c1f782465623d": "f9d693f194d811ebdff183456b5002da",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "27260363d785acdb2987eec4d7836683",
".git/refs/remotes/origin/master": "27260363d785acdb2987eec4d7836683",
"assets/AssetManifest.json": "9641d619cbb7b2d1c1bba617358da0cc",
"assets/assets/animation/pacman.riv": "6514f46df8a291048e8d159c6c85c4a5",
"assets/assets/fonts/MsMadi-Regular.ttf": "ba7186ad4ffffa10d0c79138ad46d456",
"assets/assets/images/1HaftalikFitPaket.jpg": "9627ceb71d0623971843d7d23409c787",
"assets/assets/images/1HaftalikVeganFitPaket.jpg": "b0903a8ac8babb3cc9ab852ebf0e2718",
"assets/assets/images/1HaftalikVejetaryenFitPaket.jpg": "a27f9846712b4ea1c8026c122e614905",
"assets/assets/images/3G%25C3%25BCnl%25C3%25BCkDetoksPaketi.jpg": "8e731e6c6dcd87e03f61f095910162c6",
"assets/assets/images/3G%25C3%25BCnl%25C3%25BCkVeganDetoksPaketi.jpg": "bcba7c2e96c2898fd743c2419c3a67c2",
"assets/assets/images/3G%25C3%25BCnl%25C3%25BCkVeganDetoksPaketi2.jpg": "9178d8e4bc002b6c5247c8a5edf1775b",
"assets/assets/images/3G%25C3%25BCnl%25C3%25BCkVeganDetoksPaketi3.jpg": "72275a900e40836effcf62fd89484e8d",
"assets/assets/images/3G%25C3%25BCnl%25C3%25BCkVejetaryenDetoksPaketi.jpg": "1b692f45448e9b12fd6c11baeb67ac32",
"assets/assets/images/3GunlukDetoksPaketiBirinciGun.jpg": "4df9ee2f6829bf5d4ec184f65cf0b6bb",
"assets/assets/images/3GunlukDetoksPaketiUcuncuGun.jpg": "1b692f45448e9b12fd6c11baeb67ac32",
"assets/assets/images/5G%25C3%25BCnl%25C3%25BCkDetoksPaketi.jpg": "11c9cdec6269b2a5a0b71284464e6392",
"assets/assets/images/5G%25C3%25BCnl%25C3%25BCkDetoksPaketi2.jpg": "7d2aa6f8c7c4786c40ff55b2bf902d5d",
"assets/assets/images/AvokadoluBruschetta.jpg": "bfee7675a93d154a658fbbadbde953e3",
"assets/assets/images/AvokadoluBruschettaYakindan.jpg": "031176a63f39278e2941fb77d090bd20",
"assets/assets/images/BlueSmoothieBowl.jpg": "b8cc5a277a95010d6476c13687ad2fe7",
"assets/assets/images/BlueSmoothieBowlYakindan.jpg": "4f30a3e532471c235d611f9cfd77320b",
"assets/assets/images/BorsCorbasi.jpg": "35863e4beb6c659fd4e60f091a990e86",
"assets/assets/images/BorsCorbasiYakindan.jpg": "1f0137f39ecb9b6231f95064a79ea65c",
"assets/assets/images/BrideToBe.jpg": "66e5b17b336f0c84083d6cb7a0bdb649",
"assets/assets/images/FitPizza.jpg": "20d90749b291177aa8ee14f088b4fc56",
"assets/assets/images/FitPizzaYakindan.jpg": "a0647a18ac3cb9cb4c49e1040e594304",
"assets/assets/images/Galette.jpg": "26203f36b4a02aa4e3c54cb5c8c9917f",
"assets/assets/images/GaletteYakindan.jpg": "479ee5e308bf005d1a7b8d0da231f1b5",
"assets/assets/images/IncirliRicottaliKek.jpg": "b9159933e2328ea028fc3ac1f15f119a",
"assets/assets/images/IncirliRicottaliKekYakindan.jpg": "fed9be56a6c6d40b4c264abea3aae13f",
"assets/assets/images/juiceDetoksSeti.jpg": "95817016090d85f9d381cf54d11a7c63",
"assets/assets/images/juiceDetoksSeti2.jpg": "8e3c1919ef1e22dd101f06b060d25ddb",
"assets/assets/images/KarpuzluSmoothieBowl.jpg": "9bc58f224e81c26cae65f2825a32f2ed",
"assets/assets/images/KarpuzluSmoothieBowlYakindan.jpg": "709c1cbfd1af69d96e881c70e8596985",
"assets/assets/images/LimonluVeKakaoluFitToplar.jpg": "e20116639efcf5e8a28198010e193554",
"assets/assets/images/LimonluVeKakaoluFitToplarYakindan.jpg": "eb858c44c68bee9e92f0885c1ecc53c2",
"assets/assets/images/magicPudingDetoks.jpg": "be5f42a82604ae8e8e7d987b4e361718",
"assets/assets/images/magnoliaPudingDetoks.jpg": "557a200d73356f2073a43dce0e27ec72",
"assets/assets/images/ProteinPlusPaketi.jpg": "c35cf73feea017285a503a1b2c821b7a",
"assets/assets/images/RengarenkHumus.jpg": "ace7be6ca2c627a920e0927a7cd26615",
"assets/assets/images/RengarenkHumusYakindan.jpg": "1be5be184c77aefd7fe133e72be6f8b2",
"assets/assets/images/vucutKitleEndeks.jpg": "62ac1e6d2fd287361894e4dc3c7e68f6",
"assets/assets/images/WildBerryPudingDetoks.jpg": "a2dd95a1c3da8484954a2d3de20f7506",
"assets/assets/images/YabanMersinliGranola.jpg": "5ee2e49b008b616347cc5e00df7e14b9",
"assets/assets/images/YabanMersinliGranolaYakindan.jpg": "946a0c75ef5714cfd44cd883c8dfb94b",
"assets/assets/images/YesilDetoksSmoothie.jpg": "1fd2450bfe4f429cd64570c79aa7dc5e",
"assets/assets/images/YesilDetoksSmoothieYakindan.jpg": "b800d6e71bcb39cb379ffc83bf569b55",
"assets/FontManifest.json": "3049ca3cede4f05e036d4b99b2f6a001",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "70aa1722b01ca2bd83724fcaf7676c98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd40fef2f84a39858940a5487522b4b8",
"/": "cd40fef2f84a39858940a5487522b4b8",
"main.dart.js": "e71eccd1bdfd1db9a0ec971fabe34682",
"manifest.json": "5cd53c6be6b359ad7a50be4f270df05a",
"version.json": "747d96a2096ee679708c244d6820676c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
