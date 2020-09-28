"use strict";

$(document).ready(function() {
  var footer = $("#footer").outerHeight();
  var anchor = false;

  $(".content_list ul:first-child").addClass("active");

  $(".content_list ul a").each(function() {
    var hash = $(this).attr("href");
    if (hash.indexOf('#') !== -1) {
      anchor = true;

    }

    if (anchor) {
      $(".content_list ul a").each(function() {
        var hash = $(this).attr("href");
        $(hash).each(function() {
          var elHash = $(this).attr('id');
          if ($(this).length > 0) {
            console.log('есть');
            $('.content_list ul a[href="#' + elHash + '"]').addClass('dontRemove');
          }
          $(this).not(".dontRemove").remove();
        });
      });
    };
  });

  function onScroll() {
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
  };

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

    $(".headerMenu .submenu").each(function() {
      if ($(window).width() >= 1079) {
        $(this).mCustomScrollbar("destroy");
      } else {
        $(this).mCustomScrollbar({
          theme: "SubmenuScrollThm",
        });
      }
    })
  };

  fromResize();



  $(".citiesBlock").mCustomScrollbar({
    theme: "citiesBlockThm",
  });

  $('.search input[type="search"]').hideseek({
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

  $(".burger").on("click", function(e) {
    $(this).toggleClass("active");
    $(".headerMenu").toggleClass("show");
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

  function customTabsIn() {
    $('.customScrollTabs').each(function() {

      if ($(window).width() >= 640) {
        $('.customScrollTabs .customTabs').removeClass('show, mVersion, default');
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
          } else if (elength < 3) {
            $(this).addClass('default');

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
        setTimeout(function () {
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
        $(this).parents('.customScrollTabs').addClass('show, default');
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
    $(this).parents('.customScrollTabs').find('.tabActive .title').html(""+elTitle+"");
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

  $(window).resize(function() {
    fromResize();
    customTabsIn();
  });

});

//# sourceMappingURL=main.js.map
