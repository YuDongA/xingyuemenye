/**
 * Created by Administrator on 2017/8/18 0018.
 */
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





// 轮播图

var Focus=document.querySelector('.focus'),
    lb=Focus.querySelector('.lb'),
    li=lb.querySelectorAll('li'),
    LBtn=Focus.querySelector('.LBtn'),
    RBtn=Focus.querySelector('.RBtn'),
    dot=Focus.querySelector('.dot'),
    dotLi=dot.querySelectorAll('li');

var imgNum=0,dotNum=0;
var oTimer;
var flag=true;
var fadeIntime,fadeOutTime;
for(var i=0;i<li.length;i++){
    li[i].style.zIndex=li.length-i;
}
//右键事件
RBtn.onclick=function(){
    if(flag){
        flag=false;
        var _this1=li[imgNum];
        if(imgNum>=li.length-1){
            imgNum=0;
        }
        var _this2=li[imgNum+1];

        var o1=parseFloat(getComputedStyle(_this1).opacity);
        var o2=parseFloat(getComputedStyle(_this2).opacity);
        if(o1>=1){fadeOut(_this1);}else{fadeIn(_this1);}
        if(o2>=1){fadeOut(_this2);}else{fadeIn(_this2);}
        if(dotNum>=dotLi.length-1){dotNum=-1;}
        noBg();
        dotLi[dotNum+1].style.background='#f8b62d';
        dotLi[dotNum+1].style.border='1px solid #f8b62d';
        imgNum++;
        dotNum++;
    }
};
//左键事件
LBtn.onclick=function(){
    if(flag){
        flag=false;
        var _this1=li[imgNum];
        if(imgNum<=0){imgNum=li.length-1;}
        var _this2=li[imgNum-1];

        var o1=parseFloat(getComputedStyle(_this1).opacity);
        var o2=parseFloat(getComputedStyle(_this2).opacity);
        if(o1>=1){fadeOut(_this1);	}else{fadeIn(_this1);}
        if(o2>=1){fadeOut(_this2);	}else{fadeIn(_this2);}
        if(dotNum<=0){dotNum=dotLi.length;}
        noBg();
        dotLi[dotNum-1].style.background='#f8b62d';
        imgNum--;
        dotNum--;
    }
};
//焦点事件
for(var i=0;i<dotLi.length;i++){
    dotLi[i].index=i;
    dotLi[i].onclick=function(){
        if(flag){
            flag=false;
            noBg();
            this.style.background='#f8b62d';
            this.style.border='1px solid #f8b62d';
            fadeIn(li[this.index]);
            fadeOut(li[imgNum]);
            imgNum=this.index;
            dotNum=this.index;
        }
    }
}
//动画
function autoPlay(){
    autoTime=setInterval(function(){
        RBtn.onclick();
    },2000);
}
autoPlay();
Focus.onmouseover=function(){
    clearInterval(autoTime);
}
Focus.onmouseout=function(){
    autoPlay();
}
//渐变消失
function fadeOut(ele){
    fadeOutTimer=setInterval(function(){
        var o=parseFloat(getComputedStyle(ele).opacity);
        if(o<=0){
            clearInterval(fadeOutTimer);
            flag=true;
            return;
        }
        ele.style.opacity=o-0.5;
    },50);
}
//渐变显示
function fadeIn(ele){
    fadeIntimer=setInterval(function(){
        var o=parseFloat(getComputedStyle(ele).opacity);
        if(o>=1){
            clearInterval(fadeIntimer);
            flag=true;
            return;
        }
        ele.style.opacity=o+0.5;
    },50);
}
//没有背景色
function noBg(){
    for(var i=0;i<dotLi.length;i++){//背景色变白
        dotLi[i].style.backgroundColor='transparent';
        dotLi[i].style.border='1px solid #fff';
    }
}

// 轮播图完
