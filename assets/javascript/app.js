$(document).ready(function () {

  var $window = $(window);

  // flowtype library adjusts font size as screen size changes
  $('body').flowtype({
    minimum: 200,
    maximum: 1200,
    minFont: 3,
    maxFont: 15,
    fontRatio: 30
  });

  // scroll to section divs
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

  // add bottom box-shadow to navbar on scroll down
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

  // start animations on scroll
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

  // close modal clicking on overlay
  $('.modal').click(function() {
    if($(event.target).is('.modal')) {
      $('.modal').removeClass('show');
    }
  })

  // hide and show modals
  $('#modal-trigger-one').click(function () {
    $('#modal-one').addClass('show');
  });

  $('#close-one').click(function () {
    $('#modal-one').removeClass('show');
  });

  $('#modal-trigger-two').click(function () {
    $('#modal-two').addClass('show');
  });

  $('#close-two').click(function () {
    $('#modal-two').removeClass('show');
  });

  $('#modal-trigger-three').click(function () {
    $('#modal-three').addClass('show');
  });

  $('#close-three').click(function () {
    $('#modal-three').removeClass('show');
  });

  $('#modal-trigger-four').click(function () {
    $('#modal-four').addClass('show');
  });

  $('#close-four').click(function () {
    $('#modal-four').removeClass('show');
  });

  $('#modal-trigger-five').click(function () {
    $('#modal-five').addClass('show');
  });

  $('#close-five').click(function () {
    $('#modal-five').removeClass('show');
  });

  $('#modal-trigger-six').click(function () {
    $('#modal-six').addClass('show');
  });

  $('#close-six').click(function () {
    $('#modal-six').removeClass('show');
  });

  $('#modal-trigger-seven').click(function () {
    $('#modal-seven').addClass('show');
  });

  $('#close-seven').click(function () {
    $('#modal-seven').removeClass('show');
  });

  $('#modal-trigger-eight').click(function () {
    $('#modal-eight').addClass('show');
  });

  $('#close-eight').click(function () {
    $('#modal-eight').removeClass('show');
  });

});