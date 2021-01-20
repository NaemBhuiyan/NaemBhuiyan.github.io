"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*-----------------------------------------------
|   Utilities
-----------------------------------------------*/
var utils = function ($) {
  var Utils = {
    $window: $(window),
    $document: $(document),
    $html: $('html'),
    $body: $('body'),
    $main: $('main'),
    isRTL: function isRTL() {
      return this.$html.attr('dir') === 'rtl';
    },
    location: window.location,
    nua: navigator.userAgent,
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    },
    offset: function offset(element) {
      var rect = element.getBoundingClientRect();
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    },
    isScrolledIntoViewJS: function isScrolledIntoViewJS(element) {
      var windowHeight = window.innerHeight;
      var elemTop = this.offset(element).top;
      var elemHeight = element.offsetHeight;
      var windowScrollTop = window.scrollY;
      return elemTop <= windowScrollTop + windowHeight && windowScrollTop <= elemTop + elemHeight;
    },
    isScrolledIntoView: function isScrolledIntoView(el) {
      var $el = $(el);
      var windowHeight = this.$window.height();
      var elemTop = $el.offset().top;
      var elemHeight = $el.height();
      var windowScrollTop = this.$window.scrollTop();
      return elemTop <= windowScrollTop + windowHeight && windowScrollTop <= elemTop + elemHeight;
    },
    getCurrentScreanBreakpoint: function getCurrentScreanBreakpoint() {
      var _this = this;

      var currentScrean = '';
      var windowWidth = this.$window.width();
      $.each(this.breakpoints, function (index, value) {
        if (windowWidth >= value) {
          currentScrean = index;
        } else if (windowWidth >= _this.breakpoints.xl) {
          currentScrean = 'xl';
        }
      });
      return {
        currentScrean: currentScrean,
        currentBreakpoint: this.breakpoints[currentScrean]
      };
    }
  };
  return Utils;
}(jQuery);
/* eslint-disable */


document.addEventListener("DOMContentLoaded", function () {
  var controller = new window.ScrollMagic.Controller();
  var timeline = new window.TimelineMax();
  timeline.from(".section_1_01", 1, {
    ease: Power3.easeInOut
  });
  var scene = new window.ScrollMagic.Scene({
    triggerElement: ".first-section",
    duration: 8000,
    triggerHook: 0,
    offset: "400"
  }).setTween(timeline).setPin(".first-section").addTo(controller);
  var timeline2 = new window.TimelineMax();
  timeline2.to(".top .image-container", 4, {
    height: 0
  });
  var scene2 = new window.ScrollMagic.Scene({
    triggerElement: ".second-section",
    duration: 9000,
    triggerHook: 0,
    offset: "100"
  }).setTween(timeline2).setPin(".second-section").addTo(controller);
  var timeline3 = new window.TimelineMax();
  timeline3.to(".section_3_01", 4, {
    y: -250,
    ease: Power3.easeInOut
  }).to(".section_3_02", 4, {
    y: -200,
    ease: Power3.easeInOut
  }, "-=4").to(".section_3_03", 4, {
    y: -100,
    ease: Power3.easeInOut
  }, "-=4").to(".section_3_04", 4, {
    y: 0,
    ease: Power3.easeInOut
  }, "-=4").to(".section_3_05", 4, {
    y: 150,
    ease: Power3.easeInOut
  }, "-=4").to(".section_3_06", 4, {
    y: 250,
    ease: Power3.easeInOut
  }, "-=4");
  var scene3 = new window.ScrollMagic.Scene({
    triggerElement: ".third-section",
    duration: "100%",
    triggerHook: 0,
    offset: "200"
  }).setTween(timeline3).setPin(".third-section").addTo(controller);
  var timeline4 = new window.TimelineMax();
  timeline4.to(".section_4_01", 2, {
    autoAlpha: 0,
    opacity: 1
  }).from(".section_4_02", 2, {
    autoAlpha: 0
  }).from(".section_4_03", 2, {
    autoAlpha: 0
  }).from(".section_4_04", 2, {
    autoAlpha: 0
  }).from(".section_4_05", 2, {
    autoAlpha: 0
  }).from(".section_4_06", 2, {
    autoAlpha: 0
  }).from(".section_4_07", 2, {
    autoAlpha: 0
  }).from(".section_4_08", 2, {
    autoAlpha: 0
  }).from(".section_4_09", 2, {
    autoAlpha: 0
  }).from(".section_4_10", 2, {
    autoAlpha: 0
  }).from(".section_4_11", 2, {
    autoAlpha: 0
  }).from(".section_4_12", 2, {
    autoAlpha: 0
  }).from(".section_4_13", 2, {
    autoAlpha: 0
  }).from(".section_4_14", 2, {
    autoAlpha: 0
  }).from(".section_4_15", 2, {
    autoAlpha: 0
  }).from(".section_4_16", 2, {
    autoAlpha: 0
  }).from(".section_4_17", 2, {
    autoAlpha: 0
  }).from(".section_4_18", 2, {
    autoAlpha: 0
  }).from(".section_4_19", 2, {
    autoAlpha: 0
  }).from(".section_4_20", 2, {
    autoAlpha: 0
  }).from(".section_4_21", 2, {
    autoAlpha: 0
  }).from(".section_4_22", 2, {
    autoAlpha: 0
  }).from(".section_4_23", 2, {
    autoAlpha: 0
  }).from(".section_4_24", 2, {
    autoAlpha: 0
  }).from(".section_4_25", 2, {
    autoAlpha: 0
  }).from(".section_4_26", 2, {
    autoAlpha: 0
  }).from(".section_4_27", 2, {
    autoAlpha: 0
  }).from(".section_4_28", 2, {
    autoAlpha: 0
  }).from(".section_4_29", 2, {
    autoAlpha: 0
  }).from(".section_4_30", 2, {
    autoAlpha: 0
  }).from(".section_4_31", 2, {
    autoAlpha: 0
  }).from(".section_4_32", 2, {
    autoAlpha: 0
  }).from(".section_4_33", 2, {
    autoAlpha: 0
  });
  var scene4 = new window.ScrollMagic.Scene({
    triggerElement: ".forth-section",
    duration: "100%",
    triggerHook: 0,
    offset: "200"
  }).setTween(timeline4).setPin(".forth-section").addTo(controller);
});
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/

