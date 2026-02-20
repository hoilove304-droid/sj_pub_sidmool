$(document).ready(function(){

    $('.main_menu li').mouseover(function(){
        $(this).find('.sub_menu').stop().slideDown(200);
    }).mouseout(function(){
        $(this).find('.sub_menu').stop().slideUp(200);
    });


    $('#scroll_top').on("click",function(){
    $('html, body').animate({
        scrollTop:0
    },400)
    return false;
    });

    $(document).on("scroll",function(){
        if($(document).scrollTop() >= 10){
            $('.gnb').hide();
            $('.logo_nav').css({'height':'50px', 'position':'fixed', 'z-index':'2', 'background-color':'#ffffff','top':'0'});
            $('.logo img').css({'width':'25%'});
            $('nav').css({'font-size':'14px'});
            $('.main_menu > li').css({'padding-top':'15px'});
            $('.sub_menu').css({'top':'48px'});
        }else{
            $('.gnb').show();
            $('.logo_nav').css({'height':'75px', 'position':'inherit', 'z-index':'2', 'background-color':'#ffffff'});
            $('.logo img').css({'width':'40%'});
            $('nav').css({'font-size':'16px'});
            $('.main_menu > li').css({'padding-top':'30px'});
            $('.sub_menu').css({'top':'70px'});
        }
    });

});