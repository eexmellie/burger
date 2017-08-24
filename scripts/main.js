!function(e,t){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=t()}):"object"==typeof module&&module.exports?module.exports=t():e.svg4everybody=t()}(this,function(){function e(e,t,n){if(n){var o=document.createDocumentFragment(),i=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");i&&t.setAttribute("viewBox",i);for(var a=n.cloneNode(!0);a.childNodes.length;)o.appendChild(a.firstChild);e.appendChild(o)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=t._cachedDocument;n||(n=t._cachedDocument=document.implementation.createHTMLDocument(""),n.body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map(function(o){var i=t._cachedTarget[o.id];i||(i=t._cachedTarget[o.id]=n.getElementById(o.id)),e(o.parent,o.svg,i)})}},t.onreadystatechange()}function n(n){function i(){for(var n=0;n<v.length;){var r=v[n],l=r.parentNode,d=o(l),c=r.getAttribute("xlink:href")||r.getAttribute("href");if(!c&&s.attributeName&&(c=r.getAttribute(s.attributeName)),d&&c){if(a)if(!s.validate||s.validate(c,d,r)){l.removeChild(r);var u=c.split("#"),g=u.shift(),h=u.join("#");if(g.length){var b=f[g];b||(b=f[g]=new XMLHttpRequest,b.open("GET",g),b.send(),b._embeds=[]),b._embeds.push({parent:l,svg:d,id:h}),t(b)}else e(l,d,document.getElementById(h))}else++n,++m}else++n}(!v.length||v.length-m>0)&&p(i,67)}var a,s=Object(n),r=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,l=/\bAppleWebKit\/(\d+)\b/,d=/\bEdge\/12\.(\d+)\b/,c=/\bEdge\/.(\d+)\b/,u=window.top!==window.self;a="polyfill"in s?s.polyfill:r.test(navigator.userAgent)||(navigator.userAgent.match(d)||[])[1]<10547||(navigator.userAgent.match(l)||[])[1]<537||c.test(navigator.userAgent)&&u;var f={},p=window.requestAnimationFrame||setTimeout,v=document.getElementsByTagName("use"),m=0;a&&i()}function o(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return n}),function(){function e(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1}function t(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function n(e){e&&e.blur&&e!==document.body&&e.blur()}function o(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function i(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function a(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,n=!1,o=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),i=function(i){if(i.target===e){var a="DOMNodeRemoved";n|=i.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(o,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(t){e.addEventListener(t,i)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}function s(){if(!i(this))return p.call(this);var e=t(this);e&&e.close()}var r=window.CustomEvent;r&&"object"!=typeof r||(r=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n},r.prototype=window.Event.prototype),a.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),l.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"],o=t.map(function(e){return e+":not([disabled])"});o.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(o.join(", "))}n(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!l.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");e(this.dialog_.parentElement),this.setOpen(!0),this.openAsModal_=!0,l.needsCentering(this.dialog_)?(l.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new r("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};var l={};if(l.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},l.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],i=null;try{i=n.cssRules}catch(e){}if(i)for(var a=0;a<i.length;++a){var s=i[a],r=null;try{r=document.querySelectorAll(s.selectorText)}catch(e){}if(r&&o(r,e)){var l=s.style.getPropertyValue("top"),d=s.style.getPropertyValue("bottom");if(l&&"auto"!==l||d&&"auto"!==d)return!0}}}return!1},l.needsCentering=function(e){return!("absolute"!==window.getComputedStyle(e).position||"auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom||l.isInlinePositionSetByStylesheet(e))},l.forceRegisterDialog=function(e){if(window.HTMLDialogElement||e.showModal,"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new a(e)},l.registerDialog=function(e){e.showModal||l.forceRegisterDialog(e)},l.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var n=[];t.forEach(function(e){for(var t,o=0;t=e.removedNodes[o];++o)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))}),n.length&&e(n)}))},l.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},l.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},l.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var o=this.pendingDialogStack[0];if(o){(o.dialog.parentNode||document.body).appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},l.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=t(e);){for(var n,o=0;n=this.pendingDialogStack[o];++o)if(n.dialog===e)return 0===o;e=e.parentElement}return!1},l.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),n(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},l.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new r("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&n.dialog.dispatchEvent(t)&&n.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},l.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach(function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()})},l.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},l.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},l.dm=new l.DialogManager,l.formSubmitter=null,l.useValue=null,void 0===window.HTMLDialogElement){var d=document.createElement("form");if(d.setAttribute("method","dialog"),"dialog"!==d.method){var c=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(c){var u=c.get;c.get=function(){return i(this)?"dialog":u.call(this)};var f=c.set;c.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):f.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",c)}}document.addEventListener("click",function(e){if(l.formSubmitter=null,l.useValue=null,!e.defaultPrevented){var n=e.target;if(n&&i(n.form)){if(!("submit"===n.type&&["button","input"].indexOf(n.localName)>-1)){if("input"!==n.localName||"image"!==n.type)return;l.useValue=e.offsetX+","+e.offsetY}t(n)&&(l.formSubmitter=n)}}},!1);var p=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=s,document.addEventListener("submit",function(e){var n=e.target;if(i(n)){e.preventDefault();var o=t(n);if(o){var a=l.formSubmitter;a&&a.form===n?o.close(l.useValue||a.value):o.close(),l.formSubmitter=null}}},!0)}l.forceRegisterDialog=l.forceRegisterDialog,l.registerDialog=l.registerDialog,"function"==typeof define&&"amd"in define?define(function(){return l}):"object"==typeof module&&"object"==typeof module.exports?module.exports=l:window.dialogPolyfill=l}(),function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function n(e,t){var n=z,o=n.classNameActiveSlide;e.forEach(function(e,t){e.classList.contains(o)&&e.classList.remove(o)}),e[t].classList.add(o)}function o(e){var t=z,n=t.infinite,o=e.slice(0,n),i=e.slice(e.length-n,e.length);return o.forEach(function(e){var t=e.cloneNode(!0);T.appendChild(t)}),i.reverse().forEach(function(e){var t=e.cloneNode(!0);T.insertBefore(t,T.firstChild)}),T.addEventListener(O.transitionEnd,y),f.call(T.children)}function i(t,n,o){(0,d.default)(e,t+".lory."+n,o)}function s(e,t,n){var o=T&&T.style;o&&(o[O.transition+"TimingFunction"]=n,o[O.transition+"Duration"]=t+"ms",O.hasTranslate3d?o[O.transform]="translate3d("+e+"px, 0, 0)":o[O.transform]="translate("+e+"px, 0)")}function l(e,t){var o=z,a=o.slideSpeed,r=o.slidesToScroll,l=o.infinite,d=o.rewind,c=o.rewindSpeed,u=o.ease,p=o.classNameActiveSlide,v=a,m=t?j+1:j-1,g=Math.round(L-D);i("before","slide",{index:j,nextSlide:m}),N&&N.classList.remove("disabled"),A&&A.classList.remove("disabled"),"number"!=typeof e&&(e=t?j+r:j-r),e=Math.min(Math.max(e,0),S.length-1),l&&void 0===t&&(e+=l);var h=Math.min(Math.max(-1*S[e].offsetLeft,-1*g),0);d&&Math.abs(M.x)===g&&t&&(h=0,e=0,v=c),s(h,v,u),M.x=h,S[e].offsetLeft<=g&&(j=e),!l||e!==S.length-l&&0!==e||(t&&(j=l),t||(j=S.length-2*l),M.x=-1*S[j].offsetLeft,P=function(){s(-1*S[j].offsetLeft,0,void 0)}),p&&n(f.call(S),j),N&&!l&&0===e&&N.classList.add("disabled"),!A||l||d||e+1!==S.length||A.classList.add("disabled"),i("after","slide",{currentSlide:j})}function c(){i("before","init"),O=(0,r.default)(),z=a({},u.default,t);var s=z,l=s.classNameFrame,d=s.classNameSlideContainer,c=s.classNamePrevCtrl,v=s.classNameNextCtrl,m=s.enableMouseEvents,b=s.classNameActiveSlide;k=e.getElementsByClassName(l)[0],T=k.getElementsByClassName(d)[0],N=e.getElementsByClassName(c)[0],A=e.getElementsByClassName(v)[0],M={x:T.offsetLeft,y:T.offsetTop},z.infinite?S=o(f.call(T.children)):(S=f.call(T.children),N&&N.classList.add("disabled"),A&&1===S.length&&!z.rewind&&A.classList.add("disabled")),p(),b&&n(S,j),N&&A&&(N.addEventListener("click",g),A.addEventListener("click",h)),k.addEventListener("touchstart",w),m&&(k.addEventListener("mousedown",w),k.addEventListener("click",_)),z.window.addEventListener("resize",C),i("after","init")}function p(){var e=z,t=e.infinite,o=e.ease,i=e.rewindSpeed,a=e.rewindOnResize,r=e.classNameActiveSlide;L=T.getBoundingClientRect().width||T.offsetWidth,D=k.getBoundingClientRect().width||k.offsetWidth,D===L&&(L=S.reduce(function(e,t){return e+t.getBoundingClientRect().width||t.offsetWidth},0)),a?j=0:(o=null,i=0),t?(s(-1*S[j+t].offsetLeft,0,null),j+=t,M.x=-1*S[j].offsetLeft):(s(-1*S[j].offsetLeft,i,o),M.x=-1*S[j].offsetLeft),r&&n(f.call(S),j)}function v(e){l(e)}function m(){return j-z.infinite||0}function g(){l(!1,!1)}function h(){l(!1,!0)}function b(){i("before","destroy"),k.removeEventListener(O.transitionEnd,y),k.removeEventListener("touchstart",w),k.removeEventListener("touchmove",x),k.removeEventListener("touchend",E),k.removeEventListener("mousemove",x),k.removeEventListener("mousedown",w),k.removeEventListener("mouseup",E),k.removeEventListener("mouseleave",E),k.removeEventListener("click",_),z.window.removeEventListener("resize",C),N&&N.removeEventListener("click",g),A&&A.removeEventListener("click",h),z.infinite&&Array.apply(null,Array(z.infinite)).forEach(function(){T.removeChild(T.firstChild),T.removeChild(T.lastChild)}),i("after","destroy")}function y(){P&&(P(),P=void 0)}function w(e){var t=z,n=t.enableMouseEvents,o=e.touches?e.touches[0]:e;n&&(k.addEventListener("mousemove",x),k.addEventListener("mouseup",E),k.addEventListener("mouseleave",E)),k.addEventListener("touchmove",x),k.addEventListener("touchend",E);var a=o.pageX,s=o.pageY;F={x:a,y:s,time:Date.now()},B=void 0,I={},i("on","touchstart",{event:e})}function x(e){var t=e.touches?e.touches[0]:e,n=t.pageX,o=t.pageY;I={x:n-F.x,y:o-F.y},void 0===B&&(B=!!(B||Math.abs(I.x)<Math.abs(I.y))),!B&&F&&(e.preventDefault(),s(M.x+I.x,0,null)),i("on","touchmove",{event:e})}function E(e){var t=F?Date.now()-F.time:void 0,n=Number(t)<300&&Math.abs(I.x)>25||Math.abs(I.x)>D/3,o=!j&&I.x>0||j===S.length-1&&I.x<0,a=I.x<0;B||(n&&!o?l(!1,a):s(M.x,z.snapBackSpeed)),F=void 0,k.removeEventListener("touchmove",x),k.removeEventListener("touchend",E),k.removeEventListener("mousemove",x),k.removeEventListener("mouseup",E),k.removeEventListener("mouseleave",E),i("on","touchend",{event:e})}function _(e){I.x&&e.preventDefault()}function C(e){p(),i("on","resize",{event:e})}var M=void 0,L=void 0,D=void 0,S=void 0,k=void 0,T=void 0,N=void 0,A=void 0,O=void 0,P=void 0,j=0,z={};"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e[0]);var F=void 0,I=void 0,B=void 0;return c(),{setup:c,reset:p,slideTo:v,returnIndex:m,prev:g,next:h,destroy:b}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.lory=i;var s=n(2),r=o(s),l=n(3),d=o(l),c=n(5),u=o(c),f=Array.prototype.slice},function(e,t){(function(e){"use strict";function n(){var t=void 0,n=void 0,o=void 0,i=void 0;return function(){var a=document.createElement("_"),s=a.style,r=void 0;""===s[r="webkitTransition"]&&(o="webkitTransitionEnd",n=r),""===s[r="transition"]&&(o="transitionend",n=r),""===s[r="webkitTransform"]&&(t=r),""===s[r="msTransform"]&&(t=r),""===s[r="transform"]&&(t=r),document.body.insertBefore(a,null),s[t]="translate3d(0, 0, 0)",i=!!e.getComputedStyle(a).getPropertyValue(t),document.body.removeChild(a)}(),{transform:t,transition:n,transitionEnd:o,hasTranslate3d:i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}).call(t,function(){return this}())},function(e,t,n){"use strict";function o(e,t,n){var o=new a.default(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(4),a=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,function(){return this}())},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={slidesToScroll:1,slideSpeed:300,rewindSpeed:600,snapBackSpeed:200,ease:"ease",rewind:!1,infinite:!1,classNameFrame:"js_frame",classNameSlideContainer:"js_slides",classNamePrevCtrl:"js_prev",classNameNextCtrl:"js_next",classNameActiveSlide:"active",enableMouseEvents:!1,window:window,rewindOnResize:!0}}])}),function(e){var t={sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!1,keyboard:!0,beforeMove:null,afterMove:null,loop:!0,responsiveFallback:!1,direction:"vertical"};e.fn.swipeEvents=function(){return this.each(function(){function t(e){var t=e.originalEvent.touches;t&&t.length&&(o=t[0].pageX,i=t[0].pageY,a.bind("touchmove",n))}function n(e){var t=e.originalEvent.touches;if(t&&t.length){var s=o-t[0].pageX,r=i-t[0].pageY;s>=50&&a.trigger("swipeLeft"),s<=-50&&a.trigger("swipeRight"),r>=50&&a.trigger("swipeUp"),r<=-50&&a.trigger("swipeDown"),(Math.abs(s)>=50||Math.abs(r)>=50)&&a.unbind("touchmove",n)}}var o,i,a=e(this);a.bind("touchstart",t)})},e.fn.onepage_scroll=function(n){function o(){var t=!1,n=typeof a.responsiveFallback;"number"==n&&(t=e(window).width()<a.responsiveFallback),"boolean"==n&&(t=a.responsiveFallback),"function"==n&&(valFunction=a.responsiveFallback(),t=valFunction,typeOFv=typeof t,"number"==typeOFv&&(t=e(window).width()<valFunction)),t?(e("body").addClass("disabled-onepage-scroll"),e(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll"),s.swipeEvents().unbind("swipeDown swipeUp")):(e("body").hasClass("disabled-onepage-scroll")&&(e("body").removeClass("disabled-onepage-scroll"),e("html, body, .wrapper").animate({scrollTop:0},"fast")),s.swipeEvents().bind("swipeDown",function(t){e("body").hasClass("disabled-onepage-scroll")||t.preventDefault(),s.moveUp()}).bind("swipeUp",function(t){e("body").hasClass("disabled-onepage-scroll")||t.preventDefault(),s.moveDown()}),e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(e){e.preventDefault(),i(e,e.originalEvent.wheelDelta||-e.originalEvent.detail)}))}function i(e,t){deltaOfInterest=t;var n=(new Date).getTime();if(n-lastAnimation<quietPeriod+a.animationTime)return void e.preventDefault();deltaOfInterest<0?s.moveDown():s.moveUp(),lastAnimation=n}var a=e.extend({},t,n),s=e(this),r=e(a.sectionContainer);if(total=r.length,status="off",topPos=0,leftPos=0,lastAnimation=0,quietPeriod=500,paginationList="",e.fn.transformPage=function(t,n,o){if("function"==typeof t.beforeMove&&t.beforeMove(o),e("html").hasClass("ie8"))if("horizontal"==t.direction){var i=s.width()/100*n;e(this).animate({left:i+"px"},t.animationTime)}else{var i=s.height()/100*n;e(this).animate({top:i+"px"},t.animationTime)}else e(this).css({"-webkit-transform":"horizontal"==t.direction?"translate3d("+n+"%, 0, 0)":"translate3d(0, "+n+"%, 0)","-webkit-transition":"all "+t.animationTime+"ms "+t.easing,"-moz-transform":"horizontal"==t.direction?"translate3d("+n+"%, 0, 0)":"translate3d(0, "+n+"%, 0)","-moz-transition":"all "+t.animationTime+"ms "+t.easing,"-ms-transform":"horizontal"==t.direction?"translate3d("+n+"%, 0, 0)":"translate3d(0, "+n+"%, 0)","-ms-transition":"all "+t.animationTime+"ms "+t.easing,transform:"horizontal"==t.direction?"translate3d("+n+"%, 0, 0)":"translate3d(0, "+n+"%, 0)",transition:"all "+t.animationTime+"ms "+t.easing});e(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(e){"function"==typeof t.afterMove&&t.afterMove(o)})},e.fn.moveDown=function(){var t=e(this);if(index=e(a.sectionContainer+".active").data("index"),current=e(a.sectionContainer+"[data-index='"+index+"']"),next=e(a.sectionContainer+"[data-index='"+(index+1)+"']"),next.length<1){if(1!=a.loop)return;pos=0,next=e(a.sectionContainer+"[data-index='1']")}else pos=100*index*-1;if("function"==typeof a.beforeMove&&a.beforeMove(next.data("index")),current.removeClass("active"),next.addClass("active"),1==a.pagination&&(e(".onepage-pagination li a[data-index='"+index+"']").removeClass("active"),e(".onepage-pagination li a[data-index='"+next.data("index")+"']").addClass("active")),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==a.updateURL){var n=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(index+1);history.pushState({},document.title,n)}t.transformPage(a,pos,next.data("index"))},e.fn.moveUp=function(){var t=e(this);if(index=e(a.sectionContainer+".active").data("index"),current=e(a.sectionContainer+"[data-index='"+index+"']"),next=e(a.sectionContainer+"[data-index='"+(index-1)+"']"),next.length<1){if(1!=a.loop)return;pos=100*(total-1)*-1,next=e(a.sectionContainer+"[data-index='"+total+"']")}else pos=100*(next.data("index")-1)*-1;if("function"==typeof a.beforeMove&&a.beforeMove(next.data("index")),current.removeClass("active"),next.addClass("active"),1==a.pagination&&(e(".onepage-pagination li a[data-index='"+index+"']").removeClass("active"),e(".onepage-pagination li a[data-index='"+next.data("index")+"']").addClass("active")),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==a.updateURL){var n=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(index-1);history.pushState({},document.title,n)}t.transformPage(a,pos,next.data("index"))},e.fn.moveTo=function(t){if(current=e(a.sectionContainer+".active"),next=e(a.sectionContainer+"[data-index='"+t+"']"),next.length>0){if("function"==typeof a.beforeMove&&a.beforeMove(next.data("index")),current.removeClass("active"),next.addClass("active"),e(".onepage-pagination li a.active").removeClass("active"),e(".onepage-pagination li a[data-index='"+t+"']").addClass("active"),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),pos=100*(t-1)*-1,history.replaceState&&1==a.updateURL){var n=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(t-1);history.pushState({},document.title,n)}s.transformPage(a,pos,t)}},s.addClass("onepage-wrapper").css("position","relative"),e.each(r,function(t){e(this).css({position:"absolute",top:topPos+"%"}).addClass("section").attr("data-index",t+1),e(this).css({position:"absolute",left:"horizontal"==a.direction?leftPos+"%":0,top:"vertical"==a.direction||"horizontal"!=a.direction?topPos+"%":0}),"horizontal"==a.direction?leftPos+=100:topPos+=100,1==a.pagination&&(paginationList+="<li><a data-index='"+(t+1)+"' href='#"+(t+1)+"'></a></li>")}),s.swipeEvents().bind("swipeDown",function(t){e("body").hasClass("disabled-onepage-scroll")||t.preventDefault(),s.moveUp()}).bind("swipeUp",function(t){e("body").hasClass("disabled-onepage-scroll")||t.preventDefault(),s.moveDown()}),1==a.pagination&&(e("ul.onepage-pagination").length<1&&e("<ul class='onepage-pagination'></ul>").prependTo("body"),"horizontal"==a.direction?(posLeft=s.find(".onepage-pagination").width()/2*-1,s.find(".onepage-pagination").css("margin-left",posLeft)):(posTop=s.find(".onepage-pagination").height()/2*-1,s.find(".onepage-pagination").css("margin-top",posTop)),e("ul.onepage-pagination").html(paginationList)),""!=window.location.hash&&"#1"!=window.location.hash)if(init_index=window.location.hash.replace("#",""),parseInt(init_index)<=total&&parseInt(init_index)>0){if(e(a.sectionContainer+"[data-index='"+init_index+"']").addClass("active"),e("body").addClass("viewing-page-"+init_index),1==a.pagination&&e(".onepage-pagination li a[data-index='"+init_index+"']").addClass("active"),next=e(a.sectionContainer+"[data-index='"+init_index+"']"),next&&(next.addClass("active"),1==a.pagination&&e(".onepage-pagination li a[data-index='"+init_index+"']").addClass("active"),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==a.updateURL)){var l=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+init_index;history.pushState({},document.title,l)}pos=100*(init_index-1)*-1,s.transformPage(a,pos,init_index)}else e(a.sectionContainer+"[data-index='1']").addClass("active"),e("body").addClass("viewing-page-1"),1==a.pagination&&e(".onepage-pagination li a[data-index='1']").addClass("active");else e(a.sectionContainer+"[data-index='1']").addClass("active"),e("body").addClass("viewing-page-1"),1==a.pagination&&e(".onepage-pagination li a[data-index='1']").addClass("active");return 1==a.pagination&&e(".onepage-pagination li a").click(function(){var t=e(this).data("index");s.moveTo(t)}),e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(t){t.preventDefault();var n=t.originalEvent.wheelDelta||-t.originalEvent.detail;e("body").hasClass("disabled-onepage-scroll")||i(t,n)}),0!=a.responsiveFallback&&(e(window).resize(function(){o()}),o()),1==a.keyboard&&e(document).keydown(function(t){var n=t.target.tagName.toLowerCase();if(!e("body").hasClass("disabled-onepage-scroll"))switch(t.which){case 38:"input"!=n&&"textarea"!=n&&s.moveUp();break;case 40:case 32:"input"!=n&&"textarea"!=n&&s.moveDown();break;case 33:"input"!=n&&"textarea"!=n&&s.moveUp();break;case 34:"input"!=n&&"textarea"!=n&&s.moveDown();break;case 36:s.moveTo(1);break;case 35:s.moveTo(total);break;default:return}}),!1}}(window.jQuery);var mapGoogle=function(){return{init:function(){var e=new google.maps.Map(document.getElementById("map"),{zoom:15,center:{lat:53.905337,lng:27.560507},scrollwheel:!1}),t={url:"images/logo/map-marker.svg",size:new google.maps.Size(46,57),scaledSize:new google.maps.Size(46,57)},n=[{position:new google.maps.LatLng(53.900768,27.561586),contentString:"Энгельса, 12",content:"г. Минск, ул. Энгельса, 12"},{position:new google.maps.LatLng(53.906978,27.573851),contentString:"Независимости, 34",content:"г. Минск, пр-т Независимости, 34"},{position:new google.maps.LatLng(53.903467,27.554593),contentString:"Свободы, 11",content:"г. Минск, пл. Свободы, 11"}],o=new google.maps.InfoWindow;n.forEach(function(n){var i=new google.maps.Marker({position:n.position,icon:t,map:e,title:n.contentString,animation:google.maps.Animation.DROP});i.addListener("click",function(){o.setContent(n.content),o.open(e,i),i.setAnimation(google.maps.Animation.BOUNCE),setTimeout(function(){i.setAnimation(null)},1400)})})}}}();!function(){document.getElementById("map")&&google.maps.event.addDomListener(window,"load",mapGoogle.init),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".js_slider");lory(e,{infinite:1})}),$(".main-content").onepage_scroll({sectionContainer:"section",easing:"ease",animationTime:500,pagination:!0,updateURL:!1,loop:!1,keyboard:!0,responsiveFallback:!1,direction:"vertical"});for(var e=document.querySelectorAll(".js-goto"),t=0;t<e.length;t++){e[t].addEventListener("click",function(e){e.preventDefault();var t=this.dataset.goto;$(this).moveTo(t)})}for(var n=document.querySelectorAll(".js-toggle"),t=0;t<n.length;t++){n[t].addEventListener("click",function(e){for(var t=this.dataset.toggle.split(";"),n=0;n<t.length;n++){var o=t[n].split("|"),i=o[0].trim(),a=o[1].trim();document.querySelector("."+i).classList.toggle(a)}})}}(),function(){Array.prototype.slice.call(document.querySelectorAll(".js-acco")).forEach(function(e){var t=e.dataset.active,n=e.querySelectorAll(".js-acco-item");Array.prototype.slice.call(e.querySelectorAll(".js-acco-trigger")).forEach(function(e){var o=e.closest(".js-acco-item");e.addEventListener("click",function(e){e.preventDefault(),o.classList.contains(t)?o.classList.remove(t):(n.forEach(function(e){e.classList.remove(t)}),o.classList.add(t))});var i=o.querySelector(".js-acco-close");i&&i.addEventListener("click",function(){o.classList.remove(t)})})})}(),function(){for(var e=document.querySelectorAll(".js-dialog-open"),t=0;t<e.length;t++){e[t].addEventListener("click",function(e){e.preventDefault();var t=this.dataset.dialogId;document.querySelector("#"+t).showModal()})}for(var n=document.querySelectorAll(".js-dialog-close"),o=0;o<n.length;o++){n[o].addEventListener("click",function(e){this.closest("dialog").close()})}}(),$("#form").on("submit",function(){event.preventDefault();var e=$(event.target),t=e.attr("action"),n=e.serialize(),o=$.ajax({type:"POST",url:t,data:n});o.done(function(e){var t=JSON.parse(e),n=t.mes;t.status;alert(n)}),o.fail(function(e,t){alert("Request failed: "+t)})});