$("#seeMore").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});
$('.selectpicker').selectpicker();

