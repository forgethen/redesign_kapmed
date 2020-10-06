
//Табы
$(document).on("click", ".tabs__header--left", function(){
	if($(window).outerWidth() > 500){
		var parent = $(this).closest(".tabs");
		var items = parent.find(".tabs__header__item");
		var container = parent.find(".tabs__header__items");
		var scrollLeft = container.scrollLeft();
		var margin = ($(window).outerWidth() <= 1000) ? 24 : 48;
		var buttonWidth = ($(window).outerWidth() <= 1000) ? 36 : 60;

		var leftPos = 0;

		$.each(items, function(index, el) {
			if(leftPos < scrollLeft){
				leftPos += $(this).outerWidth() + margin;
				if(index == 0){
					leftPos -= buttonWidth;
				}
			} else{
				leftPos -= $(items[index - 1]).outerWidth() + margin;
				return false;
			}
		});
		container.animate({scrollLeft: leftPos}, 300, function(){
			checkTabs();
		});
	}
});
$(document).on("click", ".tabs__header--right", function(){
	if($(window).outerWidth() > 500){
		var parent = $(this).closest(".tabs");
		var items = parent.find(".tabs__header__item");
		var container = parent.find(".tabs__header__items");
		var scrollLeft = container.scrollLeft();
		var leftPos = 0;
		var margin = ($(window).outerWidth() <= 1000) ? 24 : 48;
		var buttonWidth = ($(window).outerWidth() <= 1000) ? 36 : 60;

		$.each(items, function(index, el) {
			if(leftPos <= scrollLeft + buttonWidth){
				leftPos += $(this).outerWidth() + margin;
				if(index == 0){
					leftPos -= buttonWidth;
				}
			} else{
				return false;
			}
		});
		container.animate({scrollLeft: leftPos}, 300, function(){
			checkTabs();
		});
	}
});
$(document).on("ps-scroll-x", ".tabs__header__items", function(){
	checkTabs();
});
$(document).on("click", ".tabs__header__item", function() {
	var item = $(this).attr("data-item");
	var parent = $(this).closest(".tabs");
	var buttonWidth = ($(window).outerWidth() <= 1000) ? 36 : 60;
	var itemPosLeft = $(this).position().left;
	var itemWidth = $(this).outerWidth();
	var tabsEl = parent.find(".tabs__header__items");

	parent.find(".tabs__header__item").removeClass("active");
	parent.find(".tabs__header__item[data-item=" + item + "]").addClass("active");

	parent.find(".tabs__body__item:visible").stop().fadeOut(300, function() {
		parent.find(".tabs__body__item[data-item=" + item + "]").stop().fadeIn(300);
		if(parent.find(".tabs__body__item[data-item=" + item + "]").find(".slick-slider").length){
			parent.find(".tabs__body__item[data-item=" + item + "]").find(".slick-slider").slick('refresh');
		}
		if(navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
			var evt = document.createEvent('UIEvents');
			evt.initUIEvent('resize', true, false, window, 0);
			window.dispatchEvent(evt);
		} else {
			window.dispatchEvent(new Event('resize'));
		}
	});
	if($(window).outerWidth() > 500){
		if(itemPosLeft + itemWidth > tabsEl.outerWidth() || itemPosLeft < 0) {
			var left = itemPosLeft + tabsEl.scrollLeft() - buttonWidth;
			tabsEl.stop().animate({"scrollLeft": left + "px"}, 300, function(){
				checkTabs();
			});
		} else {
			checkTabs();
		}
	} else{
		var text = $(this).text();
		$(this).closest(".tabs__header").find(".tabs__header__active--text").html(text);
		$(this).closest(".tabs__header__body").stop().slideUp(300);
		$(this).closest('.tabs__header').removeClass("active");
	}
});
function checkTabs(){
	if($(window).outerWidth() > 500){
		$(document).find(".tabs__header").each(function(index, el) {
			var parent = $(this).closest(".tabs");
			var items = parent.find(".tabs__header__item");
			var container = parent.find(".tabs__header__items");
			var header = $(this);
			var leftButton = header.find(".tabs__header--left");
			var rightButton = header.find(".tabs__header--right");
			var scrollLeft = container.scrollLeft();
			var innerWidth = 0;
			var margin = ($(window).outerWidth() <= 1000) ? 24 : 48;
			var padding = ($(window).outerWidth() <= 1000) ? 40 : 0;

			$.each(items, function(index, el) {
				innerWidth += $(this).outerWidth() + margin;
			});
			innerWidth -= margin;

			if(innerWidth > container.outerWidth()){
				if(scrollLeft > 0){
					leftButton.addClass("active");
				} else{
					leftButton.removeClass('active');
				}

				if(parseInt(scrollLeft + container.outerWidth()) >= parseInt(innerWidth) + padding){
					rightButton.removeClass("active");
				} else {
					rightButton.addClass("active");
				}
			} else{
				rightButton.removeClass("active");
				leftButton.removeClass('active');
			}
		});
	}
}
checkTabs();
$(window).resize(function(event) {
	checkTabs();
});

$(document).on("click", ".tabs__header__active", function(){
	var parent = $(this).closest('.tabs__header');
	if(parent.hasClass('active')){
		parent.find("a.ui-state-active").removeClass('ui-state-active');
		parent.removeClass("active");
		$(this).closest('.tabs__header').find(".tabs__header__body").stop().slideUp(300, function(){
			$(this).css("height", "auto");
		});
	} else{
		parent.find("a.ui-state-active").removeClass('ui-state-active');
		parent.addClass("active");
		$(this).closest('.tabs__header').find(".tabs__header__body").stop().slideDown(300, function() {
			$(this).closest('.tabs__header').find(".tabs__header__items").perfectScrollbar("update");
			$(this).css("height", "auto");
		});
	}
});
$(document).on("click", ".tabs__header .tabs__header__body a", function(){
	var parent = $(this).closest('.tabs__header');
	var value = $(this).attr("data-value");
	var text = $(this).text();

	parent.find(".tabs__header__body").find(".active").removeClass('active');
	$(this).closest('li').addClass('active');

	parent.find(".tabs__header__active--text").text(text);
	parent.addClass("noempty");

	parent.find("a.ui-state-active").removeClass('ui-state-active');
	parent.removeClass("active");
	if($(window).outerWidth() <= 500){
		$(this).closest('.tabs__header').find(".tabs__header__body").stop().slideUp(300, function(){
			$(this).css("height", "auto");
		});
	}
});
//Табы END

//# sourceMappingURL=tabs.js.map
