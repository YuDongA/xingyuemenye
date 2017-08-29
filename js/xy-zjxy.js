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
        $("#nav li:first").removeClass("sheng")
    },function () {
        $("#nav .n2").removeClass("sheng")
        $("#subNav .about").addClass("on")
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
        $("#subNav .about").addClass("on")
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
        $("#subNav .about").addClass("on")
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






var arr=[
    {
        "title":"2013",
        "cont":"集团自主创新、科技跨界产品 “星月神增程式电动自行车” 上市热销集团省重大工业项目 （黄棠高新园区）开建、占 地500亩、总投资15亿元，集团 “二次出发”全新开启，创新、 创效，创造未来"
    },
    {
        "title":"2012",
        "cont":"集团下属新型生物医药企业—— 浙江星月药物科技股份有限公司，成立 浙江嘉兴"
    },
    {
        "title":"2011",
        "cont":"集团参股莱恩农业装备有限公司年产 万台高性能收割机项目竣工投产"
    },
    {
        "title":"2010",
        "cont":"集团下属地毯公司“绵绒地毯织机系列成套 装备技术及其产业化”项目，荣获国家科技进步 二等奖"
    },
    {
        "title":"2009",
        "cont":"自2009年开始，连续六年被评为 高新技术企业"
    },
    {
        "title":"2008",
        "cont":"集团公司荣获2008中国民营企业竞争力50强"
    },
    {
        "title":"2007",
        "cont":"集团在美国佛罗里达州设立“星月（美国）责任 有限公司”，进一步实施走出去战略"
    },
    {
        "title":"2006",
        "cont":"集团被先为全国非道路用摩托 车标准委员会副主任委员单位"
    },
    {
        "title":"2005",
        "cont":"中华全国工商业联合会授予星月集团 ”2003年度工商联合民营企业全国500强“称号"
    },
    {
        "title":"2004",
        "cont":"永康市人民政府发布2003年度纳税大户， 集团名列永康市第一名（六连冠）"
    },
    {
        "title":"2003",
        "cont":"在浙江省十届人大一次会议上，星月集团总裁 胡济荣光荣当选第十届全国人大代表"
    },
    {
        "title":"2001",
        "cont":"公司同浙江大学合作成立“浙江大 学星月动力机械及工程技术中心”、 “浙江大学动力机械及工、程学科 博士征税研基地”"
    },
    {
        "title":"2000",
        "cont":"国家税务总局公布浙江星月 集团名列中国私营企业纳税超强第19名"
    },
    {
        "title":"1999",
        "cont":"浙江星月动力机械有限公司 名列永康市1996年度纳税 第一名"
    },
    {
        "title":"1996",
        "cont":"生产出辆第一台踏板式摩托车GY6-125发动机"
    },
    {
        "title":"1995",
        "cont":"浙江星月动力机械有限公司成立"
    },
    {
        "title":"1989",
        "cont":"星月集团前身古山有色金属材料厂创建"
    }
]

$("#year ul li").each(function (i) {
    $(this).mouseover(function () {
        $("#yearTitle").html(arr[i].title)
        $("#YearContent").html(arr[i].cont)
    })
})
for(var i=0;i<year.length;i++){

}

// 选项卡



//move

(function(){
    function Move(outerClass,boxClass){
        //outerClass 最大的盒子（包着画框和按钮）
        //boxClass 画框
        this.outer = document.getElementsByClassName(outerClass)[0];
        this.box = this.outer.getElementsByClassName(boxClass)[0];
        this.inner = this.box.children[0];
        this.prev = this.outer.children[1];
        this.next = this.outer.children[2];
        this.w = this.box.offsetWidth;
        this.iNow = 0;
        this.t = null;
        this.max = this.inner.children.length/4-1;
        this.outer.onmouseover =function(){
            clearInterval(this.t)
        }.bind(this)
        this.outer.onmouseout =function(){
            clearInterval(this.t)
            this.t = setInterval(function(){
                this.next.onclick()
            }.bind(this),2000)
        }.bind(this)
        this.next.onclick = function(){
            // alert(1)
            this.iNow++;
            if(this.iNow>this.max){
                this.iNow = 0;
                // inner.style.left = '0px'
            }
            move(this.inner,{left:-this.iNow*this.w},{type:Tween.Quart.easeIn})
        }.bind(this)
        this.prev.onclick = function(){
            this.iNow--;
            if(this.iNow<0){
                this.iNow = this.max;
                // inner.style.left = '0px'
            }
            move(this.inner,{left:-this.iNow*this.w})
        }.bind(this)
        clearInterval(this.t)
        this.t = setInterval(function(){
            this.next.onclick()
        }.bind(this),2000)
    }
    new Move('move','picbox')
    new Move('moves','picboxs')
})()







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


