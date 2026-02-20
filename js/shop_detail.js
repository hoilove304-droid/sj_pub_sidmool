$(document).ready(function(){

    let n = 1;

    $('.order_updown input').on('click',function(){
        if($(this).index() == 0){
            n++;
        }else{
            n--;
        }
        $('#result').text(n);
        $('.money').text(n*16800+'원');
    });






});