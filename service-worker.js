"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/audio-store-demo/index.html","fd0830018a588ccdde878f72cdfaf8d9"],["/audio-store-demo/static/css/main.3dfb32fd.css","3d9f7453a793693b98c65e6c6e5a1028"],["/audio-store-demo/static/js/main.91541139.js","b282ed678ff9b07729c9b313753c2717"],["/audio-store-demo/static/media/addCart.fefb29a4.svg","fefb29a40bebe81c0cd73a48a56e40db"],["/audio-store-demo/static/media/blackHeadphonesTurn.4762305a.jpg","4762305a6f003d85b5f4a0e1e4e61f94"],["/audio-store-demo/static/media/cartWhite.5d0a0be2.svg","5d0a0be2e77a02b2ff0211118472637d"],["/audio-store-demo/static/media/hamburger.d346927b.svg","d346927b079c06d3a5364e5a8dd9a62c"],["/audio-store-demo/static/media/headphones.a539e27b.png","a539e27b1f1ad4a94b8a6d3fa6bf5a66"],["/audio-store-demo/static/media/heart.e806274b.svg","e806274bc383416152a04f73c595444d"],["/audio-store-demo/static/media/heartWhite.296949c8.svg","296949c879b33dd7daaf18a83c2c3999"],["/audio-store-demo/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/audio-store-demo/static/media/search.8a0c8c4e.svg","8a0c8c4e90d8ac7681629b333225fc86"],["/audio-store-demo/static/media/searchWhite.951624b6.svg","951624b696fb4357d5e69ca99ed91107"],["/audio-store-demo/static/media/uAudioAd-s.46817d0b.jpg","46817d0bca6f4cfa3d30ad2086310455"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/audio-store-demo/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});