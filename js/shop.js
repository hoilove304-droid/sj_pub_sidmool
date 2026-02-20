$(document).ready(function(){

    $('.shop_menu ul li').click(function(){
        let idx = $(this).index();

        $('.all_content').css({'display':'none'});
        if(idx !=0){
            $('.category_ct').css({'display':'none'});
        }else{
            $('.category_ct').css({'display':'block'});
        }
        $('.category_ct').css({'display':'none'});
        $('.category_ct').eq(idx).css({'display':'block'});
    });


    $('.all_more').slice(0, 0).show();
    $('.all_content > p').click(function(e){
        e.preventDefault();
        $(".all_more:hidden").slice(0, 1).show();
        if($($('.all_more:hidden')).length == 0){
            $('.all_content > p').css({'color':'#d9d9d9', 'border-bottom-color':'#d9d9d9'})
        }
    });

    $('.shop_menu ul li').on('click',function(){
        $('.shop_menu ul li').css({'background-color':'#ffffff', 'color':'#000000'});
        $(this).css({'background-color':'#000000', 'color':'#ffffff'});
    });
});