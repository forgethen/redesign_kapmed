!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).PerfectScrollbar=e()}(this,function(){"use strict";var t=Math.abs,e=Math.floor;function i(t){return getComputedStyle(t)}function r(t,e){for(var i in e){var r=e[i];"number"==typeof r&&(r+="px"),t.style[i]=r}return t}function n(t){var e=document.createElement("div");return e.className=t,e}function l(t,e){if(!Y)throw new Error("No element matching method supported");return Y.call(t,e)}function o(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function s(t,e){return Array.prototype.filter.call(t.children,function(t){return l(t,e)})}function a(t,e){var i=t.element.classList,r=X.state.scrolling(e);i.contains(r)?clearTimeout(w[e]):i.add(r)}function c(t,e){w[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(X.state.scrolling(e))},t.settings.scrollingThreshold)}function h(t,e){a(t,e),c(t,e)}function u(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function d(t,e,i,r,n){var l;if(void 0===r&&(r=!0),void 0===n&&(n=!1),"top"===e)l=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");l=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(t,e,i,r,n){var l=i[0],o=i[1],s=i[2],a=i[3],c=i[4],d=i[5];void 0===r&&(r=!0),void 0===n&&(n=!1);var f=t.element;t.reach[a]=null,1>f[s]&&(t.reach[a]="start"),f[s]>t[l]-t[o]-1&&(t.reach[a]="end"),e&&(f.dispatchEvent(u("ps-scroll-"+a)),0>e?f.dispatchEvent(u("ps-scroll-"+c)):0<e&&f.dispatchEvent(u("ps-scroll-"+d)),r&&h(t,a)),t.reach[a]&&(e||n)&&f.dispatchEvent(u("ps-"+a+"-reach-"+t.reach[a]))}(t,i,l,r,n)}function f(t){return parseInt(t,10)||0}function p(t){return l(t,"input,[contenteditable]")||l(t,"select,[contenteditable]")||l(t,"textarea,[contenteditable]")||l(t,"button,[contenteditable]")}function b(t){var i=Math.ceil,r=t.element,n=e(r.scrollTop),l=r.getBoundingClientRect();t.containerWidth=i(l.width),t.containerHeight=i(l.height),t.contentWidth=r.scrollWidth,t.contentHeight=r.scrollHeight,r.contains(t.scrollbarXRail)||(s(r,X.element.rail("x")).forEach(function(t){return o(t)}),r.appendChild(t.scrollbarXRail)),r.contains(t.scrollbarYRail)||(s(r,X.element.rail("y")).forEach(function(t){return o(t)}),r.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=g(t,f(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=f((t.negativeScrollAdjustment+r.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=g(t,f(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=f(n*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),v(r,t),t.scrollbarXActive?r.classList.add(X.state.active("x")):(r.classList.remove(X.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,r.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?r.classList.add(X.state.active("y")):(r.classList.remove(X.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,r.scrollTop=0)}function g(t,e){var i=Math.min,r=Math.max;return t.settings.minScrollbarLength&&(e=r(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=i(e,t.settings.maxScrollbarLength)),e}function v(t,i){var n={width:i.railXWidth},l=e(t.scrollTop);n.left=i.isRtl?i.negativeScrollAdjustment+t.scrollLeft+i.containerWidth-i.contentWidth:t.scrollLeft,i.isScrollbarXUsingBottom?n.bottom=i.scrollbarXBottom-l:n.top=i.scrollbarXTop+l,r(i.scrollbarXRail,n);var o={top:l,height:i.railYHeight};i.isScrollbarYUsingRight?i.isRtl?o.right=i.contentWidth-(i.negativeScrollAdjustment+t.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth-9:o.right=i.scrollbarYRight-t.scrollLeft:i.isRtl?o.left=i.negativeScrollAdjustment+t.scrollLeft+2*i.containerWidth-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth:o.left=i.scrollbarYLeft+t.scrollLeft,r(i.scrollbarYRail,o),r(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth}),r(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth})}function m(t,e){function i(e){e.touches&&e.touches[0]&&(e[s]=e.touches[0].pageY),v[f]=m+w*(e[s]-Y),a(t,p),b(t),e.stopPropagation(),e.preventDefault()}function r(){c(t,p),t[g].classList.remove(X.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",i)}function n(e,n){m=v[f],n&&e.touches&&(e[s]=e.touches[0].pageY),Y=e[s],w=(t[o]-t[l])/(t[h]-t[d]),n?t.event.bind(t.ownerDocument,"touchmove",i):(t.event.bind(t.ownerDocument,"mousemove",i),t.event.once(t.ownerDocument,"mouseup",r),e.preventDefault()),t[g].classList.add(X.state.clicking),e.stopPropagation()}var l=e[0],o=e[1],s=e[2],h=e[3],u=e[4],d=e[5],f=e[6],p=e[7],g=e[8],v=t.element,m=null,Y=null,w=null;t.event.bind(t[u],"mousedown",function(t){n(t)}),t.event.bind(t[u],"touchstart",function(t){n(t,!0)})}var Y="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),X={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},w={x:null,y:null},y=function(t){this.element=t,this.handlers={}},W={isEmpty:{configurable:!0}};y.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},y.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter(function(r){return!(!e||r===e)||(i.element.removeEventListener(t,r,!1),!1)})},y.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},W.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(y.prototype,W);var L=function(){this.eventElements=[]};L.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new y(t),this.eventElements.push(e)),e},L.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},L.prototype.unbind=function(t,e,i){var r=this.eventElement(t);r.unbind(e,i),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},L.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},L.prototype.once=function(t,e,i){var r=this.eventElement(t),n=function(t){r.unbind(e,n),i(t)};r.bind(e,n)};var R={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&0<window.navigator.maxTouchPoints||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},T={"click-rail":function(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,b(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,b(t),e.stopPropagation()})},"drag-thumb":function(t){m(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),m(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){var i=t.element,r=function(){return l(i,":hover")},n=function(){return l(t.scrollbarX,":focus")||l(t.scrollbarY,":focus")};t.event.bind(t.ownerDocument,"keydown",function(l){if(!(l.isDefaultPrevented&&l.isDefaultPrevented()||l.defaultPrevented)&&(r()||n())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if("IFRAME"===o.tagName)o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(p(o))return}var s=0,a=0;switch(l.which){case 37:s=l.metaKey?-t.contentWidth:l.altKey?-t.containerWidth:-30;break;case 38:a=l.metaKey?t.contentHeight:l.altKey?t.containerHeight:30;break;case 39:s=l.metaKey?t.contentWidth:l.altKey?t.containerWidth:30;break;case 40:a=l.metaKey?-t.contentHeight:l.altKey?-t.containerHeight:-30;break;case 32:a=l.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(i.scrollTop-=a,i.scrollLeft+=s,b(t),function(r,n){var l=e(i.scrollTop);if(0===r){if(!t.scrollbarYActive)return!1;if(0===l&&0<n||l>=t.contentHeight-t.containerHeight&&0>n)return!t.settings.wheelPropagation}var o=i.scrollLeft;if(0===n){if(!t.scrollbarXActive)return!1;if(0===o&&0>r||o>=t.contentWidth-t.containerWidth&&0<r)return!t.settings.wheelPropagation}return!0}(s,a)&&l.preventDefault())}})},wheel:function(r){function n(t,e,r){if(!R.isWebKit&&o.querySelector("select:focus"))return!0;if(!o.contains(t))return!1;for(var n=t;n&&n!==o;){if(n.classList.contains(X.element.consuming))return!0;var l=i(n);if(r&&l.overflowY.match(/(scroll|auto)/)){var s=n.scrollHeight-n.clientHeight;if(0<s&&(0<n.scrollTop&&0>r||n.scrollTop<s&&0<r))return!0}if(e&&l.overflowX.match(/(scroll|auto)/)){var a=n.scrollWidth-n.clientWidth;if(0<a&&(0<n.scrollLeft&&0>e||n.scrollLeft<a&&0<e))return!0}n=n.parentNode}return!1}function l(i){var l=function(t){var e=t.deltaX,i=-1*t.deltaY;return(void 0===e||void 0===i)&&(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!=e&&i!=i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}(i),s=l[0],a=l[1];if(!n(i.target,s,a)){var c=!1;r.settings.useBothWheelAxes?r.scrollbarYActive&&!r.scrollbarXActive?(a?o.scrollTop-=a*r.settings.wheelSpeed:o.scrollTop+=s*r.settings.wheelSpeed,c=!0):r.scrollbarXActive&&!r.scrollbarYActive&&(s?o.scrollLeft+=s*r.settings.wheelSpeed:o.scrollLeft-=a*r.settings.wheelSpeed,c=!0):(o.scrollTop-=a*r.settings.wheelSpeed,o.scrollLeft+=s*r.settings.wheelSpeed),b(r),(c=c||function(i,n){var l=e(o.scrollTop),s=0===o.scrollTop,a=l+o.offsetHeight===o.scrollHeight,c=0===o.scrollLeft,h=o.scrollLeft+o.offsetWidth===o.scrollWidth;return!(t(n)>t(i)?s||a:c||h)||!r.settings.wheelPropagation}(s,a))&&!i.ctrlKey&&(i.stopPropagation(),i.preventDefault())}}var o=r.element;void 0===window.onwheel?void 0!==window.onmousewheel&&r.event.bind(o,"mousewheel",l):r.event.bind(o,"wheel",l)},touch:function(r){function n(i,n){var l=e(d.scrollTop),o=d.scrollLeft,s=t(i),a=t(n);if(a>s){if(0>n&&l===r.contentHeight-r.containerHeight||0<n&&0===l)return 0===window.scrollY&&0<n&&R.isChrome}else if(s>a&&(0>i&&o===r.contentWidth-r.containerWidth||0<i&&0===o))return!0;return!0}function l(t,e){d.scrollTop-=e,d.scrollLeft-=t,b(r)}function o(t){return t.targetTouches?t.targetTouches[0]:t}function s(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function a(t){if(s(t)){var e=o(t);f.pageX=e.pageX,f.pageY=e.pageY,p=(new Date).getTime(),null!==v&&clearInterval(v)}}function c(t,e,r){if(!d.contains(t))return!1;for(var n=t;n&&n!==d;){if(n.classList.contains(X.element.consuming))return!0;var l=i(n);if(r&&l.overflowY.match(/(scroll|auto)/)){var o=n.scrollHeight-n.clientHeight;if(0<o&&(0<n.scrollTop&&0>r||n.scrollTop<o&&0<r))return!0}if(e&&l.overflowX.match(/(scroll|auto)/)){var s=n.scrollWidth-n.clientWidth;if(0<s&&(0<n.scrollLeft&&0>e||n.scrollLeft<s&&0<e))return!0}n=n.parentNode}return!1}function h(t){if(s(t)){var e=o(t),i={pageX:e.pageX,pageY:e.pageY},r=i.pageX-f.pageX,a=i.pageY-f.pageY;if(c(t.target,r,a))return;l(r,a),f=i;var h=(new Date).getTime(),u=h-p;0<u&&(g.x=r/u,g.y=a/u,p=h),n(r,a)&&t.preventDefault()}}function u(){r.settings.swipeEasing&&(clearInterval(v),v=setInterval(function(){return r.isInitialized?void clearInterval(v):g.x||g.y?.01>t(g.x)&&.01>t(g.y)?void clearInterval(v):(l(30*g.x,30*g.y),g.x*=.8,void(g.y*=.8)):void clearInterval(v)},10))}if(R.supportsTouch||R.supportsIePointer){var d=r.element,f={},p=0,g={},v=null;R.supportsTouch?(r.event.bind(d,"touchstart",a),r.event.bind(d,"touchmove",h),r.event.bind(d,"touchend",u)):R.supportsIePointer&&(window.PointerEvent?(r.event.bind(d,"pointerdown",a),r.event.bind(d,"pointermove",h),r.event.bind(d,"pointerup",u)):window.MSPointerEvent&&(r.event.bind(d,"MSPointerDown",a),r.event.bind(d,"MSPointerMove",h),r.event.bind(d,"MSPointerUp",u)))}}},H=function(t,l){var o=this;if(void 0===l&&(l={}),"string"==typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var s in this.element=t,t.classList.add(X.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},l)this.settings[s]=l[s];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var a=function(){return t.classList.add(X.state.focus)},c=function(){return t.classList.remove(X.state.focus)};this.isRtl="rtl"===i(t).direction,!0===this.isRtl&&t.classList.add(X.rtl),this.isNegativeScroll=function(){var e,i=t.scrollLeft;return t.scrollLeft=-1,e=0>t.scrollLeft,t.scrollLeft=i,e}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new L,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=n(X.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=n(X.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",a),this.event.bind(this.scrollbarX,"blur",c),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var h=i(this.scrollbarXRail);this.scrollbarXBottom=parseInt(h.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=f(h.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=f(h.borderLeftWidth)+f(h.borderRightWidth),r(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=f(h.marginLeft)+f(h.marginRight),r(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=n(X.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=n(X.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",a),this.event.bind(this.scrollbarY,"blur",c),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var u=i(this.scrollbarYRail);this.scrollbarYRight=parseInt(u.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=f(u.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(t){var e=i(t);return f(e.width)+f(e.paddingLeft)+f(e.paddingRight)+f(e.borderLeftWidth)+f(e.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=f(u.borderTopWidth)+f(u.borderBottomWidth),r(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=f(u.marginTop)+f(u.marginBottom),r(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:0>=t.scrollLeft?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:0>=t.scrollTop?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(t){return T[t](o)}),this.lastScrollTop=e(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",function(t){return o.onScroll(t)}),b(this)};return H.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,r(this.scrollbarXRail,{display:"block"}),r(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=f(i(this.scrollbarXRail).marginLeft)+f(i(this.scrollbarXRail).marginRight),this.railYMarginHeight=f(i(this.scrollbarYRail).marginTop)+f(i(this.scrollbarYRail).marginBottom),r(this.scrollbarXRail,{display:"none"}),r(this.scrollbarYRail,{display:"none"}),b(this),d(this,"top",0,!1,!0),d(this,"left",0,!1,!0),r(this.scrollbarXRail,{display:""}),r(this.scrollbarYRail,{display:""}))},H.prototype.onScroll=function(){this.isAlive&&(b(this),d(this,"top",this.element.scrollTop-this.lastScrollTop),d(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=e(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},H.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),o(this.scrollbarX),o(this.scrollbarY),o(this.scrollbarXRail),o(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},H.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")},H});
//# sourceMappingURL=perfect-scrollbar.min-min.js.map
