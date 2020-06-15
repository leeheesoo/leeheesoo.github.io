$(function () {
  // SCROLL
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      triggerElement: ".motionWrap",
      triggerHook: 0, // rigger 팁의 위치를 지정 0~1 사이의 값으로 줄 수 있고, 0은 뷰포트의 최상단, 1은 뷰포트의 최하단이다.
      duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
      //reverse: false
    })
    .setClassToggle(".tree-left", 'pullUp') // add class to reveal
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);


  new ScrollMagic.Scene({
      triggerElement: ".motionWrap",
      triggerHook: 0.1,
      duration: "100%",
    })
    .setClassToggle(".tree-right", "pullUp")
    .addTo(controller);


  new ScrollMagic.Scene({
      triggerElement: ".motionWrap",
      triggerHook: 0,
      duration: "100%",
    })
    .setClassToggle(".talk1", "on")
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: ".motionWrap",
      triggerHook: 0,
      duration: "100%",
      offset: 100,
    })
    .setClassToggle(".talk2", "on")
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: ".motionWrap",
      triggerHook: 0,
      duration: "100%",
      offset: 280,
    })
    .setClassToggle(".talk3", "on")
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: ".forest__trigger",
      triggerHook: 0.1,
      duration: "100%",
      offset: 0,
    })
    .setClassToggle(".talk4", "scale-up-center")
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: ".forest__trigger",
      triggerHook: 0.6,
      duration: "100%",
      offset: 0,
    })
    .setClassToggle(".forest1", "slideUp")
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: ".forest__trigger",
      triggerHook: 0.5,
      duration: "100%",
      offset: 1,
    })
    .setClassToggle(".forest2", "slideUp")
    .addTo(controller);


})