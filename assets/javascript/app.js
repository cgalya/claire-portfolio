$(document).ready(function () {

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
    if ($(window).scrollTop() > startY) {
      $('.navbar').addClass("navbar-bordered");
    } else {
      $('.navbar').removeClass("navbar-bordered");
    }
  }

  if ($('.navbar').length > 0) {
    $(window)
      .on(
        "scroll load resize",
        function () {
          checkScroll();
        }
      );
  }


  var $window = $(window);
  var win_height_padded = $window.height() * 1.1;

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop();
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this = $(this);
      var offsetTop = $this.offset().top;
      // if ($window.width() > 768) {
        if (scrolled + win_height_padded > offsetTop) {
          // if ($this.data('timeout')) {
          //   window.setTimeout(function () {
          //     $this.addClass('animated ' + $this.data('animation'));
          //   }, parseInt($this.data('timeout'), 10));
          // } else {
          $this.addClass('animated');
          // }
        }
      // }
    })
  }
});