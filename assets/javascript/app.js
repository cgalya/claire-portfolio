$(document).ready(function () {

  var $window = $(window);

  $('body').flowtype({
    minimum: 200,
    maximum: 1200,
    minFont: 3,
    maxFont: 15,
    fontRatio: 30
  });

  $('#logo').click(function () {
    $('html, body').animate({
      scrollTop: $(".intro-wrapper").offset().top
    }, 1000)
  });

  $('#about').click(function () {
    $('html, body').animate({
      scrollTop: $(".about-wrapper").offset().top
    }, 1000)
  });

  $('#portfolio-link').click(function () {
    $('html, body').animate({
      scrollTop: $(".portfolio-wrapper").offset().top
    }, 1000)
  });

  $('#contact').click(function () {
    $('html, body').animate({
      scrollTop: $(".contact-wrapper").offset().top
    }, 1000)
  });

  function checkScroll() {
    var startY = $('.navbar').height() * 1;
    if ($window.scrollTop() > startY) {
      $('.navbar').addClass("navbar-bordered");
    } else {
      $('.navbar').removeClass("navbar-bordered");
    }
  }

  if ($('.navbar').length > 0) {
    $window.on("scroll load resize", function () {
          checkScroll();
        }
      );
  }

  function revealOnScroll() {
    var win_height_padded = $window.height() * 1.1;
    var scrolled = $window.scrollTop();
    $(".revealPopUp:not(.animated)").each(function () {
      var $this = $(this);
      var offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
          if ($window.width() > 768) {
          $this.addClass('animated');
          } else {
            $this.addClass('animated-mobile');
          }
        }
    })
  }

  $window.on('scroll', revealOnScroll);
});