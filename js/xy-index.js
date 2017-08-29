/**
 * Created by Administrator on 2017/8/18 0018.
 */

//
// $(function () {
//     $("#nav li").hover(function () {
//         $("#nav li a").css('color',"#333")
//         $(this).find("a").css('color',"#fff")
//         $(this).find(".bkg").stop(true).animate(({'top':0}),200).parent().parent().siblings().find(".bkg").stop(true).animate(({'top':'105px'}),200)
//
//     },function () {
//         $(this).find("a").css('color',"#333")
//         $("#nav li").find(".bkg").stop(true).animate(({'top':'105px'}),200)
//         $("#nav li:first").find(".bkg").stop(true).animate(({'top':0}),200)
//         $("#nav li:first").find("a").css('color',"#fff")
//     })
// })

$(function () {
    $("#nav li").hover(function () {
        $(this).addClass("sheng").siblings().removeClass("sheng")

    },function () {
        $(this).removeClass("sheng")
        $("#nav li:first").addClass("sheng")
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
        $("#nav li:first").removeClass("sheng")
    },function () {
        $("#nav .n2").removeClass("sheng")
        $("#subNav .about").removeClass("on")
        $("#nav li:first").addClass("sheng")
    })



    $("#nav .n3").hover(function () {
        $("#subNav .news").addClass("on")

    },function () {
        $("#subNav .news").removeClass("on")
    })
    $("#subNav .news").hover(function () {
        $("#nav .n3").addClass("sheng")
        $("#subNav .news").addClass("on")
        $("#nav li:first").removeClass("sheng")
    },function () {
        $("#nav .n3").removeClass("sheng")
        $("#subNav .news").removeClass("on")
        $("#nav li:first").addClass("sheng")
    })


    $("#nav .n4").hover(function () {
        $("#subNav .relation").addClass("on")

    },function () {
        $("#subNav .relation").removeClass("on")
    })
    $("#subNav .relation").hover(function () {
        $("#nav .n4").addClass("sheng")
        $("#subNav .relation").addClass("on")
        $("#nav li:first").removeClass("sheng")
    },function () {
        $("#nav .n4").removeClass("sheng")
        $("#subNav .relation").removeClass("on")
        $("#nav li:first").addClass("sheng")
    })
})