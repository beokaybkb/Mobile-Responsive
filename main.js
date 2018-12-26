menu = $('nav');

$('#openup').on('click', function (e) {
    e.preventDefault();
    menu.slideToggle();
});

$('nav li').on('click', function (e) {
    var w = $(window).width();
    if (w < 580) {
        menu.slideToggle();
    }
});
$('#contentButton').on('click', function () {
    var images = $('#content').position().top;
    images = images - 95;
    $('html,body').animate({
            scrollTop: images
        },
        900
    );
});