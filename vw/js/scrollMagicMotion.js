$(function () {


  // SCROLL
  var controller = new ScrollMagic.Controller()

  new ScrollMagic.Scene({
      triggerElement: '.driving',
      triggerHook: 0.5
    })
    .setClassToggle('.driving .con_inner', 'visible')
    .addTo(controller)


  new ScrollMagic.Scene({
      triggerElement: '.promotion',
      triggerHook: 0.7
    })
    .setClassToggle('.promotion .con_inner', 'visible')
    .addTo(controller)

  new ScrollMagic.Scene({
      triggerElement: '.testDriving',
      triggerHook: 0.7
    })
    .setClassToggle('.testDriving .con_inner', 'visible')
    .addTo(controller)

  var revealElements = document.getElementsByClassName("showAnimation");
  for (var i = 0; i < revealElements.length; i++) {
    var scene2 = new ScrollMagic.Scene({
        triggerElement: revealElements[i], //각 요소가 트리거가 됨
        offset: 50,
        triggerHook: 0.9
      })
      .setClassToggle(revealElements[i], "visible") //해당 요소에 클래스 토글
      .addTo(controller)
  }


  //pc mo 분기나눔

  if (deviceKind == 'pc') {
    var revealElements = document.getElementsByClassName("gallery_photo");
    for (var i = 0; i < revealElements.length; i++) {
      var scene2 = new ScrollMagic.Scene({
          triggerElement: '#gallery', //각 요소가 트리거가 됨
          reverse: false,
          offset: 50,
          triggerHook: 0.8,
          reverse: false

        })
        .setClassToggle(revealElements[i], "visible") //해당 요소에 클래스 토글
        .addTo(controller)
    }

    new ScrollMagic.Scene({
        triggerElement: '.technology',
        triggerHook: 0.7
      })
      .setClassToggle('.technology .con_inner', 'visible')
      .addTo(controller)


    // //content motion
    new ScrollMagic.Scene({
        triggerElement: '.pc .exterior_video',
        triggerHook: 0.5
      })
      .setClassToggle('.pc .leftbox', 'visible')
      .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: '.pc .interior_videoWrap',
        triggerHook: 0.5
      })
      .setClassToggle('.pc .rightbox', 'visible')
      .addTo(controller)

  } else {

    new ScrollMagic.Scene({
        triggerElement: '.exterior',
        triggerHook: 0.5
      })
      .setClassToggle('.exterior .con_inner', 'visible')
      .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: '.interior',
        triggerHook: 0.5
      })
      .setClassToggle('.interior .con_inner', 'visible')
      .addTo(controller)


  }

}) //jquery