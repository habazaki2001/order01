$(window).bind('load', function() {
    "use strict";
    // anchor in page

    function scroll_animate(position){
        var h_pc = 170;
        var h_sp = 80;
        if ($(window).width() > 750) {
            $('html,body').animate({ scrollTop: position.top - h_pc }, 400);
        } else {
            $('html,body').animate({ scrollTop: position.top - h_sp }, 400);
        }
    }
    $(function() {
        $('a[href^="#"]').click(function() {
            if ($($(this).attr('href')).length) {
                var p = $($(this).attr('href')).offset();
                scroll_animate(p);
            }
            return false;
        });
    });


    // Code under (Ráp page nhớ copy đoạn JS này nha )
    if($('#company').length){
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 6,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                320: {
                slidesPerView: 3,
                },
                600: {
                slidesPerView: 4,
                },
                751: {
                slidesPerView: 6,
                },
            },
        });
        var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        });
    };

 
   

    // if($('.sub').css('display'),('block')){
    //     $(this).find('.sub').slideUp();
    // }

      //  END NAV TOOGLE
    AOS.init({
        once: "true",
        duration: 1200,
        disable: 'mobile'
    });

    $('.tab_show').hide();
    $('.tab_show:first-child').show();
    $('.list_tab_u li').click(function(){
        $('.list_tab_u li').removeClass('active');
        $(this).addClass('active');
        var x = $(this).attr('data-tab');
        $('.tab_show').hide();
        $('#'+x).show()
    })

    $('.s6_u_mail').on('click', function() {
        var href = $(this).find('a').attr('href');
        location.href = href;
    });

    // End Code Under

    // anchor top page #
    var hash = location.hash;
    if (hash) {
        var p = $(hash).offset();
        scroll_animate(p);
    }
   // anchorlink for contact form (Fmail) page
    if ($('.contact_page').length) {
        // anchor FMAIL
        var str = window.location.search;
        var n = str.search("mode");
        if (n >= 0) {
            var p = $('#fmail_form').offset();
            scroll_animate(p);
        }
    }
});

$(window).bind('load scroll', function() {
    "use strict";
    if ($(this).scrollTop() >= 500) {
        $('.to_top,.sp_contact').addClass('show');
    } else {
        $('.to_top,.sp_contact').removeClass('show');
    }
});
// scroll fixed header
$(window).scroll(function () {
    if ($(window).scrollTop() >= 90) {
        if ($('.hamburger ').hasClass('is_active') !== true) {
            $('.h_box').addClass('scroll_fixed');
        }
    }
    else {
        if ($('.hamburger ').hasClass('is_active') !== true) {
            $('.h_box').removeClass('scroll_fixed');
        }

    }
});
// End scroll fixed header



$(document).ready(function() {
    "use strict";
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    // nav
    $(".hamburger").click(function() {
        $(this).toggleClass("is_active");
        $("nav").fadeToggle(100);
        $(this).hasClass("is_active") ?  $('body').css("overflow","hidden") : $('body').css("overflow","scroll")
       ;
    });


    $(".nav_list .dropdownlink").click(function () {
        $(this).parents('li').toggleClass('open');
        if($(this).parents('li').hasClass('open')){
            $(this).next('.sub').find('ul').stop().slideDown();
        } else{
            $(this).next('.sub').find('ul').stop().slideUp();
        }
    })




    if (windowWidth <= 750) {
        $("nav a[href]").click(function() {
            $('.hamburger').removeClass('is_active');
            $('nav').css('display', 'none');
        });
    }
    // back to top
   
    $('.to_top').click(function() {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    /*================= JS CUSTOM ===================*/

    // JS ONLY PAGE SPECIAL
    if ($('.class_name').length) {

    }
    

});