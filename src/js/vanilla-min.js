const openActivityHandler=e=>{e.forEach(e=>{e.onclick=(()=>{e.closest(".block").classList.toggle("opened")})})},openSupportLevel=e=>{e.closest(".support-level").classList.toggle("closed")},showMeMore=e=>{e.closest(".activity-wrap").classList.toggle("opened")},openSitemap=()=>{document.querySelector(".sitemap").classList.toggle("hidden")},switchSearch=()=>{document.querySelector("body").classList.toggle("with-search")},switchshowMore=e=>{e.closest(".show_more").classList.toggle("show_true")},checkReady=()=>{const e=document.querySelector("body");let t;t=setInterval(()=>{if("complete"===document.readyState){clearInterval(t),e.removeAttribute("data-preloader");let s=document.querySelector(".preloader");setTimeout(()=>{null!==s&&s.remove()},500)}},100)},staticHeader=()=>{const e=document.querySelector("header");if(!isNaN(e))return!1;const t=e.querySelector(".top-container").offsetHeight;window.scrollY>=t?(e.classList.add("static"),e.style.top=`-${t}px`):(e.classList.remove("static"),e.style.top="0px")},payload=()=>{const e=document.querySelector("body");if(e.hasAttribute("data-preloader")){let t=document.createElement("div");t.classList.add("preloader"),t.innerHTML='<div class="blue"><img src="/local/templates/.default/img/static/blue.svg"></div><img class="red" src="/local/templates/.default/img/static/red.svg"><div class="name"><img src="/local/templates/.default/img/static/text.svg"></div>',e.appendChild(t),setTimeout(checkReady,3200)}const t=document.querySelectorAll(".activity-action");t.length&&openActivityHandler(t),document.addEventListener("scroll",e=>{staticHeader()}),staticHeader()};document.addEventListener("DOMContentLoaded",payload);
//# sourceMappingURL=vanilla-min.js.map
