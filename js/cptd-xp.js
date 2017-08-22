/**
 * Created by lenovo on 2017/8/21.
 */

$('.yyx-con-dl').click(function(){
    var indexs = $(this).index();//获取当前的下标
    $('.yyx-con-show').eq(indexs).attr('style','display:block;');//加上属性

});
$('.yyx-con-s-rod').click(function(e){
    $('.yyx-con-show').attr('style','display:none;');//加上属性
    e.stopPropagation(); //阻止事件冒泡
});