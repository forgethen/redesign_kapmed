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
    $('.custom-select a i').addClass('active')
    $('.custom-select .options').fadeIn();
  });

  $('.custom-select .options li').click(function() {
    var thisVal = $(this).html();
    $('.custom-select .options').fadeOut();
    $('.custom-select .options .red').removeClass('red')
    $('.custom-select a span').text(thisVal);
    $('.custom-select a i').removeClass('active')
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
  $('form .dropdown ul').each(function() {
    var th1 = $(this).find('li:eq(0)').height();
    var th2 = $(this).find('li:eq(1)').height();
    $('form .dropdown ul').css('max-height', th1 + th2 + 36 + 'px').hide()
  })
  $('form .dropdown input').click(function() {
    $('.dropdown i').addClass('active')
    $('form .dropdown ul').fadeIn()
  })
  $('form .dropdown ul li').click(function() {
    var thisVal = $(this).html();
    $('form .dropdown ul').fadeOut();
    $('.dropdown i').removeClass('active')
    $('form .dropdown input').val(thisVal);
  })



  $('ul.content li, .FAQ li').click(function() {
    $('ul.content li, .FAQ li').removeClass('show');
    $(this).addClass('show');
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
  }

  $('[data-fancybox]').click(function() {
    $.fancybox.close();
    $('form')[0].reset();
    $('[data-action="clear"]').each(function() {
      $(this).click();
    });
    $(this).attr('data-touch', 'false');
    $(this).attr('data-modal', 'true');
    $('.CloseFancybox').remove();
    setTimeout(closeAdd, 100);
  });

  $(".mapPopUp .mapSection .mapList").mCustomScrollbar({
    theme: "MapListThm",
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
      $('footer .partition').removeClass('autoHeight');
      $(this).parent('ul').addClass('autoHeight');
    }
  })

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".parent_block").length) {
      $('.toggled_block').hide();
    }
    if (!$(e.target).closest(".form .dropdown ul").length) {
      $("form .dropdown ul").fadeOut();
      $('.dropdown i').removeClass('active');
    }
    if (!$(e.target).closest("footer .partition").length) {
      $('footer .partition').removeClass('autoHeight');
    }

    e.stopPropagation();
  });

});

//# sourceMappingURL=main.js.map
