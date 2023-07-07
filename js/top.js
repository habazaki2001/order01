
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
      responsive: [
        {
          breakpoint: 751,
          settings: {
            variableWidth: false
          }
        }
      ]
    });
  }

  


  $('.sec07 .slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 751,
        settings: {
          centerPadding: true,
          variableWidth: false,
          centerPadding: "25%"
        }
      }
    ]
  });




  AOS.init({
    once: "true",
    duration: 1200,
  });

  $.ajax({
    'url': 'info/_custom/?limit=3',
    'dataType': 'jsonp',
    'success': function(json) {
        $.each(json.data, function(i, val) {
            var thumb = val.image00 ? $(val.image00).attr('src') : './images/dummy.jpg';
            var html = `<div class="mv_txt_ite"><span> <img width="141" height="105" loading="lazy" src="${thumb}" alt="${val.title}"> </span> <a href="./info/${val.url}" class="flex_col mv_txt_link"> <span class="num">${val.date.replace(/\//g, '.')}</span> <span class="ja"> ${val.title}</span> </a></div>`;
            $('.mv_txt').append(html);
           
        });
        $('.mv_txt').slick({
          slidesToScroll: 1,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: false,
      });
        
    }
   
    })
    $.ajax({
      'url': 'case/_custom/?limit=99',
      'dataType': 'jsonp',
      'success': function(json) {
          $.each(json.data, function(i, val) {
              var before = val.img_before ? $(val.img_before).attr('src') : './images/dummy.jpg';
              var after = val.img_after ? $(val.img_after).attr('src') : './images/dummy.jpg';

               var html = `<div class="item "> <div class="flex_col_center"> <p class="top"> <span>${val.category_name}</span> <a href="./case/${val.url}">${val.title}</a> </p> <div class="pic before_after"> <img width="960" height="640" loading="lazy" src="${before}" alt="${val.title}"> <img width="960" height="640" loading="lazy" src="${after}" alt="${val.title}"> </div> <span class="content flex_center"> <div class="text left"><div class="area">${val.txt6}</div> <div><div class="name">${val.name}</div>様</div> </div> <span class="text right">${val.comment}</span> </span> </div> </div>`;
               $('#sec04_slider').append(html);
          });
          $('.sec04 .slider').slick({
            centerMode: true,
            centerPadding: '22%',
            slidesToShow: 1,
            infinite: true,
            draggable: false,
            swipe: false,
            responsive: [
              {
                breakpoint: 1567,
                settings: {
                  centerPadding: '0%',
                  centerMode: true,
                  draggable: false,
                  swipe: false,
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
                  speed: 1000,
                  autoplay: false,
                  autoplaySpeed: 6000,
                  swipe: false,
                  focusOnSelect: true,
                }
              }
            ]
          });
          $(".before_after").twentytwenty();
      }
     
      })
      

  
});

