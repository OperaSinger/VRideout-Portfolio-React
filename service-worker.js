"use strict";var precacheConfig=[["/VRideout-Portfolio-React/index.html","724d411773fc50326a52ad21fa6cb8bd"],["/VRideout-Portfolio-React/static/css/main.f6571caa.css","c06875382cd1dd8464773f213ff59726"],["/VRideout-Portfolio-React/static/js/main.0573d955.js","c8bc7562b7110c03f7122eddf9ead037"],["/VRideout-Portfolio-React/static/media/bike2.b35ed822.jpg","b35ed822484b190a78e5af7539d033d3"],["/VRideout-Portfolio-React/static/media/expressjs.de42f444.png","de42f4444171b17199dc668dc49b5a0b"],["/VRideout-Portfolio-React/static/media/firebase.97010737.png","970107374d9b9d9365f4d8e4958f9f6c"],["/VRideout-Portfolio-React/static/media/frame.274a3c83.png","274a3c831ced84089b7ae7339bfc79a0"],["/VRideout-Portfolio-React/static/media/gifs.c9fb152c.jpg","c9fb152cfb90dbeea1bfe3292cc5e298"],["/VRideout-Portfolio-React/static/media/greystripes.b594942b.png","b594942b3eb9b1c3990ffab20302e24b"],["/VRideout-Portfolio-React/static/media/hang.8e270361.png","8e27036170c5f4fce99ad0cbb7fa47d3"],["/VRideout-Portfolio-React/static/media/html.6b9cc6de.png","6b9cc6de31b4939de5c4e7862dfd591c"],["/VRideout-Portfolio-React/static/media/mongodb.9c838d58.png","9c838d588e1eb58b8a71ba3ecce4e4bc"],["/VRideout-Portfolio-React/static/media/mysql.add03860.png","add038600774334092659636f5f2e8b5"],["/VRideout-Portfolio-React/static/media/nfl.31901448.jpg","3190144895526c900c83949efb8be741"],["/VRideout-Portfolio-React/static/media/nodejs.d04b8449.png","d04b8449e6c1a8da3b8965b39a0b69b8"],["/VRideout-Portfolio-React/static/media/portrait.46c08693.jpg","46c086932c686b2d4b71ecc946268b59"],["/VRideout-Portfolio-React/static/media/react.47071a8a.png","47071a8a7e1689b4f1fbbc81fc44eaa5"],["/VRideout-Portfolio-React/static/media/sequelize.c65fca11.png","c65fca112e501d07afa3fe1b0b3e7daf"],["/VRideout-Portfolio-React/static/media/spinal.4b328143.jpg","4b328143b4390042a7ec18a2598dc0a6"],["/VRideout-Portfolio-React/static/media/times.d2a79181.png","d2a79181723e338b812e6aa18a3eb63d"],["/VRideout-Portfolio-React/static/media/train.0d916339.jpg","0d916339d6890a85f80c18f7d8074fa2"],["/VRideout-Portfolio-React/static/media/usa.6c68fdf3.jpg","6c68fdf39d9c9e09ca58eabf3f5087f4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/VRideout-Portfolio-React/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});