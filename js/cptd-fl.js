var divs=document.getElementsByClassName('yyx-con-A');
var mins=document.getElementsByClassName('yyx-con-mins');
for(let i=0;i<divs.length;i++) {
    divs[i].onmouseover=function () {
                    mins[i].style.opacity = '0';
                    mins[i].style.transition = '0.8s';
    };
    divs[i].onmouseout= function () {
                mins[i].style.opacity = '1';
    };
}
