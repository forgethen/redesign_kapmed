"use strict";$(document).ready(function(){var s=".content_list ul";$("#footer").outerHeight();function i(){var i=$(document).scrollTop();if($(s+" a").length<=1)return!1;$(s+" a").each(function(){var e=$(this).attr("href");try{$(e)}catch{return!1}var t=$(e);t.position().top<=i&&t.position().top+t.outerHeight()>i?($(s+" a.active").removeClass("active"),$(this).addClass("active")):$(this).removeClass("active")})}function e(){$(".dropdown").each(function(){$(this).removeClass("active"),$(this).find("ul").removeClass("show"),$(this).find("i").removeClass("active")})}function t(){$("<button>",{html:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="#939393" d="M7.004 5.59l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95L.64 11.954l4.95-4.95-4.95-4.95L2.054.64z"/></svg>',class:"fancybox-button fancybox-close-small CloseFancybox",title:"close"}).appendTo(".fancybox-content").attr("data-fancybox-close","")}$(".content_list ul:first-child").addClass("active"),$(document).on("scroll",i),$(".content_list ul a").click(function(){$(document).off("scroll"),$(s+" .active").removeClass("active"),$(this).addClass("active");var e=$(this).attr("href"),t=$(e);$("html, body").animate({scrollTop:t.offset().top},250,function(){window.location.hash=e,$(document).on("scroll",i)})}),$(".custom-select a").click(function(){$(this).parents(".custom-select").find("i").addClass("active"),$(this).parents(".custom-select").find(".options").fadeIn(),$(this).parents(".custom-select").find(".options-block").addClass("show")}),$(".custom-select .options li").click(function(){var s=$(this).text();$(this).parents(".custom-select").find(".options").fadeOut(),$(this).parents(".custom-select").find(".options .red").removeClass("red"),$(this).parents(".custom-select").find("a span").text(s),$(this).parents(".custom-select").find("a i").removeClass("active"),$(this).parents(".custom-select").find(".options-block").removeClass("show"),$(this).addClass("red")}),$("input,textarea").focus(function(){$(this).data("placeholder",$(this).attr("placeholder")),$(this).attr("placeholder","")}),$("input,textarea").blur(function(){$(this).attr("placeholder",$(this).data("placeholder"))}),$('input[type="tel"]').inputmask("+7 (999) 999 99 99"),$(".date input").inputmask("99.99.9999"),$(".dropdown ul").each(function(){var s=$(this).parents(".dropdown").find("li:eq(0)").height(),i=$(this).parents(".dropdown").find("li:eq(1)").height();$(this).parents(".dropdown").find("ul").css("max-height",s+i+36+"px"),$(this).parents(".dropdown").find("ul").removeClass("show")}),$(".dropdown input").click(function(s){$(this).parents(".dropdown").hasClass("active")?($(this).parents(".dropdown").removeClass("active"),$(this).parents(".dropdown").find("i").toggleClass("active"),$(this).parents(".dropdown").find("ul").toggleClass("show"),s.stopPropagation()):(e(),$(this).parents(".dropdown").addClass("active"),$(this).parents(".dropdown").find("i").toggleClass("active"),$(this).parents(".dropdown").find("ul").toggleClass("show"),s.stopPropagation())}),$(".dropdown ul li").click(function(){var s=$(this).html();$(this).parents(".dropdown").removeClass("active"),$(this).parents("ul").removeClass("show"),$(this).parents(".dropdown").find("i").removeClass("active"),$(this).parents(".dropdown").find("input").val(s)}),$("ul.content .check, .accordion-menu .check").click(function(){$(this).parents("li").toggleClass("show")}),$(".mapPopUp .list li").click(function(){$(this).html();$(".mapPopUp .list").find(".select").removeClass("select"),$(this).addClass("select")});const a=document.querySelector("body");$("[data-fancybox]").click(function(){$.fancybox.close(),$('[data-action="clear"]').each(function(){$(this).click()}),$(this).attr("data-touch","false"),$(this).attr("data-modal","true"),$(".CloseFancybox").remove(),setTimeout(t,100),setTimeout(function(){$(".CloseFancybox").click(function(s){s.preventDefault(),s.stopPropagation(),$.fancybox.close(),console.log("gogog"),bodyScrollLock.enableBodyScroll(a)})},100),bodyScrollLock.disableBodyScroll(a)}),$(".mapPopUp .mapSection .mapList").mCustomScrollbar({theme:"MapListThm"}),$(".mapBlock .mapSection .mapList").mCustomScrollbar({theme:"MapListThm"}),$(".citiesBlock").mCustomScrollbar({theme:"citiesBlockThm"}),$('.search input[type="search"]').hideseek({nodata:"Поиск не дал результатов",navigation:!0}),$(".mapBlock .mapSection .mapList .list__item:lt(3)").show().addClass("show"),$(".mapBlock .seeMore").click(function(){var s=$(".mapBlock .mapSection .mapList .list__item.show").length;$(".mapBlock .mapSection .mapList .list__item").eq(s).show().addClass("show")}),$(".headerMenu .submenu").mCustomScrollbar({theme:"SubmenuScrollThm"}),$(".openShedule a").click(function(){$(this).closest(".openShedule").toggleClass("active"),$(this).parents(".sheduleBlock").find(".shedule__list").toggleClass("show")}),$("footer .partition").find("li:eq(0)").append('<i class="ri-arrow-down-s-line"></i>'),$("footer .partition").find("li:eq(0)").click(function(s){$(this).hasClass("autoHeight")?($(this).removeClass("autoHeight"),s.stopPropagation()):$(this).parent("ul").toggleClass("autoHeight")}),$(document).on("click",function(s){$(s.target).closest(".parent_block").length||$(".toggled_block").hide(),$(s.target).closest(".dropdown").length||e(),$(s.target).closest(".custom-select").length||($(".options-block").removeClass("show"),$(".options").hide()),$(s.target).closest("footer .partition").length||$("footer .partition").removeClass("autoHeight"),$(s.target).closest(".headerMenu li").length||($(".headerMenu .submenu").fadeOut(),$(".headerMenu li").removeClass("active")),$(s.target).closest(".burger").length||($(".headerMenu").removeClass("show"),$(".mobileBottom").removeClass("show"),$(".burger").removeClass("active")),s.stopPropagation()}),$(".burger :eq(0)").on("click",function(s){$(".burger").addClass("active"),$(".headerMenu").addClass("show"),$(".mobileBottom").addClass("show"),$(window).width()>=640&&$(".headerMenu li :eq(0)").click(),s.stopPropagation()}),$(".burger :eq(1)").on("click",function(s){$(".burger").removeClass("active"),$(".headerMenu").removeClass("show"),$(".mobileBottom").removeClass("show"),s.stopPropagation()}),$(".headerMenu li").click(function(s){$(".burger").addClass("active"),$(".headerMenu").addClass("show"),$(".headerMenu li").removeClass("active"),$(this).toggleClass("active"),$(".headerMenu .submenu").hide(),$(this).find(".submenu").fadeIn(),s.stopPropagation()}),$(".topSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:1,slideToScroll:1,speed:250,arrows:!0,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!0,responsive:[{breakpoint:600,settings:{arrows:!1}}]}),$(".dnk_slider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:1,slideToScroll:1,speed:250,arrows:!0,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!0,responsive:[{breakpoint:681,settings:{dots:!1}}]}),$(".clientHistorySlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:2,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:681,settings:{slidesToShow:1}}]}),$(".videoSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:2,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:681,settings:{slidesToShow:1}}]}),$(".literatePatientSchoolSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:3,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:1013,settings:{slidesToShow:2}},{breakpoint:681,settings:{slidesToShow:1}}]}),$(".partnersSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:4,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:1013,settings:{slidesToShow:3}},{breakpoint:701,settings:{slidesToShow:2}},{breakpoint:401,settings:{slidesToShow:1}}]}),$(".slider-2").slick({dots:!0}),$(".sliderNav .prev").click(function(){$(this).parents("section").find(".slick-slider").slick("slickPrev")}),$(".sliderNav .next").click(function(){$(this).parents("section").find(".slick-slider").slick("slickNext")}),$(".tabs .tab").click(function(){$(this).parents(".tabs").find(".active").removeClass("active"),$(this).addClass("active")}),$(".direction_of_activity-list__item span").append('<i class="ri-arrow-right-s-line"></i>'),$(".stars.static").each(function(){$(this).hasClass("star-0")&&$(this).append('<i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-10")&&$(this).append('<i class="ri-star-half-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-20")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-30")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-40")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-50")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i></i><i class="ri-star-line"></i>'),$(this).hasClass("star-60")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-70")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-80")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-90")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>'),$(this).hasClass("star-100")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>')}),$(".review a").click(function(){$(this).parents(".review").toggleClass("show")}),$(".stars a").on("mouseover",function(){var s=parseInt($(this).data("value"),10);$(this).parent().children("a.star").each(function(i){i<s?$(this).addClass("hover"):$(this).removeClass("hover")})}).on("mouseout",function(){$(this).parent().children("a.star").each(function(s){$(this).removeClass("hover")})}),$(".stars a").on("click",function(){var s=parseInt($(this).data("value"),10),i=$(this).parent().children("a.star"),e=0;for(e=0;e<i.length;e++)$(i[e]).removeClass("selected");for(e=0;e<s;e++)$(i[e]).addClass("selected");var t="";parseInt($(".stars a.selected").last().data("value"),10)>3?(t="Всё AllRight!",$(".success-box .btn").removeClass("show"),$(".success-box .text-message").hide()):(t="Недовольны диспансеризацией? Оставьте жалобу, чтобы мы смогли разобраться в сложившейся ситуцаии и помочь вам.",$(".success-box .btn").addClass("show"),$(".success-box .text-message").show()),function(s){$(".success-box").fadeIn(200),$(".success-box .text-message").html(""+s)}(t)}),$(".swipeTopDown").on("click",function(){$(this).parents(".list").toggleClass("active")}),$("#TABS").scrollabletab()});
//# sourceMappingURL=main-min.js.map
