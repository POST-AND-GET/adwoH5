/**
 * Created by adwo15513 on 2015/7/22.
 */
function resetPage() {
    var deviceWidth = document.documentElement.clientWidth,
        scale = deviceWidth / 320;
    document.body.style.zoom = scale;
}
function $(s){
  return document.querySelector(s);
}
function p1(){
    setTimeout(function(){

        $('#earthw').style.top = '140px';
        $('#peoplew').style.opacity = '1';
        $('#peoplew').style.top = '-120px';
        setTimeout(function(){
            $('#flag').style.opacity = '0';
            setTimeout(function(){
                $('#flag1').style.opacity = '1';
            },100)

        },400)
    },1000);
    setTimeout(function(){
        $('#title').style.left = '14px';
        $('#earthw').style.top = '300px';
        $('#peoplew').style.top = '-50px';
        setTimeout(function(){
            $('#earthw').style.webkitTransition ='none';
            $('#peoplew').style.webkitTransition ='none';
            $('#logo').style.opacity = '1';
        },1800)
    },2000)
}
function p2(){
    setTimeout(function(){
        $('.s3').style.left = '16px';
        $('.pp1').style.left = '40px';
        setTimeout(function(){
            $('.s2').style.right = '18px';
            $('.pp2').style.left = '40px';
            setTimeout(function(){
                $('.s1').style.right = '40px';
                $('.pp3').style.left = '40px';
                setTimeout(function(){
                    $('.people1').style.left = '40px';
                    $('.pp4').style.left = '40px';
                    setTimeout(function(){
                        $('.ppw').style.top = '300px';
                        $('.title12').style.left = '30px';
                        setTimeout(function(){
                            $('.title1').style.opacity = '1'
                        },1000);
                    },800)
                },600)
            },500)
        },400)


    },500)
}
function p3(){

}
function p4(){

}