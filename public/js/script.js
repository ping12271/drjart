$(function () {
    drjart.init();
})
var drjart = {
    init: function () {
        drjart.slider();
        drjart.handleSideMenu();
    },

    slider: function () {
        $('.visual, .product-slide').slick({
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

    }

};