utils.$document.ready(function () {
  var $navbar = $('.navbar-theme');

  if ($navbar.length) {
    var windowHeight = utils.$window.height();
    utils.$window.scroll(function () {
      var scrollTop = utils.$window.scrollTop();
      var alpha = scrollTop / windowHeight * 2;
      alpha >= 1 && (alpha = 1);
      $navbar.css({
        'background-color': "rgba(11, 23, 39, " + alpha + ")"
      });
    }); // Fix navbar background color [after and before expand]

    var classList = $navbar.attr('class').split(' ');
    var breakpoint = classList.filter(function (c) {
      return c.indexOf('navbar-expand-') >= 0;
    })[0].split('navbar-expand-')[1];
    utils.$window.resize(function () {
      if (utils.$window.width() > utils.breakpoints[breakpoint]) {
        return $navbar.removeClass('bg-dark');
      }

      if (!$navbar.find('.navbar-toggler').hasClass('collapsed')) {
        return $navbar.addClass('bg-dark');
      }

      return null;
    }); // Top navigation background toggle on mobile

    $navbar.on('show.bs.collapse hide.bs.collapse', function (e) {
      $(e.currentTarget).toggleClass('bg-dark');
    });
  }
});
/*-----------------------------------------------
|   Select menu [bootstrap 4]
-----------------------------------------------*/

utils.$document.ready(function () {
  // https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#select-menu
  // https://github.com/twbs/bootstrap/issues/26183
  window.is.android() && $('select.form-control').removeClass('form-control').css('width', '100%');
});
/* eslint-disable */

var html = document.documentElement;
var canvas = document.getElementById("hero-lightpass");
var context = canvas.getContext("2d");
var frameCount = 22;

var currentFrame = function currentFrame(index) {
  return "../assets/img/Scene02/Sc_Two_" + index + ".png";
};

var preloadImages = function preloadImages() {
  for (var i = 0; i < frameCount; i++) {
    var _img = new Image();

    _img.class = "hell";
    _img.src = currentFrame(i);
  }
};

