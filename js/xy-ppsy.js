$(function () {
    $("#nav li").hover(function () {
        $(this).addClass("sheng").siblings().removeClass("sheng")

    },function () {
        $(this).removeClass("sheng")
        $("#nav li:nth-child(2)").addClass("sheng")
    })
})



$(function () {
    $("#nav .n2").hover(function () {
        $("#subNav .about").addClass("on")

    },function () {
        $("#subNav .about").removeClass("on")
    })
    $("#subNav .about").hover(function () {
        $("#nav .n2").addClass("sheng")
        $("#subNav .about").addClass("on")
        $("#nav li:nth-child(2)").removeClass("sheng")
    },function () {
        $("#nav .n2").removeClass("sheng")
        $("#subNav .about").removeClass("on")
        $("#nav li:nth-child(2)").addClass("sheng")
    })



    $("#nav .n3").hover(function () {
        $("#subNav .news").addClass("on")

    },function () {
        $("#subNav .news").removeClass("on")
    })
    $("#subNav .news").hover(function () {
        $("#nav .n3").addClass("sheng")
        $("#subNav .news").addClass("on")
        $("#nav li:nth-child(2)").removeClass("sheng")
    },function () {
        $("#nav .n3").removeClass("sheng")
        $("#subNav .news").removeClass("on")
        $("#nav li:nth-child(2)").addClass("sheng")
    })


    $("#nav .n4").hover(function () {
        $("#subNav .relation").addClass("on")

    },function () {
        $("#subNav .relation").removeClass("on")
    })
    $("#subNav .relation").hover(function () {
        $("#nav .n4").addClass("sheng")
        $("#subNav .relation").addClass("on")
        $("#nav li:nth-child(2)").removeClass("sheng")
    },function () {
        $("#nav .n4").removeClass("sheng")
        $("#subNav .relation").removeClass("on")
        $("#nav li:nth-child(2)").addClass("sheng")
    })
})


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
            clearInterval(timer)
            timer=setInterval(function () {
                if(document.documentElement.scrollTop==0){
                    clearInterval(timer)
                }
                document.documentElement.scrollTop-=10
            },1)
        }
    })

})


$(function () {
    $("#gfwchat").click(function () {
        $(".syd-alert").css("display","block")
        $(".syd-wechat").css("opacity","1")
        $(document.body).toggleClass("html-body-overflow");
    })
    $(".syd-close").click(function () {
        $(".syd-alert").css("display","none")
        $(document.body).toggleClass("html-body-overflow");

    })
})



$(function () {
    var num=0
    var timer=null;
    $('#next').click(function () {
        num++
        $(".slide").removeClass('active')
        $(".slide").eq(num).addClass('active')
        if (num==1){
            num=-1
        }
    })
    $('#prev').click(function () {
        num++
        $(".slide").removeClass('active')
        $(".slide").eq(num).addClass('active')
        if (num==1){
            num=-1
        }
    })
    timer=setInterval(function () {
            num++
            $(".slide").removeClass('active')
            $(".slide").eq(num).addClass('active')
            if (num==1) {
                num = -1
            }
    },2000)

    $('#slider').hover(function () {
       clearInterval(timer)
    },function () {
        timer=setInterval(function () {
            num++
            $(".slide").removeClass('active')
            $(".slide").eq(num).addClass('active')
            if (num==1) {
                num = -1
            }
        },2000)
    })
})


