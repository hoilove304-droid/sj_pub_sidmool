$(document).ready(function(){

    $('.one_time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
    $('#slider-div').slick('slickPlay');

    $('.slick-next').css({'display':'none'});
    $('.slick-prev').css({'display':'none'});





});