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


document.addEventListener('DOMContentLoaded', function (event) {
    console.log(navigator.userAgent);
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      var blocks = document.querySelectorAll('.mobile_bottom__nav ul li');
      if (!blocks) return;
      for (var block of blocks) {
          block.style.height = 'auto';
          block.style.paddingBottom = '0.8em';
          block.style.paddingTop = '0.4em';
      }
    }
});

