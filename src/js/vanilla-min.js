const openActivityHandler=e=>{e.forEach(e=>{e.onclick=(()=>{e.closest(".block").classList.toggle("opened")})})},switchSearch=()=>{document.querySelector("body").classList.toggle("with-search")},payload=()=>{const e=document.querySelectorAll(".activity-action");e.length&&openActivityHandler(e)};document.addEventListener("DOMContentLoaded",payload);
//# sourceMappingURL=vanilla-min.js.map
