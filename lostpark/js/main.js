var app = new Vue({
  el: '#app',
  data: {
    isClose: false,
    cookie: false,
    userToday: 1, //1~7 (8 미션완료)
    todayJoin: false,
    lastAnswer: 'N', //Y or N //이전문제 체크값
    userModel: {
      name: '테스트',
      mobile: '01022222222',
      parentMobile: '01011111111',
      parent: null,
      agree: true
    },
    userAnswer: null, //유저가 방금 체크한 값
    quizData: quizData,
    randomNumber: null,
    scrollTop: null,
    listMove: 'top',
    dimmed: false,
    currentPopup: '',
  },
  created: function () {

    this.yesRandom();
    var self = this;

    if (!isClose) { //이벤트 오픈상태
      this.getCookie();

      this.$nextTick(function () {
        this.quizListMove();

        setTimeout(function () {
          if (self.userToday == '8') {
            self.openPop('missionEnd');
          }
        }, 800)
      })
    }

    window.addEventListener('scroll', this.scrollEvent);
  },
  mounted: function () {},
  methods: {
    openPop: function (popName) {
      this.dimmed = true;
      $('.pop').css('top', this.scrollTop + 20);
      this.currentPopup = popName;
    },
    closePop: function (mes) {
      this.dimmed = false;
      this.currentPopup = '';

      var self = this;
      if (mes == 'end') {
        location.reload();
      } else if (mes == 'scrollGo') {
        self.boardMove();
      }


    },
    getCookie: function () {
      var self = this;

      // $.ajax({
      //   url: '/api/animal/get-cookie',
      //   type: 'GET',
      //   success: function (res) {
      //     //console.log(res)
      //     self.cookie = res.isLogin; //로그인여부
      //     self.userToday = res.time; //몇번째 순서
      //     self.userModel.name = res.userName;
      //     if (res.isLogin) { //로그가잇다면!
      //       self.todayJoin = res.todayEntry; //오늘참여여부(ture/false)

      //       if (res.todayEntry) { //오늘참여햇다면!
      //         self.lastAnswer = res.answer;
      //       }
      //     }
      //     self.userVisitCheck();
      //     self.quizListMove();
      //   },
      //   error: function (res) {
      //     alert(res.responseJSON.error);
      //   }
      // })

      // 테스트 데이터
      self.cookie = false; //로그인여부
      self.userToday = 1; //몇번째 순서
      self.userModel.name = '테스트';
      self.userVisitCheck();
      self.quizListMove();
    },
    cookieCheck: function () {
      var self = this;
      if (self.cookie) { //쿠키있으면
        self.boardMove();
      } else {
        self.openPop('personal');
      }
    },
    boardMove: function () {
      var offset = $('#missionCheck').offset();
      $('html, body').animate({
        scrollTop: offset.top
      }, 400);
    },
    cookieRemove: function () {
      //기존에 있던 쿠키 삭제.
      var self = this;

      $.ajax({
        url: '/api/animal/logout',
        type: 'POST',
        data: self.userModel,
        success: function (res) {
          if (res.success) {
            setTimeout(function () {
              location.reload();
            }, 500);
          }
        },
        error: function (res) {
          alert(res.responseJSON.error);
        }
      })
    },
    quizListMove: function () {
      var self = this;
      if (self.userToday <= 4) {
        self.listMove = 'top'
      } else if (self.userToday >= 5) {
        self.listMove = 'bottom'
      }
    },
    yesRandom: function () {
      var randomNum = (window.Math.random() * 100) % 3;
      randomNum = window.Math.floor(randomNum);
      this.randomNumber = randomNum;
    },
    resultBoard: function (mes) {
      var self = this;
      var sendData = {
        flag: mes,
        day: self.userToday
      };
      $.ajax({
        url: '/api/animal/mission',
        type: 'POST',
        data: sendData,
        success: function (res) {
          if (res.success) {
            self.userAnswer = mes;
            self.openPop('result');
            self.getCookie(); //--->풀어주기 /reload없애기
          } else {

            alert(res.error);
            location.reload();
          }
        },
        error: function (res) {
          alert(res.responseJSON.error);
        }
      })

    },
    userVisitCheck: function () {
      var self = this;
      var userToday = self.userToday - 1;
      var todayJoin = self.todayJoin;
      var checkLi = '.visitCheck__list li';
      var lastAnswer = self.lastAnswer;

      if (todayJoin) {
        userToday = self.userToday - 1;
        if (lastAnswer == 'Y') {
          userToday = self.userToday - 2;
        }
      }
      //console.log(userToday)

      $(checkLi + ':lt(' + userToday + ')').addClass('goby'); // 지난미션(미션성공)
      $(checkLi + ':eq(' + userToday + ')').addClass('now'); // 지금미션(미션도전)
      $(checkLi + ':gt(' + userToday + ')').addClass('yet'); // 미션대기

      if (todayJoin) { //오늘참여
        if (lastAnswer == 'Y') { //YES
          $(checkLi + ':eq(' + userToday + ')').addClass('goby');
        } else if (lastAnswer == 'N') { //NO
          $(checkLi + ':eq(' + userToday + ')').addClass('end');
        }
      }
    },
    userModelApi: function () {
      var self = this;

      // $.ajax({
      //   url: '/api/animal/save',
      //   type: 'POST',
      //   data: self.userModel,
      //   success: function (res) {
      //     self.cookie = true;
      //     self.closePop('personal');
      //     self.getCookie();

      //     //재로그인 & 미션완료 했을 때 reload
      //     setTimeout(function () {
      //       if (self.userToday == 8) {
      //         location.reload();
      //       }
      //     }, 800)

      //     self.boardMove();
      //   },
      //   error: function (res) {
      //     alert(res.responseJSON.error);
      //   }
      // })

          self.cookie = true;
          self.closePop('personal');
          self.getCookie();

          //재로그인 & 미션완료 했을 때 reload
          setTimeout(function () {
            if (self.userToday == 8) {
              location.reload();
            }
          }, 800)

          self.boardMove();
    },
    myMobileCheck: function () {
      var myPhone = this.userModel.mobile;
      this.userModel.parentMobile = myPhone;
    },
    leafMov: function () {
      var value = $(this).scrollTop();
      $('.leaf1').css('top', 75 + value / 0.8);
      $('.leaf2').css('top', 640 + value / 2);
      $('.leaf3').css('top', 1500 + value / 10);
    },
    scrollEvent: function () {
      this.scrollTop = $(window).scrollTop();
      this.leafMov();
    },
    shareKakaotalk: function () {
      Kakao.Link.sendCustom({
        templateId: 18900
      })
    }

  }
});