/**
 * Created by adwo15513 on 2015/7/22.
 */
resetPage();
window.onresize = function() {
    resetPage();
}

var mySwiper = new Swiper('.swiper-container', {
    direction : 'vertical',
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
            p3()
        }
        if(swiper.activeIndex===3){
            p4()
        }
        console.log(swiper.activeIndex)
    }



})


