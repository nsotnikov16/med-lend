$(function () {
    $("[data-fancybox]").fancybox({
        touch: true,
        preload: true,
        loop: true,
    });
});

var swiperExamples = new Swiper('.examples .swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.examples .swiper .swiper-button-next',
        prevEl: '.examples .swiper .swiper-button-prev',
    },
})