

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


let start = Date.now();
document.addEventListener('DOMContentLoaded', function (event) {
    let giftPopup = null;
    document.addEventListener('mouseleave', function (e) {
        if ((Date.now() - start) < 20000) return;
        if ($.cookie('showGifts')) return;
        if (giftPopup) return;
        giftPopup = $.fancybox.open([{
            src: '#giftPopup',
            type: 'inline',
            opts: {
                thumbs: false,
                fullScreen: false,
                slideShow: false,
                gutter: 0,
                closeClickOutside: true,
                autoFocus: false,
                animationEffect: "fade",
                afterShow: function (instance, slide) {
                    $('.popup').addClass('show');
                    $('.form_success').each(function () {
                        var formHeight = $(this).closest('.form').find('form').outerHeight();
                        $(this).css('height', formHeight);
                    });
                    $.cookie('showGifts', '1', { expires: 0.25 });
                },
                beforeClose: function (instance, slide) {
                    $('.popup').removeClass('show');
                },
                afterClose: function (instance, slide) {
                    $('.fixed').removeAttr('style');
                    giftPopup = null;
                }
            }
        }]);
    });
});
