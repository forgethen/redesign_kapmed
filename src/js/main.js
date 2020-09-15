/** @format */

"use strict";

$(document).ready(function() {
  var footer = $("#footer").outerHeight();

  $(".content_list ul:first-child").addClass("active");

  $(".content_list ul a").each(function() {
    var hash = $(this).attr("href");

    $(hash).each(function(){
      var elHash = $(this).attr('id');
      if ($(this).length > 0) {
        console.log('есть');
        $('.content_list ul a[href="#'+elHash+'"]').addClass('dontRemove');
      }
    })

    $(this).not(".dontRemove").remove();
  });

  function onScroll() {
    if ($(".content_list ul a").length <= 1) {
      return false;
    } else {
      $(".content_list ul a").each(function() {
        var hash = $(this).attr("href");
        // try {
        //   let prob = $(hash);
        // } catch(err) {
        //   console.log(err);
        //   return false;
        // }
        if (hash.indexOf('#') === -1) {
          return false;
        }

        var target = $(hash);
        if (
          target.position().top <= $(document).scrollTop() &&
          target.position().top + target.outerHeight() > $(document).scrollTop()
        ) {
          $(".content_list ul a.active").removeClass("active");
          $(this).addClass("active");
        }
        // if else() {
        //
        // }
        else {
          $(this).removeClass("active");
        }
      });
    }
  }

  $(document).on("scroll", onScroll);

  $(".content_list ul a").click(function() {
    $(document).off("scroll");
    $(".content_list ul .active").removeClass("active");
    $(this).addClass("active");
    var hash = $(this).attr("href");
    var target = $(hash);
    $("html, body").animate({
        scrollTop: target.offset().top,
      },
      250,
      function() {
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
      }
    );
  });

  // $(".custom-select a").click(function() {
  //   $(this).parents(".custom-select").find("i").addClass("active");
  //   $(this).parents(".custom-select").find(".options").show();
  //   $(this).parents(".custom-select").find(".options-block").addClass("show");
  // });


  function customSelectClose() {
    $(".custom-select").each(function() {
      $(this).parents(".custom-select").find("i").removeClass("active");
      $(this).parents(".custom-select").find(".options").hide();
      $(this).parents(".custom-select").find(".options-block").removeClass("show");
    });
  }

  $(".custom-select a").click(function(e) {
    if ($(this).parents(".custom-select").find(".options-block").hasClass("show")) {
      $(this).parents(".custom-select").find("i").removeClass("active");
      $(this).parents(".custom-select").find(".options").hide();
      $(this).parents(".custom-select").find(".options-block").removeClass("show");
      e.stopPropagation();
    } else {
      customSelectClose();
      $(this).parents(".custom-select").find("i").addClass("active");
      $(this).parents(".custom-select").find(".options").show();
      $(this).parents(".custom-select").find(".options-block").addClass("show");
      e.stopPropagation();
    }
  });

  $(".custom-select .options-block").each(function() {
    $(this).addClass("show");
    $(".custom-select .options-block .options").show();
    var th1 = $(".custom-select .options-block .options")
      .find("li:eq(0)")
      .height();
    var posleft = $(this).parents(".custom-select").find("a").position().left;
    // console.log(posleft);

    // var pos_el = $(this).parents(".custom-select").find("a").outerWidth();
    // console.log(pos_el);
    // var postop = $(".custom-select a.red span").position().top;

    $(this).css("max-height", th1 * 7 + 10 * 7 + 64 + "px");
    // $(this).css("top", postop + "px");
    $(this).css("left", posleft + "px")
    $(this).removeClass("show");
    $(".custom-select .options-block .options").hide();
  });

  $(".custom-select .options-block").mCustomScrollbar({
    theme: "CustomSelectOptionsThm",
  });


  $(".custom-select .options li").click(function() {
    var thisVal = $(this).text();
    $(this).parents(".custom-select").find(".options").hide();
    $(this).parents(".custom-select").find(".options .red").removeClass("red");
    $(this).parents(".custom-select").find("a span").text(thisVal);
    $(this).parents(".custom-select").find("a i").removeClass("active");
    $(this).parents(".custom-select").find(".options-block").removeClass("show");
    $(this).addClass("red");
  });

  $("input,textarea").focus(function() {
    $(this).data("placeholder", $(this).attr("placeholder")),
      $(this).attr("placeholder", "");
  });

  $("input,textarea").blur(function() {
    $(this).attr("placeholder", $(this).data("placeholder"));
  });

  $('input[type="tel"]').inputmask("+7 (999) 999 99 99");
  $(".date input").inputmask("99.99.9999");

  $(".dropdown ul").each(function() {
    var th1 = $(this).parents(".dropdown").find("li:eq(0)").outerHeight(true);
    var th2 = $(this).parents(".dropdown").find("li:eq(1)").outerHeight(true);
    var th3 = $(this).parents(".dropdown").find("li:eq(2)").outerHeight(true);
    $(this)
      .parents(".dropdown")
      .find("ul")
      .css("max-height", th1 + th2 + th3 + 36 + "px");
    $(this).parents(".dropdown").find("ul").removeClass("show");
  });

  $(".doc .see").click(function() {
    $(this).toggleClass("active");
    $(this).parents(".doc").find(".answer").toggleClass("show");
  });

  function dropdownClose() {
    $(".dropdown").each(function() {
      $(this).removeClass("active");
      $(this).find("ul").removeClass("show");
      $(this).find("i").removeClass("active");
    });
  }

  $(".dropdown input").click(function(e) {
    if ($(this).parents(".dropdown").hasClass("active")) {
      $(this).parents(".dropdown").removeClass("active");
      $(this).parents(".dropdown").find("i").toggleClass("active");
      $(this).parents(".dropdown").find("ul").toggleClass("show");
      e.stopPropagation();
    } else {
      dropdownClose();
      $(this).parents(".dropdown").addClass("active");
      $(this).parents(".dropdown").find("i").toggleClass("active");
      $(this).parents(".dropdown").find("ul").toggleClass("show");
      e.stopPropagation();
    }
  });

  $(".dropdown ul li").click(function() {
    var thisVal = $(this).html();
    $(this).parents(".dropdown").removeClass("active");
    $(this).parents("ul").removeClass("show");
    $(this).parents(".dropdown").find("i").removeClass("active");
    $(this).parents(".dropdown").find("input").val(thisVal);
  });

  $("ul.content .check, .accordion-menu .check").click(function() {
    $(this).parents("li").toggleClass("show");
  });

  $(".mapPopUp .list li").click(function() {
    var thisVal = $(this).html();
    $(".mapPopUp .list").find(".select").removeClass("select");
    $(this).addClass("select");
  });

  // function closeAdd() {
  //   $("<button>", {
  //     html:
  //       '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="#939393" d="M7.004 5.59l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95L.64 11.954l4.95-4.95-4.95-4.95L2.054.64z"/></svg>',
  //     class: "fancybox-button fancybox-close-small CloseFancybox",
  //     title: "close",
  //   })
  //     .appendTo(".fancybox-content")
  //     .attr("data-fancybox-close", "");
  //   // $('body').addClass('hidden');
  // }

  // const targetElement = document.querySelector("body");
  //
  // $("[data-fancybox]").click(function () {
  //
  //   $.fancybox.close();
  //   //   // $('form')[0].reset();
  //   $('[data-action="clear"]').each(function () {
  //     $(this).click();
  //   });
  //
  //   $(this).attr("data-touch", "false");
  //   // $(this).attr("data-modal", "true");
  //
  //   $(".CloseFancybox").remove();
  //
  //   // setTimeout(closeAdd, 100);
  //
  //   setTimeout(function () {
  //     $(".CloseFancybox").click(function (e) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       $.fancybox.close();
  //       console.log("gogog");
  //       bodyScrollLock.enableBodyScroll(targetElement);
  //     });
  //   }, 100);
  //
  //   bodyScrollLock.disableBodyScroll(targetElement);
  // });

  $(".mapPopUp .mapSection .mapList").mCustomScrollbar({
    theme: "MapListThm",
  });

  function fromResize() {
    $(".mapBlock .mapSection .mapList").each(function() {
      if ($(window).width() >= 640) {
        $(this).mCustomScrollbar({
          theme: "MapListThm",
        });
      } else {
        $(this).mCustomScrollbar("destroy");
      }
    });
  }

  fromResize();

  $(window).resize(function() {
    fromResize();
  });

  $(".dropdown ul").each(function() {
    $(this).addClass("active");
    $(".dropdown ul").addClass("show");
    var th1 = $(".dropdown ul").find("li:eq(0)").height();
    var th2 = $(".dropdown ul").find("li:eq(1)").height();
    $(this).css("max-height", th1 + th2 + "px");
    $(this).removeClass("active");
    $(".dropdown ul").removeClass("show");
  });

  $(".dropdown ul").mCustomScrollbar({
    theme: "DropdownThm",
  });

  $(".citiesBlock").mCustomScrollbar({
    theme: "citiesBlockThm",
  });

  $('.search input[type="search"]').hideseek({
    // highlight: true,
    nodata: "Поиск не дал результатов",
    navigation: true,
  });

  $(".mapBlock .mapSection .mapList .list__item:lt(3)").show().addClass("show");

  $(".mapBlock .seeMore").click(function() {
    var showed = $(".mapBlock .mapSection .mapList .list__item.show").length;
    var allShowed = $(".mapBlock .mapSection .mapList .list__item").length;
    var i = showed;
    $(".mapBlock .mapSection .mapList .list__item")
      .eq(i)
      .show()
      .addClass("show");
    if (showed == allShowed) {
      // $(this).removeClass("btn-default");
      $(this).find('a').attr("href", "#");
      $(this).find('a').text("Просмотреть все пункты выдачи");
    }
  });

  $(".headerMenu .submenu").mCustomScrollbar({
    theme: "SubmenuScrollThm",
  });

  $(".openShedule a").click(function() {
    $(this).closest(".openShedule").toggleClass("active");
    $(this).parents(".sheduleBlock").find(".shedule__list").toggleClass("show");
  });

  $("footer .partition").each(function() {
    var i = $(this).find('li').length;
    if (i > 1) {
      $(this).find("li:eq(0)").append('<i class="ri-arrow-down-s-line"></i>');
    } else {
      return false;
    }
  })

  $("footer .partition").find("li:eq(0)").click(function(e) {
    if ($(window).width() <= 980) {
      if ($(this).parents('ul').hasClass("autoHeight")) {
        $(this).parents('ul').removeClass("autoHeight");
        // e.stopPropagation();
      } else {
        $('footer .partition').removeClass('autoHeight');
        $(this).parent("ul").toggleClass("autoHeight");
      }
    } else {
      $(this).parent("ul").removeClass("autoHeight");
    }

  });

  $(document).on("click", function(e) {
    if (!$(e.target).closest(".parent_block").length) {
      $(".toggled_block").hide();
    }

    if (!$(e.target).closest(".dropdown").length) {
      dropdownClose();
    }

    if (!$(e.target).closest(".custom-select a").length) {
      $(".options-block").removeClass("show");
      $(".options").hide();
    }

    if (!$(e.target).closest("footer .partition").length) {
      $("footer .partition").removeClass("autoHeight");
    }

    // if (!$(e.target).closest(".headerMenu li").length) {
    //   $('.headerMenu .submenu').fadeOut();
    //   $('.headerMenu li').removeClass('active');
    // }

    // if (!$(e.target).closest(".burger").length) {
    //   $(".headerMenu").removeClass("show");
    //   $(".mobileBottom").removeClass("show");
    //   $(".burger").removeClass("active");
    // }

    if (!$(e.target).closest(".fixbtn .open").length) {
      $(".fixbtn").removeClass("active");
      $("body").removeClass("widgetOpened");
    }

    e.stopPropagation();
  });

  $(".burger").on("click", function(e) {
    $(this).toggleClass("active");
    $(".headerMenu").toggleClass("show");
    $(".mobileBottom").toggleClass("show");
    // $("body").toggleClass("menuOpened");
    // if ($(window).width() >= 640) {
    //   $('.headerMenu li :eq(0)').click();
    // }
    e.stopPropagation();
  });

  // $('.burger :eq(0)').on('click', function(e) {
  //   $('.burger').addClass('active');
  //   $('.headerMenu').addClass('show')
  //   $('.mobileBottom').addClass('show')
  //   if ($(window).width() >= 640) {
  //     $('.headerMenu li :eq(0)').click();
  //   }
  //   e.stopPropagation()
  // })
  //
  // $('.burger :eq(1)').on('click', function(e) {
  //   $('.burger').removeClass('active');
  //   $('.headerMenu').removeClass('show');
  //   $('.mobileBottom').removeClass('show');
  //   e.stopPropagation()
  // })

  // $(".headerMenu li").hover(function(e) {
  //   $('.burger').addClass('active');
  //   $('.headerMenu').addClass('show');
  //   $(".headerMenu li").removeClass('active');
  //   $(this).toggleClass('active');
  //   // $('.headerMenu .submenu').hide();
  //   // $(this).find('.submenu').fadeIn();
  //   e.stopPropagation()
  // })

  // $(".headerMenu li").click(function(e) {
  //   $('.burger').addClass('active');
  //   $('.headerMenu').addClass('show');
  //   $(".headerMenu li").removeClass('active');
  //   $(this).toggleClass('active');
  //   $('.headerMenu .submenu').hide();
  //   $(this).find('.submenu').fadeIn();
  //   e.stopPropagation()
  // })

  $(".topSlider .slider").slick({
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    cssEase: "ease-in-out",
    draggable: true,
    autoplay: false,
    autoplayspeed: 2500,
    slidesToShow: 1,
    slideToScroll: 1,
    speed: 875,
    arrows: true,
    prevArrow: '<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',
    nextArrow: '<div class="next"><i class="ri-arrow-right-s-line"></i></div>',
    dots: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        arrows: false,
      },
    }, ],
  });

  $(".dnk_slider .slider").slick({
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    cssEase: "ease-in-out",
    draggable: true,
    autoplay: false,
    autoplayspeed: 2500,
    slidesToShow: 1,
    slideToScroll: 1,
    speed: 250,
    arrows: true,
    prevArrow: '<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',
    nextArrow: '<div class="next"><i class="ri-arrow-right-s-line"></i></div>',
    dots: true,
    responsive: [{
      breakpoint: 681,
      settings: {
        dots: false,
      },
    }, ],
  });

  $(".clientHistorySlider .slider").slick({
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    cssEase: "ease-in-out",
    draggable: true,
    autoplay: false,
    autoplayspeed: 2500,
    slidesToShow: 2,
    slideToScroll: 1,
    speed: 250,
    arrows: false,
    prevArrow: '<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',
    nextArrow: '<div class="next"><i class="ri-arrow-right-s-line"></i></div>',
    dots: false,
    responsive: [{
      breakpoint: 681,
      settings: {
        slidesToShow: 1,
      },
    }, ],
  });

  $(".videoSlider .slider").slick({
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    cssEase: "ease-in-out",
    draggable: true,
    autoplay: false,
    autoplayspeed: 2500,
    slidesToShow: 2,
    slideToScroll: 1,
    speed: 250,
    arrows: false,
    prevArrow: '<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',
    nextArrow: '<div class="next"><i class="ri-arrow-right-s-line"></i></div>',
    dots: false,
    responsive: [{
      breakpoint: 681,
      settings: {
        slidesToShow: 1,
      },
    }, ],
  });

  $(".literatePatientSchoolSlider .slider").slick({
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    cssEase: "ease-in-out",
    draggable: true,
    autoplay: false,
    autoplayspeed: 2500,
    slidesToShow: 3,
    slideToScroll: 1,
    speed: 250,
    arrows: false,
    prevArrow: '<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',
    nextArrow: '<div class="next"><i class="ri-arrow-right-s-line"></i></div>',
    dots: false,
    responsive: [{
        breakpoint: 1013,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".partnersSlider .slider").slick({
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    cssEase: "ease-in-out",
    draggable: true,
    autoplay: false,
    autoplayspeed: 2500,
    slidesToShow: 4,
    slideToScroll: 1,
    speed: 250,
    arrows: false,
    prevArrow: '<div class="prev"><i class="ri-arrow-left-s-line"></i></div>',
    nextArrow: '<div class="next"><i class="ri-arrow-right-s-line"></i></div>',
    dots: false,
    responsive: [{
        breakpoint: 1013,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".slider-2").slick({
    dots: true,
    prevArrow: '<div class="slick-prev prev"><i class="ri-arrow-left-s-line"></i></div>',
    nextArrow: '<div class="slick-next next"><i class="ri-arrow-right-s-line"></i></div>',
    responsive: [{
      breakpoint: 981,
      settings: {
        dots: false,
      },
    }, ],
  });

  $(".custom-button, a.tag").click(function() {
    $(this).toggleClass("active");
  });

  $(".sliderNav .prev").click(function() {
    $(this).parents("section").find(".slick-slider").slick("slickPrev");
  });

  $(".sliderNav .next").click(function() {
    $(this).parents("section").find(".slick-slider").slick("slickNext");
  });
  // $(".tabsContainer").mCustomScrollbar({
  //   theme: "tabsContainerScrollThm",
  //   axis: "x" // vertical and horizontal scrollbar
  // });

  $(".tabs .tab").click(function() {
    $(this).parents(".tabs").find(".active").removeClass("active");
    $(this).addClass("active");
  });

  $(".direction_of_activity-list__item span").append(
    '<i class="ri-arrow-right-s-line"></i>'
  );

  $(".stars.static").each(function() {
    if ($(this).hasClass("star-0")) {
      $(this).append(
        '<i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'
      );
    }
    if ($(this).hasClass("star-10")) {
      $(this).append(
        '<i class="ri-star-half-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'
      );
    }
    if ($(this).hasClass("star-20")) {
      $(this).append(
        '<i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'
      );
    }
    if ($(this).hasClass("star-30")) {
      $(this).append(
        '<i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'
      );
    }
    if ($(this).hasClass("star-40")) {
      $(this).append(
        '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'
      );
    }
    if ($(this).hasClass("star-50")) {
      $(this).append(
        '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i></i><i class="ri-star-line"></i>'
      );
    }
    if ($(this).hasClass("star-60")) {
      $(this).append(
        '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>'
      );
    }
    if ($(this).hasClass("star-70")) {
      $(this).append(
        '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i>'
      );
    }
    if ($(this).hasClass("star-80")) {
      $(this).append(
        '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i>'
      );
    }
    if ($(this).hasClass("star-90")) {
      $(this).append(
        '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>'
      );
    }
    if ($(this).hasClass("star-100")) {
      $(this).append(
        '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>'
      );
    }
  });

  $(".review a").click(function() {
    $(this).parents(".review").toggleClass("show");
  });
  /* 1. Visualizing things on Hover - See next part for action on click */
  $(".stars a")
    .on("mouseover", function() {
      var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this)
        .parent()
        .children("a.star")
        .each(function(e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function() {
      $(this)
        .parent()
        .children("a.star")
        .each(function(e) {
          $(this).removeClass("hover");
        });
    });

  $(".stars a").on("click", function() {
    var onStar = parseInt($(this).data("value"), 10); // The star currently selected
    var stars = $(this).parent().children("a.star");
    var i = 0;
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }

    var ratingValue = parseInt($(".stars a.selected").last().data("value"), 10);
    var msg = "";
    if (ratingValue > 3) {
      msg = "Всё AllRight!";
      $(".success-box .btn").removeClass("show");
      $(".success-box .text-message").hide();
    } else {
      msg =
        "Недовольны диспансеризацией? Оставьте жалобу, чтобы мы смогли разобраться в сложившейся ситуцаии и помочь вам.";
      $(".success-box .btn").addClass("show");
      $(".success-box .text-message").show();
    }
    responseMessage(msg);
  });

  function responseMessage(msg) {
    $(".success-box").fadeIn(200);
    $(".success-box .text-message").html("" + msg + "");
  }

  $(".swipeTopDown").on("click", function() {
    $(this).parents(".list").toggleClass("active");
  });

  $(".FilterSearch .btn-filter").click(function() {
    $(this).toggleClass("active");
    $(".dropDownFilter.v2").toggleClass("show");
  });

  $(".fixbtn .open").click(function() {
    $(this).parents(".fixbtn").addClass("active");
    $("body").addClass("widgetOpened");
  });

  $(".fixbtn .close").click(function() {
    $(this).parents(".fixbtn").removeClass("active");
    $("body").removeClass("widgetOpened");
  });

  $(".custom-checkbox").click(function() {
    $(this)
      .find("input[type=checkbox]")
      .each(function() {
        if ($("input[type=checkbox]").is(":checked")) {
          $(this).attr("checked", "checked");
        } else {
          $(this).removeAttr("checked");
        }
      });
  });

  // события по нажатию на .mark-block__icon на странице patient-school
  $(".cool").on("click", function() {
    $(this).toggleClass("cool-click");
    $(".bad").removeClass("bad-click");
  });

  $(".bad").on("click", function() {
    $(this).toggleClass("bad-click");
    $(".cool").removeClass("cool-click");
  });
});

//# sourceMappingURL=main.js.map
