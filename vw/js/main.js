//slide전역변수.
var gallerySwiper;
var exteriorSwiper;
var interiorSwiper;
var trimSlide;
var NavSlide;
var trimSlideSettings = {
  effect: 'fade',
  pagination: {
    el: '.trim-pagination'
  },
  navigation: {
    nextEl: '.trim-button-next',
    prevEl: '.trim-button-prev'
  }
};

var app = new Vue({
  el: '#wrap',
  mixins: [specMixin, consultationMixin],
  data: {
    tvcPop: false,
    showPhoto: null,
    navList: navList,
    navCurrentNum: null,
    scrollTop: null,
    deviceKind: "pc",
    currentSection: null,
    currentPopup: null,
    exteriorShow: 0,
    interiorShow: 0,
    drivingShow: 0,
    technologyShow: 0,
    trimShow: 0,
    exteriorData: exteriorData,
    drivingData: drivingData,
    technologyData: technologyData,
    interiorData: interiorData,
    interiorDataMo: interiorDataMo,
    trimData: trimData,
    //gallery
    galleryWidth: 3840,
    windowWidth: null,
    step: 0,
    exteriorSlider: null,
    interiorSlider: null,
    techSlider: null,
    //youtube
    exteriorCover: true,
    interiorCover: true,
    exteriorPlayer: false,
    interiorPlayer: false
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll);
    this.$nextTick(function () {
      this.resizeEvent();
      this.handleScroll();
    });
  },
  mounted: function () {
    var self = this;
    this.initSlider();
    this.movInit();
    this.setSectionArea();

    window.addEventListener('resize', this.resizeEvent);
    var self = this;
    if (self.deviceKind == 'm') {
      self.inintmobileSlider();
    }

    this.$nextTick(function () {
      $('.wrap').addClass('on');
      this.monitorHeight();
    });

    setTimeout(function () {
      self.openTvc(true);
    }, 1000);

    //처음진입 hash
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        self.setHashSection();
      }
    }
    //hash 변경시
    window.addEventListener('hashchange', function () {
      self.setHashSection();
    });
  },
  computed: {
    galleryMovValue: function () {
      return this.windowWidth < 1500 ? (this.windowWidth - this.galleryWidth) / 2 : this.windowWidth - this.galleryWidth;
    }
  },
  methods: {
    setHashSection: function () {
      var hashName = location.hash.split('#')[1];
      hashName ? this.goSection(hashName) : null;
    },
    playVideo: function (event) {
      var cover = event.target.id;
      var $cover = $('#' + cover);
      var vid = document.getElementById(event.target.nextElementSibling.id);
      if (vid.paused == true) {
        // vid.play();
        $cover.addClass('off')
      } else {
        $cover.addClass('off')
        // vid.pause();
      }



    },
    monitorHeight: function () {
      //section위치값 변경시 위치값 재설정
      this.heightMonitor = new MutationObserver(this.checkHeight)
      this.heightMonitor.observe(this.$el, {
        attributes: true,
        childList: true,
        subtree: true
      })
    },
    checkHeight: function () {
      if (this.$el.clientHeight !== this.height) {
        this.height = this.$el.clientHeight
        this.setSectionArea();
      }
    },
    setSectionArea: function () {
      //section 높이값 get
      var addValue;
      this.deviceKind == 'm' ? (addValue = 140) : (addValue = 70);

      return this.navList.map(function (section) {
        section.area = Math.ceil($('#' + section.goId).offset().top + $('#' + section.goId).height() - addValue);
      });
    },
    getCurrentSection: function () {
      var self = this;
      for (var section in self.navList) {
        if (self.scrollTop <= self.navList[section].area - 10) {
          var goId = self.navList[section].goId;
          var sectionNumber = self.navList[section].number;
          return [goId, sectionNumber]
        }
      }
    },
    openPop: function (popName) {
      //slide설정
      var slideSettings = {
        watchActiveIndex: true,
        autoHeight: true, //enable auto height
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChange: function () {
            var currentNum = this.activeIndex;

            if (currentNum != 0) {
              var vid = document.getElementById('interiorPopMov');
              //vid.pause();
            }
          }
        }
      };
      var popupTop;
      var navH;
      this.deviceKind == 'm' ? (navH = 200) : (navH = 70);

      if (popName == 'exterior' || popName == 'interior') {
        setTimeout(function () {
          //offset.top값 못찾아서..
          popupTop = $('.' + popName + '-container').offset().top - navH;
          $('html, body').animate({
              scrollTop: popupTop
            },
            500
          );

          if (popName == 'exterior') exteriorSwiper = new Swiper('.exterior-container', slideSettings);
          if (popName == 'interior') interiorSwiper = new Swiper('.interior-container', slideSettings);
        }, 100);
      }

      this.currentPopup = popName;
    },
    closePop: function () {
      this.currentPopup = '';
      if (exteriorSwiper) exteriorSwiper.destroy();
      if (interiorSwiper) interiorSwiper.destroy();
    },
    goSection: function (section) {
      var topAddValue;
      this.deviceKind == 'm' ? (topAddValue = 50) : (topAddValue = 10);

      $('html, body').animate({
          scrollTop: $('#' + section).offset().top + topAddValue
        },
        500
      );
    },
    galleryMov: function (way) {
      if (way == 'left') {
        this.step == 0 ? (this.step = 0) : this.step--;
      } else {
        this.windowWidth < 1500 ? (this.step >= 2 ? (this.step = 2) : this.step++) : this.step >= 1 ? (this.step = 1) : this.step++;
      }

      $('.gallery').css({
        marginLeft: this.galleryMovValue * this.step
      });
    },
    resizeEvent: function () {

      this.windowWidth = $('.wrap').width();
      // reset galleryMov
      $('.gallery').css({
        marginLeft: 0
      });
      this.step = 0;

    },
    photoView: function (e) {
      var targetId = e.target.id;
      var targetNumber = targetId.split('_');
      this.showPhoto = targetNumber[1];
      var startNumber = Number(this.showPhoto) - 1; //선택값 number

      //slide설정
      var slideSettings = {
        loop: true,
        autoHeight: true, //enable auto height
        slidesPerView: 1,
        initialSlide: startNumber,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      };

      $('.photo_wrap').addClass('on');
      var popupTop;
      var navH;
      this.deviceKind == 'm' ? (navH = 140) : (navH = 70);

      gallerySwiper = new Swiper('.gallerySlide', slideSettings);
      setTimeout(function () {
        //offset.top값 못찾아서..
        popupTop = $('.gallerySlide_wrap .btn_close').offset().top - navH;
        $('html, body').animate({
          scrollTop: popupTop
        }, 500);
      }, 100);

    },
    photoClose: function () {
      this.showPhoto = null;
      $('.photo_wrap').removeClass('on');
      gallerySwiper.destroy();
    },
    handleScroll: function () {
      this.scrollTop = Math.ceil($(window).scrollTop());

      var self = this;
      var deviceKind = this.deviceKind;

      if (deviceKind == 'm') {
        self.moveMainNavSlider();
        self.gnbScroll();
      }
      self.movieScrollEvent();
    },
    movieScrollEvent: function () {
      var searchingSection = this.getCurrentSection();

      this.currentSection = searchingSection[0];
      this.navCurrentNum = searchingSection[1];

      var currentSection = this.currentSection;
      var vid;

      if (this.deviceKind == 'pc') { //pc video
        if (currentSection !== 'exterior') {
          vid = document.getElementById('exteriorMov');
        } else if (currentSection !== 'interior') {
          vid = document.getElementById('interiorMov');
        }
        //vid.pause();
      } else {
        //mobile youtube
        if (currentSection !== 'exterior') {
          this.exteriorPlayer == true ? exteriorPlayer.pauseVideo() : null;
        }
        if (currentSection !== 'interior') {
          this.interiorPlayer == true ? interiorPlayer.pauseVideo() : null;
        }
      }

      //pc mobile 공통 video
      if (currentSection !== 'driving') {
        vid = document.getElementById('drivingMov');
      }


    },
    listOn: function (e, dataList) {
      if (dataList == exteriorData) {
        this.exteriorShow = e.number;
        this.deviceKind == 'm' ? this.exteriorSlider.slideTo(this.exteriorSlider.clickedIndex) : null;
      } else if (dataList == interiorData) {
        this.interiorShow = e.number;
      } else if (dataList == interiorDataMo) {
        this.interiorShow = e.number;
        this.interiorSlider.slideTo(this.interiorSlider.clickedIndex)
      } else if (dataList == drivingData) {
        this.drivingShow = e.id;
        // this.deviceKind == 'm' ? this.drivingSlider.slideTo(this.drivingSlider.clickedIndex) : null;
        if (this.deviceKind == 'm') {
          this.drivingSlider.slideTo(this.drivingSlider.clickedIndex);
        } else {
          $('#drivingCover').removeClass('off');
        }
      } else if (dataList == technologyData) {
        $('.tabWrap_animationCover').show();
        this.technologyShow = e.id;
        this.deviceKind == 'm' ? this.techSlider.slideTo(this.techSlider.clickedIndex) : null;
      } else if (dataList == trimData) {
        this.trimShow = e.id;
        //넘버링 초기화가 안되서 destory.
        //trimSlide.destroy();
        // trimSlide = new Swiper('.trim-slide', trimSlideSettings);
      }
      dataList.forEach(function (list) {
        list.isOn = false;
      });
      this.$set(e, 'isOn', true);

    },
    initSlider: function () {
      //slide설정
      var technologSlideSettings = {
        slidesPerView: 'auto',
        spaceBetween: 45,
        freeMode: false,
        slidesPerGroup: 3,
        centeredSlides: false,
        threshold: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          click: function (e) {
            if (e.target.innerHTML == '3. Adaptive Cruise Control (ACC)') {
              technologySlider.slideTo(0);
            }
          }
        }
      };
      var technologySlider = new Swiper('#technologySlider', technologSlideSettings);
      trimSlide = new Swiper('.trim-slide', trimSlideSettings);
    },
    inintmobileSlider: function () {
      var self = this;
      //slide설정
      var mobileNavSettings = {
        slidesPerView: 'auto',
        spaceBetween: 74,
        freeMode: false,
        navigation: {
          nextEl: '.nav-button-next',
          prevEl: '.nav-button-prev'
        }
      };
      NavSlide = new Swiper('.nav_main-m', mobileNavSettings);

      var mobileSlideSettings = {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freeMode: false,
        slideToClickedSlide: false,
      };
      this.exteriorSlider = new Swiper('.exterior_slider', mobileSlideSettings);
      this.interiorSlider = new Swiper('.interior_slider', mobileSlideSettings);

      var mobileTabSlideSettings = {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: false,
        touchEventsTarget: 'container',
        touchStartPreventDefault: false,
        slideToClickedSlide: false,
        preventClicks: false,
        preventClicksPropagation: false,
        // centeredSlides: true,
        // loop: true,
        // on: {
        //   slideChange: function () {

        //     var currentNum = this.activeIndex;
        //     self.listOn(self.technologyData[currentNum], self.technologyData)
        //   },
        // }
      };

      this.drivingSlider = new Swiper('.driving_tabSlider', mobileTabSlideSettings);
      this.techSlider = new Swiper('.technology_tabSlider', mobileTabSlideSettings);

      var mobileGallerySlideSettings = {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freeMode: false,
        touchStartPreventDefault: false,
        slideToClickedSlide: false,
        preventClicks: false,
        preventClicksPropagation: false,
      };

      new Swiper('.gallery_list', mobileGallerySlideSettings);
    },
    gnbScroll: function () { //mobile nav
      var $paginationTabWrap = $('header');
      var scrollTop = this.scrollTop;
      var fixedPos = $('.kvLook').offset().top;
      if (deviceKind === 'm') {
        if (scrollTop >= fixedPos) {
          $paginationTabWrap.css({
            'position': 'fixed',
            'top': '0'
          })
        } else {
          $paginationTabWrap.css({
            'position': 'absolute',
            'top': 0
          })
        }
      }

    },
    moveMainNavSlider: function () {

      var self = this;
      //mobile nav section별 위치
      if (self.navCurrentNum <= 4) {
        NavSlide.slideTo(0);
      } else if (self.navCurrentNum >= 5 && self.navCurrentNum < 6) {
        NavSlide.slideTo(2);
      } else if (self.navCurrentNum >= 6 && self.navCurrentNum < 8) {
        NavSlide.slideTo(3);
      } else if (self.navCurrentNum >= 8 && self.navCurrentNum < 9) {
        NavSlide.slideTo(4);
      } else if (self.navCurrentNum >= 9 && self.navCurrentNum < 10) {
        NavSlide.slideTo(5);
      } else {
        NavSlide.slideTo(7);
      }

    },
    movInit: function () {
      var vids = document.getElementsByClassName('coverVideo');

      for (var i = vids.length - 1; i >= 0; i--) {
        vids[i].addEventListener('ended', function () {
          this.load();
          var playButton = ($('#' + this.id).siblings('.cover'));
          playButton.removeClass('off')
        }, false);
      }

      for (var i = vids.length - 1; i >= 0; i--) {
        vids[i].addEventListener('click', function () {
          this.play();
        }, false);
      }

    },
    toggleTvc: function () {
      $('.tvc').hasClass('is-active') ? this.closeTvc() : this.openTvc()
    },
    showTvc: function () {
      this.tvcPop = true;
      $(document).off('mousewheel DOMMouseScroll');

      setTimeout(function () {
        $('.pop-tvc iframe').attr(
          'src', 'https://www.youtube.com/embed/vWuzLQ0kX6w?rel=0&showinfo=0'
        );
      }, 100);
    },
    openTvc: function (close) {
      var self = this;
      TweenMax.to('.tvc', 1, {
        right: 0,
        ease: Power2.easeInOut,
        onComplete: function () {
          $('.tvc').addClass('is-active');
          if (close) {
            setTimeout(function () {
              self.closeTvc();
            }, 3000);
          }
        }
      });
    },
    closeTvc: function () {
      TweenMax.to('.tvc', 1, {
        right: -($('.tvc').width() - 60),
        ease: Power2.easeInOut,
        onComplete: function () {
          $('.tvc').removeClass('is-active');
        }
      });
    },
    playMv: function (sectionName) {
      // console.log(sectionName)
      var sectionName = sectionName
      onPlayerReady(sectionName)
    },

  }
});




// $(function () {

//   // $(".pc .kv_bg").parallaxScroll({
//   //   friction: 0.09,
//   //   direction: "vertical"
//   // });

// });