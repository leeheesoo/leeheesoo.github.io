function animation(idx) {
  // console.log('animation>> ', idx);

  var ANIMATION_START = 'animationiteration , oAnimationiteration , MSAnimationiteration , webkitAnimationiteration , animationstart , oAnimationstart , MSAnimationstart , webkitAnimationstart';
  var ANIMATION_END = 'animationend , oAnimationEnd , MSAnimationEnd , webkitAnimationEnd';

  $('.sell').removeClass('on');
  $('.sell-animation0' + idx).addClass('on');

  $('.tabWrap_animationCover').fadeOut();

  switch (idx) {
    case 0:
      var animation0 = $('.animation-00');
      var pic01 = animation0.find('.pic01');
      var pic02 = animation0.find('.pic02');
      var round1 = animation0.find('.round-01');
      var round2 = animation0.find('.round-02');
      var round3 = animation0.find('.round-03');
      var opt0 = {
        opacity: 0
      };
      var opt1 = {
        opacity: 1
      };
      var ani0_1 = null;
      var ani0_2 = null;
      var ani0_3 = null;

      // if (vwArteon.section.id === 'adas') {
      $('.animation-00>.car').on(ANIMATION_START, function() {
        // console.log('1. Front Cross Traffic Assist start');
        // box.find('.animation').removeClass('animation');
        $('.animation-00>.car03').removeClass('on');
        $('.animation-00>.car>.round-01 ,.animation-00>.car>.round-02')
          .show()
          .css(opt0)
          .animate(opt1);
        pic02.show().css(opt1);
        // pic02.stop().animate(opt1);

        ani0_1 = setTimeout(function() {
          pic02.stop().animate(opt0);
          ani0_2 = setTimeout(function() {
            $('.animation-00>.car03').show();
            $('.animation-00>.car03').addClass('on');

            round2.stop().animate(opt0);
            round3
              .stop()
              .show()
              .animate(opt1);
            pic01
              .stop()
              .show()
              .animate(opt1);

            ani0_3 = setTimeout(function() {
              pic01.stop().animate(opt0);
              round1.stop().animate(opt0);
              round3.stop().animate(opt0);
            }, 2000);
          }, 2000);
        }, 6000);
      });

      $('.animation-00 .car03').on(ANIMATION_END, function() {
        $('.animation-00 .car03').hide();
      });
      break;
    case 2:
      var ani1_first = false;
      var $ani02 = $('.animation-02');

      $('.animation-02 .circle').on(ANIMATION_START, function() {
        if (!ani1_first) {
          ani1_first = true;
          bgAnimate();
        }

        function bgAnimate() {
          $ani02.stop().css({
            backgroundPositionX: 0
          });
          $ani02.animate(
            {
              backgroundPositionX: '-1560px'
            },
            2000,
            'linear',
            function() {
              $ani02.stop().css({
                backgroundPositionX: 0
              });
              $ani02.animate(
                {
                  backgroundPositionX: '-1560px'
                },
                1000,
                'linear',
                function() {
                  $ani02.stop().css({
                    backgroundPositionX: 0
                  });
                  $ani02.animate(
                    {
                      backgroundPositionX: '-1560px'
                    },
                    1000,
                    'linear',
                    function() {
                      bgAnimate();
                    }
                  );
                }
              );
            }
          );
        }
      });
      break;
    case 4:
      var ani4_1 = null;
      ani4_1 ? clearTimeout(ani4_1) : '';
      $('.animation-04 .people').on(ANIMATION_START, function() {
        // console.log('==end=');
        $('.animation-04 .circle').removeClass('on');
        ani4_1 = setTimeout(function() {
          $('.animation-04 .circle').addClass('on');
        }, 100);
      });
      $('.animation-04 .people').on(ANIMATION_END, function() {});
      break;
    case 5:
      // if (device === 'm') {
      //   setTimeout(function() {
      //     tlAni05.play(0);
      //   }, 500);
      // }
      // tlAni05.play(0);
      initTlAni05();
      tlAni05.play(0);
      break;
  }
}

//*===============================
// Lane Assist animation
//*===============================
var tlAni05 = new TimelineMax({
  paused: true,
  onComplete: function() {
    this.restart();
  }
});
function initTlAni05() {
  tlAni05
    .call(
      function() {
        $('.animation-05 .circle').removeClass('on');
        $('.animation-05').removeClass('on');
      },
      null,
      null,
      0
    )
    .call(
      function() {
        $('.animation-05 .circle').addClass('on');
        $('.animation-05').addClass('on');
      },
      null,
      null,
      2
    )
    .to(
      [$('.animation-05 .line'), $('.animation-05 .pic02')],
      1,
      {
        opacity: 1
      },
      2
    )
    .to(
      $('.animation-05 .car01'),
      1,
      {
        top: '100px'
      },
      4
    )
    .to(
      $('.animation-05 .dot-line'),
      1,
      {
        opacity: 1
      },
      5.5
    )
    .to(
      $('.animation-05 .car01'),
      1.5,
      {
        top: '70px'
      },
      6
    )
    .call(
      function() {
        $('.animation-05 .circle').removeClass('on');
        $('.animation-05').removeClass('on');
      },
      null,
      null,
      8
    )
    .to(
      [$('.animation-05 .line'), $('.animation-05 .pic02'), $('.animation-05 .dot-line')],
      1,
      {
        opacity: 0
      },
      8
    )
    .delay(5);
}