var img = new Image();
img.class = "hell";
img.src = currentFrame(0);
canvas.width = 1920;
canvas.height = 1080;

img.onload = function () {
  context.drawImage(img, 0, 0);
};

console.log(img);

var updateImage = function updateImage(index) {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", function () {
  var scrollTop = html.scrollTop;
  var maxScrollTop = html.scrollHeight - window.innerHeight;
  var scrollFraction = scrollTop / maxScrollTop;
  var frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));
  console.log(frameIndex);
  requestAnimationFrame(function () {
    return updateImage(frameIndex);
  });
});
preloadImages();
/*-----------------------------------------------
|   Detector
-----------------------------------------------*/

utils.$document.ready(function () {
  if (window.is.opera()) utils.$html.addClass('opera');
  if (window.is.mobile()) utils.$html.addClass('mobile');
  if (window.is.firefox()) utils.$html.addClass('firefox');
  if (window.is.safari()) utils.$html.addClass('safari');
  if (window.is.ios()) utils.$html.addClass('ios');
  if (window.is.ie()) utils.$html.addClass('ie');
  if (window.is.edge()) utils.$html.addClass('edge');
  if (window.is.chrome()) utils.$html.addClass('chrome');
  if (utils.nua.match(/puppeteer/i)) utils.$html.addClass('puppeteer');
  if (window.is.mac()) utils.$html.addClass('osx');
});
/*-----------------------------------------------
|   Documentation and Component Navigation
-----------------------------------------------*/

utils.$document.ready(function () {
  var $componentNav = $('#components-nav');

  if ($componentNav.length) {
    var loc = window.location.href;

    var _loc$split = loc.split('#');

    loc = _loc$split[0];
    var location = loc.split('/');
    var url = location[location.length - 2] + "/" + location.pop();
    var urls = $componentNav.children('li').children('a');

    for (var i = 0, max = urls.length; i < max; i += 1) {
      var dom = urls[i].href.split('/');
      var domURL = dom[dom.length - 2] + "/" + dom.pop();

      if (domURL === url) {
        var $targetedElement = $(urls[i]);
        $targetedElement.removeClass('text-800');
        $targetedElement.addClass('font-weight-medium');
        break;
      }
    }
  }
});
/*-----------------------------------------------
|   Bootstrap validation
-----------------------------------------------*/

