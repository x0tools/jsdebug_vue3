
function getRelativeTop(curEle) {
    // var totalLeft = 0;
    var totalTop = 0;
    var par = curEle.offsetParent;
    //首先把自己本身的相加
    // totalLeft += curEle.offsetLeft;
    totalTop += curEle.offsetTop;
    //累加父元素的相对上一个元素的距离值
    while (par) {
        if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
            //不是IE8我们才进行累加父级参照物的边框
            totalTop += par.clientTop;
            // totalLeft += par.clientLeft;
        }
        //把父级参照物的偏移相加
        totalTop += par.offsetTop;
        // totalLeft += par.offsetLeft;
        par = par.offsetParent;
    }
    // return { left: totalLeft, top: totalTop };
    return totalTop
}

export {
    getRelativeTop
}