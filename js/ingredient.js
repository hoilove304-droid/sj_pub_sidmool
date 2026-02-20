$(document).ready(function(){

    $('.check_detail a').eq(0).click(function(){

        $('.check').css({'display':'none'});
        $('.ingredient').css({'display':'block'});
    });

    $('.check_detail a').eq(1).click(function(){

        $('.ingredient').css({'display':'none'});
        $('.check').css({'display':'block'});
    });

    $('.check_detail a').on("click",function(){
        $('.check_detail a').css({'background-color':'#ffffff', 'color':'#000000'});
        $(this).css({'background-color':'#000000', 'color':'#ffffff'});
    });

    $('.number li').click(function(){
        let idx = $(this).index();

        $('.ingredient_ct').css({'display':'none'});
        $('.ingredient_first').css({'display':'none'});
        $('.ingredient_ct').eq(idx).css({'display':'block'});
    });

    $('.number li a').on('click',function(){
        $('.number li a').css({'color':'#000000'});
        $(this).css({'color':'#888888'});
    });

    $('.check_number li').click(function(){
        let idx = $(this).index();

        $('.check_ct').css({'display':'none'});
        $('.check_first').css({'display':'none'});
        $('.check_ct').eq(idx).css({'display':'block'});
    });

    $('.check_number li a').on('click',function(){
        $('.check_number li a').css({'color':'#000000'});
        $(this).css({'color':'#888888'});
    });
});