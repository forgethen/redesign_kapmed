!function(e){"use strict";e.fn.hideseek=function(t){t=e.extend({list:".hideseek-data",nodata:"",attribute:"text",matches:!1,highlight:!1,ignore:"",headers:"",navigation:!1,ignore_accents:!1,hidden_mode:!1,min_chars:1},t);return this.each(function(){var i=e(this);i.opts=[],e.map(["list","nodata","attribute","matches","highlight","ignore","headers","navigation","ignore_accents","hidden_mode","min_chars"],function(e){i.opts[e]=i.data(e)||t[e]}),i.opts.headers&&(i.opts.ignore+=i.opts.ignore?", "+i.opts.headers:i.opts.headers);var s=e(i.opts.list);i.opts.navigation&&i.attr("autocomplete","off"),i.opts.hidden_mode&&s.children().hide(),i.keyup(function(t){function n(e){i.opts.highlight?e.removeHighlight().highlight(a).show():e.show()}function o(e){return e.children(".selected:visible")}if(-1==[38,40,13].indexOf(t.keyCode)&&(8==t.keyCode||i.val().length>=i.opts.min_chars)){var a=i.val().toLowerCase();s.children(i.opts.ignore.trim()?":not("+i.opts.ignore+")":"").removeClass("selected").each(function(){var t=("text"!=i.opts.attribute?e(this).attr(i.opts.attribute)||"":e(this).text()).toLowerCase();-1==t.removeAccents(i.opts.ignore_accents).indexOf(a)||a===(!!i.opts.hidden_mode&&"")?e(this).hide():(n(e(this)),i.opts.matches&&null!==a.match(new RegExp(Object.keys(i.opts.matches)[0]))&&(null!==t.match(new RegExp(Object.values(i.opts.matches)[0]))?n(e(this)):e(this).hide())),i.trigger("_after_each")}),i.opts.nodata&&(s.find(".no-results").remove(),s.children(':not([style*="display: none"])').length||(s.children().first().clone().removeHighlight().addClass("no-results").show().prependTo(i.opts.list).text(i.opts.nodata),i.trigger("_after_nodata"))),i.opts.headers&&e(i.opts.headers,s).each(function(){e(this).nextUntil(i.opts.headers).not('[style*="display: none"],'+i.opts.ignore).length?e(this).show():e(this).hide()}),i.trigger("_after")}i.opts.navigation&&(38==t.keyCode?o(s).length?(function(e){return o(e).prevAll(":visible:first")}(s).addClass("selected"),o(s).last().removeClass("selected")):s.children(":visible").last().addClass("selected"):40==t.keyCode?o(s).length?(function(e){return o(e).nextAll(":visible:first")}(s).addClass("selected"),o(s).first().removeClass("selected")):s.children(":visible").first().addClass("selected"):13==t.keyCode&&(o(s).find("a").length?document.location=o(s).find("a").attr("href"):i.val(o(s).text())))})})},e(document).ready(function(){e('[data-toggle="hideseek"]').hideseek()})}(jQuery),jQuery.fn.highlight=function(e){return this.length&&e&&e.length?this.each(function(){!function e(t,i){var s=0;if(3==t.nodeType){var n=t.data.removeAccents(!0).toUpperCase().indexOf(i);if(n>=0){var o=document.createElement("mark");o.className="highlight";var a=t.splitText(n);a.splitText(i.length);var r=a.cloneNode(!0);o.appendChild(r),a.parentNode.replaceChild(o,a),s=1}}else if(1==t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName))for(var h=0;h<t.childNodes.length;++h)h+=e(t.childNodes[h],i);return s}(this,e.toUpperCase())}):this},jQuery.fn.removeHighlight=function(){return this.find("mark.highlight").each(function(){with(this.parentNode.firstChild.nodeName,this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()},String.prototype.removeAccents=function(e){return e?this.replace(/[áàãâä]/gi,"a").replace(/[éè¨ê]/gi,"e").replace(/[íìïî]/gi,"i").replace(/[óòöôõ]/gi,"o").replace(/[úùüû]/gi,"u").replace(/[ç]/gi,"c").replace(/[ñ]/gi,"n"):this};
//# sourceMappingURL=jquery.hideseek.min-min.js.map