(function () {
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply theme Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation'); // Loop over them and prevent submission

    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
/*
  global Stickyfill
*/

/*-----------------------------------------------
|   Sticky fill
-----------------------------------------------*/


utils.$document.ready(function () {
  Stickyfill.add($('.sticky-top'));
  Stickyfill.add($('.sticky-bottom'));
});
/*-----------------------------------------------
|   Sticky Kit
-----------------------------------------------*/

utils.$document.ready(function () {
  var stickyKits = $('.sticky-kit');

  if (stickyKits.length) {
    stickyKits.each(function (index, value) {
      var $this = $(value);

      var options = _objectSpread({}, $this.data('options'));

      $this.stick_in_parent(options);
    });
  }
});
/*-----------------------------------------------
|   Tabs
-----------------------------------------------*/

utils.$document.ready(function () {
  $('.toast').toast();
});
/*-----------------------------------------------
|   Tootltip [bootstrap 4]
-----------------------------------------------*/

utils.$document.ready(function () {
  // https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});
/*-----------------------------------------------
|   YTPlayer
-----------------------------------------------*/

utils.$document.ready(function () {
  var Selector = {
    BG_YOUTUBE: '.bg-youtube',
    BG_HOLDER: '.bg-holder'
  };
  var DATA_KEY = {
    PROPERTY: 'property'
  };
  var $youtubeBackground = $(Selector.BG_YOUTUBE);

  if ($youtubeBackground.length) {
    $youtubeBackground.each(function (index, value) {
      var $this = $(value);
      console.log($this.data(DATA_KEY.PROPERTY));
      $this.data(DATA_KEY.PROPERTY, $.extend($this.data(DATA_KEY.PROPERTY), {
        showControls: false,
        loop: true,
        autoPlay: true,
        mute: true,
        containment: $this.parent(Selector.BG_HOLDER)
      }));
      $this.YTPlayer();
    });
  }
});
/*-----------------------------------------------
|   Global Functions
-----------------------------------------------*/

/*
global TimelineMax, TweenMax, CustomEase
*/

CustomEase.create('CubicBezier', '.77,0,.18,1');

var filterBlur = function filterBlur() {
  var blur = 'blur(5px)';
  var isIOS = window.is.iphone() || window.is.ipad() || window.is.ipod() || window.is.mac();

  if (isIOS && window.is.firefox()) {
    blur = 'blur(0px)';
  }

  return blur;
};

var zanimationEffects = {
  default: {
    from: {
      opacity: 0,
      y: 70
    },
    to: {
      opacity: 1,
      y: 0
    },
    ease: 'CubicBezier',
    duration: 0.8,
    delay: 0
  },
  'slide-down': {
    from: {
      opacity: 0,
      y: -70
    },
    to: {
      opacity: 1,
      y: 0
    },
    ease: 'CubicBezier',
    duration: 0.8,
    delay: 0
  },
  'slide-left': {
    from: {
      opacity: 0,
      x: 70
    },
    to: {
      opacity: 1,
      x: 0
    },
    ease: 'CubicBezier',
    duration: 0.8,
    delay: 0
  },
  'slide-right': {
    from: {
      opacity: 0,
      x: -70
    },
    to: {
      opacity: 1,
      x: 0
    },
    ease: 'CubicBezier',
    duration: 0.8,
    delay: 0
  },
  'zoom-in': {
    from: {
      scale: 0.5,
      opacity: 0,
      filter: filterBlur()
    },
    to: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)'
    },
    delay: 0,
    ease: 'CubicBezier',
    duration: 0.8
  },
  'zoom-out': {
    from: {
      scale: 1.1,
      opacity: 1,
      filter: filterBlur()
    },
    to: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)'
    },
    delay: 0,
    ease: 'CubicBezier',
    duration: 0.8
  },
  'zoom-out-slide-right': {
    from: {
      scale: 1.1,
      opacity: 1,
      x: -70,
      filter: filterBlur()
    },
    to: {
      scale: 1,
      opacity: 1,
      x: 0,
      filter: 'blur(0px)'
    },
    delay: 0,
    ease: 'CubicBezier',
    duration: 0.8
  },
  'zoom-out-slide-left': {
    from: {
      scale: 1.1,
      opacity: 1,
      x: 70,
      filter: filterBlur()
    },
    to: {
      scale: 1,
      opacity: 1,
      x: 0,
      filter: 'blur(0px)'
    },
    delay: 0,
    ease: 'CubicBezier',
    duration: 0.8
  },
  'blur-in': {
    from: {
      opacity: 0,
      filter: filterBlur()
    },
    to: {
      opacity: 1,
      filter: 'blur(0px)'
    },
    delay: 0,
    ease: 'CubicBezier',
    duration: 0.8
  }
};

if (utils.isRTL()) {
  Object.keys(zanimationEffects).forEach(function (key) {
    if (zanimationEffects[key].from.x) {
      zanimationEffects[key].from.x = -zanimationEffects[key].from.x;
    }
  });
}

var breakPointConst = utils.getCurrentScreanBreakpoint();
/*-----------------------------------------------
|   Zanimation
-----------------------------------------------*/

