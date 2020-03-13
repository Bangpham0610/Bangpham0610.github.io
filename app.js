$(function () {
    $('.n1').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi1').offset().top-72
        }, 1000)
        $('nav').addClass('bg-nav');
        $('.n2').removeClass('mauxanh');
        $('.n3').removeClass('mauxanh');
        $('.n0').addClass('mautrang');
        $('.ten').addClass('mautrang');
        $('.n2').addClass('mautrang');
        $('.n3').addClass('mautrang');
        $(this).addClass('mauxanh');
    });
    $('.n2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi2').offset().top-72
        }, 1000)
        $('nav').addClass('bg-nav');
        $('.n1').removeClass('mauxanh');
        $('.n3').removeClass('mauxanh');
        $('.n0').addClass('mautrang');
        $('.ten').addClass('mautrang');
        $('.n1').addClass('mautrang');
        $('.n3').addClass('mautrang');
        $(this).addClass('mauxanh');
    });
    $('.n3').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi3').offset().top-72
        }, 1000)
        $('nav').addClass('bg-nav');
        $('.n1').removeClass('mauxanh');
        $('.n2').removeClass('mauxanh');
        $('.n1').addClass('mautrang');
        $('.ten').addClass('mautrang');
        $('.n2').addClass('mautrang');
        $('.n0').addClass('mautrang');
        $(this).addClass('mauxanh');
    });
    $('.n0').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('header').offset().top
        }, 1000)
        $('.n0').removeClass('mautrang');
        $('nav').removeClass('bg-nav');
        $('.ten').removeClass('mautrang');
        $('.n1').removeClass('mautrang mauxanh');
        $('.n2').removeClass('mautrang mauxanh');
        $('.n3').removeClass('mautrang mauxanh');
    });
});