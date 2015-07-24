/**
 * Created by adwo15513 on 2015/7/22.
 */
resetPage();
window.onresize = function() {
    resetPage();
}
var statY= 0,Yc=0;
var statY1= 0,Yc1=0;
var N=0;

var mySwiper = new Swiper('.swiper-container', {
    direction : 'vertical',
    updateOnImagesReady : true,
    onInit: function(swiper) {
            p1();
    },
    onSlideChangeStart: function(swiper){
        if(swiper.activeIndex===1){
            setTimeout(function(){
                p2()
            },500)
        }
        if(swiper.activeIndex===2){
            //alert(2)


        }
        if(swiper.activeIndex===3){
            setTimeout(function(){
                p4()
            },400)

        }
        console.log(swiper.activeIndex)
    }

})
$('.yuan').addEventListener('touchstart',function(e){
    mySwiper.slideTo(3);
})
$('.imgbg3').addEventListener('touchstart',function(e){
    e.stopPropagation();
    var touch = e.touches[0];
    statY1 = touch.pageY;

})
$('.imgbg3').addEventListener('touchmove',function(e){
    //e.stopPropagation();
    var touch = e.touches[0];
    Yc1 = touch.pageY-statY1;

    if($('.imgbg3').scrollTop>190&&Yc1<-20){
        //alert($('.imgbg3').scrollTop+'xx');
        e.preventDefault();
        mySwiper.slideTo(3);
    }
    if(document.querySelector('.imgbg3').scrollTop==0&&Yc1>20){
        //alert($('.imgbg3').scrollTop+'xx');
        e.preventDefault();
        mySwiper.slideTo(1);
    }
})

$('.imgbg3').addEventListener('touchend',function(e){
    e.stopPropagation();


})

var oPosition=[
    {'y':'0px','z':'10','s':'1,1'},
    {'y':'-80px','z':'0','s':'0.8,0.8'},
    {'y':'0','z':'-10','s':'0.8,0.8'},
    {'y':'0','z':'-20','s':'0.8,0.8'},
    {'y':'0','z':'-30','s':'0.8,0.8'},
    {'y':'0','z':'-40','s':'0.8,0.8'},
    {'y':'0','z':'-30','s':'0.8,0.8'},
    {'y':'0','z':'-20','s':'0.8,0.8'},
    {'y':'0','z':'-10','s':'0.8,0.8'},
    {'y':'80px','z':'0','s':'0.8,0.8'}
];

 for(var i= 0,n=oPosition.length;i<n;i++){
    $('.img'+(i+1)).style.webkitTransform='translate3d(0,'+oPosition[i].y+','+'0)'+'scale('+oPosition[i].s+')';
    $('.img'+(i+1)).style.zIndex=oPosition[i].z;
    $('.img'+(i+1)).style.webkitTransition='all .5s ease';
}



