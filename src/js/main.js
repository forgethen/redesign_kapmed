"use strict";

$(document).ready(function() {
  var footer = $("#footer").outerHeight();
  var anchor = false;

  $(".content_list ul:first-child").addClass("active");

  $("a.slow").click(function() {
    var e = $(this).attr("href");
    if (e.indexOf('#') === -1)
      return false;

    var k = $(e).offset().top;
    return $("html,body").animate({
      scrollTop: k
    }, 750), !1
  });

  $(".content_list ul a").each(function() {
    var hash = $(this).attr("href");
    if (hash.indexOf('#') !== -1) {
      $(hash).each(function() {
        var elHash = $(this).attr('id');
        if ($(this).length > 0) {
          $('.content_list ul a[href="#' + elHash + '"]').addClass('dontRemove');
        } else {
          $('.content_list ul a[href="#' + elHash + '"]').remove();
        }
      })
    }
  });

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
          target.offset().top > $(document).scrollTop() &&
          target.offset().top < $(document).scrollTop() + $(window).height()
        ) {
          $(".content_list ul a.active").removeClass("active");
          $(this).addClass("active");
          return false;
        } else {
          $(this).removeClass("active");
        }
      });
    }
  }

  $(document).on("scroll", onScroll);

  $(".content_list ul a").click(function(e) {

    $(document).off("scroll");
    $(".content_list ul .active").removeClass("active");
    $(this).addClass("active");
    var hash = $(this).attr("href");
    var target;

    if (hash.indexOf('.') === 0) {
      e.preventDefault();
      var text = hash.slice(1);
      $(':header').each(function() {
        let textH = $(this).text();
        if (textH === text) {
          target = $(this);
        }
      })
    } else if (hash.indexOf('/') === 0) {
      document.location.href = hash;
      return true;
    } else {
      target = $(hash);
    }

    if ($(window).width() >= 1080) {
      var hh = $('header .fromHeaderMenu').height() + 16;
    } else {
      var hh = $('.top-container').height() + 12;
    }

    window.location.hash = hash;
    $(document).on("scroll", onScroll);

    $("html, body").animate({
        scrollTop: target.offset().top - hh,
      },
      750,
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

  $(".doc .see, .doc .detail").click(function(e) {
    $(this).toggleClass("active");
    $(this).parents(".doc").find(".answer").toggleClass("show");
    e.preventDefault();
    e.stopPropagation(); //На всякий случай
    e.stopImmediatePropagation(); //Тоже на всякий случай
    return false; // И чтоб точно не сработало :)
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

  // $(".content__item i").click(function() {
  // $(this).parents('li').toggleClass("show");
  $(".content__item").click(function() {
    $(this).toggleClass("show");
  });

  $(".mapPopUp .list li").click(function() {
    var thisVal = $(this).html();
    $(".mapPopUp .list").find(".select").removeClass("select");
    $(this).addClass("select");
  });

  $(".mapPopUp .mapSection .mapList").mCustomScrollbar({
    theme: "MapListThm",
  });

  function contenListUl() {
    $('.content_list ul').each(function() {
      var h1 = $(window).outerHeight();
      var h3 = $(this).outerHeight();
      if ($(window).width() >= 1080) {
        var h2 = $('header .fromHeaderMenu').outerHeight();
        var elh = (((h1 - h2 - h3) / 2) / 10);
        if (elh >= h2) {
          var elMath = Math.round(elh)
        } else {
          var elN = (((h1 - h2 - h3) / 2) / 10);
          var elh = ((((h1 - h2 - h3) + h2 - elN) / 2) / 10);
          var elMath = Math.round(elh)
        }
      } else {
        var h2 = $('header').outerHeight();
        var elh = (h1 - h2 - h3) / 2 / 10 + h2 / 10
        var elMath = Math.round(elh)
      }
      $(this).css('top', elMath + "rem");
    })
  }

  // $(window).scroll(function() {
  //
  //   if ($(window).width() >= 1080) {
  //     var h2 = $('header .fromHeaderMenu').outerHeight();
  //     if ($(this).scrollTop() > h2) {
  //       contenListUl()
  //     } else {
  //       contenListUl()
  //     }
  //   } else {
  //     contenListUl()
  //   }
  //
  // });

  function hhh() {
    if ($(window).width() <= 639) {
      var tph = $('header .top-container').outerHeight();
      // var wh = Math.max(
      //     document.body.scrollHeight, document.documentElement.scrollHeight,
      //     document.body.offsetHeight, document.documentElement.offsetHeight,
      //     document.body.clientHeight, document.documentElement.clientHeight
      // );
      // var wh = $(window).height()
      var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        wh = w.innerHeight || e.clientHeight || g.clientHeight;
      $('.fromHeaderMenu').css('min-height', wh - tph + 'px');
      $('.fromHeaderMenu').css('height', wh - tph + 'px');
      $('.fromHeaderMenu').css('max-height', wh - tph + 'px');
      // $('.fromHeaderMenu').css('height', 'calc(100vh - ' + '' + tph + 'px)');
    } else(
      $('.fromHeaderMenu').removeAttr('style')
    )
  }

  // function fromResize() {

  $(".mapBlock .mapSection .mapList").each(function() {
    if ($(window).width() >= 640) {
      $(this).mCustomScrollbar({
        theme: "MapListThm",
      });
    } else {
      $(this).mCustomScrollbar("destroy");
    }
  });

  // $('.content_list ul').each(function() {
  //   if ($(window).width() >= 1080) {
  //     var hh = $('header .fromHeaderMenu').height();
  //     // console.log(hh);
  //     $(this).css('top', hh + 12 + 'px');
  //   } else {
  //     var hh = $('.top-container').height();
  //     // console.log(hh);
  //     $(this).css('top', hh + 12 + 'px');
  //   }
  // });

  contenListUl();

  $(".headerMenu .submenu").each(function() {
    if ($(window).width() >= 1081) {
      $(this).find('.container').removeAttr('style')
      $('.fromHeaderMenu').mCustomScrollbar("destroy");
      $('.fromHeaderMenu .headerMenu.mobile').mCustomScrollbar("destroy");
      $('.fromHeaderMenu .submenu').mCustomScrollbar("destroy");
      // setTimeout(function() {
      //   var elWidth = $('.headerMenu').outerWidth();
      //   $('.headerMenu .submenu .container').css('max-width', elWidth + 'px');
      // }, 200);
    } else if ($(window).width() <= 639) {

      $('.fromHeaderMenu').each(function() {
        $(this).mCustomScrollbar("destroy");
      });

      $('.burger').click();

      $('.fromHeaderMenu .submenu, .fromHeaderMenu .headerMenu.mobile').mCustomScrollbar({
        theme: "SubmenuScrollThm",
        mouseWheel: {
          scrollAmount: 60,
          normalizeDelta: true
        }
      });

      $('.burger').click();

    } else {

      $(this).find('.container').css('max-width', '100%');
      $('.fromHeaderMenu .headerMenu.mobile').mCustomScrollbar("destroy");

      $('.burger').click();

      $('.fromHeaderMenu, .fromHeaderMenu .submenu').mCustomScrollbar({
        theme: "SubmenuScrollThm",
        mouseWheel: {
          scrollAmount: 60,
          normalizeDelta: true
        }
      });

      $('.burger').click();

    }

  });

  $(".headerMenu .submenu").each(function() {

    if ($(window).width() >= 1081) {
      $(this).find('.container').removeAttr('style')
      $('.fromHeaderMenu').mCustomScrollbar("destroy");
      $('.fromHeaderMenu .submenu').mCustomScrollbar("destroy");
      // setTimeout(function() {
      //   var elWidth = $('.headerMenu').outerWidth();
      //   $('.headerMenu .submenu .container').css('max-width', elWidth + 'px');
      // }, 200);
    } else {
      $(this).find('.container').css('max-width', '100%');
      $('.burger').click();
      $('.fromHeaderMenu, .fromHeaderMenu .submenu').mCustomScrollbar({
        theme: "SubmenuScrollThm",
        mouseWheel: {
          scrollAmount: 60,
          normalizeDelta: true
        }
      });
      $('.burger').click();
      $('.fromHeaderMenu .submenu').each(function() {
        if ($(window).width() <= 639) {
          $(this).mCustomScrollbar("destroy");
        }
      });
    }
    // hhh();
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

  $('.top-container').each(function() {
    var hh = $(this).height();
    // console.log(hh);
    if ($(window).width() <= 1080) {
      $('.allContent').css('padding-top', '' + hh + 'px');
      $('#citySelectPopUp.active').css('top', '' + hh + 'px');
    } else(
      $('.allContent').removeAttr('style')
    )
  });

  // }
  //
  // fromResize();

  $(".citiesBlock").mCustomScrollbar({
    theme: "citiesBlockThm",
  });

  $('.search input[type="search"], .search input[type="text"]').hideseek({
    nodata: "Поиск не дал результатов",
    navigation: true,
  });

  // $(".mapBlock .mapSection .mapList .list__item:lt(3)").show().addClass("show");

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

  $('.headerMenu.mobile li').click(function(e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      e.stopPropagation();
    } else {
      $('.headerMenu.mobile li').removeClass('active')
      $(this).addClass('active');
    }
    hhh();
  })

  $(".burger").on("click", function() {
    if ($(this).hasClass('active')) {
      $('header .top-container div:eq(0)').removeClass('hide');
      var scrollPos = localStorage.getItem('scrollPos');
      $('body').removeClass('menuOpened');
      setTimeout(function() {
        $(window).scrollTop(scrollPos);
      }, 10);
      $('.fromHeaderMenu').removeAttr('style');
    } else {
      $('header .top-container div:eq(0)').addClass('hide');
      let scrollPos = $(window).scrollTop();
      localStorage.setItem('scrollPos', scrollPos);
      $('body').addClass('menuOpened');
      setTimeout(function() {
        $(window).scrollTop(scrollPos);
      }, 10);
      hhh();
    }
    $(this).toggleClass("active");
    $(".headerMenu.mobile").toggleClass("show");
    $(".mobileBottom").toggleClass("show");
    // e.stopPropagation();
  });

  $(".topSlider .slider").slick({
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    cssEase: "ease-in-out",
    draggable: true,
    autoplay: true,
    autoplayspeed: 5000,
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
    autoplay: true,
    autoplayspeed: 8000,
    slidesToShow: 1,
    slideToScroll: 1,
    speed: 2500,
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

  $('.customScrollTabs .customTabs').each(function() {
    if ($(this).parents('.customScrollTabs').hasClass('standart')) {
      $(this).parents('.customScrollTabs').addClass('default')
    } else {
      $(this).parents('.customScrollTabs').addClass('custom')
    }
  });

  $('.customScrollTabs.standart .customTabs').mCustomScrollbar({
    theme: "scrollTabsThm",
    axis: "x",
    contentTouchScroll: true,
    scrollButtons: {
      enable: true
    },
    mouseWheel: {
      enable: true,
      axis: "y",
      scrollAmount: 60,
      normalizeDelta: true
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
        $(this).parents('.customScrollTabs').find('.next, .prev').removeClass('hide');
        $(this).parents('.customScrollTabs').removeClass('start');
        $(this).parents('.customScrollTabs').removeClass('finish');
      },
      onTotalScroll: function() {
        $(this).parents('.customScrollTabs').find('.next').addClass('hide');
        $(this).parents('.customScrollTabs').addClass('finish');
        $(this).parents('.customScrollTabs').removeClass('start')
      },
      onTotalScrollBack: function() {
        $(this).parents('.customScrollTabs').find('.prev').addClass('hide');
        $(this).parents('.customScrollTabs').removeClass('finish');
        $(this).parents('.customScrollTabs').addClass('start')
      },
      onOverflowX: function() {
        $(this).mCustomScrollbar("scrollTo", '0%');
        $(this).parents('.customScrollTabs').removeClass('hideArrow');
        $(this).parents('.customScrollTabs').addClass('showShadow');
        $(this).parents('.customScrollTabs').addClass('start')
        $(this).parents('.customScrollTabs').addClass('showArrow');
        $(this).parents('.customScrollTabs').find('.prev').addClass('hide');
        $(this).parents('.customScrollTabs').find('.next').removeClass('hide');
      },
      onOverflowXNone: function() {
        $(this).mCustomScrollbar("scrollTo", '0%');
        $(this).parents('.customScrollTabs').removeClass('finish');
        $(this).parents('.customScrollTabs').addClass('start');
        $(this).parents('.customScrollTabs').addClass('hideArrow');
        $(this).parents('.customScrollTabs').removeClass('showShadow');
        $(this).parents('.customScrollTabs').removeClass('showArrow');
        $(this).parents('.customScrollTabs').find('.next, .prev').addClass('hide');
      },
    },
  });

  function customTabsIn() {

    $('.customScrollTabs.custom .customTabs').each(function() {
      var elength = $(this).find('li').length;

      if (elength > 2 && $(window).width() <= 640) {
        $(this).parents('.customScrollTabs.custom').addClass('mVersion');
        $(this).parents('.customScrollTabs.custom').removeClass('default');
        $(this).mCustomScrollbar("destroy");
      } else {
        $(this).parents('.customScrollTabs.custom').removeClass('mVersion');
        $(this).parents('.customScrollTabs.custom').addClass('default');
        setTimeout(function() {
          $('.custom.default .customTabs').mCustomScrollbar({
            theme: "scrollTabsThm",
            axis: "x",
            contentTouchScroll: true,
            scrollButtons: {
              enable: true
            },
            mouseWheel: {
              enable: true,
              axis: "y",
              scrollAmount: 60,
              normalizeDelta: true
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
                $(this).parents('.customScrollTabs').find('.next, .prev').removeClass('hide');
                $(this).parents('.customScrollTabs').removeClass('start');
                $(this).parents('.customScrollTabs').removeClass('finish');
              },
              onTotalScroll: function() {
                $(this).parents('.customScrollTabs').find('.next').addClass('hide');
                $(this).parents('.customScrollTabs').addClass('finish');
                $(this).parents('.customScrollTabs').removeClass('start')
              },
              onTotalScrollBack: function() {
                $(this).parents('.customScrollTabs').find('.prev').addClass('hide');
                $(this).parents('.customScrollTabs').removeClass('finish');
                $(this).parents('.customScrollTabs').addClass('start')
              },
              onOverflowX: function() {
                $(this).mCustomScrollbar("scrollTo", '0%');
                $(this).parents('.customScrollTabs').removeClass('hideArrow');
                $(this).parents('.customScrollTabs').addClass('showShadow');
                $(this).parents('.customScrollTabs').addClass('start')
                $(this).parents('.customScrollTabs').addClass('showArrow');
                $(this).parents('.customScrollTabs').find('.prev').addClass('hide');
                $(this).parents('.customScrollTabs').find('.next').removeClass('hide');
              },
              onOverflowXNone: function() {
                $(this).mCustomScrollbar("scrollTo", '0%');
                $(this).parents('.customScrollTabs').removeClass('finish');
                $(this).parents('.customScrollTabs').addClass('start');
                $(this).parents('.customScrollTabs').addClass('hideArrow');
                $(this).parents('.customScrollTabs').removeClass('showShadow');
                $(this).parents('.customScrollTabs').removeClass('showArrow');
                $(this).parents('.customScrollTabs').find('.next, .prev').addClass('hide');
              },
            },
          });
        }, 100);
      }
    });
    $('.customScrollTabs .customTabs').mCustomScrollbar("scrollTo", '0%');
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
      tabs.slideDown('normal', function() {});
    } else {
      tabs.slideUp('normal', function() {});
    }
  });

  $('.customScrollTabs .tab').click(function() {
    var elTitle = $(this).text();
    $(this).parents('.customScrollTabs').find('.tabActive .title').html("" + elTitle + "");
    $(this).parents('.customScrollTabs').find('.customTabs').mCustomScrollbar("scrollTo", this, {
      scrollInteria: 120
    });
    $(this).parents('.customScrollTabs').find('li').removeClass('thisEl');
    $(this).parents('.customScrollTabs').find('li').removeClass('thisNext');
    $(this).parents('.customScrollTabs').find('li').removeClass('thisPrev');
    $(this).parents('li').addClass('thisEl');
    $(this).parents('li').next().addClass('thisNext');
    $(this).parents('li').prev().addClass('thisPrev');
  });

  $('.customScrollTabs .tabs').each(function() {
    $(this).find('li').eq(0).addClass('thisEl');
    $(this).find('.thisEl').next().addClass('thisNext');
    $(this).find('.thisEl').prev().addClass('thisPrev');
  });

  // $('.customScrollTabs .tab.active').each(function() {
  //   $(this).parents('li').addClass('thisEl');
  //   $(this).parents('li').next().addClass('thisNext');
  //   $(this).parents('li').prev().addClass('thisPrev');
  // });

  // $('.customScrollTabs .customTabs .thisEl').each(function() {
  //   $(this).parents('.customTabs').mCustomScrollbar("scrollTo", this, {
  //     scrollInteria: 250
  //   });
  // });

  $('.customScrollTabs .prev').remove();
  $('.customScrollTabs .next').remove();

  $('.customScrollTabs .prev').click(function() {
    $(this).parents('.customScrollTabs').find('.next').show();
    // var prevEl = $(this).parents('.customScrollTabs').find('.thisPrev');
    $(this).parents('.customScrollTabs').find('.customTabs').mCustomScrollbar("scrollTo", $(this).parents('.customScrollTabs').find('.thisPrev'), {
      scrollInteria: 120
    });

    $(this).parents('.customScrollTabs').find('.thisPrev').addClass('thisPos');

    $(this).parents('.customScrollTabs').find('li').removeClass('thisPrev');
    $(this).parents('.customScrollTabs').find('li').removeClass('thisEl');
    $(this).parents('.customScrollTabs').find('li').removeClass('thisNext');

    $(this).parents('.customScrollTabs').find('.thisPos').next().addClass('thisNext')
    $(this).parents('.customScrollTabs').find('.thisPos').prev().addClass('thisPrev')
    $(this).parents('.customScrollTabs').find('.thisPos').addClass('thisEl')

    $(this).parents('.customScrollTabs').find('.thisEl').removeClass('thisPos');
  });
  //
  $('.customScrollTabs .next').click(function() {
    $(this).parents('.customScrollTabs').find('.prev').show();
    // var nextEl = $(this).parents('.customScrollTabs').find('.thisNext');
    $(this).parents('.customScrollTabs').find('.customTabs').mCustomScrollbar("scrollTo", $(this).parents('.customScrollTabs').find('.thisNext'), {
      scrollInteria: 120
    });
    $(this).parents('.customScrollTabs').find('.thisNext').addClass('thisPos');

    $(this).parents('.customScrollTabs').find('li').removeClass('thisPrev');
    $(this).parents('.customScrollTabs').find('li').removeClass('thisEl');
    $(this).parents('.customScrollTabs').find('li').removeClass('thisNext');

    $(this).parents('.customScrollTabs').find('.thisPos').next().addClass('thisNext')
    $(this).parents('.customScrollTabs').find('.thisPos').prev().addClass('thisPrev')
    $(this).parents('.customScrollTabs').find('.thisPos').addClass('thisEl')

    $(this).parents('.customScrollTabs').find('.thisEl').removeClass('thisPos');
  });

  function tabsDestroy() {
    $('.customScrollTabs').removeClass('show');
    $('.customScrollTabs .customTabs').removeAttr('style');
    $('.customScrollTabs .tabActive').removeClass('active');
  }

  $(window).resize(function() {
    // fromResize();
    tabsDestroy();
    customTabsIn();
    contenListUl();
    // previewNews();
  });

  $('label.error').click(function() {
    $(this).find('.error-message').fadeOut();
    $(this).removeClass('error');
  });

  $('.to-top').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

  $('.newsPreview').each(function() {
    if ($(window).width() < 1081) {
      $('.newsPreview .row-responsive').slick({
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
            breakpoint: 981,
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
    }
  })

  $(".headerMenu.desktop li").removeAttr('onmouseover')
  $(".headerMenu.desktop li").removeAttr('onmouseout')

  $(".headerMenu.desktop li").hover(function() {
    var el = $(this);
    var timeout = setTimeout(function() {
      el.addClass("hovered");
    }, 1000);
    el.data("timeout", timeout);
  }, function() {
    clearTimeout($(this).removeClass("hovered").data("timeout"));
  });

  // $('.custom-select').each(function() {
  //   if ($(window).width() > 640) {
  //     $(this).append('<div class="hint"></div>')
  //     setInterval(function() {
  //       setTimeout(function() {
  //         $('.custom-select .hint').addClass('show')
  //       }, 2000);
  //       setTimeout(function() {
  //         $('.custom-select .hint').removeClass('show')
  //       }, 8000);
  //     }, 16000);
  //   } else {
  //     return false;
  //   }
  // });

  $('body .slider-root').swipe({
    //Generic swipe handler for all directions
    swipeRight: function(event, direction, distance, duration, fingerCount) {
      var right = $(this).find('.sectionTitle .prev')
      if ($(right).hasClass('locked')) {
        // console.log('false swipe left');
        return false;
      } else {
        $(right).click()
      }
      // console.log("You swiped " + direction);
    },
    swipeLeft: function(event, direction, distance, duration, fingerCount) {
      var left = $(this).find('.sectionTitle .next')
      if ($(left).hasClass('locked')) {
        // console.log('false swipe right');
        return false;
      } else {
        $(left).click()
      }
      // console.log("You swiped " + direction);
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 20
  });

});

//# sourceMappingURL=main.js.map
