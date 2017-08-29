//
//
// window.onload = function() {
//     // lunbo(document.getElementById('yyx-zong-show'), 1000);
// };
// function lunbo(element,FWidth){
//     // console.log(element)
//     var Focus=element;
//     // var li=document.getElementById('yyx-zong-show');
//     var li=Focus.getElementsByClassName('yyx-con-show')[0],
//         litn=li.getElementsByClassName('yyx-con-jiant-l')[0],
//         RBtn=li.getElementsByClassName('yyx-con-jiant')[0]
//         // dot=Focus.querySelector('.dot'),
//         // dotLi=dot.querySelectorAll('li');//获得元素；
//     Focus.style.width=FWidth+"px";
//     for(var i=0; i<li.length; i++){
//         li[i].style.width=FWidth+"px";
//     }
//     // li.style.width=FWidth*li.length+"px";
//     // var liW=parseInt(getComputedStyle(li[0]).width);
//     var imgNum=0,//初始化为0；//图片移动次数计数器；
//         aniTime,//定时器
//         lastNum=0,//图片每次移动距离计数器
//         flag=true,//按钮事件开关
//         dotNum=0;//焦点按钮计时器
//
//
//     //右键点击事件
//     RBtn.onclick=function(){
//         if(flag){
//             flag=false;
//             if(imgNum>=li.length-1){
//                 li.style.marginLeft="0px";//sum=sum-1;
//                 imgNum=0;
//             }
//             animation(-30,FWidth);
//             if(dotNum>=dotLi.length-1){
//                 dotNum=-1;
//             }
//             noBg();
//             // dotLi[dotNum+1].style.backgroundColor="#3cf";
//             imgNum++;
//             dotNum++;
//
//         }
//     }
//     //左键点击事件
//     litn.onclick=function(){
//         if(flag){
//             flag=false;
//             if(imgNum<=0){
//                 li.style.marginLeft=-parseInt(getComputedStyle(li).width)+600+'px';
//                 imgNum=li.length-1;
//             }
//             animation(30,FWidth);//移动距离
//             if(dotNum<=0){
//                 dotNum=dotLi.length;
//             }
//             noBg();
//             // dotLi[dotNum-1].style.backgroundColor="#3cf";
//             imgNum--;
//             dotNum--;
//         }
//     }
//     // //焦点按钮点击事件
//     // for(var i=0;i<dotLi.length;i++){
//     //     dotLi[i].index=i;
//     //     dotLi[i].onclick=function(){
//     //         if(flag){
//     //             flag=false;
//     //             noBg();
//     //             this.style.backgroundColor='#3cf';
//     //             if(imgNum>=li.length-1){
//     //                 li.style.marginLeft='0px';
//     //                 imgNum=0;
//     //             }
//     //             if(this.index-dotNum>=0){
//     //                 animation(-50,(this.index-dotNum)*600);
//     //             }else{
//     //                 animation(50,(this.index-dotNum)*600);
//     //             }
//     //             dotNum=this.index;
//     //             imgNum=this.index;
//     //         }
//     //     }
//     // }
//     /*alert(this.index )//当前函数被谁引用；*/
//
//     //动画函数
//     function animation(everyMove,liW){        //绝对值math.abs
//         var moveNum=Math.abs(parseInt(liW/everyMove));
//         aniTime=setInterval(function(){//定时器；
//             if(lastNum>=moveNum){
//                 clearInterval(aniTime);
//                 lastNum=0;
//                 flag=true;
//                 return;
//             }
//             li.style.marginLeft=parseInt(getComputedStyle(li).marginLeft)+everyMove+"px";//封装的代码//animation;
//             lastNum++;
//         },24);
//     }
//     //焦点按钮封装
//     // function noBg(){
//     //     for(var j=0;j<dotLi.length;j++){//背景色变白
//     //         dotLi[j].style.backgroundColor='#fff';
//     //     }
//     // }
//     //自动轮播
//     // var autoTime;
//     // function autoPlay(){
//     //     autoTime=setInterval(function(){
//     //         RBtn.onclick();
//     //
//     //     },3000);
//     // }
//     // autoPlay();
//     // Focus.onmouseover=function(){
//     //     clearInterval(autoTime);
//     // }
//     // Focus.onmouseout=function(){
//     //     autoPlay();
//     // }
// }