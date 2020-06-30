$(function () {
    drjart.init();
})
var drjart = {
    init: function () {
        drjart.slider();
        drjart.sliderNav();
        drjart.handleSideMenu();
        drjart.fullPage();
        drjart.toggleClass();
        drjart.slideClassToggle();
        drjart.slideToggle();
        drjart.getScroll();
    },

    slider: function () {
        $('.visual, .product-slide, .main-slide').slick({
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            arrows: false,
        });

        $('.story-slide').slick({
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
        });

    },

    sliderNav: function () {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    },

    handleSideMenu: function () {
        $('.all-menu').on('click', function () {
            $('html').toggleClass('open-side-menu');
        })
        $('.side-nav .screen').on('click', function () {
            $('html').removeClass('open-side-menu')
        })
    },

    fullPage: function () {
        $(document).ready(function () {
            $('#fullpage').fullpage({
                //options here
                navigation: true,
                navigationPosition: 'right',
                autoScrolling: true,
                scrollHorizontally: true,
                anchors:['main-slide', 'project', 'movie', 'event']
            });

        });
    },

    toggleClass: function () {
        $('.chat').on('click', function () {
            $('.drop-icon, .chat-icon').toggleClass('is-active');
        })
    },

    slideClassToggle: function () {
        $('.text-review .more').on('click', function () {
            $('.type, .comment').slideDown();
            $('.description span, .more').toggleClass('is-active');
        }),
            $('.description .open').on('click', function () {
                $('.type, .comment').slideUp();
                $('.description span, .more').toggleClass('is-active');
            });
    },


    slideToggle: function () {
      $('.star-score .name').on('click', function () {
            $('.star-score .dropdown').slideToggle();
      }),
          $('.type-select .name').on('click', function () {
              $(this).siblings('.type-select .dropdown').slideToggle();
          });

    },

    getScroll: function () {
        $(window).on("scroll", function () {
            var scrollTop = $(window).scrollTop();
            if(scrollTop > 500) {
                $("html").addClass("get-scroll");
            } else {
                $("html").removeClass("get-scroll");
            }
        })
    }

};