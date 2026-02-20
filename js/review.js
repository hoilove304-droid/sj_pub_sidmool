$(document).ready(function(){

    $('.review_click a').eq(0).click(function(){
        
        $('.photo_review').css({'display':'block'});
        $('.text_review').css({'display':'none'});
        $('.review_click a img').eq(0).attr("src", "img/review/photo_on.png");
        $('.review_click a img').eq(1).attr("src", "img/review/text_off.png");
    });

    $('.review_click a').eq(1).click(function(){
        
        $('.photo_review').css({'display':'none'});
        $('.text_review').css({'display':'block'});
        $('.review_click a img').eq(0).attr("src", "img/review/photo_off.png");
        $('.review_click a img').eq(1).attr("src", "img/review/text_on.png");
    });

    $('.photo_more').slice(0, 0).show();
    $('.photo_review > p').click(function(e){
        e.preventDefault();
        $(".photo_more:hidden").slice(0, 1).show();
        if($($('.photo_more:hidden')).length == 0){
            $('.photo_review > p').css({'color':'#d9d9d9', 'border-bottom-color':'#d9d9d9'})
        }
    });

    $('.number li').click(function(){
        let idx = $(this).index();

        $('.text_ct').css({'display':'none'});
        $('.text_first').css({'display':'none'});
        $('.text_ct').eq(idx).css({'display':'block'});
    });


    $('.number li a').on('click',function(){
        $('.number li a').css({'color':'#000000'});
        $(this).css({'color':'#888888'});
    });
});