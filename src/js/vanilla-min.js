const openActivityHandler=t=>{t.forEach(t=>{t.onclick=(()=>{t.closest(".block").classList.toggle("opened")})})},payload=()=>{const t=document.querySelectorAll(".activity-action");t.length&&openActivityHandler(t)};document.addEventListener("DOMContentLoaded",payload);
//# sourceMappingURL=vanilla-min.js.map
