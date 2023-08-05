(function ($) {
  "use strict";

  /*----------------------------
  mobile menu Active
  ------------------------------*/

  jQuery("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "1199",
  });

  /*----------------------------
  Preloader Active
  ------------------------------*/

  $(window).on("load", function () {
    $(".preloader").fadeOut(500);
  });

  /*----------------------------
  scrollIt Active
  ------------------------------*/
  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "linear", // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: 0, // offste (in px) for fixed top navigation
  });

  /*----------------------------
  circle progress Active
  ------------------------------*/
  $(".proloy-progress-bar").loading();

  /*----------------------------
  Sticky Header Active
  ------------------------------*/

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 2) {
      $(".proloy-main-manu-content").removeClass("sticky");
    } else {
      $(".proloy-main-manu-content").addClass("sticky");
    }
  });

  /*----------------------------
  services Active
  ------------------------------*/

  $(".proloy-all-servicess-wrape").owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    smartSpeed: 1000,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  /*----------------------------
  team Active
  ------------------------------*/

  $(".proloy-all-team-member-wrape").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  /*----------------------------
  Blog Active
  ------------------------------*/

  $(".proloy-all-blog-list-wrape").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  /*---------------------
   team popup active
  --------------------- */
  $(".popup-team").magnificPopup({
    type: "image",
  });

  /*----------------------------
  portfolio menu active
  ------------------------------*/
  $(window).on("load", function () {
    $(".portfolio-menu-wrape li").on("click", function () {
      $(".portfolio-menu-wrape li.active").removeClass("active");
      $(this).addClass("active");
    });

    $("#container").imagesLoaded(function () {
      $(".portfolio-menu-wrape li").on("click", function () {
        var filterValue = $(this).attr("data-filter");
        $folios2.isotope({
          filter: filterValue,
        });
      });
      var $folios2 = $(".portfolio-all-items").isotope({
        itemSelector: ".single-portfolio-item",
        percentPosition: true,
        transitionDuration: "0.9s",
        layoutMode: "fitRows",
        // only opacity for reveal/hide transition
        hiddenStyle: {
          opacity: 0,
        },
        visibleStyle: {
          opacity: 1,
        },
        fitRows: {
          columnWidth: ".single-portfolio-item",
        },
      });
    });
  });

  /*---------------------
  // popup2 active
  --------------------- */
  $(".portfolio-pop a").magnificPopup({
    type: "image",
  });

  /*----------------------------
  testimonial Active
  ------------------------------*/

  $(".all-testimonial").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left '></i>",
      "<i class='fa fa-angle-right '></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  /*----------------------------
  Sticky Header Active
  ------------------------------*/

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 2) {
      $(".header-top-menu-area").removeClass("sticky");
    } else {
      $(".header-top-menu-area").addClass("sticky");
    }
  });

  /*----------------------------
  Video popup active
  ------------------------------*/

  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /*----------------------------
  Magic Mouse Active
  ------------------------------*/
  magicMouse({
    outerStyle: "circle",
    hoverEffect: "circle-move",
    hoverItemMove: true,
    defaultCursor: false,
    outerWidth: 30,
    outerHeight: 30,
  });

  /*----------------------------
  button tilt Active
  ------------------------------*/
  $(".btn-tilt").tilt({
    scale: 1.1,
  });

  /*----------------------------
  AOS active
  ------------------------------*/

  AOS.init();
})(jQuery);