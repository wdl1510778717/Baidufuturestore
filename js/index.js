$(function(){

    //banner轮播
    var imag_box=$('.ban-img');
    var banner=$('.banner-left');
    var imags=$('.swiper-slide');
    var banner_btn=$('.banner-btn');
    var t=setInterval(move,2000);
    var i=0;
    function move(){
        var x=$('.swiper-slide').width();
    	i++;
    	if (i==imags.length) {
    		i=0;
    	}
    	imag_box.animate({left:x*-i},1000)
        banner_btn.removeClass('hots').eq(i).addClass('hots');
    }

    btn动画
    var banner_btn=$('.banner-btn');
    banner_btn.eq(0).addClass('hots');
    banner_btn.click(function(){
        clearInterval(t);
        i=banner_btn.index(this);
        var x=$('.swiper-slide').width();
        banner_btn.removeClass('hots').eq(i).addClass('hots');
        imag_box.animate({left:x*-i},1000,function(){
            var t=setInterval(move,2000);
        });
    })
    var b_left=$('.btn-left');
    var b_right=$('.btn-right');
    b_right.click(function(){
        var x=$('.swiper-slide').width();
       clearInterval(t)
            i++
            if (i==imags.length) {
                i=0;
            };
            imag_box.animate({left:x*-i},1000)
            banner_btn.removeClass('hots').eq(i).addClass('hots');
            t=setInterval(move,1500)
    })
    b_left.click(function(){
        var x=$('.swiper-slide').width();
         clearInterval(t)
            i--
            if (i==-1) {
                i=imags.length-1;
            };
            imag_box.animate({left:x*-i},1000)
            banner_btn.removeClass('hots').eq(i).addClass('hots');
            t=setInterval(move,1500)
    })
    //返回顶部
    var top=$('.top');
    top.click(function(){
        $('html,body').animate({scrollTop:0},1000)
        return false;
    })
})