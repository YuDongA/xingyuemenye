/**
 * Created by lenovo on 2017/8/21.
 */
$(function () {
$('.yyx-con-dl').click(function(){
    var indexs = $(this).index();//获取当前的下标
    $('#yyx-zong-show').css('display','block');
    $('.yyx-con-show').eq(indexs).attr('style','display:block;');//加上属性
    // e.stopPropagation();
    // var top = $(document).scrollTop();
    // $(document).on('scroll.unable',function (e) {
    //     $(document).scrollTop(top);
    // });
    // $(document).css(' ::-webkitScrollbar ','#fff')
});
$('.yyx-con-s-rod').click(function(e){
    $('.yyx-con-show').attr('style','display:none;');//加上属性
    $('#yyx-zong-show').css('display','none');
    e.stopPropagation(); //阻止事件冒泡
    // $('body').css('overflowY','visible');
});
});
