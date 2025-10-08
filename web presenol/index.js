$(document).ready(function () {
  // Navbar sticky + scroll-up button
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // Slide-up button
  $('.scroll-up-btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  // Toggle menu/navbar script
  $('.links-btn').click(function () {
    $('.navbar .links').toggleClass("active");
    $('.links-btn i').toggleClass("active");
  });

  // Owl-carousel script (แก้คำผิด autoplayTimeout)
  $('.gallery').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});
