!function(e){function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var n={};o.m=e,o.c=n,o.i=function(e){return e},o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="/2017/js/",o(o.s=229)}({229:function(e,o,n){e.exports=n(95)},95:function(e,o,n){"use strict";var t=document.getElementById("map");google.maps.event.addDomListener(window,"load",function(){if(t){var e=new google.maps.LatLng(22.2595221,114.1318008),o=new google.maps.Map(t,{zoom:17,center:e}),n=new google.maps.Marker({map:o,visible:!1,place:{location:{lat:22.2595221,lng:114.1318008},query:"Cyberport 3 Core E, Hong Kong"}});new google.maps.InfoWindow({content:['<div id="map-infowindow">','<a class="address address-en" ','title="Open Cyberport 3 Core E with Google Map" ','href="https://www.google.com.hk/maps/place/Cyberport+3+Core+E,+Telegraph+Bay/" ','target="_blank">HKOSCon 2017 Venue</a>',"</div>"].join("")}).open(o,n),setTimeout(function(){n.setVisible(!0),n.setAnimation(google.maps.Animation.DROP)},2e3)}})}});
//# sourceMappingURL=venue.js.map