'use strict';

$(document).ready(function() {

  var menu_selector = ".content_list ul"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
  var footer = $('#footer').outerHeight();
  $(".content_list ul:first-child").addClass("active");

  function onScroll() {
    var scroll_top = $(document).scrollTop();
    if ($(menu_selector + " a").length <= 1) return false
    $(menu_selector + " a").each(function() {
      var hash = $(this).attr("href")
      try {
        let prob = $(hash)
      } catch {
        return false
      }
      var target = $(hash)
      if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(menu_selector + " a.active").removeClass("active");
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

  $(document).on("scroll", onScroll);

  $(".content_list ul a").click(function() {
    $(document).off("scroll");
    $(menu_selector + " .active").removeClass("active");
    $(this).addClass("active");
    var hash = $(this).attr("href");
    var target = $(hash);
    $("html, body").animate({
      scrollTop: target.offset().top
    }, 250, function() {
      window.location.hash = hash;
      $(document).on("scroll", onScroll);
    });
  });

  $('.custom-select a').click(function() {
    $(this).parents('.custom-select').find('i').addClass('active')
    $(this).parents('.custom-select').find('.options').fadeIn();
    $(this).parents('.custom-select').find('.options-block').addClass('show');
  });

  $('.custom-select .options li').click(function() {
    var thisVal = $(this).html();
    $(this).parents('.custom-select').find('.options').fadeOut();
    $(this).parents('.custom-select').find('.options .red').removeClass('red')
    $(this).parents('.custom-select').find('a span').text(thisVal);
    $(this).parents('.custom-select').find('a i').removeClass('active')
    $(this).parents('.custom-select').find('.options-block').removeClass('show');
    $(this).addClass('red')
  })

  $("input,textarea").focus(function() {
    $(this).data("placeholder", $(this).attr("placeholder")), $(this).attr("placeholder", "")
  });

  $("input,textarea").blur(function() {
    $(this).attr("placeholder", $(this).data("placeholder"))
  });

  $('input[type="tel"]').inputmask("+7 (999) 999 99 99");
  $('.date input').inputmask("99.99.9999");

  $('.dropdown ul').each(function() {
    var th1 = $(this).parents('.dropdown').find('li:eq(0)').height();
    var th2 = $(this).parents('.dropdown').find('li:eq(1)').height();
    $(this).parents('.dropdown').find('ul').css('max-height', th1 + th2 + 36 + 'px');
    $(this).parents('.dropdown').find('ul').removeClass('show');
  })


  function dropdownClose() {
    $(".dropdown").each(function() {
      $(this).removeClass('active');
      $(this).find('ul').removeClass('show');
      $(this).find('i').removeClass('active');
    })
  }

  $('.dropdown input').click(function(e) {
    if ($(this).parents('.dropdown').hasClass('active')) {
      $(this).parents('.dropdown').removeClass('active');
      $(this).parents('.dropdown').find('i').toggleClass('active');
      $(this).parents('.dropdown').find('ul').toggleClass('show');
      e.stopPropagation()
    } else {
      dropdownClose();
      $(this).parents('.dropdown').addClass('active');
      $(this).parents('.dropdown').find('i').toggleClass('active');
      $(this).parents('.dropdown').find('ul').toggleClass('show');
      e.stopPropagation()
    }
  })

  $('.dropdown ul li').click(function() {
    var thisVal = $(this).html();
    $(this).parents('.dropdown').removeClass('active');
    $(this).parents('ul').removeClass('show');
    $(this).parents('.dropdown').find('i').removeClass('active')
    $(this).parents('.dropdown').find('input').val(thisVal);
  })

  $('ul.content .check, .accordion-menu .check').click(function() {
    $(this).parents('li').toggleClass('show');
  })

  $('.mapPopUp .list li').click(function() {
    var thisVal = $(this).html();
    $('.mapPopUp .list').find('.select').removeClass('select');
    $(this).addClass('select')
  })

  function closeAdd() {
    $('<button>', {
      html: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="#939393" d="M7.004 5.59l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95L.64 11.954l4.95-4.95-4.95-4.95L2.054.64z"/></svg>',
      class: 'fancybox-button fancybox-close-small CloseFancybox',
      title: 'close'
    }).appendTo('.fancybox-content').attr('data-fancybox-close', '');
    // $('body').addClass('hidden');
  }

  const targetElement = document.querySelector('body');

  $('[data-fancybox]').click(function() {
    $.fancybox.close();
    //   // $('form')[0].reset();
      $('[data-action="clear"]').each(function() {
        $(this).click();
      });
      $(this).attr('data-touch', 'false');
      $(this).attr('data-modal', 'true');

    $('.CloseFancybox').remove();
    setTimeout(closeAdd, 100);
    setTimeout(function () {
      $('.CloseFancybox').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $.fancybox.close();
        console.log('gogog');
        bodyScrollLock.enableBodyScroll(targetElement);
      });
    }, 100);
    bodyScrollLock.disableBodyScroll(targetElement);
  });



  $(".mapPopUp .mapSection .mapList").mCustomScrollbar({
    theme: "MapListThm",
  });

  $(".mapBlock .mapSection .mapList").mCustomScrollbar({
    theme: "MapListThm",
  });

  $(".mapBlock .mapSection .mapList .list__item:lt(3)").show().addClass('show');

  $('.mapBlock .seeMore').click(function() {
    var showed = $(".mapBlock .mapSection .mapList .list__item.show").length;
    var i = showed;
    $(".mapBlock .mapSection .mapList .list__item").eq(i).show().addClass('show');
  });

  $(".headerMenu .submenu").mCustomScrollbar({
    theme: "SubmenuScrollThm",
  });

  $('.openShedule a').click(function() {
    $(this).closest('.openShedule').toggleClass('active');
    $(this).closest('.openShedule').next().toggleClass('show');
  })

  $('footer .partition').find('li:eq(0)').append('<i class="ri-arrow-down-s-line"></i>');

  $('footer .partition').find('li:eq(0)').click(function(e) {
    if ($(this).hasClass('autoHeight')) {
      $(this).removeClass('autoHeight');
      e.stopPropagation();
    } else {
      $(this).parent('ul').toggleClass('autoHeight');
    }
  })

  $(document).on('click', function(e) {

    if (!$(e.target).closest(".parent_block").length) {
      $('.toggled_block').hide();
    }

    if (!$(e.target).closest(".dropdown").length) {
      dropdownClose();
    }

    if (!$(e.target).closest(".custom-select").length) {
      $('.options-block').removeClass('show')
      $('.options').hide();
    }

    if (!$(e.target).closest("footer .partition").length) {
      $('footer .partition').removeClass('autoHeight');
    }

    if (!$(e.target).closest(".headerMenu li").length) {
      $('.headerMenu .submenu').fadeOut();
      $('.headerMenu li').removeClass('active');
    }

    if (!$(e.target).closest(".burger").length) {
      $('.headerMenu').removeClass('show')
      $('.mobileBottom').removeClass('show')
      $('.burger').removeClass('active')
    }

    e.stopPropagation();
  });

  $('.burger :eq(0)').on('click', function(e) {
    $('.burger').addClass('active');
    $('.headerMenu').addClass('show')
    $('.mobileBottom').addClass('show')
    if ($(window).width() >= 640) {
      $('.headerMenu li :eq(0)').click();
    }
    e.stopPropagation()
  })

  $('.burger :eq(1)').on('click', function(e) {
    $('.burger').removeClass('active');
    $('.headerMenu').removeClass('show');
    $('.mobileBottom').removeClass('show');
    e.stopPropagation()
  })

  $(".headerMenu li").click(function(e) {
    $('.burger').addClass('active');
    $('.headerMenu').addClass('show');
    $(".headerMenu li").removeClass('active');
    $(this).toggleClass('active');
    $('.headerMenu .submenu').hide();
    $(this).find('.submenu').fadeIn();
    e.stopPropagation()
  })

  $('.topSlider .slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'ease-in-out',
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
      breakpoint: 600,
      settings: {
        arrows: false
      }
    }]
  })

  $('.dnk_slider .slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'ease-in-out',
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
        dots: false
      }
    }]
  })

  $('.clientHistorySlider .slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'ease-in-out',
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
      }
    }]
  })

  $('.videoSlider .slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'ease-in-out',
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
      }
    }]
  })

  $('.literatePatientSchoolSlider .slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'ease-in-out',
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
      }
    }, {
      breakpoint: 681,
      settings: {
        slidesToShow: 1,
      }
    }]
  })

  $('.partnersSlider .slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'ease-in-out',
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
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })



  $('.sliderNav .prev').click(function() {
    $(this).parents('section').find('.slick-slider').slick('slickPrev');
  });

  $('.sliderNav .next').click(function() {
    $(this).parents('section').find('.slick-slider').slick('slickNext');
  });
  // $(".tabsContainer").mCustomScrollbar({
  //   theme: "tabsContainerScrollThm",
  //   axis: "x" // vertical and horizontal scrollbar
  // });

  $(".tabs .tab").click(function() {
    $(this).parents('.tabs').find('.active').removeClass('active');
    $(this).addClass('active');
  })

  $('.direction_of_activity-list__item span').append('<i class="ri-arrow-right-s-line"></i>');

  $('.stars.static').each(function() {
    if ($(this).hasClass('star-0')) {
      $(this).append('<i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>')
    }
    if ($(this).hasClass('star-10')) {
      $(this).append('<i class="ri-star-half-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>')
    }
    if ($(this).hasClass('star-20')) {
      $(this).append('<i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>')
    }
    if ($(this).hasClass('star-30')) {
      $(this).append('<i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>')
    }
    if ($(this).hasClass('star-40')) {
      $(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>')
    }
    if ($(this).hasClass('star-50')) {
      $(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i></i><i class="ri-star-line"></i>')
    }
    if ($(this).hasClass('star-60')) {
      $(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>')
    }
    if ($(this).hasClass('star-70')) {
      $(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i>')
    }
    if ($(this).hasClass('star-80')) {
      $(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i>')
    }
    if ($(this).hasClass('star-90')) {
      $(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>')
    }
    if ($(this).hasClass('star-100')) {
      $(this).append('<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>')
    }
  })

  $('.review a').click(function() {
    $(this).parents('.review').toggleClass('show');
  })
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('.stars a').on('mouseover', function() {
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('a.star').each(function(e) {
      if (e < onStar) {
        $(this).addClass('hover');
      } else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', function() {
    $(this).parent().children('a.star').each(function(e) {
      $(this).removeClass('hover');
    });
  });


  $('.stars a').on('click', function() {
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('a.star');
    var i = 0;
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }

    var ratingValue = parseInt($('.stars a.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 3) {
      msg = "Всё AllRight!";
      $('.success-box .btn').removeClass('show');
      $('.success-box .text-message').hide();
    } else {
      msg = "Недовольны диспансеризацией? Оставьте жалобу, чтобы мы смогли разобраться в сложившейся ситуцаии и помочь вам.";
      $('.success-box .btn').addClass('show');
      $('.success-box .text-message').show();
    }
    responseMessage(msg);

  });

  function responseMessage(msg) {
    $('.success-box').fadeIn(200);
    $('.success-box .text-message').html("" + msg + "");
  };

  $('.swipeTopDown').on('click', function() {
    $(this).parents('.list').toggleClass('active');
  });

});

//# sourceMappingURL=main.js.map
