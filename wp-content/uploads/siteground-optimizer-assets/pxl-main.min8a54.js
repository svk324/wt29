(function(a){"use strict";var e='',l=0,d,b,c;a(window).on('load',function(){a(".pxl-loader").addClass("is-loaded"),a('.pxl-gallery-scroll').parents('body').addClass('body-overflow').addClass('body-visible-sm'),d=a(window).width(),c=a(window).height(),h(),g(),i(),j(),k(),f(),m(),n()}),a(window).on('scroll',function(){b=a(window).scrollTop(),c=a(window).height(),d=a(window).width(),b<l?e='up':e='down',l=b,h(),i(),j()}),a(window).on('resize',function(){c=a(window).height(),d=a(window).width(),k(),m(),g()}),a(document).ready(function(){var h=a('.pxl-header-elementor-main'),g;h.find('.pxl-menu-primary li').each(function(){var b=a(this).find('> ul.sub-menu');b.length==1&&a(this).hover(function(){b.offset().left+b.width()>a(window).width()?b.addClass('pxl-sub-reverse'):b.offset().left<0&&b.addClass('pxl-sub-reverse')},function(){b.removeClass('pxl-sub-reverse')})}),a('.pxl-logo-nav').parents('#pxl-header-elementor').addClass('pxl-header-rmboxshadow'),a('.pxl-header-menu li.menu-item-has-children').append('<span class="pxl-menu-toggle"></span>'),a('.pxl-menu-toggle').on('click',function(){a(this).hasClass('active')?(a(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active'),a(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle()):(a(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active'),a(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle(),a(this).toggleClass('active'),a(this).parent().find('> .sub-menu').toggleClass('active'),a(this).parent().find('> .sub-menu').slideToggle())}),a("#pxl-nav-mobile").on('click',function(){a(this).toggleClass('active'),a('body').toggleClass('body-overflow'),a('.pxl-header-menu').toggleClass('active')}),a(".pxl-menu-close, .pxl-header-menu-backdrop, #pxl-header-mobile .pxl-menu-primary a.is-one-page").on('click',function(){a(this).parents('.pxl-header-main').find('.pxl-header-menu').removeClass('active'),a('#pxl-nav-mobile').removeClass('active'),a('body').toggleClass('body-overflow')}),a('.pxl-type-header-clip > .elementor-container').append('<div class="pxl-header-shape"><span></span></div>'),a('.pxl-scroll-top').click(function(){return a('html, body').animate({scrollTop:0},800),!1}),a('.pxl-grid-masonry').each(function(){var b=40,d=a(this).children().length,c=d-1;a(this).find('> .pxl-grid-item > .wow').each(function(e,f){a(this).css('animation-delay',b+'ms'),c===e?(b=40,c=c+d):b=b+40})}),a('.pxl-item--text').each(function(){var b=0,d=a(this).children().length,c=d-1;a(this).find('> .pxl-text--slide > .wow').each(function(e,f){a(this).css('transition-delay',b+'ms'),c===e?(b=0,c=c+d):b=b+80})}),a('.btn-video, .pxl-video-popup, .pxl--link-popup').magnificPopup({type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:!1,fixedContentPos:!1}),a('.images-light-box').each(function(){a(this).magnificPopup({delegate:'a.light-box',type:'image',gallery:{enabled:!0},mainClass:'mfp-fade'})}),a('.comment-reply a').append('<i class="caseicon-angle-arrow-right"></i>'),a('#pxl-page-title-default').hasClass('pxl--parallax')&&a(this).stellar(),a('.btn-nina').each(function(){var b=.045,c=a(this).children().length,d=c-1;a(this).find('> .pxl--btn-text > span').each(function(c,d){a(this).css('transition-delay',b+'s'),b=b+.045})}),a(".pxl-search-popup-button").on('click',function(){a('body').addClass('body-overflow'),a('#pxl-search-popup').addClass('active'),setTimeout(function(){a('#pxl-search-popup .search-field').focus()},1e3)}),a("#pxl-search-popup .pxl-item--overlay, #pxl-search-popup .pxl-item--close").on('click',function(){a('body').removeClass('body-overflow'),a('#pxl-search-popup').removeClass('active')}),a(".pxl-hidden-panel-button").on('click',function(){a('body').addClass('body-overflow'),a('#pxl-hidden-panel-popup').addClass('active')}),a("#pxl-hidden-panel-popup .pxl-item--overlay, #pxl-hidden-panel-popup .pxl-item--close").on('click',function(){a('body').removeClass('body-overflow'),a('#pxl-hidden-panel-popup').removeClass('active')}),a(".pxl-cart-sidebar-button").on('click',function(){a('body').addClass('body-overflow'),a('#pxl-cart-sidebar').addClass('active')}),a("#pxl-cart-sidebar .pxl-item--overlay, #pxl-cart-sidebar .pxl-item--close").on('click',function(){a('body').removeClass('body-overflow'),a('#pxl-cart-sidebar').removeClass('active')}),a(".pxl-popup-button").on('click',function(){a('body').addClass('body-overflow'),a('#pxl-popup-elementor').addClass('active'),a('#pxl-popup-elementor').removeClass('deactivation')}),a("#pxl-popup-elementor .pxl-item--overlay, #pxl-popup-elementor .pxl-item--close, .pxl-menu-primary a.is-one-page").on('click',function(){a('body').removeClass('body-overflow'),a('#pxl-popup-elementor').removeClass('active'),a('#pxl-popup-elementor').addClass('deactivation')}),a('.pxl--widget-hover').each(function(){a(this).hover(function(){a(this).parents('.elementor-row').find('.pxl--widget-hover').removeClass('pxl--item-active'),a(this).parents('.elementor-container').find('.pxl--widget-hover').removeClass('pxl--item-active'),a(this).addClass('pxl--item-active')})}),a('.btn-plus-text').hover(function(){a(this).find('span').toggle(300)}),a(".pxl-nav-button").on('click',function(){a('.pxl-nav-button').toggleClass('active'),a('.pxl-nav-button').parent().find('.pxl-nav-wrap').toggle(400)}),a('.pxl-btn-effect4').append('<span class="pxl-btn-mask"></span>'),g=a('.el-bounce, .pxl-image-effect1'),a.each(g,function(c,a){b(a,'bounce-active')});function b(d,f){d=a(d);let e=0;d.hasClass(f)?c(function(){return e++,e==2},function(){e=0,d.removeClass(f),b(d,f)},'Deactivate',1e3):c(function(){return e++,e==3},function(){e=0,d.addClass(f),b(d,f)},'Activate',1e3)}function c(d,e,b,a){(b==null||b==''||typeof b=='undefined')&&(b='Timeout'),(a==null||a==''||typeof a=='undefined')&&(a=100);var f=d();f?e():setTimeout(function(){c(d,e,b,a)},a)}if(setTimeout(function(){a('.pxl-swiper-dots.style4 .pxl-swiper-pagination-bullet').append('<i></i>')},300),setTimeout(function(){a('.md-align-center').parents('.rs-parallax-wrap').addClass('pxl-group-center')},300),a('.pxl-image-tilt').length&&a('.pxl-image-tilt').each(function(){var b=a(this).data('maxtilt'),c=a(this).data('speedtilt'),d=a(this).data('perspectivetilt');VanillaTilt.init(this,{max:b,speed:c,perspective:d})}),a('.pxl-item--button').on('click',function(){a(this).toggleClass('active'),a(this).parent().toggleClass('active')}),a(".pxl-image-box2 .pxl-item--inner, .pxl-image-box3 .pxl-item--inner, .pxl-image-box5 .pxl-item--inner").hover(function(){a(this).find('.pxl-item--description').slideToggle(220)},function(){a(this).find('.pxl-item--description').slideToggle(220)}),a(".pxl-service-grid-layout12 .pxl-item--inner").hover(function(){a(this).find('.pxl-item--content').slideToggle(220)},function(){a(this).find('.pxl-item--content').slideToggle(220)}),a('.pxl-pricing4').each(function(){var b=a(this).parents('.elementor-inner-section').outerHeight();a(this).parents('.elementor-inner-section').css('min-height',b+'px'),a(this).hover(function(){a(this).parents('.elementor-section').find('.pxl-pricing4').removeClass('pxl-item--highlight'),a(this).addClass('pxl-item--highlight')})}),a('.pxl-pricing7 .pxl-pricing--body').each(function(){a(this).find('.pxl-item--first').hover(function(){a(this).parent().addClass('pxl-item--first-active')},function(){a(this).parent().removeClass('pxl-item--first-active')}),a(this).find('.pxl-item--last').hover(function(){a(this).parent().addClass('pxl-item--last-active')},function(){a(this).parent().removeClass('pxl-item--last-active')})}),a(".pxl-pricing7 .pxl-item--nav").on('click',function(){a(this).parent().toggleClass('active'),a(this).parents('.pxl-pricing7').find('.pxl-pricing--monthly').toggleClass('pr-hide'),a(this).parents('.pxl-pricing7').find('.pxl-pricing--year').toggleClass('pr-active')}),a('.wpcf7-select').each(function(){var b=a(this),f=a(this).children('option').length,c,e,d,g;b.addClass('pxl-select-hidden'),b.wrap('<div class="pxl-select"></div>'),b.after('<div class="pxl-select-higthlight"></div>'),c=b.next('div.pxl-select-higthlight'),c.text(b.children('option').eq(0).text()),e=a('<ul />',{class:'pxl-select-options'}).insertAfter(c);for(d=0;d<f;d++)a('<li />',{text:b.children('option').eq(d).text(),rel:b.children('option').eq(d).val()}).appendTo(e);g=e.children('li'),c.click(function(b){b.stopPropagation(),a('div.pxl-select-higthlight.active').not(this).each(function(){a(this).removeClass('active').next('ul.pxl-select-options').addClass('pxl-select-lists-hide')}),a(this).toggleClass('active')}),g.click(function(d){d.stopPropagation(),c.text(a(this).text()).removeClass('active'),b.val(a(this).attr('rel'))}),a(document).click(function(){c.removeClass('active')})}),a('.woocommerce-ordering .orderby, #pxl-sidebar-area select').each(function(){a(this).niceSelect()}),a(".pxl-content-effect .pxl-item--inner").hover(function(){a(this).find('.pxl-item--effect').slideToggle(250)},function(){a(this).find('.pxl-item--effect').slideToggle(250)}),a(".pxl--choose-demo").on('click',function(){a(this).parents('.pxl-showcase-popup').toggleClass('active')}),a(".pxl--showcase-close").on('click',function(){a(this).parents('.pxl-showcase-popup').removeClass('active')}),a(".pxl-link-scroll1").parents('.pxl-wapper').addClass('hidden-demo-bar'),a('.pxl-title--typewriter').length){function e(a,b){a.length?(a.eq(0).addClass('is-active'),a.eq(0).delay(3e3),a.eq(0).removeClass('is-active'),e(a.slice(1),b)):b()}function f(a,b){a.length?(a.eq(0).addClass('is-active'),a.eq(0).delay(3e3).slideDown(3e3,function(){a.eq(0).removeClass('is-active'),f(a.slice(1),b)})):b()}function d(){e(a('.pxl-title--typewriter .pxl-item--text'),function(){f(a('.pxl-title--typewriter .pxl-item--text'),function(){d()})})}a(function(){d()})}setTimeout(function(){a(".pxl-row-particles").each(function(){particlesJS(a(this).attr('id'),{particles:{number:{value:a(this).data('number')},color:{value:a(this).data('color')},shape:{type:"circle"},size:{value:a(this).data('size'),random:a(this).data('size-random')},line_linked:{enable:!1},move:{enable:!0,speed:2,direction:a(this).data('move-direction'),random:!0,out_mode:"out"}},retina_detect:!0})})},400),a('.pxl-scroll-effect--content').on('scroll',function(){var b=a(this).outerHeight()-50,c=a(this).scrollTop();c==b&&a(this).parents('.pxl-scroll-effect').addClass('pxl-scroll--end'),c==b&&a(this).parents('.pxl-scroll-effect').removeClass('pxl-scroll--end')}),a('.pxl-cursor-point').mousemove(function(b){var c=a(this).offset(),d=a(this).outerWidth(),e=b.pageX-c.left-d+30,f=b.pageY-c.top-110;a(this).find('.pxl-item--cursor').css({transform:'translate3d('+e+'px, '+f+'px, 0px)'})}),a(".pxl-cursor-point").hover(function(){a(this).find('.pxl-item--cursor').addClass('is_active')},function(){a(this).find('.pxl-item--cursor').removeClass('is_active')}),a(".pxl-cursor-point").each(function(){var b=a(this).find('.pxl-item--cursor'),c=b.offset().top,d=b.height();b.length==1&&a(this).hover(function(){c+d>a(window).height()?b.addClass('pxl-cursor-bottom'):c<0&&b.addClass('pxl-cursor-bottom')},function(){b.removeClass('pxl-cursor-bottom')})}),a('.mc4wp-form input:checkbox').change(function(){a(this).is(":checked")?a('.mc4wp-form').addClass("pxl-input-checked"):a('.mc4wp-form').removeClass("pxl-input-checked")}),a(".pxl-post-cover .pxl-item--cover").hover(function(){a(this).find('.pxl-item--excerpt').slideToggle(220)},function(){a(this).find('.pxl-item--excerpt').slideToggle(220)}),a('.pxl-ticket2 .pxl--item').each(function(){var b=a(this).find('.pxl--item-front').outerHeight()+10;a(this).css('height',b+'px')}),a(".pxl-ticket2 .pxl--item").hover(function(){var b=a(this).find('.pxl--item-backdrop').outerHeight()+10;a(this).css('height',b+'px')},function(){var b=a(this).find('.pxl--item-front').outerHeight()+10;a(this).css('height',b+'px')}),a(".pxl-alert .pxl-alert--close").on('click',function(){a(this).parent().fadeOut()}),a('.pxl-link-scroll1').length&&(a('.pxl-item--onepage').on('click',function(e){var f=a(this),g=a(this).attr('href'),c=e.currentTarget.hash,d=a(this).attr('data-onepage-offset'),b,h;return d?b=d:b=0,a(c).length===1?(h=a(c),a('.pxl-onepage-active').removeClass('pxl-onepage-active'),f.addClass('pxl-onepage-active'),a('html, body').stop().animate({scrollTop:h.offset().top-b},1e3),!1):(window.location.href=g,!1)}),a.each(a('.pxl-item--onepage'),function(f,b){var c=a(b).attr('href'),d=a(c),e=a(b).attr('data-onepage-offset'),g=new Waypoint({element:d[0],handler:function(c){if(c==='down')a('.pxl-onepage-active').removeClass('pxl-onepage-active'),a(b).addClass('pxl-onepage-active');else if(c==='up'){var d=a(b).parent().prev().find('.pxl-item--onepage');a(b).removeClass('pxl-onepage-active'),d.length>0&&d.addClass('pxl-onepage-active')}},offset:e})})),a('.pxl--item-buttons a').each(function(){a(this).hover(function(){a(this).parents('.pxl--item-demo').find('.pxl--item-buttons a').removeClass('active'),a(this).addClass('active')})})}),jQuery(document).ajaxComplete(function(a,b,c){f()}),jQuery(document).on('updated_wc_div',function(){f()});function h(){a('#pxl-header-elementor').hasClass('is-sticky')&&(b>100?(a('.pxl-header-elementor-sticky.pxl-sticky-stb').addClass('pxl-header-fixed'),a('#pxl-header-mobile').addClass('pxl-header-mobile-fixed')):(a('.pxl-header-elementor-sticky.pxl-sticky-stb').removeClass('pxl-header-fixed'),a('#pxl-header-mobile').removeClass('pxl-header-mobile-fixed')),e=='up'&&b>100?a('.pxl-header-elementor-sticky.pxl-sticky-stt').addClass('pxl-header-fixed'):a('.pxl-header-elementor-sticky.pxl-sticky-stt').removeClass('pxl-header-fixed')),a('.pxl-header-elementor-sticky').parents('body').addClass('pxl-header-sticky')}function g(){var b=a('#pxl-header-elementor').outerHeight();d<1199&&a('#pxl-header-elementor').css('min-height',b+'px')}function i(){b<c&&a('.pxl-scroll-top').addClass('pxl-off').removeClass('pxl-on'),b>c&&a('.pxl-scroll-top').addClass('pxl-on').removeClass('pxl-off')}function j(){setTimeout(function(){var b=a('.pxl-footer-fixed #pxl-footer-elementor').outerHeight()-1;a('.pxl-footer-fixed #pxl-main').css('margin-bottom',b+'px')},600)}function k(){setTimeout(function(){a('.pxl-portfolio-grid .pxl-item--inner').each(function(){var b=a(this).outerWidth(),c=a(this).outerHeight();a(this).find('.item--imgfilter').css('width',b+'px'),a(this).find('.item--imgfilter').css('height',c+'px')}),a('.pxl-imgfilter-wrap').each(function(){var b=a(this).outerWidth(),c=a(this).outerHeight();a(this).find('.pxl-item--imgfilter').css('width',b+'px'),a(this).find('.pxl-item--imgfilter').css('height',c+'px')})},300)}function f(){"use strict";a('#pxl-wapper .quantity').append('<span class="quantity-icon quantity-down pxl-icon--minus"></span><span class="quantity-icon quantity-up pxl-icon--plus"></span>'),a('.quantity-up').on('click',function(){a(this).parents('.quantity').find('input[type="number"]').get(0).stepUp(),a(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled')}),a('.quantity-down').on('click',function(){a(this).parents('.quantity').find('input[type="number"]').get(0).stepDown(),a(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled')}),a('.quantity-icon').on('click',function(){var c=a(this).parents('.quantity').find('input[type="number"]').val(),b=a(this).parents(".product, .woocommerce-product-inner").find(".add_to_cart_button");b.attr('data-quantity',c),b.attr("href","?add-to-cart="+b.attr("data-product_id")+"&quantity="+c)}),a('.woocommerce-cart-form .actions .button').removeAttr('disabled')}function m(){a('.pxl-gallery-scroll.h-fit-to-screen').each(function(){var b=0,d=0,e=0,f;a('#wpadminbar').length==1&&(b=a('#wpadminbar').outerHeight()),a('#pxl-header-elementor').length==1&&(d=a('#pxl-header-elementor').outerHeight()),a('#pxl-footer-elementor').length==1&&(e=a('#pxl-footer-elementor').outerHeight()),f=c-(b+d+e),a(this).css('height',f+'px')})}function n(){a('.pxl-menu-primary .pxl-page-popup > a').on("click",function(d){var b,c;d.preventDefault(),b=a(this).data("page-target"),c=a(this).parents("body"),c.find("#pxl-page-popup .pxl-page-item").removeClass("active"),a(b).addClass("active"),a(b).parents('#pxl-page-popup').addClass("active")}),a('#pxl-page-popup .pxl-popup--close').on("click",function(b){b.preventDefault(),a(this).parents('.pxl-page-item').removeClass('active'),a(this).parents('#pxl-page-popup').removeClass('active')}),a('#pxl-page-popup .pxl-popup-overlay').on("click",function(b){b.preventDefault(),a(this).parent().removeClass('active'),a(this).parent().find('.pxl-page-item').removeClass('active')})}})(jQuery)