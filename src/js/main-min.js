"use strict";$(document).ready(function(){$("#footer").outerHeight();function s(){if($(".content_list ul a").length<=1)return!1;$(".content_list ul a").each(function(){var s=$(this).attr("href"),i=$(s);i.position().top<=$(document).scrollTop()&&i.position().top+i.outerHeight()>$(document).scrollTop()?($(".content_list ul a.active").removeClass("active"),$(this).addClass("active")):$(this).removeClass("active")})}function i(){$(".dropdown").each(function(){$(this).removeClass("active"),$(this).find("ul").removeClass("show"),$(this).find("i").removeClass("active")})}function t(){$(".mapBlock .mapSection .mapList").each(function(){$(window).width()>=640?$(this).mCustomScrollbar({theme:"MapListThm"}):$(this).mCustomScrollbar("destroy")})}$(".content_list ul:first-child").addClass("active"),$(document).on("scroll",s),$(".content_list ul a").click(function(){$(document).off("scroll"),$(".content_list ul .active").removeClass("active"),$(this).addClass("active");var i=$(this).attr("href"),t=$(i);$("html, body").animate({scrollTop:t.offset().top},250,function(){window.location.hash=i,$(document).on("scroll",s)})}),$(".custom-select a").click(function(){$(this).parents(".custom-select").find("i").addClass("active"),$(this).parents(".custom-select").find(".options").show(),$(this).parents(".custom-select").find(".options-block").addClass("show")}),$(".custom-select .options li").click(function(){var s=$(this).text();$(this).parents(".custom-select").find(".options").hide(),$(this).parents(".custom-select").find(".options .red").removeClass("red"),$(this).parents(".custom-select").find("a span").text(s),$(this).parents(".custom-select").find("a i").removeClass("active"),$(this).parents(".custom-select").find(".options-block").removeClass("show"),$(this).addClass("red")}),$("input,textarea").focus(function(){$(this).data("placeholder",$(this).attr("placeholder")),$(this).attr("placeholder","")}),$("input,textarea").blur(function(){$(this).attr("placeholder",$(this).data("placeholder"))}),$('input[type="tel"]').inputmask("+7 (999) 999 99 99"),$(".date input").inputmask("99.99.9999"),$(".dropdown ul").each(function(){var s=$(this).parents(".dropdown").find("li:eq(0)").height(),i=$(this).parents(".dropdown").find("li:eq(1)").height();$(this).parents(".dropdown").find("ul").css("max-height",s+i+36+"px"),$(this).parents(".dropdown").find("ul").removeClass("show")}),$(".doc .see").click(function(){$(this).toggleClass("active"),$(this).parents(".doc").find(".answer").toggleClass("show")}),$(".dropdown input").click(function(s){$(this).parents(".dropdown").hasClass("active")?($(this).parents(".dropdown").removeClass("active"),$(this).parents(".dropdown").find("i").toggleClass("active"),$(this).parents(".dropdown").find("ul").toggleClass("show"),s.stopPropagation()):(i(),$(this).parents(".dropdown").addClass("active"),$(this).parents(".dropdown").find("i").toggleClass("active"),$(this).parents(".dropdown").find("ul").toggleClass("show"),s.stopPropagation())}),$(".dropdown ul li").click(function(){var s=$(this).html();$(this).parents(".dropdown").removeClass("active"),$(this).parents("ul").removeClass("show"),$(this).parents(".dropdown").find("i").removeClass("active"),$(this).parents(".dropdown").find("input").val(s)}),$("ul.content .check, .accordion-menu .check").click(function(){$(this).parents("li").toggleClass("show")}),$(".mapPopUp .list li").click(function(){$(this).html();$(".mapPopUp .list").find(".select").removeClass("select"),$(this).addClass("select")}),$(".mapPopUp .mapSection .mapList").mCustomScrollbar({theme:"MapListThm"}),t(),$(window).resize(function(){t()}),$(".custom-select .options-block").each(function(){$(this).addClass("show"),$(".custom-select .options-block .options").show();var s=$(".custom-select .options-block .options").find("li:eq(0)").height();$(this).css("max-height",7*s+70+64+"px"),$(this).removeClass("show"),$(".custom-select .options-block .options").hide()}),$(".custom-select .options-block").mCustomScrollbar({theme:"CustomSelectOptionsThm"}),$(".dropdown ul").each(function(){$(this).addClass("active"),$(".dropdown ul").addClass("show");var s=$(".dropdown ul").find("li:eq(0)").height(),i=$(".dropdown ul").find("li:eq(1)").height();$(this).css("max-height",s+i+"px"),$(this).removeClass("active"),$(".dropdown ul").removeClass("show")}),$(".dropdown ul").mCustomScrollbar({theme:"DropdownThm"}),$(".citiesBlock").mCustomScrollbar({theme:"citiesBlockThm"}),$('.search input[type="search"]').hideseek({nodata:"Поиск не дал результатов",navigation:!0}),$(".mapBlock .mapSection .mapList .list__item:lt(3)").show().addClass("show"),$(".mapBlock .seeMore").click(function(){var s=$(".mapBlock .mapSection .mapList .list__item.show").length,i=$(".mapBlock .mapSection .mapList .list__item").length,t=s;$(".mapBlock .mapSection .mapList .list__item").eq(t).show().addClass("show"),s==i&&($(this).find("a").attr("href","#"),$(this).find("a").text("Просмотреть все пункты выдачи"))}),$(".headerMenu .submenu").mCustomScrollbar({theme:"SubmenuScrollThm"}),$(".openShedule a").click(function(){$(this).closest(".openShedule").toggleClass("active"),$(this).parents(".sheduleBlock").find(".shedule__list").toggleClass("show")}),$("footer .partition").each(function(){if(!($(this).find("li").length>1))return!1;$(this).find("li:eq(0)").append('<i class="ri-arrow-down-s-line"></i>')}),$("footer .partition").find("li:eq(0)").click(function(s){$(window).width()<=980?$(this).parents("ul").hasClass("autoHeight")?$(this).parents("ul").removeClass("autoHeight"):($("footer .partition").removeClass("autoHeight"),$(this).parent("ul").toggleClass("autoHeight")):$(this).parent("ul").removeClass("autoHeight")}),$(document).on("click",function(s){$(s.target).closest(".parent_block").length||$(".toggled_block").hide(),$(s.target).closest(".dropdown").length||i(),$(s.target).closest(".custom-select").length||($(".options-block").removeClass("show"),$(".options").hide()),$(s.target).closest("footer .partition").length||$("footer .partition").removeClass("autoHeight"),$(s.target).closest(".fixbtn .open").length||($(".fixbtn").removeClass("active"),$("body").removeClass("widgetOpened")),s.stopPropagation()}),$(".burger").on("click",function(s){$(this).toggleClass("active"),$(".headerMenu").toggleClass("show"),$(".mobileBottom").toggleClass("show"),s.stopPropagation()}),$(".topSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:1,slideToScroll:1,speed:875,arrows:!0,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!0,responsive:[{breakpoint:600,settings:{arrows:!1}}]}),$(".dnk_slider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:1,slideToScroll:1,speed:250,arrows:!0,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!0,responsive:[{breakpoint:681,settings:{dots:!1}}]}),$(".clientHistorySlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:2,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:681,settings:{slidesToShow:1}}]}),$(".videoSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:2,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:681,settings:{slidesToShow:1}}]}),$(".literatePatientSchoolSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:3,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:1013,settings:{slidesToShow:2}},{breakpoint:681,settings:{slidesToShow:1}}]}),$(".partnersSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:4,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:1013,settings:{slidesToShow:3}},{breakpoint:701,settings:{slidesToShow:2}},{breakpoint:401,settings:{slidesToShow:1}}]}),$(".slider-2").slick({dots:!0,prevArrow:'<div class="slick-prev prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="slick-next next"><i class="ri-arrow-right-s-line"></i></div>',responsive:[{breakpoint:981,settings:{dots:!1}}]}),$(".custom-button, a.tag").click(function(){$(this).toggleClass("active")}),$(".sliderNav .prev").click(function(){$(this).parents("section").find(".slick-slider").slick("slickPrev")}),$(".sliderNav .next").click(function(){$(this).parents("section").find(".slick-slider").slick("slickNext")}),$(".tabs .tab").click(function(){$(this).parents(".tabs").find(".active").removeClass("active"),$(this).addClass("active")}),$(".direction_of_activity-list__item span").append('<i class="ri-arrow-right-s-line"></i>'),$(".stars.static").each(function(){$(this).hasClass("star-0")&&$(this).append('<i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-10")&&$(this).append('<i class="ri-star-half-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-20")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-30")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-40")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-50")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i></i><i class="ri-star-line"></i>'),$(this).hasClass("star-60")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-70")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-80")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-90")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>'),$(this).hasClass("star-100")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>')}),$(".review a").click(function(){$(this).parents(".review").toggleClass("show")}),$(".stars a").on("mouseover",function(){var s=parseInt($(this).data("value"),10);$(this).parent().children("a.star").each(function(i){i<s?$(this).addClass("hover"):$(this).removeClass("hover")})}).on("mouseout",function(){$(this).parent().children("a.star").each(function(s){$(this).removeClass("hover")})}),$(".stars a").on("click",function(){var s=parseInt($(this).data("value"),10),i=$(this).parent().children("a.star"),t=0;for(t=0;t<i.length;t++)$(i[t]).removeClass("selected");for(t=0;t<s;t++)$(i[t]).addClass("selected");var e="";parseInt($(".stars a.selected").last().data("value"),10)>3?(e="Всё AllRight!",$(".success-box .btn").removeClass("show"),$(".success-box .text-message").hide()):(e="Недовольны диспансеризацией? Оставьте жалобу, чтобы мы смогли разобраться в сложившейся ситуцаии и помочь вам.",$(".success-box .btn").addClass("show"),$(".success-box .text-message").show()),function(s){$(".success-box").fadeIn(200),$(".success-box .text-message").html(""+s)}(e)}),$(".swipeTopDown").on("click",function(){$(this).parents(".list").toggleClass("active")}),$(".FilterSearch .btn-filter").click(function(){$(this).toggleClass("active"),$(".dropDownFilter.v2").toggleClass("show")}),$(".fixbtn .open").click(function(){$(this).parents(".fixbtn").addClass("active"),$("body").addClass("widgetOpened")}),$(".fixbtn .close").click(function(){$(this).parents(".fixbtn").removeClass("active"),$("body").removeClass("widgetOpened")}),$(".custom-checkbox").click(function(){$(this).find("input[type=checkbox]").each(function(){$("input[type=checkbox]").is(":checked")?$(this).attr("checked","checked"):$(this).removeAttr("checked")})}),$(".cool").on("click",function(){$(this).toggleClass("cool-click"),$(".bad").removeClass("bad-click")}),$(".bad").on("click",function(){$(this).toggleClass("bad-click"),$(".cool").removeClass("cool-click")})});
//# sourceMappingURL=main-min.js.map
