
$(window).bind('load', function () {
  "use strict";
  if ($('.main_slider').length > 0) {
    $('.mv_bg').addClass('init');
    var mainSlider = $('.main_slider').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
      centerMode: true,
      centerPadding: 0,
      pauseOnHover: false,
      variableWidth: true,
      draggable: true,
      pauseOnFocus: false,
      slidesToShow: 1,
    });
    // mainSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     $('.main_slider li:nth-child(' + (nextSlide + 1) + ')').addClass('zoomed');
    // });
    // mainSlider.on('afterChange', function (event, slick, currentSlide) {
    //     var slideIndex = currentSlide;
    //     if (slideIndex === 0) {
    //         slideIndex = 2;
    //     }
    //     $('.main_slider li:nth-child(' + (slideIndex) + ')').removeClass('zoomed');
    // });
  }

  $('.sec04 .slider').slick({
    centerMode: true,
    centerPadding: '22%',
    slidesToShow: 1,
    infinite: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerPadding: '0%',
          centerMode: true,
          draggable: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 751,
        settings: {
          centerPadding: '0',
          arrows: true,
          centerMode: false,
          slidesToShow: 1,
          // speed: 1000,
          // autoplay: true,
          // autoplaySpeed: 6000,
          Swipe: false,
          draggable: false,
          focusOnSelect: false,
          swipeToSlide: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '0',
          arrows: true,
          centerMode: false,
          slidesToShow: 1,
          // speed: 1000,
          // autoplay: true,
          // autoplaySpeed: 6000,
          Swipe: false,
          draggable: false,
          focusOnSelect: false,
          swipeToSlide: false

        }
      }
    ]
  });
  $(".before_after").twentytwenty();

  $('.sec07 .slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    variableWidth: true,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $('.nav_list .parent .sub').slideUp();

  $(".nav_list .dropdownlink").click(function () {
    
    $(".nav_list .parent").find(".sub").stop().slideUp();

    if ($('.nav_list .parent').hasClass('open')) {
      $(".nav_list .parent").stop().removeClass('open')
      $(this).next(".sub").stop().slideToggle()
    }
    else {



      $(".nav_list .parent").stop().removeClass('open')
      $(this).next(".sub").stop().slideDown()
      $(this).parent('.parent').addClass('open')

    }
  })



  // AOS.init({
  //     once: "true",
  //     duration: 1200,
  // });
});
