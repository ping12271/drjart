$(function () {
    drjart.init();
})
var drjart = {
    init: function () {
        drjart.slider();
        drjart.handleSideMenu();
        drjart.fullPage();
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

    handleSideMenu: function () {
        $('.all-menu').on('click', function () {
            $('html').toggleClass('open-side-menu');
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

            //methods
            $.fn.fullpage.setAllowScrolling(false);
        });
    }

};