(function zanimation($) {
  /*-----------------------------------------------
  |   Get Controller
  -----------------------------------------------*/
  var controllerZanim;

  var getController = function getController(el) {
    var $this = $(el);
    var options = {};
    var controller = {};
    $.each($this, function (index, value) {
      if (value.hasAttribute("data-zanim-" + breakPointConst.currentScrean)) {
        controllerZanim = "zanim-" + breakPointConst.currentScrean;
      } else {
        /*-----------------------------------------------
        |   Set the mobile first Animation
        -----------------------------------------------*/
        var animationBreakpoints = [];
        $.each(value.attributes, function (i, attribute) {
          if (attribute.name !== 'data-zanim-trigger' && (window.is.ie() || window.is.edge() ? attribute.name.match('^data-zanim-') : attribute.name.startsWith('data-zanim-'))) {
            var breakPoint = utils.breakpoints[attribute.name.split('data-zanim-')[1]];

            if (breakPoint < breakPointConst.currentBreakpoint) {
              animationBreakpoints.push({
                name: attribute.name.split('data-zanim-')[1],
                size: breakPoint
              });
            }
          }

          return i;
        });
        controllerZanim = undefined;

        if (animationBreakpoints.length !== 0) {
          animationBreakpoints = animationBreakpoints.sort(function (a, b) {
            return a.size - b.size;
          });
          var activeBreakpoint = animationBreakpoints.pop();
          controllerZanim = "zanim-" + activeBreakpoint.name;
        }
      }

      return index;
    });
    controller = $.extend(true, {}, options, $this.data(controllerZanim));

    if (!(controllerZanim === undefined)) {
      if ($this.data(controllerZanim).animation) {
        options = zanimationEffects[$this.data(controllerZanim).animation];
      } else {
        options = zanimationEffects.default;
      }
    }

    if (controllerZanim === undefined) {
      options = {
        delay: 0,
        duration: 0,
        ease: 'Expo.easeOut',
        from: {},
        to: {}
      };
    }
    /*-----------------------------------------------
    |   populating the controller
    -----------------------------------------------*/


    controller.delay || (controller.delay = options.delay);
    controller.duration || (controller.duration = options.duration);
    controller.from || (controller.from = options.from);
    controller.to || (controller.to = options.to);
    controller.ease && (controller.to.ease = controller.ease) && controller.to.ease || (controller.to.ease = options.ease);
    return controller;
  };
  /*-----------------------------------------------
  |   End of Get Controller
  -----------------------------------------------*/


  jQuery.fn.zanimation = function zanim(callback) {
    var $this = $(this);
    /*-----------------------------------------------
    |   For Timeline
    -----------------------------------------------*/

    var zanimTimeline = $this.data('zanim-timeline');

    if (zanimTimeline) {
      var timeline = new TimelineMax(zanimTimeline);
      var timelineElements = $this.find('[data-zanim-xs], [data-zanim-sm], [data-zanim-md], [data-zanim-lg], [data-zanim-xl]');
      timelineElements.map(function (index, value) {
        var controller = getController(value);
        timeline.fromTo($(value), controller.duration, controller.from, controller.to, controller.delay).pause();
        return index;
      });
      $this.imagesLoaded(function () {
        return callback(timeline);
      });
    } else if (!$this.parents('[data-zanim-timeline]').length) {
      /*-----------------------------------------------
      |   For single elements outside timeline
      -----------------------------------------------*/
      var controller = getController($this);
      callback(TweenMax.fromTo($this, controller.duration, controller.from, controller.to).delay(controller.delay).pause());
    }

    callback(new TimelineMax());
  };
})(jQuery);
/*-----------------------------------------------
|   Triggering zanimation when the element enters in the view
-----------------------------------------------*/


(function triggeringZanimation($) {
  var triggerZanimation = function triggerZanimation($this) {
    if (utils.isScrolledIntoView($this) && $this.attr('data-zanim-trigger') === 'scroll') {
      $this.zanimation(function (animation) {
        return animation.play();
      });
      if (!$this.data('zanim-repeat')) $this.removeAttr('data-zanim-trigger');
    }
  };

  utils.$document.ready(function () {
    /*-----------------------------------------------
    |   Playing zanimation for scroll triggers
    -----------------------------------------------*/
    $("*[data-zanim-trigger = 'scroll']").map(function (index, value) {
      triggerZanimation($(value));
      utils.$window.on('scroll', function () {
        triggerZanimation($(value));
      });
      return index;
    });
  });
})(jQuery);
/*-----------------------------------------------
|   Sementic UI Accordion
-----------------------------------------------*/


$(document).ready(function () {
  var uiAccordion = $('.ui.accordion');

  if (uiAccordion.length) {
    uiAccordion.each(function (index, value) {
      var $this = $(value);
      $this.accordion($.extend({
        exclusive: false
      }, $this.data('options') || {}));
    });
  }
});