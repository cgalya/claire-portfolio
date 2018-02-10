$(document).ready(function () {

  $('body').flowtype({
    minimum   : 200,
    maximum   : 1200,
    minFont   : 3,
    maxFont   : 15,
    fontRatio : 30
  });

  $('#logo').click(function() {
    $('html, body').animate({
      scrollTop: $(".intro-wrapper").offset().top
    }, 1000)
  });

  $('#about').click(function() {
    $('html, body').animate({
      scrollTop: $(".about-wrapper").offset().top
    }, 1000)
  });

  $('#portfolio-link').click(function() {
    $('html, body').animate({
      scrollTop: $(".portfolio-wrapper").offset().top
    }, 1000)
  });

  $('#contact').click(function() {
    $('html, body').animate({
      scrollTop: $(".contact-wrapper").offset().top
    }, 1000)
  });

  function checkScroll () {
    var startY = $('.navbar').height() * 1;
    if ( $(window).scrollTop() > startY ) {
      $('.navbar').addClass("navbar-bordered");
    } else {
      $('.navbar').removeClass("navbar-bordered");
    }
  }
  if ( $('.navbar').length > 0 ) {
    $(window)
      .on(
        "scroll load resize",
        function () {
          checkScroll();
        }
      );
  }

});