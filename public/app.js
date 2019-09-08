(function(){var e,t,n,i,o,r=function(e,t){return function(){return e.apply(t,arguments)}},s=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};t=function(){function e(){}return e.prototype.extend=function(e,t){var n,i;for(n in t)i=t[n],null==e[n]&&(e[n]=i);return e},e.prototype.isMobile=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)},e.prototype.createEvent=function(e,t,n,i){var o;return null==t&&(t=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent"),o.initCustomEvent(e,t,n,i)):null!=document.createEventObject?(o=document.createEventObject(),o.eventType=e):o.eventName=e,o},e.prototype.emitEvent=function(e,t){return null!=e.dispatchEvent?e.dispatchEvent(t):t in(null!=e)?e[t]():"on"+t in(null!=e)?e["on"+t]():void 0},e.prototype.addEvent=function(e,t,n){return null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n},e.prototype.removeEvent=function(e,t,n){return null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]},e.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},e}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function e(){this.keys=[],this.values=[]}return e.prototype.get=function(e){var t,n,i,o,r;for(r=this.keys,t=i=0,o=r.length;i<o;t=++i)if(n=r[t],n===e)return this.values[t]},e.prototype.set=function(e,t){var n,i,o,r,s;for(s=this.keys,n=o=0,r=s.length;o<r;n=++o)if(i=s[n],i===e)return void(this.values[n]=t);return this.keys.push(e),this.values.push(t)},e}()),e=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(e=function(){function e(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return e.notSupported=!0,e.prototype.observe=function(){},e}()),i=this.getComputedStyle||function(e,t){return this.getPropertyValue=function(t){var n;return"float"===t&&(t="styleFloat"),o.test(t)&&t.replace(o,function(e,t){return t.toUpperCase()}),(null!=(n=e.currentStyle)?n[t]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(e){null==e&&(e={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(e,this.defaults),null!=e.scrollContainer&&(this.config.scrollContainer=document.querySelector(e.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var e;return this.element=window.document.documentElement,"interactive"===(e=document.readyState)||"complete"===e?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var t,n,i,o;if(this.stopped=!1,this.boxes=function(){var e,n,i,o;for(i=this.element.querySelectorAll("."+this.config.boxClass),o=[],e=0,n=i.length;e<n;e++)t=i[e],o.push(t);return o}.call(this),this.all=function(){var e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;e<n;e++)t=i[e],o.push(t);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(o=this.boxes,n=0,i=o.length;n<i;n++)t=o[n],this.applyStyle(t,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new e(function(e){return function(t){var n,i,o,r,s;for(s=[],n=0,i=t.length;n<i;n++)r=t[n],s.push(function(){var e,t,n,i;for(n=r.addedNodes||[],i=[],e=0,t=n.length;e<t;e++)o=n[e],i.push(this.doSync(o));return i}.call(e));return s}}(this)).observe(document.body,{childList:!0,subtree:!0})},o.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},o.prototype.sync=function(t){if(e.notSupported)return this.doSync(this.element)},o.prototype.doSync=function(e){var t,n,i,o,r;if(null==e&&(e=this.element),1===e.nodeType){for(e=e.parentNode||e,o=e.querySelectorAll("."+this.config.boxClass),r=[],n=0,i=o.length;n<i;n++)t=o[n],s.call(this.all,t)<0?(this.boxes.push(t),this.all.push(t),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(t,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),this.util().emitEvent(e,this.wowEvent),this.util().addEvent(e,"animationend",this.resetAnimation),this.util().addEvent(e,"oanimationend",this.resetAnimation),this.util().addEvent(e,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(e,"MSAnimationEnd",this.resetAnimation),e},o.prototype.applyStyle=function(e,t){var n,i,o;return i=e.getAttribute("data-wow-duration"),n=e.getAttribute("data-wow-delay"),o=e.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(e,t,i,n,o)}}(this))},o.prototype.animate=function(){return"requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()}}(),o.prototype.resetStyle=function(){var e,t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;t<n;t++)e=i[t],o.push(e.style.visibility="visible");return o},o.prototype.resetAnimation=function(e){var t;if(e.type.toLowerCase().indexOf("animationend")>=0)return t=e.target||e.srcElement,t.className=t.className.replace(this.config.animateClass,"").trim()},o.prototype.customStyle=function(e,t,n,i,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(e,t){var n,i,o,r;i=[];for(n in t)o=t[n],e[""+n]=o,i.push(function(){var t,i,s,a;for(s=this.vendors,a=[],t=0,i=s.length;t<i;t++)r=s[t],a.push(e[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return a}.call(this));return i},o.prototype.vendorCSS=function(e,t){var n,o,r,s,a,l;for(a=i(e),s=a.getPropertyCSSValue(t),r=this.vendors,n=0,o=r.length;n<o;n++)l=r[n],s=s||a.getPropertyCSSValue("-"+l+"-"+t);return s},o.prototype.animationName=function(e){var t;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=i(e).getPropertyValue("animation-name")}return"none"===t?"":t},o.prototype.cacheAnimationName=function(e){return this.animationNameCache.set(e,this.animationName(e))},o.prototype.cachedAnimationName=function(e){return this.animationNameCache.get(e)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var e;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;t<n;t++)e=i[t],e&&(this.isVisible(e)?this.show(e):o.push(e));return o}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},o.prototype.offsetTop=function(e){for(var t;void 0===e.offsetTop;)e=e.parentNode;for(t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},o.prototype.isVisible=function(e){var t,n,i,o,r;return n=e.getAttribute("data-wow-offset")||this.config.offset,r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,o=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(e),t=i+e.clientHeight,i<=o&&t>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new t},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this),!function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):this[e]=t()}("bowser",function(){function e(e){function t(t){var n=e.match(t);return n&&n.length>1&&n[1]||""}function n(t){var n=e.match(t);return n&&n.length>1&&n[2]||""}var i,o=t(/(ipod|iphone|ipad)/i).toLowerCase(),r=/like android/i.test(e),a=!r&&/android/i.test(e),l=/nexus\s*[0-6]\s*/i.test(e),d=!l&&/nexus\s*[0-9]+/i.test(e),u=/CrOS/.test(e),c=/silk/i.test(e),h=/sailfish/i.test(e),m=/tizen/i.test(e),p=/(web|hpw)os/i.test(e),f=/windows phone/i.test(e),v=!f&&/windows/i.test(e),y=!o&&!c&&/macintosh/i.test(e),w=!a&&!h&&!m&&!p&&/linux/i.test(e),b=t(/edge\/(\d+(\.\d+)?)/i),g=t(/version\/(\d+(\.\d+)?)/i),k=/tablet/i.test(e),x=!k&&/[^-]mobi/i.test(e),S=/xbox/i.test(e);/opera|opr|opios/i.test(e)?i={name:"Opera",opera:s,version:g||t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(e)?i={name:"Opera Coast",coast:s,version:g||t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(e)?i={name:"Yandex Browser",yandexbrowser:s,version:g||t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(e)?i={name:"UC Browser",ucbrowser:s,version:t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(e)?i={name:"Maxthon",maxthon:s,version:t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(e)?i={name:"Epiphany",epiphany:s,version:t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(e)?i={name:"Puffin",puffin:s,version:t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(e)?i={name:"Sleipnir",sleipnir:s,version:t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(e)?i={name:"K-Meleon",kMeleon:s,version:t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:f?(i={name:"Windows Phone",windowsphone:s},b?(i.msedge=s,i.version=b):(i.msie=s,i.version=t(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(e)?i={name:"Internet Explorer",msie:s,version:t(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:u?i={name:"Chrome",chromeos:s,chromeBook:s,chrome:s,version:t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(e)?i={name:"Microsoft Edge",msedge:s,version:b}:/vivaldi/i.test(e)?i={name:"Vivaldi",vivaldi:s,version:t(/vivaldi\/(\d+(\.\d+)?)/i)||g}:h?i={name:"Sailfish",sailfish:s,version:t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(e)?i={name:"SeaMonkey",seamonkey:s,version:t(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(e)?(i={name:"Firefox",firefox:s,version:t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)&&(i.firefoxos=s)):c?i={name:"Amazon Silk",silk:s,version:t(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(e)?i={name:"PhantomJS",phantom:s,version:t(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(e)?i={name:"SlimerJS",slimer:s,version:t(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)?i={name:"BlackBerry",blackberry:s,version:g||t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:p?(i={name:"WebOS",webos:s,version:g||t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(e)&&(i.touchpad=s)):/bada/i.test(e)?i={name:"Bada",bada:s,version:t(/dolfin\/(\d+(\.\d+)?)/i)}:m?i={name:"Tizen",tizen:s,version:t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||g}:/qupzilla/i.test(e)?i={name:"QupZilla",qupzilla:s,version:t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||g}:/chromium/i.test(e)?i={name:"Chromium",chromium:s,version:t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||g}:/chrome|crios|crmo/i.test(e)?i={name:"Chrome",chrome:s,version:t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:a?i={name:"Android",version:g}:/safari|applewebkit/i.test(e)?(i={name:"Safari",safari:s},g&&(i.version=g)):o?(i={name:"iphone"==o?"iPhone":"ipad"==o?"iPad":"iPod"},g&&(i.version=g)):i=/googlebot/i.test(e)?{name:"Googlebot",googlebot:s,version:t(/googlebot\/(\d+(\.\d+))/i)||g}:{name:t(/^(.*)\/(.*) /),version:n(/^(.*)\/(.*) /)},!i.msedge&&/(apple)?webkit/i.test(e)?(/(apple)?webkit\/537\.36/i.test(e)?(i.name=i.name||"Blink",i.blink=s):(i.name=i.name||"Webkit",i.webkit=s),!i.version&&g&&(i.version=g)):!i.opera&&/gecko\//i.test(e)&&(i.name=i.name||"Gecko",i.gecko=s,i.version=i.version||t(/gecko\/(\d+(\.\d+)?)/i)),i.msedge||!a&&!i.silk?o?(i[o]=s,i.ios=s):y?i.mac=s:S?i.xbox=s:v?i.windows=s:w&&(i.linux=s):i.android=s;var E="";i.windowsphone?E=t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):o?(E=t(/os (\d+([_\s]\d+)*) like mac os x/i),E=E.replace(/[_\s]/g,".")):a?E=t(/android[ \/-](\d+(\.\d+)*)/i):i.webos?E=t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):i.blackberry?E=t(/rim\stablet\sos\s(\d+(\.\d+)*)/i):i.bada?E=t(/bada\/(\d+(\.\d+)*)/i):i.tizen&&(E=t(/tizen[\/\s](\d+(\.\d+)*)/i)),E&&(i.osversion=E);var C=E.split(".")[0];return k||d||"ipad"==o||a&&(3==C||C>=4&&!x)||i.silk?i.tablet=s:(x||"iphone"==o||"ipod"==o||a||l||i.blackberry||i.webos||i.bada)&&(i.mobile=s),i.msedge||i.msie&&i.version>=10||i.yandexbrowser&&i.version>=15||i.vivaldi&&i.version>=1||i.chrome&&i.version>=20||i.firefox&&i.version>=20||i.safari&&i.version>=6||i.opera&&i.version>=10||i.ios&&i.osversion&&i.osversion.split(".")[0]>=6||i.blackberry&&i.version>=10.1||i.chromium&&i.version>=20?i.a=s:i.msie&&i.version<10||i.chrome&&i.version<20||i.firefox&&i.version<20||i.safari&&i.version<6||i.opera&&i.version<10||i.ios&&i.osversion&&i.osversion.split(".")[0]<6||i.chromium&&i.version<20?i.c=s:i.x=s,i}function t(e){return e.split(".").length}function n(e,t){var n,i=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n++)i=t(e[n]);return i}function i(e){for(var i=Math.max(t(e[0]),t(e[1])),o=n(e,function(e){var o=i-t(e);return e+=new Array(o+1).join(".0"),n(e.split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});--i>=0;){if(o[0][i]>o[1][i])return 1;if(o[0][i]!==o[1][i])return-1;if(0===i)return 0}}function o(t,n,o){var r=a;"string"==typeof n&&(o=n,n=void 0),void 0===n&&(n=!1),o&&(r=e(o));var s=""+r.version;for(var l in t)if(t.hasOwnProperty(l)&&r[l])return i([s,t[l]])<0;return n}function r(e,t,n){return!o(e,t,n)}var s=!0,a=e("undefined"!=typeof navigator?navigator.userAgent:"");return a.test=function(e){for(var t=0;t<e.length;++t){var n=e[t];if("string"==typeof n&&n in a)return!0}return!1},a.isUnsupportedBrowser=o,a.compareVersions=i,a.check=r,a._detect=e,a});var pageHeader=document.querySelector(".page-header");bowser.mobile||bowser.tablet||!pageHeader||function(){var e=0,t=!1,n=document.querySelector(".page-header-bg"),i=document.querySelector(".page-header-content"),o=2,r=function(){var r=e/o;r<0&&(r=0),s(n,r),a(i,r),t=!1},s=function(e,t){var n="translate3d(0px,"+t+"px, 0px)";e.style["-webkit-transform"]=n,e.style["-moz-transform"]=n,e.style["-ms-transform"]=n,e.style["-o-transform"]=n,e.style.transform=n},a=function(e,t){var n=1-t/250;e.style.opacity=n},l=function(){t||(window.requestAnimationFrame(r),t=!0)},d=function(){e=window.scrollY||window.pageYOffset,l()};!function(){var e=0,t=function(){e||(e=1,u(),window.onscroll=d)};"complete"===document.readyState?setTimeout(t):(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1))}();var u=function(){var e,t,n;for(e=0,t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"],++n;window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var i,o,r;return i=(new Date).getTime(),r=Math.max(0,16-(i-e)),o=window.setTimeout(function(){t(i+r)},r),e=i+r,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}}.call(this),document.addEventListener("DOMContentLoaded",function(){bowser.msie||(new WOW).init();var e=new XMLHttpRequest;e.open("GET","portfolio.json"),e.setRequestHeader("Content-Type","application/json"),e.onload=function(){if(200===e.status){var t=JSON.parse(e.responseText),n=document.querySelector("#portfolio .holder");t.portfolio.forEach(function(e,t){var i=(t+1)/10,o=e.description;e.links&&(o+='<div class="links">',e.links.forEach(function(e){o+='<a href="'+e.url+'" class="btn"><span class="icon-'+e.type+'"></span> '+e.description+"</a>"}),o+="</div>");var r='<div class="row wow fadeInUp" data-wow-offset="20" data-wow-delay="'+i+'s"><div class="col-sm-4 col-sm-offset-1"><img src="img/portfolio/'+e.thumb+'" /></div><div class="col-sm-5"><h3>'+e.title+'</h3><div class="type">'+e.type+'</div><div class="content">'+o+"</div></div></div>";n.innerHTML+=r})}},e.send();var t=document.querySelector(".video"),n=document.querySelector(".github");t.offsetHeight>n.offsetHeight&&(n.style.minHeight=t.offsetHeight+"px")});