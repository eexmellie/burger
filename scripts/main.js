!function(e,t){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=t()}):"object"==typeof module&&module.exports?module.exports=t():e.svg4everybody=t()}(this,function(){function e(e,t,n){if(n){var o=document.createDocumentFragment(),i=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");i&&t.setAttribute("viewBox",i);for(var a=n.cloneNode(!0);a.childNodes.length;)o.appendChild(a.firstChild);e.appendChild(o)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=t._cachedDocument;n||(n=t._cachedDocument=document.implementation.createHTMLDocument(""),n.body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map(function(o){var i=t._cachedTarget[o.id];i||(i=t._cachedTarget[o.id]=n.getElementById(o.id)),e(o.parent,o.svg,i)})}},t.onreadystatechange()}function n(n){function i(){for(var n=0;n<p.length;){var g=p[n],s=g.parentNode,l=o(s),d=g.getAttribute("xlink:href")||g.getAttribute("href");if(!d&&r.attributeName&&(d=g.getAttribute(r.attributeName)),l&&d){if(a)if(!r.validate||r.validate(d,l,g)){s.removeChild(g);var c=d.split("#"),v=c.shift(),h=c.join("#");if(v.length){var b=m[v];b||(b=m[v]=new XMLHttpRequest,b.open("GET",v),b.send(),b._embeds=[]),b._embeds.push({parent:s,svg:l,id:h}),t(b)}else e(s,l,document.getElementById(h))}else++n,++f}else++n}(!p.length||p.length-f>0)&&u(i,67)}var a,r=Object(n),g=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,s=/\bAppleWebKit\/(\d+)\b/,l=/\bEdge\/12\.(\d+)\b/,d=/\bEdge\/.(\d+)\b/,c=window.top!==window.self;a="polyfill"in r?r.polyfill:g.test(navigator.userAgent)||(navigator.userAgent.match(l)||[])[1]<10547||(navigator.userAgent.match(s)||[])[1]<537||d.test(navigator.userAgent)&&c;var m={},u=window.requestAnimationFrame||setTimeout,p=document.getElementsByTagName("use"),f=0;a&&i()}function o(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return n});var mapGoogle=function(){return{init:function(){var e=new google.maps.Map(document.getElementById("map"),{zoom:15,center:{lat:53.905337,lng:27.560507},scrollwheel:!1}),t={url:"../images/logo/map-marker.svg",size:new google.maps.Size(46,57),scaledSize:new google.maps.Size(46,57)},n=[{position:new google.maps.LatLng(53.900768,27.561586),contentString:"Энгельса, 12",content:"г. Минск, ул. Энгельса, 12"},{position:new google.maps.LatLng(53.906978,27.573851),contentString:"Независимости, 34",content:"г. Минск, пр-т Независимости, 34"},{position:new google.maps.LatLng(53.903467,27.554593),contentString:"Свободы, 11",content:"г. Минск, пл. Свободы, 11"}],o=new google.maps.InfoWindow;n.forEach(function(n){var i=new google.maps.Marker({position:n.position,icon:t,map:e,title:n.contentString,animation:google.maps.Animation.DROP});i.addListener("click",function(){o.setContent(n.content),o.open(e,i),i.setAnimation(google.maps.Animation.BOUNCE),setTimeout(function(){i.setAnimation(null)},1400)})})}}}();!function(){document.getElementById("map")&&google.maps.event.addDomListener(window,"load",mapGoogle.init);for(var e=document.querySelectorAll(".js-toggle"),t=0;t<e.length;t++){e[t].addEventListener("click",function(e){for(var t=this.dataset.toggle.split(";"),n=0;n<t.length;n++){var o=t[n].split("|"),i=o[0].trim(),a=o[1].trim();document.querySelector("."+i).classList.toggle(a)}})}}();