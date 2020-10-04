"use strict";

$(document).ready(function() {
  var footer = $("#footer").outerHeight();
  var anchor = false;

  $(".content_list ul:first-child").addClass("active");

  $("a.slow").click(function() {
    var e = $(this).attr("href"),
      k = $(e).offset().top;
    return $("html,body").animate({
      scrollTop: k
    }, 750), !1
  });

  $(".content_list ul a").each(function() {
    var hash = $(this).attr("href");
    if (hash.indexOf('#') !== -1)
      anchor = true;
  });

  if (anchor) {
    $(".content_list ul a").each(function() {
      var hash = $(this).attr("href");
      $(hash).each(function() {
        var elHash = $(this).attr('id');
        if ($(this).length > 0) {
          $('.content_list ul a[href="#' + elHash + '"]').addClass('dontRemove');
        }
      })
      $(this).not(".dontRemove").remove();
    });
  }

  function onScroll() {
    // if ($(window).scrollTop() > 0) $('#citySelectPopUp').removeClass('active');
    if ($(".content_list ul a").length <= 1) {
      return false;
    } else {
      $(".content_list ul a").each(function() {
        var hash = $(this).attr("href");
        if (hash.indexOf('#') === -1)
          return false;
        var target = $(hash);
        if (
          target.position().top <= $(document).scrollTop() &&
          target.position().top + target.outerHeight() > $(document).scrollTop()
        ) {
          $(".content_list ul a.active").removeClass("active");
          $(this).addClass("active");
        } else {
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

    if ($(window).width() >= 1080) {
      var hh = $('header .fromHeaderMenu').height();
      var headerHeight = hh + 16;
      console.log(headerHeight);
    } else {
      var hh = $('.top-container').height();
      var headerHeight = hh + 12;
    }

    $("html, body").animate({
        scrollTop: target.offset().top - headerHeight,
      },
      250,
      function() {
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
      }
    );
  });

  function customSelectClose() {
    $(".custom-select").each(function() {
      $(this).parents(".custom-select").find("i").removeClass("active");
      $(this).parents(".custom-select").find(".options").hide();
      $(this).parents(".custom-select").find(".options-block").removeClass("show");
    });
  };

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
    $(this).find(".options").show();
    var th1 = $(this).find("li:eq(0)").height;
    if (isNaN(th1)) th1 = $(this).find("li")[0].offsetHeight;
    var posleft = $(this).parents(".custom-select").find("a.red").position().left;
    var elength = $(this).find('.options li').length;
    if (elength > 3) {
      $(this).mCustomScrollbar({
        theme: "CustomSelectOptionsThm",
        callbacks: {
          onCreate: function() {
            if (elength >= 7) {
              $(this).css("max-height", th1 * 7 + 10 * 7 + 64 + "px");
            } else {
              $(this).css("max-height", th1 * elength + 10 * elength + 64 + "px");
            }
          }
        }
      });
    }
    $(this).css("left", posleft + "px");
    $(this).removeClass("show");
    $(this).find(".options").hide();
  });

  $(".custom-select .options li").click(function() {
    var thisVal = $(this).text();
    $(this).parents(".custom-select").find(".options").hide();
    $(this).parents(".custom-select").find(".options .red").removeClass("red");
    if (!$(this).data('readonly'))
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
    $(this).addClass("active");
    $(".dropdown ul").addClass("show");
    var th1 = $(".dropdown ul").find("li:eq(0)").height;
    var th2 = $(".dropdown ul").find("li:eq(1)").height;
    var elength = $(this).find('li').length;
    if (elength > 2) {
      $(this).mCustomScrollbar({
        theme: "DropdownThm",
        callbacks: {
          onCreate: function() {
            $(this).css("max-height", th1 + th2 + "px");
          }
        }
      });
    }
    $(this).removeClass("active");
    $(".dropdown ul").removeClass("show");
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
  };

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

  $(".content__item i").click(function() {
    $(this).parents('li').toggleClass("show");
  });

  $(".mapPopUp .list li").click(function() {
    var thisVal = $(this).html();
    $(".mapPopUp .list").find(".select").removeClass("select");
    $(this).addClass("select");
  });

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

    $('.content_list ul').each(function() {
      if ($(window).width() >= 1080) {
        var hh = $('header .fromHeaderMenu').height();
        console.log(hh);
        $(this).css('top',hh + 12 + 'px');
      } else {
        var hh = $('.top-container').height();
        console.log(hh);
        $(this).css('top',hh + 12 + 'px');
      }
    });

    $(".headerMenu .submenu").each(function() {
      if ($(window).width() >= 1081) {
        $('.fromHeaderMenu').mCustomScrollbar("destroy");
        setTimeout(function() {
          var elWidth = $('.headerMenu').outerWidth();
          $('.headerMenu .submenu .container').css('max-width', elWidth + 'px');
        }, 200);
      } else {
        $(this).find('.container').css('max-width', '100%');
        var tph = $('header .top-container').height();
        var wh = $(window).height();
        $('.fromHeaderMenu').css('max-height', wh - tph + 'px');
        $('.fromHeaderMenu').mCustomScrollbar({
          theme: "SubmenuScrollThm",
        });
      }
    });

    $(".headerMenu.v2").each(function() {
      if ($(window).width() >= 1079) {
        $('.headerMenu li.active').removeClass('active');
        $('.headerMenu .submenu').slideUp();

        $('.headerMenu > li').mouseover(function() {
          $(this).addClass('active');
          $(this).find('.submenu').slideDown(200);
        });

        $('.headerMenu > li').mouseleave(function() {
          $(this).removeClass('active');
          $(this).find('.submenu').slideUp(200);
        });

      } else {
        $('.headerMenu li.active').removeClass('active');
        $('.headerMenu .submenu').fadeOut();

        $('.headerMenu > li').click(function() {
          if ($(this).hasClass('.active')) {
            $(this).removeClass('active');
            $(this).find('.submenu').fadeOut();
          } else {
            $('.headerMenu .submenu').fadeOut()
            $('.headerMenu li.active').removeClass('active');
            $(this).addClass('active');
            $(this).find('.submenu').fadeIn();
          }
        });
      }
    });

    $('.top-container').each(function(){
      var hh = $(this).height();
      console.log(hh);
      if ($(window).width() <= 1080) {
        $('.allContent').css('padding-top', '' + hh + 'px');
        $('#citySelectPopUp.active').css('top', '' + hh + 'px');
      } else (
        $('.allContent').removeAttr('style')
      )
    });

  }

  fromResize();

  $(".citiesBlock").mCustomScrollbar({
    theme: "citiesBlockThm",
  });

  $('.search input[type="search"], .search input[type="text"]').hideseek({
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
      $(this).find('a').attr("href", "#");
      $(this).find('a').text("Просмотреть все пункты выдачи");
    }
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
  });

  $("footer .partition").find("li:eq(0)").click(function(e) {
    if ($(window).width() <= 980) {
      if ($(this).parents('ul').hasClass("autoHeight")) {
        $(this).parents('ul').removeClass("autoHeight");
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

    if (!$(e.target).closest(".dropdown label").length) {
      dropdownClose();
    }

    if (!$(e.target).closest(".custom-select a, .custom-select .options-block").length) {
      $(".options-block").removeClass("show");
      $(".options").hide();
    }

    if (!$(e.target).closest("footer .partition").length) {
      $("footer .partition").removeClass("autoHeight");
    }

    if (!$(e.target).closest("a.city").length) {
      if ($('#citySelectPopUp').hasClass('active')) {
        $("#citySelectPopUp").removeClass("active");
      }
    }

    if (!$(e.target).closest(".content__item i").length) {
      $(this).removeClass('show')
    }

    if (!$(e.target).closest(".fixbtn .open").length) {
      $(".fixbtn").removeClass("active");
      $("body").removeClass("widgetOpened");
    }

    e.stopPropagation();
  });

  $('.headerMenu.mobile > li').click(function(e) {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      e.stopPropagation();
    } else {
      $('.headerMenu.mobile li').removeClass('active')
      $(this).addClass('active');
    }
  })

  $(".burger").on("click", function(e) {
    $('body').toggleClass('menuOpened');
    $(this).toggleClass("active");
    $(".headerMenu.mobile").toggleClass("show");
    $(".mobileBottom").toggleClass("show");
    e.stopPropagation();
  });

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
  $(".stars a").on("mouseover", function() {
    var onStar = parseInt($(this).data("value"), 10);
    $(this).parent().children("a.star").each(function(e) {
      if (e < onStar) {
        $(this).addClass("hover");
      } else {
        $(this).removeClass("hover");
      }
    });
  }).on("mouseout", function() {
    $(this).parent().children("a.star").each(function(e) {
      $(this).removeClass("hover");
    });
  });

  $(".stars a").on("click", function() {
    var onStar = parseInt($(this).data("value"), 10);
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
  };

  $(".FilterSearch .btn-filter").click(function() {
    $(this).toggleClass("active");
    $(".dropDownFilter.v2").toggleClass("show");
  });

  $(".fixbtn .open").click(function() {
    $(this).parents(".fixbtn").toggleClass("active");
    $("body").toggleClass("widgetOpened");
  });

  $(".fixbtn .close").click(function() {
    $(this).parents(".fixbtn").removeClass("active");
    $("body").removeClass("widgetOpened");
  });

  $(".cool").on("click", function() {
    $(this).toggleClass("cool-click");
    $(".bad").removeClass("bad-click");
  });

  $(".bad").on("click", function() {
    $(this).toggleClass("bad-click");
    $(".cool").removeClass("cool-click");
  });

  $('input[type="file"]').change(function() {
    var files = $('input[type="file"]').prop("files");
    var names = $.map(files, function(val) {
      return val.name;
    });
    $(".placeholder .filename").text(names);
    $(".dropzone").addClass("dragdrop");
  });

  var onDragEnter = function(event) {
      $(".dropzone").addClass("dragover");
    },

    onDragOver = function(event) {
      event.preventDefault();
      if (!$(".dropzone").hasClass("dragover")) {
        $(".dropzone").addClass("dragover");
      }
    },

    onDragLeave = function(event) {
      event.preventDefault(); {
        $(".dropzone").removeClass("dragover");
      }
    },

    onDrop = function(event) {
      $(".dropzone").removeClass("dragover");
      $(".dropzone").addClass("dragdrop");
    };

  $('.dropzone').on("dragenter", onDragEnter).on("dragover", onDragOver).on("dragleave", onDragLeave).on("drop", onDrop);

  $('.copy').click(function() {
    $(this).attr('value', 'Ссылка скопирована');
  });

  $('.btn-copyLink').click(function() {
    $(this).find('span').text('Ссылка скопирована')
  })

  function customTabsIn() {

    tabsDestroy();

    $('.customScrollTabs').each(function() {

      if ($(window).width() >= 640) {

        $('.customScrollTabs .customTabs').mCustomScrollbar("destroy");

        setTimeout(function() {
          $('.customScrollTabs .customTabs').mCustomScrollbar({
            theme: "scrollTabsThm",
            axis: "x",
            contentTouchScroll: true,
            scrollButtons: {
              enable: true
            },
            mouseWheel: {
              enable: true,
              axis: "y"
            },
            scrollButtons: {
              enable: true,
              scrollType: "stepless"
            },
            advanced: {
              autoScrollOnFocus: false,
              updateOnContentResize: true,
              updateOnBrowserResize: true,
            },

            callbacks: {
              whileScrolling: function() {
                $(this).parents('.customScrollTabs').find('.next, .prev').show();
                $(this).parents('.customScrollTabs').removeClass('start, finish');
              },
              onTotalScroll: function() {
                $(this).parents('.customScrollTabs').find('.next').hide();
                $(this).parents('.customScrollTabs').addClass('finish');
                $(this).parents('.customScrollTabs').removeClass('start')
              },
              onTotalScrollBack: function() {
                $(this).parents('.customScrollTabs').find('.prev').hide();
                $(this).parents('.customScrollTabs').removeClass('finish');
                $(this).parents('.customScrollTabs').addClass('start')
              },
              onOverflowX: function() {
                $(this).mCustomScrollbar("scrollTo", '0%');
                $(this).parents('.customScrollTabs').removeClass('hideArrow');
                $(this).parents('.customScrollTabs').addClass('showShadow');
                $(this).parents('.customScrollTabs').addClass('showArrow');
                $(this).parents('.customScrollTabs').find('.next').show();
              },
              onOverflowXNone: function() {
                $(this).mCustomScrollbar("scrollTo", '0%');
                $(this).parents('.customScrollTabs').addClass('hideArrow');
                $(this).parents('.customScrollTabs').removeClass('showShadow');
                $(this).parents('.customScrollTabs').removeClass('showArrow');
                $(this).parents('.customScrollTabs').find('.next, .prev').hide();
              },
            },
          });
        }, 100);

      } else {
        $('.customScrollTabs .customTabs').mCustomScrollbar("destroy");
        $('.customScrollTabs .next, .customScrollTabs .prev').hide();

        $('.customScrollTabs .customTabs').each(function() {
          var elength = $(this).find('li').length;

          if (elength > 3) {
            $(this).addClass('mVersion');
            console.log('mVersion');
          } else if (elength < 3) {
            $(this).addClass('default');
            console.log('default');
          }
        });
      }



      $('.customScrollTabs.v2 .customTabs').each(function() {
        // $(this).removeClass('default');
        $(this).parents('.customScrollTabs').addClass('show');
        $(this).find('.next, .prev').hide();
        var th1 = $(this).find("li:eq(0)").height();
        var th2 = $(this).find("li:eq(1)").height();
        var elength = $(this).find('li').length;
        setTimeout(function() {
          $('.customScrollTabs.v2 .customTabs').mCustomScrollbar({
            theme: "customTabsThm",
            callbacks: {
              onCreate: function() {
                $(this).css("max-height", th1 + th2 + 16 + "px");
              }
            }
          });
        }, 100);

        $(this).parents('.customScrollTabs').removeClass('show');

      });

      $('.customScrollTabs .customTabs.default').each(function() {

        if ($(this).parents('.customScrollTabs').hasClass('Default')) {
          $(this).parents('.customScrollTabs').addClass('default');
        }

        $(this).parents('.customScrollTabs').addClass('show default');

        // $('.customScrollTabs .next, .customScrollTabs .prev').hide();
        // var th1 = $(this).find("li:eq(0)").height();
        // var th2 = $(this).find("li:eq(1)").height();
        // var elength = $(this).find('li').length;
        setTimeout(function() {

          $('.customScrollTabs .customTabs.default').mCustomScrollbar({
            theme: "scrollTabsThm",
            axis: "x",
            contentTouchScroll: true,
            scrollButtons: {
              enable: true
            },
            mouseWheel: {
              enable: true,
              axis: "y"
            },
            scrollButtons: {
              enable: true,
              scrollType: "stepless"
            },
            advanced: {
              autoScrollOnFocus: false,
              updateOnContentResize: true,
              updateOnBrowserResize: true,
            },

            callbacks: {
              whileScrolling: function() {
                $(this).parents('.customScrollTabs').find('.next, .prev').show();
                $(this).parents('.customScrollTabs').removeClass('start, finish');
              },
              onTotalScroll: function() {
                $(this).parents('.customScrollTabs').find('.next').hide();
                $(this).parents('.customScrollTabs').addClass('finish');
                $(this).parents('.customScrollTabs').removeClass('start')
              },
              onTotalScrollBack: function() {
                $(this).parents('.customScrollTabs').find('.prev').hide();
                $(this).parents('.customScrollTabs').removeClass('finish');
                $(this).parents('.customScrollTabs').addClass('start')
              },
              onOverflowX: function() {
                $(this).mCustomScrollbar("scrollTo", '0%');
                $(this).parents('.customScrollTabs').removeClass('hideArrow');
                $(this).parents('.customScrollTabs').addClass('showShadow');
                $(this).parents('.customScrollTabs').addClass('showArrow');
                $(this).parents('.customScrollTabs').find('.next').show();
              },
              onOverflowXNone: function() {
                $(this).mCustomScrollbar("scrollTo", '0%');
                $(this).parents('.customScrollTabs').addClass('hideArrow');
                $(this).parents('.customScrollTabs').removeClass('showShadow');
                $(this).parents('.customScrollTabs').removeClass('showArrow');
                $(this).parents('.customScrollTabs').find('.next, .prev').hide();
              },
            },
          });
        }, 100);
        $(this).parents('.customScrollTabs').removeClass('show');
      })

      $('.customScrollTabs.Default .customTabs').each(function() {
        $(this).removeClass('mVersion');
        $(this).parents('.customScrollTabs').addClass('show default');

        $(this).parents('.customScrollTabs').find('.next, .prev').remove();
        // var th1 = $(this).find("li:eq(0)").height();
        // var th2 = $(this).find("li:eq(1)").height();
        // var elength = $(this).find('li').length;
        setTimeout(function() {

          $('.customScrollTabs.Default .customTabs').mCustomScrollbar({
            theme: "scrollTabsThm",
            axis: "x",
            contentTouchScroll: true,
            scrollButtons: {
              enable: true
            },
            mouseWheel: {
              enable: true,
              axis: "y"
            },
            scrollButtons: {
              enable: true,
              scrollType: "stepless"
            },
            advanced: {
              autoScrollOnFocus: false,
              updateOnContentResize: true,
              updateOnBrowserResize: true,
            },

            callbacks: {
              whileScrolling: function() {
                $(this).parents('.customScrollTabs').find('.next, .prev').show();
                $(this).parents('.customScrollTabs').removeClass('start, finish');
              },
              onTotalScroll: function() {
                $(this).parents('.customScrollTabs').find('.next').hide();
                $(this).parents('.customScrollTabs').addClass('finish');
                $(this).parents('.customScrollTabs').removeClass('start')
              },
              onTotalScrollBack: function() {
                $(this).parents('.customScrollTabs').find('.prev').hide();
                $(this).parents('.customScrollTabs').removeClass('finish');
                $(this).parents('.customScrollTabs').addClass('start')
              },
              onOverflowX: function() {
                $(this).mCustomScrollbar("scrollTo", '0%');
                $(this).parents('.customScrollTabs').removeClass('hideArrow');
                $(this).parents('.customScrollTabs').addClass('showShadow');
                $(this).parents('.customScrollTabs').addClass('showArrow');
                $(this).parents('.customScrollTabs').find('.next').show();
              },
              onOverflowXNone: function() {
                $(this).mCustomScrollbar("scrollTo", '0%');
                $(this).parents('.customScrollTabs').addClass('hideArrow');
                $(this).parents('.customScrollTabs').removeClass('showShadow');
                $(this).parents('.customScrollTabs').removeClass('showArrow');
                $(this).parents('.customScrollTabs').find('.next, .prev').hide();
              },
            },
          });
        }, 100);
        $(this).parents('.customScrollTabs').removeClass('show');
      })
    });
  }


  $('.customScrollTabs .tabActive').each(function() {
    var elTitle = $(this).parents('.customScrollTabs').find('.customTabs .active').text();
    $(this).parents('.customScrollTabs').find('.tabActive .title').html(elTitle);
  });

  customTabsIn();

  $(document).on("click", function(e) {

    if (!$(e.target).closest(".customScrollTabs .tabActive").length) {
      if ($('.customScrollTabs .tabActive').hasClass('active')) {
        $('.customScrollTabs .tabActive').removeClass('active');
        $('.customScrollTabs').removeClass('show');
        $('.customScrollTabs .customTabs.mVersion').slideUp('normal');
      }
    }

    e.stopPropagation();
  });

  $('.customScrollTabs .tabActive').click(function() {
    $(this).parents('.customScrollTabs').toggleClass('show');
    $(this).toggleClass('active');
    var tabs = $(this).parents('.customScrollTabs').find('.customTabs.mVersion');
    if (!tabs.is(':visible')) {
      tabs.slideDown('normal', function() {
        // console.log('hide');
      });
    } else {
      tabs.slideUp('normal', function() {
        // console.log('show');
      });
    }
  });

  $('.customScrollTabs .tab').click(function() {
    var elTitle = $(this).text();
    // console.log(elTitle);
    $(this).parents('.customScrollTabs').find('.tabActive .title').html("" + elTitle + "");
    $(this).parents('.customScrollTabs').find('.customTabs').mCustomScrollbar("scrollTo", this, {
      scrollEasing: "easeOut"
    });
  });

  $('.customScrollTabs .prev').click(function() {
    $(this).parents('.customScrollTabs').find('.next').show();
    setTimeout(function() {
      $(this).parents('.customScrollTabs').find('customTabs').mCustomScrollbar("scrollTo", '+=100');
    }, 50);
  });

  $('.customScrollTabs .next').click(function() {
    $(this).parents('.customScrollTabs').find('.prev').show();
    setTimeout(function() {
      $(this).parents('.customScrollTabs').find('.customTabs').mCustomScrollbar("scrollTo", '-=100');
    }, 50);
  });

  function tabsDestroy() {
    $('.customScrollTabs').removeClass('show');
    $('.customScrollTabs').removeClass('default');
    $('.customScrollTabs .customTabs').removeAttr('style');
    $('.customScrollTabs .customTabs').removeClass('mVersion');
    $('.customScrollTabs .tabActive').removeClass('active');
  }

  $(window).resize(function() {
    fromResize();
    tabsDestroy();
    customTabsIn();
  });

  $('label.error').click(function() {
    $(this).find('.error-message').fadeOut();
    $(this).removeClass('error');
  });

  //
  // //Табы
	// $(document).on("click", ".tabs__header--left", function(){
	// 	if($(window).outerWidth() > 500){
	// 		var parent = $(this).closest(".tabs");
	// 		var items = parent.find(".tabs__header__item");
	// 		var container = parent.find(".tabs__header__items");
	// 		var scrollLeft = container.scrollLeft();
	// 		var margin = ($(window).outerWidth() <= 1000) ? 24 : 48;
	// 		var buttonWidth = ($(window).outerWidth() <= 1000) ? 36 : 60;
  //
	// 		var leftPos = 0;
  //
	// 		$.each(items, function(index, el) {
	// 			if(leftPos < scrollLeft){
	// 				leftPos += $(this).outerWidth() + margin;
	// 				if(index == 0){
	// 					leftPos -= buttonWidth;
	// 				}
	// 			} else{
	// 				leftPos -= $(items[index - 1]).outerWidth() + margin;
	// 				return false;
	// 			}
	// 		});
	// 		container.animate({scrollLeft: leftPos}, 300, function(){
	// 			checkTabs();
	// 		});
	// 	}
	// });
	// $(document).on("click", ".tabs__header--right", function(){
	// 	if($(window).outerWidth() > 500){
	// 		var parent = $(this).closest(".tabs");
	// 		var items = parent.find(".tabs__header__item");
	// 		var container = parent.find(".tabs__header__items");
	// 		var scrollLeft = container.scrollLeft();
	// 		var leftPos = 0;
	// 		var margin = ($(window).outerWidth() <= 1000) ? 24 : 48;
	// 		var buttonWidth = ($(window).outerWidth() <= 1000) ? 36 : 60;
  //
	// 		$.each(items, function(index, el) {
	// 			if(leftPos <= scrollLeft + buttonWidth){
	// 				leftPos += $(this).outerWidth() + margin;
	// 				if(index == 0){
	// 					leftPos -= buttonWidth;
	// 				}
	// 			} else{
	// 				return false;
	// 			}
	// 		});
	// 		container.animate({scrollLeft: leftPos}, 300, function(){
	// 			checkTabs();
	// 		});
	// 	}
	// });
	// $(document).on("ps-scroll-x", ".tabs__header__items", function(){
	// 	checkTabs();
	// });
	// $(document).on("click", ".tabs__header__item", function() {
	// 	var item = $(this).attr("data-item");
	// 	var parent = $(this).closest(".tabs");
	// 	var buttonWidth = ($(window).outerWidth() <= 1000) ? 36 : 60;
	// 	var itemPosLeft = $(this).position().left;
	// 	var itemWidth = $(this).outerWidth();
	// 	var tabsEl = parent.find(".tabs__header__items");
  //
	// 	parent.find(".tabs__header__item").removeClass("active");
	// 	parent.find(".tabs__header__item[data-item=" + item + "]").addClass("active");
  //
	// 	parent.find(".tabs__body__item:visible").stop().fadeOut(300, function() {
	// 		parent.find(".tabs__body__item[data-item=" + item + "]").stop().fadeIn(300);
	// 		if(parent.find(".tabs__body__item[data-item=" + item + "]").find(".slick-slider").length){
	// 			parent.find(".tabs__body__item[data-item=" + item + "]").find(".slick-slider").slick('refresh');
	// 		}
	// 		if(navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
	// 			var evt = document.createEvent('UIEvents');
	// 			evt.initUIEvent('resize', true, false, window, 0);
	// 			window.dispatchEvent(evt);
	// 		} else {
	// 			window.dispatchEvent(new Event('resize'));
	// 		}
	// 	});
	// 	if($(window).outerWidth() > 500){
	// 		if(itemPosLeft + itemWidth > tabsEl.outerWidth() || itemPosLeft < 0) {
	// 			var left = itemPosLeft + tabsEl.scrollLeft() - buttonWidth;
	// 			tabsEl.stop().animate({"scrollLeft": left + "px"}, 300, function(){
	// 				checkTabs();
	// 			});
	// 		} else {
	// 			checkTabs();
	// 		}
	// 	} else{
	// 		var text = $(this).text();
	// 		$(this).closest(".tabs__header").find(".tabs__header__active--text").html(text);
	// 		$(this).closest(".tabs__header__body").stop().slideUp(300);
	// 		$(this).closest('.tabs__header').removeClass("active");
	// 	}
	// });
	// function checkTabs(){
	// 	if($(window).outerWidth() > 500){
	// 		$(document).find(".tabs__header").each(function(index, el) {
	// 			var parent = $(this).closest(".tabs");
	// 			var items = parent.find(".tabs__header__item");
	// 			var container = parent.find(".tabs__header__items");
	// 			var header = $(this);
	// 			var leftButton = header.find(".tabs__header--left");
	// 			var rightButton = header.find(".tabs__header--right");
	// 			var scrollLeft = container.scrollLeft();
	// 			var innerWidth = 0;
	// 			var margin = ($(window).outerWidth() <= 1000) ? 24 : 48;
	// 			var padding = ($(window).outerWidth() <= 1000) ? 40 : 0;
  //
	// 			$.each(items, function(index, el) {
	// 				innerWidth += $(this).outerWidth() + margin;
	// 			});
	// 			innerWidth -= margin;
  //
	// 			if(innerWidth > container.outerWidth()){
	// 				if(scrollLeft > 0){
	// 					leftButton.addClass("active");
	// 				} else{
	// 					leftButton.removeClass('active');
	// 				}
  //
	// 				if(parseInt(scrollLeft + container.outerWidth()) >= parseInt(innerWidth) + padding){
	// 					rightButton.removeClass("active");
	// 				} else {
	// 					rightButton.addClass("active");
	// 				}
	// 			} else{
	// 				rightButton.removeClass("active");
	// 				leftButton.removeClass('active');
	// 			}
	// 		});
	// 	}
	// }
	// checkTabs();
	// $(window).resize(function(event) {
	// 	checkTabs();
	// });
  //
	// $(document).on("click", ".tabs__header__active", function(){
	// 	var parent = $(this).closest('.tabs__header');
	// 	if(parent.hasClass('active')){
	// 		parent.find("a.ui-state-active").removeClass('ui-state-active');
	// 		parent.removeClass("active");
	// 		$(this).closest('.tabs__header').find(".tabs__header__body").stop().slideUp(300, function(){
	// 			$(this).css("height", "auto");
	// 		});
	// 	} else{
	// 		parent.find("a.ui-state-active").removeClass('ui-state-active');
	// 		parent.addClass("active");
	// 		$(this).closest('.tabs__header').find(".tabs__header__body").stop().slideDown(300, function() {
	// 			$(this).closest('.tabs__header').find(".tabs__header__items").perfectScrollbar("update");
	// 			$(this).css("height", "auto");
	// 		});
	// 	}
	// });
	// $(document).on("click", ".tabs__header .tabs__header__body a", function(){
	// 	var parent = $(this).closest('.tabs__header');
	// 	var value = $(this).attr("data-value");
	// 	var text = $(this).text();
  //
	// 	parent.find(".tabs__header__body").find(".active").removeClass('active');
	// 	$(this).closest('li').addClass('active');
  //
	// 	parent.find(".tabs__header__active--text").text(text);
	// 	parent.addClass("noempty");
  //
	// 	parent.find("a.ui-state-active").removeClass('ui-state-active');
	// 	parent.removeClass("active");
	// 	if($(window).outerWidth() <= 500){
	// 		$(this).closest('.tabs__header').find(".tabs__header__body").stop().slideUp(300, function(){
	// 			$(this).css("height", "auto");
	// 		});
	// 	}
	// });
	// //Табы END


});

//# sourceMappingURL=main.js.map
