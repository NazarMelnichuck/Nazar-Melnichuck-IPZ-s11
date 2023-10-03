$(document).ready(function () {
    $('.header-burger').click(function (active) {
        $('.header, .header__menu, .header-burger').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.nav-menu, .page').click(function (hide) {
        $('.page, .header__link').removeClass('active');

        // $('.header-burger, .header__menu, .header__burger').toggleClass('hide');
        // $('.header__burger').toggleClass('click-fixed');
        // $('body').toggleClass('hide');
        // $('body').toggleClass('lock');
    });
});