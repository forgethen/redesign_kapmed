"use strict";$(document).ready(function(){$("#footer").outerHeight();var s=!1;function t(){if($(".content_list ul a").length<=1)return!1;$(".content_list ul a").each(function(){var s=$(this).attr("href");if(-1===s.indexOf("#"))return!1;var t=$(s);t.position().top<=$(document).scrollTop()&&t.position().top+t.outerHeight()>$(document).scrollTop()?($(".content_list ul a.active").removeClass("active"),$(this).addClass("active")):$(this).removeClass("active")})}function e(){$(".dropdown").each(function(){$(this).removeClass("active"),$(this).find("ul").removeClass("show"),$(this).find("i").removeClass("active")})}function i(){$(".mapBlock .mapSection .mapList").each(function(){$(window).width()>=640?$(this).mCustomScrollbar({theme:"MapListThm"}):$(this).mCustomScrollbar("destroy")}),$(".content_list ul").each(function(){if($(window).width()>=1080){var s=$("header .fromHeaderMenu").height();$(this).css("top",s+12+"px")}else{s=$(".top-container").height();$(this).css("top",s+12+"px")}}),$(".headerMenu .submenu").each(function(){if($(window).width()>=1081)$(".fromHeaderMenu").mCustomScrollbar("destroy"),setTimeout(function(){var s=$(".headerMenu").outerWidth();$(".headerMenu .submenu .container").css("max-width",s+"px")},200);else{$(this).find(".container").css("max-width","100%");var s=$("header .top-container").height(),t=$(window).height();$(".fromHeaderMenu").css("max-height",t-s+"px"),$(".fromHeaderMenu").mCustomScrollbar({theme:"SubmenuScrollThm"})}}),$(".headerMenu.v2").each(function(){$(window).width()>=1079?($(".headerMenu li.active").removeClass("active"),$(".headerMenu .submenu").slideUp(),$(".headerMenu > li").mouseover(function(){$(this).addClass("active"),$(this).find(".submenu").slideDown(200)}),$(".headerMenu > li").mouseleave(function(){$(this).removeClass("active"),$(this).find(".submenu").slideUp(200)})):($(".headerMenu li.active").removeClass("active"),$(".headerMenu .submenu").fadeOut(),$(".headerMenu > li").click(function(){$(this).hasClass(".active")?($(this).removeClass("active"),$(this).find(".submenu").fadeOut()):($(".headerMenu .submenu").fadeOut(),$(".headerMenu li.active").removeClass("active"),$(this).addClass("active"),$(this).find(".submenu").fadeIn())}))}),$(".top-container").each(function(){var s=$(this).height();$(window).width()<=1080?($(".allContent").css("padding-top",s+"px"),$("#citySelectPopUp.active").css("top",s+"px")):$(".allContent").removeAttr("style")})}$(".content_list ul:first-child").addClass("active"),$("a.slow").click(function(){var s=$(this).attr("href"),t=$(s).offset().top;return $("html,body").animate({scrollTop:t},750),!1}),$(".content_list ul a").each(function(){-1!==$(this).attr("href").indexOf("#")&&(s=!0)}),s&&$(".content_list ul a").each(function(){var s=$(this).attr("href");$(s).each(function(){var s=$(this).attr("id");$(this).length>0&&$('.content_list ul a[href="#'+s+'"]').addClass("dontRemove")}),$(this).not(".dontRemove").remove()}),$(document).on("scroll",t),$(".content_list ul a").click(function(){$(document).off("scroll"),$(".content_list ul .active").removeClass("active"),$(this).addClass("active");var s=$(this).attr("href"),e=$(s);if($(window).width()>=1080)var i=$("header .fromHeaderMenu").height()+16;else i=$(".top-container").height()+12;$("html, body").animate({scrollTop:e.offset().top-i},250,function(){window.location.hash=s,$(document).on("scroll",t)})}),$(".custom-select a").click(function(s){$(this).parents(".custom-select").find(".options-block").hasClass("show")?($(this).parents(".custom-select").find("i").removeClass("active"),$(this).parents(".custom-select").find(".options").hide(),$(this).parents(".custom-select").find(".options-block").removeClass("show"),s.stopPropagation()):($(".custom-select").each(function(){$(this).parents(".custom-select").find("i").removeClass("active"),$(this).parents(".custom-select").find(".options").hide(),$(this).parents(".custom-select").find(".options-block").removeClass("show")}),$(this).parents(".custom-select").find("i").addClass("active"),$(this).parents(".custom-select").find(".options").show(),$(this).parents(".custom-select").find(".options-block").addClass("show"),s.stopPropagation())}),$(".custom-select .options-block").each(function(){$(this).addClass("show"),$(this).find(".options").show();var s=$(this).find("li:eq(0)").height;isNaN(s)&&(s=$(this).find("li")[0].offsetHeight);var t=$(this).parents(".custom-select").find("a.red").position().left,e=$(this).find(".options li").length;e>3&&$(this).mCustomScrollbar({theme:"CustomSelectOptionsThm",callbacks:{onCreate:function(){e>=7?$(this).css("max-height",7*s+70+64+"px"):$(this).css("max-height",s*e+10*e+64+"px")}}}),$(this).css("left",t+"px"),$(this).removeClass("show"),$(this).find(".options").hide()}),$(".custom-select .options li").click(function(){var s=$(this).text();$(this).parents(".custom-select").find(".options").hide(),$(this).parents(".custom-select").find(".options .red").removeClass("red"),$(this).data("readonly")||$(this).parents(".custom-select").find("a span").text(s),$(this).parents(".custom-select").find("a i").removeClass("active"),$(this).parents(".custom-select").find(".options-block").removeClass("show"),$(this).addClass("red")}),$("input,textarea").focus(function(){$(this).data("placeholder",$(this).attr("placeholder")),$(this).attr("placeholder","")}),$("input,textarea").blur(function(){$(this).attr("placeholder",$(this).data("placeholder"))}),$('input[type="tel"]').inputmask("+7 (999) 999 99 99"),$(".date input").inputmask("99.99.9999"),$(".dropdown ul").each(function(){$(this).addClass("active"),$(".dropdown ul").addClass("show");var s=$(".dropdown ul").find("li:eq(0)").height,t=$(".dropdown ul").find("li:eq(1)").height;$(this).find("li").length>2&&$(this).mCustomScrollbar({theme:"DropdownThm",callbacks:{onCreate:function(){$(this).css("max-height",s+t+"px")}}}),$(this).removeClass("active"),$(".dropdown ul").removeClass("show")}),$(".doc .see").click(function(){$(this).toggleClass("active"),$(this).parents(".doc").find(".answer").toggleClass("show")}),$(".dropdown input").click(function(s){$(this).parents(".dropdown").hasClass("active")?($(this).parents(".dropdown").removeClass("active"),$(this).parents(".dropdown").find("i").toggleClass("active"),$(this).parents(".dropdown").find("ul").toggleClass("show"),s.stopPropagation()):(e(),$(this).parents(".dropdown").addClass("active"),$(this).parents(".dropdown").find("i").toggleClass("active"),$(this).parents(".dropdown").find("ul").toggleClass("show"),s.stopPropagation())}),$(".dropdown ul li").click(function(){var s=$(this).html();$(this).parents(".dropdown").removeClass("active"),$(this).parents("ul").removeClass("show"),$(this).parents(".dropdown").find("i").removeClass("active"),$(this).parents(".dropdown").find("input").val(s)}),$("ul.content .check, .accordion-menu .check").click(function(){$(this).parents("li").toggleClass("show")}),$(".content__item i").click(function(){$(this).parents("li").toggleClass("show")}),$(".mapPopUp .list li").click(function(){$(this).html();$(".mapPopUp .list").find(".select").removeClass("select"),$(this).addClass("select")}),$(".mapPopUp .mapSection .mapList").mCustomScrollbar({theme:"MapListThm"}),i(),$(".citiesBlock").mCustomScrollbar({theme:"citiesBlockThm"}),$('.search input[type="search"], .search input[type="text"]').hideseek({nodata:"Поиск не дал результатов",navigation:!0}),$(".mapBlock .mapSection .mapList .list__item:lt(3)").show().addClass("show"),$(".mapBlock .seeMore").click(function(){var s=$(".mapBlock .mapSection .mapList .list__item.show").length,t=$(".mapBlock .mapSection .mapList .list__item").length,e=s;$(".mapBlock .mapSection .mapList .list__item").eq(e).show().addClass("show"),s==t&&($(this).find("a").attr("href","#"),$(this).find("a").text("Просмотреть все пункты выдачи"))}),$(".openShedule a").click(function(){$(this).closest(".openShedule").toggleClass("active"),$(this).parents(".sheduleBlock").find(".shedule__list").toggleClass("show")}),$("footer .partition").each(function(){if(!($(this).find("li").length>1))return!1;$(this).find("li:eq(0)").append('<i class="ri-arrow-down-s-line"></i>')}),$("footer .partition").find("li:eq(0)").click(function(s){$(window).width()<=980?$(this).parents("ul").hasClass("autoHeight")?$(this).parents("ul").removeClass("autoHeight"):($("footer .partition").removeClass("autoHeight"),$(this).parent("ul").toggleClass("autoHeight")):$(this).parent("ul").removeClass("autoHeight")}),$(document).on("click",function(s){$(s.target).closest(".parent_block").length||$(".toggled_block").hide(),$(s.target).closest(".dropdown label").length||e(),$(s.target).closest(".custom-select a, .custom-select .options-block").length||($(".options-block").removeClass("show"),$(".options").hide()),$(s.target).closest("footer .partition").length||$("footer .partition").removeClass("autoHeight"),$(s.target).closest("a.city").length||$("#citySelectPopUp").hasClass("active")&&$("#citySelectPopUp").removeClass("active"),$(s.target).closest(".content__item i").length||$(this).removeClass("show"),$(s.target).closest(".fixbtn .open").length||($(".fixbtn").removeClass("active"),$("body").removeClass("widgetOpened")),s.stopPropagation()}),$(".headerMenu.mobile > li").click(function(s){$(this).hasClass("active")?($(this).removeClass("active"),s.stopPropagation()):($(".headerMenu.mobile li").removeClass("active"),$(this).addClass("active"))}),$(".burger").on("click",function(s){$("body").toggleClass("menuOpened"),$(this).toggleClass("active"),$(".headerMenu.mobile").toggleClass("show"),$(".mobileBottom").toggleClass("show"),s.stopPropagation()}),$(".topSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:1,slideToScroll:1,speed:875,arrows:!0,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!0,responsive:[{breakpoint:600,settings:{arrows:!1}}]}),$(".dnk_slider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:1,slideToScroll:1,speed:250,arrows:!0,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!0,responsive:[{breakpoint:681,settings:{dots:!1}}]}),$(".clientHistorySlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:2,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:681,settings:{slidesToShow:1}}]}),$(".videoSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:2,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:681,settings:{slidesToShow:1}}]}),$(".literatePatientSchoolSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:3,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:1013,settings:{slidesToShow:2}},{breakpoint:681,settings:{slidesToShow:1}}]}),$(".partnersSlider .slider").slick({infinite:!0,centerMode:!0,centerPadding:"0",cssEase:"ease-in-out",draggable:!0,autoplay:!1,autoplayspeed:2500,slidesToShow:4,slideToScroll:1,speed:250,arrows:!1,prevArrow:'<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="next"><i class="ri-arrow-right-s-line"></i></div>',dots:!1,responsive:[{breakpoint:1013,settings:{slidesToShow:3}},{breakpoint:701,settings:{slidesToShow:2}},{breakpoint:401,settings:{slidesToShow:1}}]}),$(".slider-2").slick({dots:!0,prevArrow:'<div class="slick-prev prev"><i class="ri-arrow-left-s-line"></i></div>',nextArrow:'<div class="slick-next next"><i class="ri-arrow-right-s-line"></i></div>',responsive:[{breakpoint:981,settings:{dots:!1}}]}),$(".custom-button, a.tag").click(function(){$(this).toggleClass("active")}),$(".sliderNav .prev").click(function(){$(this).parents("section").find(".slick-slider").slick("slickPrev")}),$(".sliderNav .next").click(function(){$(this).parents("section").find(".slick-slider").slick("slickNext")}),$(".tabs .tab").click(function(){$(this).parents(".tabs").find(".active").removeClass("active"),$(this).addClass("active")}),$(".direction_of_activity-list__item span").append('<i class="ri-arrow-right-s-line"></i>'),$(".stars.static").each(function(){$(this).hasClass("star-0")&&$(this).append('<i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-10")&&$(this).append('<i class="ri-star-half-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-20")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-30")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-40")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-50")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i></i><i class="ri-star-line"></i>'),$(this).hasClass("star-60")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-70")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-80")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i>'),$(this).hasClass("star-90")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>'),$(this).hasClass("star-100")&&$(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>')}),$(".review a").click(function(){$(this).parents(".review").toggleClass("show")}),$(".stars a").on("mouseover",function(){var s=parseInt($(this).data("value"),10);$(this).parent().children("a.star").each(function(t){t<s?$(this).addClass("hover"):$(this).removeClass("hover")})}).on("mouseout",function(){$(this).parent().children("a.star").each(function(s){$(this).removeClass("hover")})}),$(".stars a").on("click",function(){var s=parseInt($(this).data("value"),10),t=$(this).parent().children("a.star"),e=0;for(e=0;e<t.length;e++)$(t[e]).removeClass("selected");for(e=0;e<s;e++)$(t[e]).addClass("selected");var i="";parseInt($(".stars a.selected").last().data("value"),10)>3?(i="Всё AllRight!",$(".success-box .btn").removeClass("show"),$(".success-box .text-message").hide()):(i="Недовольны диспансеризацией? Оставьте жалобу, чтобы мы смогли разобраться в сложившейся ситуцаии и помочь вам.",$(".success-box .btn").addClass("show"),$(".success-box .text-message").show()),function(s){$(".success-box").fadeIn(200),$(".success-box .text-message").html(""+s)}(i)}),$(".FilterSearch .btn-filter").click(function(){$(this).toggleClass("active"),$(".dropDownFilter.v2").toggleClass("show")}),$(".fixbtn .open").click(function(){$(this).parents(".fixbtn").toggleClass("active"),$("body").toggleClass("widgetOpened")}),$(".fixbtn .close").click(function(){$(this).parents(".fixbtn").removeClass("active"),$("body").removeClass("widgetOpened")}),$(".cool").on("click",function(){$(this).toggleClass("cool-click"),$(".bad").removeClass("bad-click")}),$(".bad").on("click",function(){$(this).toggleClass("bad-click"),$(".cool").removeClass("cool-click")}),$('input[type="file"]').change(function(){var s=$('input[type="file"]').prop("files"),t=$.map(s,function(s){return s.name});$(".placeholder .filename").text(t),$(".dropzone").addClass("dragdrop")});function a(){o(),$(".customScrollTabs").each(function(){$(window).width()>=640?($(".customScrollTabs .customTabs").mCustomScrollbar("destroy"),setTimeout(function(){$(".customScrollTabs .customTabs").mCustomScrollbar({theme:"scrollTabsThm",axis:"x",contentTouchScroll:!0,scrollButtons:{enable:!0},mouseWheel:{enable:!0,axis:"y"},scrollButtons:{enable:!0,scrollType:"stepless"},advanced:{autoScrollOnFocus:!1,updateOnContentResize:!0,updateOnBrowserResize:!0},callbacks:{whileScrolling:function(){$(this).parents(".customScrollTabs").find(".next, .prev").removeClass("hide"),$(this).parents(".customScrollTabs").removeClass("start"),$(this).parents(".customScrollTabs").removeClass("finish")},onTotalScroll:function(){$(this).parents(".customScrollTabs").find(".next").addClass("hide"),$(this).parents(".customScrollTabs").addClass("finish"),$(this).parents(".customScrollTabs").removeClass("start")},onTotalScrollBack:function(){$(this).parents(".customScrollTabs").find(".prev").addClass("hide"),$(this).parents(".customScrollTabs").removeClass("finish"),$(this).parents(".customScrollTabs").addClass("start")},onOverflowX:function(){$(this).mCustomScrollbar("scrollTo","0%"),$(this).parents(".customScrollTabs").removeClass("hideArrow"),$(this).parents(".customScrollTabs").addClass("start"),$(this).parents(".customScrollTabs").addClass("showArrow"),$(this).parents(".customScrollTabs").find(".prev").addClass("hide"),$(this).parents(".customScrollTabs").find(".next").removeClass("hide")},onOverflowXNone:function(){$(this).mCustomScrollbar("scrollTo","0%"),$(this).parents(".customScrollTabs").addClass("hideArrow"),$(this).parents(".customScrollTabs").removeClass("showArrow"),$(this).parents(".customScrollTabs").find(".next, .prev").addClass("hide")}}})},100)):($(".customScrollTabs .customTabs").mCustomScrollbar("destroy"),$(".customScrollTabs .next, .customScrollTabs .prev").addClass("hide"),$(this).parents(".customScrollTabs").removeClass("start"),$(".customScrollTabs .customTabs").each(function(){var s=$(this).find("li").length;s>3?$(this).addClass("mVersion"):s<3&&($(this).addClass("default"),$(this).parents(".customScrollTabs").removeClass("start"),$(this).parents(".customScrollTabs").removeClass("finish"))})),$(".customScrollTabs.v2 .customTabs").each(function(){$(this).parents(".customScrollTabs").removeClass("start"),$(this).parents(".customScrollTabs").addClass("show"),$(this).find(".next, .prev").addClass("hide");var s=$(this).find("li:eq(0)").height(),t=$(this).find("li:eq(1)").height();$(this).find("li").length;setTimeout(function(){$(".customScrollTabs.v2 .customTabs").mCustomScrollbar({theme:"customTabsThm",callbacks:{onCreate:function(){$(this).css("max-height",s+t+16+"px")}}})},100),$(this).parents(".customScrollTabs").removeClass("show")}),$(".customScrollTabs .customTabs.default").each(function(){$(this).parents(".customScrollTabs").hasClass("Default")&&$(this).parents(".customScrollTabs").addClass("default"),$(this).parents(".customScrollTabs").addClass("show default"),$(this).parents(".customScrollTabs").removeClass("start"),setTimeout(function(){$(".customScrollTabs .customTabs.default").mCustomScrollbar({theme:"scrollTabsThm",axis:"x",contentTouchScroll:!0,scrollButtons:{enable:!0},mouseWheel:{enable:!0,axis:"y"},scrollButtons:{enable:!0,scrollType:"stepless"},advanced:{autoScrollOnFocus:!1,updateOnContentResize:!0,updateOnBrowserResize:!0},callbacks:{whileScrolling:function(){$(this).parents(".customScrollTabs").find(".next, .prev").removeClass("hide"),$(this).parents(".customScrollTabs").removeClass("start"),$(this).parents(".customScrollTabs").removeClass("finish")},onTotalScroll:function(){$(this).parents(".customScrollTabs").find(".next").addClass("hide"),$(this).parents(".customScrollTabs").addClass("finish"),$(this).parents(".customScrollTabs").removeClass("start")},onTotalScrollBack:function(){$(this).parents(".customScrollTabs").find(".prev").addClass("hide"),$(this).parents(".customScrollTabs").removeClass("finish"),$(this).parents(".customScrollTabs").addClass("start")},onOverflowX:function(){$(this).mCustomScrollbar("scrollTo","0%"),$(this).parents(".customScrollTabs").removeClass("hideArrow"),$(this).parents(".customScrollTabs").addClass("showArrow"),$(this).parents(".customScrollTabs").find(".next").removeClass("hide")},onOverflowXNone:function(){$(this).mCustomScrollbar("scrollTo","0%"),$(this).parents(".customScrollTabs").addClass("hideArrow"),$(this).parents(".customScrollTabs").removeClass("start"),$(this).parents(".customScrollTabs").removeClass("finish"),$(this).parents(".customScrollTabs").removeClass("showArrow"),$(this).parents(".customScrollTabs").find(".next, .prev").addClass("hide")}}})},100),$(this).parents(".customScrollTabs").removeClass("show")}),$(".customScrollTabs.Default .customTabs").each(function(){$(this).removeClass("mVersion"),$(this).parents(".customScrollTabs").addClass("show default"),$(this).addClass("start"),setTimeout(function(){$(".customScrollTabs.Default .customTabs").mCustomScrollbar({theme:"scrollTabsThm",axis:"x",contentTouchScroll:!0,scrollButtons:{enable:!0},mouseWheel:{enable:!0,axis:"y"},scrollButtons:{enable:!0,scrollType:"stepless"},advanced:{autoScrollOnFocus:!1,updateOnContentResize:!0,updateOnBrowserResize:!0},callbacks:{whileScrolling:function(){$(this).parents(".customScrollTabs").find(".next, .prev").removeClass("hide"),$(this).parents(".customScrollTabs").removeClass("start"),$(this).parents(".customScrollTabs").removeClass("finish")},onTotalScroll:function(){$(this).parents(".customScrollTabs").find(".next").addClass("hide"),$(this).parents(".customScrollTabs").addClass("finish"),$(this).parents(".customScrollTabs").removeClass("start")},onTotalScrollBack:function(){$(this).parents(".customScrollTabs").find(".prev").addClass("hide"),$(this).parents(".customScrollTabs").removeClass("finish"),$(this).parents(".customScrollTabs").addClass("start")},onOverflowX:function(){$(this).mCustomScrollbar("scrollTo","0%"),$(this).parents(".customScrollTabs").removeClass("hideArrow"),$(this).parents(".customScrollTabs").addClass("showShadow"),$(this).parents(".customScrollTabs").addClass("showArrow"),$(this).parents(".customScrollTabs").find(".next").removeClass("hide")},onOverflowXNone:function(){$(this).mCustomScrollbar("scrollTo","0%"),$(this).parents(".customScrollTabs").addClass("hideArrow"),$(this).parents(".customScrollTabs").removeClass("showShadow"),$(this).parents(".customScrollTabs").removeClass("showArrow"),$(this).parents(".customScrollTabs").removeClass("start"),$(this).parents(".customScrollTabs").removeClass("finish"),$(this).parents(".customScrollTabs").find(".next, .prev").addClass("hide")}}})},100),$(this).parents(".customScrollTabs").removeClass("show")})})}function o(){$(".customScrollTabs").removeClass("show"),$(".customScrollTabs").removeClass("default"),$(".customScrollTabs .customTabs").removeAttr("style"),$(".customScrollTabs .customTabs").removeClass("mVersion"),$(".customScrollTabs .tabActive").removeClass("active")}$(".dropzone").on("dragenter",function(s){$(".dropzone").addClass("dragover")}).on("dragover",function(s){s.preventDefault(),$(".dropzone").hasClass("dragover")||$(".dropzone").addClass("dragover")}).on("dragleave",function(s){s.preventDefault(),$(".dropzone").removeClass("dragover")}).on("drop",function(s){$(".dropzone").removeClass("dragover"),$(".dropzone").addClass("dragdrop")}),$(".copy").click(function(){$(this).attr("value","Ссылка скопирована")}),$(".btn-copyLink").click(function(){$(this).find("span").text("Ссылка скопирована")}),$(".customScrollTabs .tabActive").each(function(){var s=$(this).parents(".customScrollTabs").find(".customTabs .active").text();$(this).parents(".customScrollTabs").find(".tabActive .title").html(s)}),a(),$(document).on("click",function(s){$(s.target).closest(".customScrollTabs .tabActive").length||$(".customScrollTabs .tabActive").hasClass("active")&&($(".customScrollTabs .tabActive").removeClass("active"),$(".customScrollTabs").removeClass("show"),$(".customScrollTabs .customTabs.mVersion").slideUp("normal")),s.stopPropagation()}),$(".customScrollTabs .tabActive").click(function(){$(this).parents(".customScrollTabs").toggleClass("show"),$(this).toggleClass("active");var s=$(this).parents(".customScrollTabs").find(".customTabs.mVersion");s.is(":visible")?s.slideUp("normal",function(){}):s.slideDown("normal",function(){})}),$(".customScrollTabs .tab").click(function(){var s=$(this).text();$(this).parents(".customScrollTabs").find(".tabActive .title").html(""+s),$(this).parents(".customScrollTabs").find(".customTabs").mCustomScrollbar("scrollTo",this,{scrollInteria:500}),$(this).parents(".customScrollTabs").find("li").removeClass("thisEl"),$(this).parents(".customScrollTabs").find("li").removeClass("thisNext"),$(this).parents(".customScrollTabs").find("li").removeClass("thisPrev"),$(this).parents("li").addClass("thisEl"),$(this).parents("li").next().addClass("thisNext"),$(this).parents("li").prev().addClass("thisPrev")}),$(".customScrollTabs .tab.active").each(function(){$(this).parents("li").addClass("thisEl"),$(this).parents("li").next().addClass("thisNext"),$(this).parents("li").prev().addClass("thisPrev")}),$(".customScrollTabs .customTabs .thisEl").each(function(){$(this).parents(".customTabs").mCustomScrollbar("scrollTo",this,{scrollInteria:250})}),$(".customScrollTabs .prev").click(function(){$(this).parents(".customScrollTabs").find(".next").show(),$(this).parents(".customScrollTabs").find(".customTabs").mCustomScrollbar("scrollTo",$(this).parents(".customScrollTabs").find(".thisPrev"),{scrollInteria:500}),$(this).parents(".customScrollTabs").find(".thisPrev").addClass("thisPos"),$(this).parents(".customScrollTabs").find("li").removeClass("thisPrev"),$(this).parents(".customScrollTabs").find("li").removeClass("thisEl"),$(this).parents(".customScrollTabs").find("li").removeClass("thisNext"),$(this).parents(".customScrollTabs").find(".thisPos").next().addClass("thisNext"),$(this).parents(".customScrollTabs").find(".thisPos").prev().addClass("thisPrev"),$(this).parents(".customScrollTabs").find(".thisPos").addClass("thisEl"),$(this).parents(".customScrollTabs").find(".thisEl").removeClass("thisPos")}),$(".customScrollTabs .next").click(function(){$(this).parents(".customScrollTabs").find(".prev").show(),$(this).parents(".customScrollTabs").find(".customTabs").mCustomScrollbar("scrollTo",$(this).parents(".customScrollTabs").find(".thisNext"),{scrollInteria:500}),$(this).parents(".customScrollTabs").find(".thisNext").addClass("thisPos"),$(this).parents(".customScrollTabs").find("li").removeClass("thisPrev"),$(this).parents(".customScrollTabs").find("li").removeClass("thisEl"),$(this).parents(".customScrollTabs").find("li").removeClass("thisNext"),$(this).parents(".customScrollTabs").find(".thisPos").next().addClass("thisNext"),$(this).parents(".customScrollTabs").find(".thisPos").prev().addClass("thisPrev"),$(this).parents(".customScrollTabs").find(".thisPos").addClass("thisEl"),$(this).parents(".customScrollTabs").find(".thisEl").removeClass("thisPos")}),$(window).resize(function(){i(),o(),a()}),$("label.error").click(function(){$(this).find(".error-message").fadeOut(),$(this).removeClass("error")})});
//# sourceMappingURL=main-min.js.map
