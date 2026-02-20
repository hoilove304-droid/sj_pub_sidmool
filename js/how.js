$(document).ready(function(){

    $(".que").click(function(){
        $(this).next(".anw").stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next(".anw").siblings(".anw").slideUp(300);
    });


    $('.number li').click(function(){
        let idx = $(this).index();

        $('.how_ct').css({'display':'none'});
        $('.first_content').css({'display':'none'});
        $('.how_ct').eq(idx).css({'display':'block'});
    });


    $('.number li a').on('click',function(){
        $('.number li a').css({'color':'#000000'});
        $(this).css({'color':'#888888'});
    });

});