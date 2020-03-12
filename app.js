$(function () {
    setInterval(() => {
        
        var slide_active = $('.active');
        
        if ($('li.slide:last').hasClass('active')) {
            $('li.slide:first').addClass('active');
            $('li.slide:last').removeClass('active');
            $('li.slide:first').removeClass('diactive');
            $('li.slide:last').addClass('diactive');

        } else {
            $(slide_active).removeClass('active');
            $(slide_active).next().addClass('active');
            $(slide_active).addClass('diactive');
            $(slide_active).next().removeClass('diactive');
        }
    }, 3000);
});