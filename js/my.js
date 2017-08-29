/**
 * Created by lenovo on 2017/8/20.
 */
$(function () {
    var timer=null;
    $(window).scroll(function(){
        if($(this).scrollTop()<330){
            $('#syd-top').css("opacity","0")
        }else{
            $('#syd-top').css("opacity","1")
        }
    })
    $('#syd-top').click(function(){
        if(document.documentElement.scrollTop==0){
            clearInterval(timer)
            timer=setInterval(function () {
                if(document.body.scrollTop==0){
                    clearInterval(timer)
                }
                document.body.scrollTop-=10
            },1)
        }else{
            clearInterval(timer);
            timer=setInterval(function () {
                if(document.documentElement.scrollTop==0){
                    clearInterval(timer)
                }
                document.documentElement.scrollTop-=10
            },1)
        }
    })

});
