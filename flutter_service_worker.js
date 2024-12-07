'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "95cd7e4c965f5a992e53543bd425d5fe",
".git/config": "7673f7f197360b208c72e91e2fba1e6f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ea6482064f1657626bdd901d031ec001",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "84877329f77b6470b0d1d1865e39e09c",
".git/logs/refs/heads/main": "92abb56c7dc902a8347f5073f0463fe4",
".git/logs/refs/remotes/origin/main": "4bf3768b66fcd83056278ec0f760e832",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/4a41db1d173b7dd236100450bac7cc397227c9": "2ed6f33baac711d9dfe03fee9bb9cb7a",
".git/objects/0f/1791d143de9638e152daa603581cad50ad9152": "dcec9ce566c1e44607b681199e22fb20",
".git/objects/0f/8734542589bf16c2dab05064a47abb4b5572d3": "ccd1abc0a1633efac9cd3086e1695df0",
".git/objects/0f/d4457bd4877c4010b6ea051956776923ad435e": "0f3eb85c06ebe47e0d1135df3ee4bd3a",
".git/objects/12/65dfd3748669e54195070812734fb348a99f79": "a1b903fea9478fde3e6117b005f244ae",
".git/objects/16/4a218a7ef6309d18f56b6fbc042bf8a8995cdc": "7b78469664b6f3dfdd96cbef0feb2c1d",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/f071a891791f4f6d1ff668edfedd0c273e791f": "750446dbae8f0867a7dc23ae3d5b08d6",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/5d4ff4d0a53130710aa7dee0768b8cf3cbcb17": "34e80b0bcb5601e8f73cd9366047856e",
".git/objects/2a/3f95138864eb2a3fc4312fa6702e110899c246": "eb1584651930990040a6c670b571587a",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2c/1e3499834744f6927c7150e967fb205d224de0": "fc8a0214dc168f2767ed2256fbd34c5e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/f05fbb9e7f9f8f093abdc187403ad88884fabd": "a173aeb2322bfd310a8079f06cc28b56",
".git/objects/40/ddea80c3189bbdbee1f21dd3e5ba721268b70e": "75dc30d3102b65a8af48cfb285276026",
".git/objects/43/9457aa80a66c3d30efc0f870e98af7a353d342": "14f28f3e6634b5844dea5e5b96a3541e",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/47/f762d0c76a2cb360e94cac87569d3d5df9772f": "1bc5c4bfa23206c8cb8deeae5707930f",
".git/objects/53/7e118c0fa6dd99c63a635a1e201f57a6c473c3": "1fcb38175e1f5c93138d13fb96edbf3c",
".git/objects/59/2a121810373a933ce0f5a209ecd94203f0db61": "e501a8a5da01ceb713c20136b56a2ea6",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/68/5702e77851b9c48eef0afc4a1e9ee3ee1226dc": "f32d0b590ea20dff54c3f2fa751ed599",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/580c6a8fba9b606a9e041bf022b92a1fab5bd3": "df0c57a4402cfd65ad2ab8cbbb37720c",
".git/objects/74/331262606310d43c88dd27092ee03b4359ef7a": "0259d644a5fc7a0d4912a032b7285da0",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/7c/1abf42a1971b5b65e93845c02ef6b5828ee32f": "d3a3ee42d45186b5ac2f145e9248ef7a",
".git/objects/7c/46d0389d88a00a2db575a887f44a7a3a6abf0d": "69ca4d6ab76d4ba29b09044e5c067613",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/86/21419f9461f6b6665bba114a647053abb5e811": "7ee20281273d30e5cf3841eee5d31dc0",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/731c74fe09144f8ba21c597f7ff3189ddacc0b": "a8ef90b8f811807ba6cc3b45fa3f70a2",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/98/42a28ab79574259f81d5c843b303f78dac583a": "a9ac1b1ef223eac49aa058483f9afc79",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/a8641a14acf34b674bea527ffcfc5b0770de7c": "b99496e4f5e69bbc892c919265b9aa0d",
".git/objects/9e/e60ab46af01d2529b59111e556f7cf0ce6b979": "612f9ee66ddcc5d1065be2f234f95fe3",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/54f009fc1420aca4aaac07a5d07078923883e4": "5012943ff11ae3a19e31ee604785b066",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/aa/aaa2db780070fb37276b23790abcf99a2a52f9": "4f06b1c486828c963176ad751a18535f",
".git/objects/ae/883c61ce98c940f39574b5800bae2dd10e660b": "6f4683c1ed83344b2ee857f24a9414a6",
".git/objects/b8/3d5292d9c63b2cb4efa063f112820854d0393c": "0e805c7c665a71faa9a0082d71335024",
".git/objects/bf/2c2d3db3736584752c2c65636882edb48a4be7": "1327713fcbf9ff0fa9da5dd8fcc2c34f",
".git/objects/c0/e98ba60556970c00d1366d63ae8bfaced88576": "d6758e55952d0e73100bd6ec13fabaf9",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/c3/1246494d042b2f7a008ef58c949450980637c6": "cbdcc486ef19e7d3a320998b3f133b52",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/c8/40a7e0e41273729b6bc7d94151d980f038d524": "2404f8553ec83eae37bc54c93bc54446",
".git/objects/ce/1b31891ce0c28fbd7837b90fc34a6d29ee171e": "3d8f5f3209025987d755ad78b39e314a",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/a5a8a6cc02303db80af7fb66e9068fd6a395d5": "ecd6f6381d9866165e7a24d96c99d640",
".git/objects/e1/724f8bae1747d96902616edff855d9d836a415": "26f51b1c0d82dc87dafabe85caf8cdba",
".git/objects/e2/d754bbd153883be6ccdf7b5df857de2ff9e42c": "f8044b3c79ac5cde75ed17c31e706d3f",
".git/objects/e3/35e8f7fe37571035b0f38e5a6b0885e78c4b88": "be2a32295f298a7de351bb4ab6bcfbd6",
".git/objects/ea/5cf65731d2858902d6ef33def40bea060e05cd": "41afb1b4ec9a6c07e1b1efbf40f5001a",
".git/objects/f0/f5ad8c496d45420427c122290ea983d6808624": "cf0007281ee381ee848443f5c04fdde2",
".git/objects/f1/03fac58b3cb932ad6a61d46ff7b4518dd60d06": "f8a85e6942907206c535bc972e895d46",
".git/objects/f1/895c77b72719d7e5f4adbf72cd9601eca767ad": "7d0073862a6014a4d739c3a9120a0867",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/fab32f2cbf88efdd244dc9079f23f0c6556c40": "a8e4f77851d3b453af7d16c0b8c66d48",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/refs/heads/main": "0ab0add2834524a77f970fc71d9c36ca",
".git/refs/remotes/origin/main": "0ab0add2834524a77f970fc71d9c36ca",
"assets/AssetManifest.bin": "4cd09af270b44437348d36518f287d79",
"assets/AssetManifest.bin.json": "64f6120c4a8ab269e27b5af029b620db",
"assets/AssetManifest.json": "920e7a63e2f4967e46191b21b943c02a",
"assets/assets/config.env": "e2bc901d65a8b589ec0c5d824ffea9da",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/afro.png": "5caa49d632b05e6635fafd77493d8e9c",
"assets/assets/images/android.svg": "f91533128e7fc485f0cd473f6b5776af",
"assets/assets/images/article.jpg": "9434102a12c5a74f762bce1bb3f2d5df",
"assets/assets/images/dar.png": "ee4730936172f33a0bd5389102cba3e4",
"assets/assets/images/dev_img.png": "bb4c49d09ed4a37da55216335e52634e",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/meal.png": "8f900e4eb5f258088e18eb897c4acf91",
"assets/assets/images/midlink.png": "3a8484db992557b6d47cc2b1fad7f2b1",
"assets/assets/images/onboarging.png": "9bef3397c5e8e650c64496cabdd7b3bb",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/rabeh.png": "eb0fc58f7b249cff3326ead2e8e88f05",
"assets/assets/images/ruler.svg": "823f016d6be3604c32e861dbd1c862ce",
"assets/assets/images/slider.svg": "15778d585c86bb87026e3c6ad548ef50",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/fonts/MaterialIcons-Regular.otf": "e583d18d2ab629c99fe8cc47315b69dd",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/images/afro.png": "5caa49d632b05e6635fafd77493d8e9c",
"assets/images/android.svg": "f91533128e7fc485f0cd473f6b5776af",
"assets/images/article.jpg": "9434102a12c5a74f762bce1bb3f2d5df",
"assets/images/dar.png": "ee4730936172f33a0bd5389102cba3e4",
"assets/images/dev_img.png": "bb4c49d09ed4a37da55216335e52634e",
"assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/images/meal.png": "8f900e4eb5f258088e18eb897c4acf91",
"assets/images/midlink.png": "3a8484db992557b6d47cc2b1fad7f2b1",
"assets/images/onboarging.png": "9bef3397c5e8e650c64496cabdd7b3bb",
"assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/images/rabeh.png": "eb0fc58f7b249cff3326ead2e8e88f05",
"assets/images/ruler.svg": "823f016d6be3604c32e861dbd1c862ce",
"assets/images/slider.svg": "15778d585c86bb87026e3c6ad548ef50",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "a07f1b61196e5b37e2fd0cbf835c6993",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "19298a712ee9e1fe68d0c0b96d5e19ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e3ba0936cce0ed61f1884210da59afbc",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "03cb7bcd04f125dadd005daab9d13ed4",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"index.html": "a5f6db51fc05196f6afd2f93f9040f1a",
"/": "a5f6db51fc05196f6afd2f93f9040f1a",
"main.dart.js": "3c30915eb4fd6f46cb5d53eebfabc815",
"manifest.json": "09872ff21edc1f045945aad491f5b4f6",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