$('.slider').addEventListener('touchstart',function(e){
    e.preventDefault();
    var touch = e.touches[0];
    statY = touch.pageY;

})
$('.slider').addEventListener('touchmove',function(e){
    e.stopPropagation();
    var touch = e.touches[0];
    Yc = touch.pageY-statY;

})
$('.slider').addEventListener('touchend',function(e){
    e.preventDefault();
    console.log(Yc)

    if(Yc<-40){N++;}
    if(Yc>40){N--; }
    if(N==10){
        N=0;
        for(var i= 0,n=oPosition.length;i<n;i++){
            $('.img'+(i+1)).style.webkitTransform='translate3d(0,'+oPosition[i].y+','+'0)'+'scale('+oPosition[i].s+')';
            $('.img'+(i+1)).style.zIndex=oPosition[i].z;
            $('.img'+(i+1)).style.webkitTransition='all .5s ease';
        };
        return false;
    }
    if(N==-10){
        N=0;
        for(var i= 0,n=oPosition.length;i<n;i++){
            $('.img'+(i+1)).style.webkitTransform='translate3d(0,'+oPosition[i].y+','+'0)'+'scale('+oPosition[i].s+')';
            $('.img'+(i+1)).style.zIndex=oPosition[i].z;
            $('.img'+(i+1)).style.webkitTransition='all .5s ease';
        };
        return false;
    }
        var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10;
        //console.log('1'+N);
        if(N==0){n1=0;n2=1;n3=2;n4=3;n5=4;n6=5;n7=6;n8=7;n9=8;n10=9;}
        if(N==1){n1=1;n2=2;n3=3;n4=4;n5=5;n6=6;n7=7;n8=8;n9=9;n10=0;}
        if(N==2){n1=2;n2=3;n3=4;n4=5;n5=6;n6=7;n7=8;n8=9;n9=0;n10=1;}
        if(N==3){n1=3;n2=4;n3=5;n4=6;n5=7;n6=8;n7=9;n8=0;n9=1;n10=2;}
        if(N==4){n1=4;n2=5;n3=6;n4=7;n5=8;n6=9;n7=0;n8=1;n9=2;n10=3;}
        if(N==5){n1=5;n2=6;n3=7;n4=8;n5=9;n6=0;n7=1;n8=2;n9=3;n10=4;}
        if(N==6){n1=6;n2=7;n3=8;n4=9;n5=0;n6=1;n7=2;n8=3;n9=4;n10=5;}
        if(N==7){n1=7;n2=8;n3=9;n4=0;n5=1;n6=2;n7=3;n8=4;n9=5;n10=6;}
        if(N==8){n1=8;n2=9;n3=0;n4=1;n5=5;n6=3;n7=4;n8=5;n9=6;n10=7;}
        if(N==9){n1=9;n2=0;n3=1;n4=2;n5=3;n6=4;n7=5;n8=6;n9=7;n10=8;}
        //console.log('-1'+N);
        if(N==-1){n1=9;n2=0;n3=1;n4=2;n5=3;n6=4;n7=5;n8=6;n9=7;n10=8;}
        if(N==-2){n1=8;n2=9;n3=0;n4=1;n5=2;n6=3;n7=4;n8=5;n9=6;n10=7;}
        if(N==-3){n1=7;n2=8;n3=9;n4=0;n5=1;n6=2;n7=3;n8=4;n9=5;n10=6;}
        if(N==-4){n1=6;n2=7;n3=8;n4=9;n5=0;n6=1;n7=2;n8=3;n9=4;n10=5;}
        if(N==-5){n1=5;n2=6;n3=7;n4=8;n5=9;n6=0;n7=1;n8=2;n9=3;n10=4;}
        if(N==-6){n1=4;n2=5;n3=6;n4=7;n5=8;n6=9;n7=0;n8=1;n9=2;n10=3;}
        if(N==-7){n1=3;n2=4;n3=5;n4=6;n5=7;n6=8;n7=9;n8=0;n9=1;n10=2;}
        if(N==-8){n1=2;n2=3;n3=4;n4=5;n5=6;n6=7;n7=8;n8=9;n9=0;n10=1;}
        if(N==-9){n1=1;n2=2;n3=3;n4=4;n5=5;n6=6;n7=7;n8=8;n9=9;n10=0;}
        $('.img1').style.zIndex=oPosition[n1].z;
        $('.img1').style.webkitTransform='translate3d(0,'+oPosition[n1].y+','+'0)'+'scale('+oPosition[n1].s+')';
        $('.img2').style.zIndex=oPosition[n2].z;
        $('.img2').style.webkitTransform='translate3d(0,'+oPosition[n2].y+','+'0)'+'scale('+oPosition[n2].s+')';
        $('.img3').style.zIndex=oPosition[n3].z;
        $('.img3').style.webkitTransform='translate3d(0,'+oPosition[n3].y+','+'0)'+'scale('+oPosition[n3].s+')';
        $('.img4').style.zIndex=oPosition[n4].z;
        $('.img4').style.webkitTransform='translate3d(0,'+oPosition[n4].y+','+'0)'+'scale('+oPosition[n4].s+')';
        $('.img5').style.zIndex=oPosition[n5].z;
        $('.img5').style.webkitTransform='translate3d(0,'+oPosition[n5].y+','+'0)'+'scale('+oPosition[n5].s+')';
        $('.img6').style.zIndex=oPosition[n6].z;
        $('.img6').style.webkitTransform='translate3d(0,'+oPosition[n6].y+','+'0)'+'scale('+oPosition[n6].s+')';
        $('.img7').style.zIndex=oPosition[n7].z;
        $('.img7').style.webkitTransform='translate3d(0,'+oPosition[n7].y+','+'0)'+'scale('+oPosition[n7].s+')';
        $('.img8').style.zIndex=oPosition[n8].z;
        $('.img8').style.webkitTransform='translate3d(0,'+oPosition[n8].y+','+'0)'+'scale('+oPosition[n8].s+')';
        $('.img9').style.zIndex=oPosition[n9].z;
        $('.img9').style.webkitTransform='translate3d(0,'+oPosition[n9].y+','+'0)'+'scale('+oPosition[n9].s+')';
        $('.img10').style.zIndex=oPosition[n10].z;
        $('.img10').style.webkitTransform='translate3d(0,'+oPosition[n10].y+','+'0)'+'scale('+oPosition[n10].s+')';



})