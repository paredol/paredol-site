if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const _=e=>n(e,c),t={module:{uri:c},exports:r,require:_};s[c]=Promise.all(a.map((e=>t[e]||_(e)))).then((e=>(i(...e),r)))}}define(["./workbox-e13f827e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"632f7e3696e01816bde8cd9bbcfd87bf"},{url:"/_next/static/GsdNtw1OX46UJUmF4RtLj/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/GsdNtw1OX46UJUmF4RtLj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/17-72a95385a4c2c348.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/247-3dd654df061c53b2.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/479-417a4b59751e544d.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/63ad2cbc-2eca102c21f65d00.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/7112840a-d737598aea13af63.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/872-3420fde589110463.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/90-d6ef608610a8cf7e.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/%5Bslug%5D/error-04d80532c05bb03d.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/%5Bslug%5D/head-1f144ef00c691e5d.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/%5Bslug%5D/not-found-690788c9a21e4e29.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/%5Bslug%5D/page-83f24c99db45606c.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(admin)/editor/head-fdb8ed2689913e1c.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(admin)/editor/info/page-f5084831b1a85467.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(admin)/editor/layout-0dc1db93dddcb250.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(admin)/editor/page-612e5a2953ddd021.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(admin)/editor/project/page-fd828ef8307dc4b8.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(admin)/login/error-9791ff292873541e.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(admin)/login/page-1a9e2207b49f785a.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(marketing)/info/head-01c659a431dce581.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(marketing)/info/page-9dd586f8c420bdb3.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(marketing)/store/head-6bb29345a5bffd89.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(marketing)/store/layout-4724b8ef1cdb089f.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/(marketing)/store/page-2bf02920aa9d787e.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/error-3c124ac68888e7b6.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/head-d3b2883fd9e0057e.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/layout-290f99b42c1ae3ea.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/loading-b59811950fccbb1c.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/app/page-50a4502d384633ca.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/c97d5db8-e154c775068a0069.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/main-a29dd725b070b04e.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/main-app-f7991bdf5a7d528d.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/pages/_app-9f5490aa3d56632f.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4aa0e8c11455aebb.js",revision:"GsdNtw1OX46UJUmF4RtLj"},{url:"/_next/static/css/83cfc2237dc3f5bd.css",revision:"83cfc2237dc3f5bd"},{url:"/favicon.ico",revision:"68d9ff2465f321dda4a8cfffb58cbab8"},{url:"/hdri/moonless.hdr",revision:"da9edde9ad39465900a7935dc15ab8d7"},{url:"/hdri/puresky.hdr",revision:"38890f597727936a44d17a97f7f73354"},{url:"/icons/android-chrome-192x192.png",revision:"be7444de6ef5ccf3088274a8d6b98107"},{url:"/icons/android-chrome-512x512.png",revision:"12b7b08f8c12502a06578f2b0a23fbf9"},{url:"/icons/apple-touch-icon.png",revision:"4451f70f65f36232521073ed6c320236"},{url:"/icons/favicon-16x16.png",revision:"823888918ad62729c8f44f416f8edfbb"},{url:"/icons/favicon-32x32.png",revision:"e3ee5d0460076adc583dfd68c693ac55"},{url:"/icons/icon-192x192.png",revision:"74af535294bdcd574654516630a8b774"},{url:"/icons/icon-256x256.png",revision:"8f6fa8e0aac4b46d79111e4f31134acb"},{url:"/icons/icon-384x384.png",revision:"e84e6de2c77b20f2e55b989b44ec6f2f"},{url:"/icons/icon-512x512.png",revision:"f253dcc323745519ca8d6375b1973c4e"},{url:"/icons/maskable_logo192.png",revision:"741b51ce6f33cca8c6c2560379591aa3"},{url:"/icons/maskable_logo256.png",revision:"9349649c40f50e9c9d3a19366a0a8dea"},{url:"/manifest.json",revision:"c615b8349767e874944b07f12335f561"},{url:"/models/bowl.gltf",revision:"0f198942b754b3afcb4c0062890b74f0"},{url:"/models/box.gltf",revision:"e787c1e65a5d08db5e57abdca2bf9a34"},{url:"/models/sand.glb",revision:"779bc22318a2dedc184ed47ab491d33d"},{url:"/reflector/Ice_COLOR.jpg",revision:"d91f75091c553986f198d5a142a1ecd3"},{url:"/reflector/Ice_DISP.png",revision:"415769e60b3d12aa147040bdc52a917a"},{url:"/reflector/Ice_NORM.jpg",revision:"7f693844f8f3b0ebaf22aab5d3f3dff2"},{url:"/reflector/Ice_OCC.jpg",revision:"5c1bc8af4ad270b59b73fec7f17a5097"},{url:"/reflector/Ice_ROUGH.jpg",revision:"136940587e9f9d8073463e07330646fa"},{url:"/reflector/floor_normal.jpg",revision:"dc79ddc4ae5c3e2cf37070556b5da959"},{url:"/reflector/floor_rough.jpeg",revision:"ac493c1f2a4bbdb5010ae09814c3c9ff"},{url:"/sound effects/admin.mp3",revision:"bdabaf87974d18ab3761d72c9a9833a4"},{url:"/sound effects/close.mp3",revision:"d2f41f83f955b26ff15b191c655700a2"},{url:"/sound effects/confirm.mp3",revision:"ae4c14b94f80442c9c3dbfde00af519f"},{url:"/sound effects/home.mp3",revision:"c91b24b4e877708ed23d9fe5cb3f7874"},{url:"/sound effects/open.mp3",revision:"abe656e98db259ff2f2ab35c08e70783"},{url:"/sound effects/reset.mp3",revision:"8e9e2b10d5f4c6470743798534b6d83e"},{url:"/sound effects/select.mp3",revision:"c4a0b3fbdf73c9a91b09a67e8808fc40"},{url:"/sound effects/select2.mp3",revision:"d62a7bd8a105b9d27d982532fa634c19"},{url:"/splash_screens/10.2__iPad_landscape.png",revision:"aa6c447949328c02075f18885a3724f7"},{url:"/splash_screens/10.2__iPad_portrait.png",revision:"debafeeeb3994beac62a7627acdd34b7"},{url:"/splash_screens/10.5__iPad_Air_landscape.png",revision:"8317128b57ab0e42a899176f29fb6199"},{url:"/splash_screens/10.5__iPad_Air_portrait.png",revision:"1c2c6e8531c35efad4dc1aa7062fae93"},{url:"/splash_screens/10.9__iPad_Air_landscape.png",revision:"bde21a276fa501b5631e6f82f31a3af1"},{url:"/splash_screens/10.9__iPad_Air_portrait.png",revision:"4f247e36f8efdeb2ffa503dc730aca48"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"79a28c12cb6dda6a3bcff58fd04a5eec"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"f0b38cea19fcd726b132fce136bda9ef"},{url:"/splash_screens/12.9__iPad_Pro_landscape.png",revision:"a98aeaf4ad841423704877cd1acc7dce"},{url:"/splash_screens/12.9__iPad_Pro_portrait.png",revision:"a7fe3eb3a95af790c57d9186e21bc1f4"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"a1453ae1c52b632c7520815111c34f10"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"db7926f42afd90796ff5496ab094a46b"},{url:"/splash_screens/8.3__iPad_Mini_landscape.png",revision:"1658dc3291d5c82328c0ba3531b493c3"},{url:"/splash_screens/8.3__iPad_Mini_portrait.png",revision:"849aa150856bc3234855a0e2e2c2e526"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"b9003c21b0a4b20cae6180a2794f37fc"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"be4ed7e6073095703fab614ddfd21cd8"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"d9773f35ab86d49ec656ad9a5fb39b6e"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"b36b6a2ee3e841ab484cd80a77d9cf44"},{url:"/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"06cb4b73ad859df76c76f5312d4aa62f"},{url:"/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"f5d87bb242e99e72918a3e59e3a722fa"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"92b6c8511c5d18bbb1b49a99d24350e5"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"784b365fa80a641031a8359b3f0f2270"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"a458fd66519cae16fb7ecdaddba0b193"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"093e7066d1f4d81172258428316f045b"},{url:"/splash_screens/iPhone_14_Pro_Max_landscape.png",revision:"669d9a67c56c5ec8c85f3bf39287c47f"},{url:"/splash_screens/iPhone_14_Pro_Max_portrait.png",revision:"436e8529fbc7fe93b8312cab8e9b0cc3"},{url:"/splash_screens/iPhone_14_Pro_landscape.png",revision:"0dd5db1be6f839d47c07320177f419ec"},{url:"/splash_screens/iPhone_14_Pro_portrait.png",revision:"63427fdf2a0872dedb3cc96fed57d956"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"fdcda35e0140d9bcbaeb411979266def"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"2314da0016ba915e8ed88af727d73011"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"5706e2704a70524cec98498b9b5db490"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"224ad25820aab51687c57e2a8e361c4e"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"1635484634ab705b13779cdb2965af61"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"596d8d1ac807ceb253afd7ca633d7e37"},{url:"/splash_screens/icon.png",revision:"1076690cbea634348f5d290bfd9a06e4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
