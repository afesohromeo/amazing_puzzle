'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d1cd95ea12cf815efd030edb708f3004",
".git/config": "ded4675106cf220d9dc18aba342da054",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "152be3ca1f4ed39f076d106a15b08077",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "8540ca25b3bd29922a45f617a1375e95",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3ddd87eadff8b820ced4de583701156b",
".git/logs/refs/heads/main": "3ddd87eadff8b820ced4de583701156b",
".git/logs/refs/remotes/origin/main": "b47b8898c5bb4ee8c06d04866e33efdc",
".git/MERGE_HEAD": "44da1d56b377ec7ca2197ccfffbec815",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "31013f401991982205db7ca680a15443",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/06/f408e948ab4cd572341699a0119d661c3cd445": "fb6a9715e880204da91f6a10663a0ba8",
".git/objects/0c/3cad011bde658393c823a497e4cbc520526022": "6c9e96b330a84db69c1435ec82f2bee4",
".git/objects/0d/1e0ace4005bbd19ef047447bdab4a800e5ff58": "5b061da372d6b9a57f347b7c52f935d9",
".git/objects/0d/4cdd8d61d8376b0f28b587cc675f723f15d7c7": "abab76da46d3f23b36304168fa90eb01",
".git/objects/12/c56c69dd79fccff15bae41f0830a4bc8b42079": "18506a11c94a15f93f8dcb4a78b0ea7f",
".git/objects/1e/95d052178ae2cf4c986c54cee2323d066b7020": "63344aefecebe664be578db0ca22fd5c",
".git/objects/1f/210f568e820a0b04646e03ac445b53bd31dcf8": "cdfb84e5ea33a13295e8b1694e00515d",
".git/objects/22/1e0174e2c48b7b052c33dfcaae7e2505bce818": "f5a9e776e8a138e5a90afab5d48fe3b5",
".git/objects/29/4633423dfe0801e08ad65c90c6f2ac9d5a823c": "c06fb918d457e15d26358de258581ad0",
".git/objects/2a/6a65bef605476d76a897511f0f38d7b6ec716c": "26537f40492df9208fad37211e4624a5",
".git/objects/2a/9a6418ac291201b3f37f9671b9880200a40432": "15470051c1448bef6f42fb6e86ed45e4",
".git/objects/2e/b9a344696d0c676aa16d44a3dd6b612800e73b": "3cea6cf8ab182c011b116b9c313c57fc",
".git/objects/31/eadfea2e78db9161d9fff16d33d29b69b4b56c": "7552fe50829746d389974ed8e062e131",
".git/objects/32/20ff899ae4ea305acfd8f65163825bb14e3ac5": "038e5cdb98584e4f346dfa95a6b1cdd6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/c90ed3d852195eb4f6643e5e519684c61d6c62": "96cd7e1b8147c4a293069315a88f25f2",
".git/objects/38/aea6049967e9b37b1d86f153c345f25c04808a": "17d3ba5d33f43cc889273c0d1d21e5d1",
".git/objects/3a/e140da375887975dc2eb04287e93529c7cf659": "2e79dd919849e30a0f82214319632a1b",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/d1e348ee818f0ae476251eec56df1c930b8cb2": "631f6e17265c6d22543bf1632da467d2",
".git/objects/49/da30a72c97ae5c6687719b939bac875162acef": "b21730ec9adc18838258c8682fc639b0",
".git/objects/4d/2e362d8ce2a1b3b0bae7d38510a263fe31f1f1": "1a3e6411e659ef213ecfc8d006423a22",
".git/objects/4f/e2a905dc503e66337a25275fb774fa2f06310c": "fedd8ec042e7ba4fce5a121e937b5356",
".git/objects/51/c42894a7b4aad04f4afff2a42c1472728d7635": "c1400d6fd4e2df6e3087fe9a1e73bc1c",
".git/objects/55/209bea8584c7aefb9f38e997853b9a0718202a": "cd9a92a65c79cebfd3f4b384357fba20",
".git/objects/61/68e78ee465caf267ba79055414ab8a1d782e65": "43d7d29a4e491d8c9a45d9b5b1fd397c",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/67/adf06f4b040a948cf85c4a9b047ed7d7a2813a": "baed8e06a3e932b1aac339446d6af1f4",
".git/objects/6a/8547d16e472d9cb6df7af12dac6faf7d0a8fe5": "8b41f056aa4a077873c930f5057efd97",
".git/objects/6f/6a43b1832f3090f7a433d6bfc086af3c75b007": "b71a29f660022ccf2fabefd97f75144b",
".git/objects/70/9bc51997f117b26f5834748f4dfa128a53c732": "5f70a018eb3a4481b2701baa24e3890e",
".git/objects/75/8fd5d031dcaf183fdead0c832dd047bd9d93fc": "ac69b5916476df73e5b8a2adeff851dd",
".git/objects/76/07bf19e98cef3b57a1c59cf57cae37084ddbb2": "9f0a4741281dcae1203d7a20c3767aa5",
".git/objects/76/c30e4be50d1e7d06d085365280eae955042faa": "a9bb581ad904e32cc073502be76205fd",
".git/objects/79/44496426c41777d0f4858cab9a279f8bc4a209": "d8053dcbe3ad5641e80be313452e0335",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/ac68c530ccaea568db8b1a42671b5bf88d1ed4": "bda0215ddeb5eedb27648202fe4a7ef4",
".git/objects/7f/48f43f7407c0bbbd7109a6e5a835335e97c5bc": "5bd984db7b82c833307377a331e11717",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/90dbd9a452ed017612f9186c54a0493a638f92": "62c0c854174bcd7b6d10b487b0f2ecd8",
".git/objects/8d/a5f213c51623376cc2b01bfcadcbf577c02deb": "bcfeca29331017f819eebdebefc65c1d",
".git/objects/8e/8bbc38029823f16502cb1ad99d9f8d7bb709f5": "e8b547ab1bf4375eb7ea90dc1abe8607",
".git/objects/8f/2e9a84816a85383c6747e3a09073475db39683": "7da20faa84b506a2565df2b2e0ce9b5a",
".git/objects/91/98d8cba5e4dd8b92e9b0e4fc61628f39777d89": "cc2cea8388c7bb22daf5d97cbc36e096",
".git/objects/92/548bc5cc0ce757cc94131332bcb9bce3eccde1": "ce374cf256eb57d709d894180e08eade",
".git/objects/95/9a9de74d637e330fe188c892db2fa160abfb5b": "f9705c1e89f93a3ef1f598aa7cdc26cd",
".git/objects/96/39b1be6de341edcf8b32ffa0a1c09155f52c48": "19be8293b77ef81e6b1e5c75ea6b834c",
".git/objects/98/7faa970a630971d5a4d63edad87a768cbe9085": "633016013013a915fae5fdaeddad0ad2",
".git/objects/9b/38fd5936e03567c5e670460e8eacaaa5a3afef": "3dfe01af29f322d464c9ad690984b0a3",
".git/objects/9d/fe8d8b50f27f6b62c4d09cd20243e16c8d4e2b": "90a8a6d35280e2343040d119ceeaacac",
".git/objects/9e/f30d9f27990e62186242323d6e6201ed1591f7": "5f447ef7c5573299973adc859f022281",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/0959d8181212e6e652d371d9e09d0feb069df2": "6792639da0639fbe019a057df0c6dda7",
".git/objects/a4/84d429617e1a821fbf20ea65eab16903590be4": "4c4f40ef18070f0e7e1c150fe407d1c1",
".git/objects/a7/d2a4acff7a4b5936738a38ac191c8372460ec0": "8e5743b5271b682ee8c169aea58a706d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/af/3bf31084fbcb86d5889e0a239c4c6dcaf46f77": "76f6b6d2ea9450ccd4d4126f83acd971",
".git/objects/b1/8248f57ba7b04999ca647f4d9eb36cd9c7ec22": "fe16233517bf5c12f7361889632b4075",
".git/objects/b4/582ea0c76a3c111e394f8c94658ec27835a96a": "2ca9063e73c198bfe98698b4ad9ef14e",
".git/objects/b4/d0305ae0fd955867320794fdea54681d2f1743": "0bcd41ea6c841f3687383243ecda5cef",
".git/objects/b5/750a2c680876180fdb09bc52fa354991b9ee7a": "fa9a719910d68fba51039217e52428e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e3e5923fefa3009909b1715c7c03663e5d16ee": "56dc7b47d0e453d335070e6ab349e100",
".git/objects/bb/108be7306c442dc4fb7c0724f65d58e51ef885": "c2cc8b45f3990e43e25a120f5c8752bc",
".git/objects/bc/33e17121c9c827926f90206aeead28cf7e28b1": "56467a3d2b3cfe0ce4e73fc867f5a20d",
".git/objects/c0/b39ff826ad2079398269c05c6d6795f86d82b9": "6023ab1d64e25491f6df0dbaf49225d0",
".git/objects/c6/752760e7099bafd563eac460f438e781468a74": "4b4ed6a471e7c9a790e71a22a8c541b8",
".git/objects/cc/2000d30de8c7d4a96ab101e954e335dc8fdb03": "bb1047348778e2b85f82f1ed6ef8cc30",
".git/objects/cd/5c487388b659c431bd9830c2211c867708a92e": "432a27f1ec7f8b3e3ec44bc3712aee30",
".git/objects/d3/f7b1ab5a7de9a8ea1d89f3278f5abde2787815": "d642a3ff87bba0ae3cd4ce915b1b4bf8",
".git/objects/d5/6b86dbe80a5e4636b91ac581677a8a35e0b6f3": "cb9d255de9949e4f9340f2847661e81e",
".git/objects/d6/8fbd08b0522ecf0e74d60567ffdd8aa8dd13d0": "2a3d2bb7e0df0879ac1d1396adb38b26",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/f355902b30c406512e73ca53551f73639e8789": "d0aed222746886ee852509d6d573447f",
".git/objects/db/3b94d244a66ca7fec3426843fae0c90d545bde": "a8aa486cab4647054edfc1326918e0f6",
".git/objects/dc/d7462348668904ba5049c1131882f8c51df7a5": "b79f69cd595416d41df492667961376e",
".git/objects/dc/d9d9bac19ae947082e4143ecc2ac44c63ab14f": "e824ed31ee6666a8c5fc385971a7e92b",
".git/objects/de/1bc30a1e52113f16f7694caae830281ba60ae6": "ed0f8861e6704277afe3931ef180c699",
".git/objects/e2/b0a201212b011dc1ada551471c40cbb3a46c98": "3356c77b8882a27c8b576b93acbf7abe",
".git/objects/e4/598d00b17dba78b7024d882ee3ade733fb5caa": "9b6f6a5e4539296af4b3eb14b91bb9fa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/9b468cc686aa55c5c37faed8227afeaea9b52d": "85d759c839e26118faadb778340a8586",
".git/objects/e9/e4b72ec9b078af73b0faa9ecef5fd653f503d1": "53366d23781a1ff001859ce5d7c1a62f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/5cc7ad6f357e22b338909c72e2edba4d601ce1": "5d26dce22b21ab78d73da9f0db32b736",
".git/objects/ef/af1af2b97874b243a9a890c21ee6052e456640": "23882f43084f3ad7149753eb1f353cce",
".git/objects/f0/653190aad3bf2431e2a540839affbb8db96be7": "6aa81854ea8067b0ea5a32b50aeea7b8",
".git/objects/f3/d2e6c9bdb99f6973ccfa88b00d1fe23b6d8cfb": "e903ad154e40697aaca3e1f4f751b1ef",
".git/objects/f5/fb87ac0dd0ca70b9a512e015429b92a32cd88b": "9a5ee1db75e37fe77fdb9a2fa8796567",
".git/objects/f7/d064cb525833161024008be95e86329dfe4453": "e852ec215f3641d2b285b1c351d513e6",
".git/objects/f8/eca5d9b15145e0f5d45d2979a56406279608f2": "985aa7a9e9df63fe175721577828f733",
".git/ORIG_HEAD": "89c285940eb91808691e4b790a061a7e",
".git/refs/heads/main": "89c285940eb91808691e4b790a061a7e",
".git/refs/remotes/origin/main": "44da1d56b377ec7ca2197ccfffbec815",
"assets/AssetManifest.json": "398d79c4145bbc6aea57359fb1926619",
"assets/assets/images/custom/1blue.png": "0d11f20efc6570a048f7fdaaaf91fb01",
"assets/assets/images/custom/2green.png": "56aabe4c6f02f0000fb00cf8d7a93544",
"assets/assets/images/custom/3yellow.png": "8529c74259d6963491ceda3a82a8df30",
"assets/assets/images/custom/4flutter_dash.png": "00dd096e5baa43aca04bde83c5a32394",
"assets/assets/images/custom/dash.jpg": "b6995185cbf6077b24ed0f6a43388502",
"assets/assets/images/flutter-logo.jpg": "36f02becd11822ef436ccc8c285f0f4b",
"assets/assets/images/logo_flutter_color.png": "496548be6768a0945cafe0cf7c12b389",
"assets/assets/images/logo_flutter_white.png": "fe99d806f7819c9ef2d2c9a1dc350693",
"assets/assets/images/simple_dash_small.png": "b3f2ec92db7be8297f529f94d8e38136",
"assets/assets/images/timer_icon.png": "284049eb59c25888ebe6ecf864728727",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "13fb1915d7ce3366dc9dfcfb5c0b0be4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4128f29fd45a49145dea6b19c6f787fc",
"/": "4128f29fd45a49145dea6b19c6f787fc",
"main.dart.js": "21813f06823c54156ab876e0315db182",
"manifest.json": "6149393b748cf4b340f9a0e675137d15",
"styles.css": "0008c03ef4446965a69cf28bd50b6ecb",
"version.json": "4dc565fc8c0072909da6272bab89ae63"
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
