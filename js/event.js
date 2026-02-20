$(document).ready(function(){

    $('.event_menu a').click(function(){
        let idx = $(this).index();

        $('.all_content').css({'display':'none'});
        
        $('.event_content').css({'display':'none'});
        $('.event_content').eq(idx).css({'display':'block'});
    });

    $('.event_menu a').on("click",function(){
        $('.event_menu a').css({'background-color':'#ffffff', 'color':'#000000'});
        $(this).css({'background-color':'#000000', 'color':'#ffffff'});
    });


    $('.all_more').slice(0, 0).show();
    $('.all_content > p').click(function(e){
        e.preventDefault();
        $(".all_more:hidden").slice(0, 1).show();
        if($($('.all_more:hidden')).length == 0){
            $('.all_content > p').css({'color':'#d9d9d9', 'border-bottom-color':'#d9d9d9'})
        }
    });


    
});