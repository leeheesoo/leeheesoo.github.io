$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    width: 640,
    height: 567,
    effect: 'fade',
    touchEventsTarget: 'wrapper',
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.pagination',
    },
    on: {
      slideChangeTransitionEnd: function () {
        //var animationClass = 'on'
        // $('.swiper-slide').removeClass(animationClass);
        // setTimeout(function () {
        //$('.swiper-wrapper').eq(this.activeIndex).addClass(animationClass)
        //}, 500)
        //$('.swiper-slide-active').addClass(animationClass)

      }
    },
  })
})