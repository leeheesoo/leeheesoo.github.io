var imgUrlCal = 'https://vwkr-touareg.s3.amazonaws.com/static/launching/images/pc/calendar-btn-light.png';
var staticImageUrl = 'https://vwkr-touareg.s3.amazonaws.com/static/launching/images/' + deviceKind + '/';

if (deviceKind == 'pc') {
  var userJointype = 'WEB';
} else {
  var userJointype = 'MOBILE';
}

var dateToday = new Date();
// dateToday.setDate(dateToday.getDate() + 2);
dateToday.setDate(dateToday.getDate());

$.datepicker.setDefaults({
  dateFormat: 'yy-mm-dd',
  prevText: '이전 달',
  nextText: '다음 달',
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  showMonthAfterYear: true,
  yearSuffix: '년',
  showOn: 'button',
  buttonImage: imgUrlCal != null || imgUrlCal ? imgUrlCal : staticImageUrl + 'btn-calender.png', //이미지가져와서 수정
  buttonImageOnly: true,
  buttonText: 'Select date',
  minDate: dateToday,
  dateFormat: 'yy-mm-dd'
});

var consultationMixin = {
  data: {
    apply: {
      notice: null
    },
    setTrimTxt: null,
    secNum: 0,
    // 트림정보
    cars: carInfo,
    // 시승/상담 선택
    types: [{
        name: '시승',
        code: 'drive'
      },
      {
        name: '상담',
        code: 'consulting'
      }
    ],
    seletedType: 'drive',
    // 출생 년도
    years: [],
    // 전시장 선택 - 시/도
    sido: [
      '강원도',
      '경기도',
      '경상남도',
      '경상북도',
      '광주광역시',
      '대구광역시',
      '대전광역시',
      '부산광역시',
      '서울특별시',
      '인천광역시',
      '전라남도',
      '전라북도',
      '제주특별자치도',
      '충청남도',
      '충청북도'
    ],
    // 전시장 선택된 항목
    stores: {
      sido: '',
      gugun: ''
    },
    // 전시장 선택 - 시군구
    gugun: [],
    // 전시장 선택 - 전시장
    network: [],
    // 인증번호
    certNumber: null,
    // 구매시기
    purtimes: ['3개월 이내', '6개월 이내', '1년 이내', '2년 이내', '계획 없음'],
    // 상담유형
    coultypes: ['구매상담', '일반상담'],
    user: {
      inter_car: 12,
      inter_name: 'Touareg',
      jointype: 'WEB',
      site: 'MICROSITE',
      inter_trim: 25,
      inter_trim_name: '3.0 TDI Premium',
      inter_color: 1,
      inter_color_name: 'Pure White',
      name: null,
      birth: '1980',
      phone: null,
      //carModel: null,
      showroom: null,
      showroomname: '',
      com_idx: null,
      purtime: null,
      policy_check0: 'N',
      policy_check1: 'N',
      policy_check2: 'N',
      policy_check3: 'N',
      policy_check4: 'N',
      policy_check5: 'N',
      hopedate: null,
      coultype: null,
      sendchkD: 'N',
      certchkD: 'N'
    },
    onArteondriving: false,
    currentStep: 1,
    alertMessage: '',
    afterApply: null,
    alertLocationUrl: null
  },
  created: function () {
    // 출생년도
    var years = [];
    var dateGetYear = new Date().getFullYear();
    for (var year = dateGetYear; year >= 1900; year--) {
      years.push(year);
    }
    this.years = years;

    // 디바이스 정보
    this.user.jointype = userJointype;

    // form validate
    var self = this;
    $(function () {
      $.validator.setDefaults({
        onkeyup: false,
        onclick: false,
        onfocusout: false,
        showErrors: function (errorMap, errorList) {
          // if (this.numberOfInvalids() && errorList != '') {
          //   if (siteName === 'testDriving' || siteName === 'financial') app.showPopByTestDriving(errorList[0].message);
          //   else if (siteName === 'launching') vwArteon.showPopByTestDriving(errorList[0].message);
          //   else if (siteName === 'showroom') app.showPopByTestDriving(errorList[0].message);
          //   $(errorList[0].element).focus();
          // }

          if (this.numberOfInvalids() && errorList != '') {

            if (this.numberOfInvalids()) {
              if (deviceKind == 'pc') {
                self.showPopByTestDriving(errorList[0].message)
              } else {
                alert(errorList[0].message)
              }

              //alert();
            }
            // $(errorList[0].element).focus();
          }
        }
      });

      $('#step2Form').validate({
        rules: {
          site: 'required',
          name: 'required',
          birth: 'required',
          phone: {
            required: true,
            minlength: 10,
            maxlength: 11
          },
          //									email: 'required',
          sido: 'required',
          gugun: 'required',
          showroom: 'required',
          purtime: 'required',
          coultype: {
            required: function () {
              return $('input[name=seletedType]:checked').val() == 'consulting';
            }
          },
          hopedate: {
            required: function () {
              return $('input[name=seletedType]:checked').val() == 'drive';
            }
          }
        },
        messages: {
          site: '시승/상담을 선택해주세요',
          name: '신청자 성명을 입력해주세요',
          birth: '출생 년도를 선택해주세요',
          phone: {
            required: '연락처를 입력해주세요',
            minlength: '연락처를 정확히 입력해주세요',
            maxlength: '연락처를 정확히 입력해주세요'
          },
          //									carModel : ' 입력해주세요',
          sido: '지역을 선택해주세요',
          gugun: '시군구를 선택해주세요',
          showroom: '전시장을 선택해주세요',
          purtime: '구매시기를 선택해주세요',
          coultype: {
            required: '상담유형을 선택해주세요'
          },
          hopedate: {
            required: '시승 희망일을 입력해주세요'
          }
        },
        submitHandler: function (e) {
          if (self.user.certchkD != 'Y') {
            self.showPopByTestDriving('인증 완료 후 참여해주세요.');
            return;
          }
          self.stepToggle(3);
        }
      });

      // datepicker
      $('#driveday').datepicker({
        onSelect: function () {
          self.user.hopedate = $.datepicker.formatDate('yy-mm-dd', $(this).datepicker('getDate'));
        }
      });
    });
  },
  mounted: function () {
    // 시승상담신청 영역 초기 셋팅
    initConsultation();

    if (location.pathname.indexOf('arteondriving') != -1) this.onArteondriving = true;

    $("#birth option[value='1980']").attr('selected', true);
  },
  // computed: {
  //   trimchange: function () {
  //     var userTrim = this.user.inter_trim_name
  //     if (deviceKind == 'm') {

  //       this.setTrim()
  //     }
  //   }

  // },
  // watch: {
  //   trimchange: function () {
  //     this.user.inter_trim_color =
  //   }
  // },
  methods: {
    reset: function () {
      Object.assign(this.$data, this.$options.data());
    },
    getGugun: function () {
      var self = this;
      $.getJSON(
        'https://showroom.vwkr.co.kr/renew/new_app/getgugun_jsonp.jsp?callback=?', {
          ntype: 'S',
          sido: self.stores.sido
        },
        function (res) {
          if (res.result == 'Y') {
            // console.log(res);
            self.gugun = res.data;
          }
        }
      );
    },
    getStores: function () {
      var self = this;
      $.getJSON(
        'https://showroom.vwkr.co.kr/renew/new_app/network_api_jsonp.jsp?callback=?', {
          ntype: 'S',
          sido: self.stores.sido,
          gugun: self.stores.gugun
        },
        function (res) {
          if (res.result == 'Y') {
            self.network = res.data;
          }
        }
      );
    },
    setFormSubmit: function () {
      $('#step2Form').submit();
    },
    setShowroom: function () {
      var self = this;
      var showroomname = self.user.showroomname;
      if (showroomname != '') {
        self.network.forEach(function (item) {
          if (item.netname == showroomname) {
            self.user.showroom = item.netidx;
            self.user.com_idx = item.comidx;
          }
        });
      }
    },
    sendCert: function () {
      var self = this;
      if (!/^(010|011|016|017|019)[0-9]{7,8}$/.test(self.user.phone)) {
        self.showPopByTestDriving('연락처를 정확히 입력해주세요. (ex:01012345678)');
        return;
      }
      var url = 'https://showroom.vwkr.co.kr/renew/new_app/certsend_showroom.jsp?callback=?';
      if (navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i)) {
        url = 'https://showroom.vwkr.co.kr/renew/mob/new_app/certsend_showroom.jsp?callback=?';
      }
      $.getJSON(
        url, {
          snum: self.user.phone,
          styp: self.user.site,
          smsg: ''
        },
        function (res) {
          self.showPopByTestDriving(res.ResultMsg);
          if (res.ResultCode == 'Y') {
            self.user.sendchkD = 'Y';
          }
        }
      );
    },
    setTrim: function (trim) {
      var trims = null
      deviceKind == 'pc' ? trims = trim : trims = this.setTrimTxt
      // console.log(trims)

      this.user.inter_trim = trims.inter_trim;
      this.user.inter_trim_name = trims.inter_trim_name;
      this.user.inter_color = 1;
      this.user.inter_color_name = "Pure White";


    },
    setColor: function (color, idx) {
      this.user.inter_color = color.inter_color;
      this.user.inter_color_name = color.inter_color_name;
    },
    stepToggle: function (step) {
      this.currentStep = step;
      var el = $('div.step' + step);
      if (el.is('.is-show')) {
        console.log('11')
        // 현재 step만 hide처리
        el.removeClass('is-show');
      } else {
        // step별 처리 방법
        var self = this;
        if (self.onArteondriving && deviceKind == 'm') {
          utils.scrollTop();
        }
        // switch (step) {
        //   case 1:
        //     break;
        //   case 2:
        //     if (self.user.inter_trim == null || self.user.inter_trim_name == null) {
        //       self.showPopByTestDriving('시승신청 트림을 선택해 주세요');
        //       return;
        //     }
        //     if (self.user.inter_color == null || self.user.inter_color_name == null) {
        //       self.showPopByTestDriving('시승신청 색상을 선택해 주세요');
        //       return;
        //     }
        //     loadJsFile('https://i39.icast-ad.com/track?ccd=4339&mcd=01040601&pcd=' + (deviceKind == 'm' ? '11302' : '11295'))
        //     break;
        //   case 3:
        //     loadJsFile('https://i39.icast-ad.com/track?ccd=4339&mcd=01040601&pcd=' + (deviceKind == 'm' ? '11305' : '11298'))
        //     break;
        //   default:
        //     return;
        // }
        // 모든 step을 hide처리 후 현재 step만 show처리
        $('div.step').removeClass('is-show');
        el.addClass('is-show');
      }
    },
    sendCert: function () {
      var self = this;
      if (!/^(010|011|016|017|019)[0-9]{7,8}$/.test(self.user.phone)) {
        self.showPopByTestDriving('연락처를 정확히 입력해주세요. (ex:01012345678)');
        return;
      }
      var url = 'https://showroom.vwkr.co.kr/renew/new_app/certsend_showroom.jsp?callback=?';
      if (navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i)) {
        url = 'https://showroom.vwkr.co.kr/renew/mob/new_app/certsend_showroom.jsp?callback=?';
      }
      $.getJSON(
        url, {
          snum: self.user.phone,
          styp: self.user.site,
          smsg: ''
        },
        function (res) {
          self.showPopByTestDriving(res.ResultMsg);
          if (res.ResultCode == 'Y') {
            self.user.sendchkD = 'Y';
            loadJsFile('https://i39.icast-ad.com/track?ccd=4339&mcd=01040601&pcd=' + (deviceKind == 'm' ? '11303' : '11296'))
          }
        }
      );
    },
    checkCert: function () {
      var self = this;
      $.getJSON(
        'https://showroom.vwkr.co.kr/renew/new_app/certchk_showroom.jsp?callback=?', {
          snum: self.user.phone,
          styp: self.user.site,
          cnum: self.certNumber
        },
        function (res) {
          if (res.ResultCode == 'N') {
            self.showPopByTestDriving(res.ResultMsg);
          } else {
            self.user.certchkD = 'Y';
            self.showPopByTestDriving('인증이 완료되었습니다');
            loadJsFile('https://i39.icast-ad.com/track?ccd=4339&mcd=01040601&pcd=' + (deviceKind == 'm' ? '11304' : '11297'))
          }
        }
      );
    },
    sendSubmit: function () {
      var self = this;
      loadJsFile('https://i39.icast-ad.com/track?ccd=4339&mcd=01040601&pcd=' + (deviceKind == 'm' ? '11306' : '11299'))
      // console.log(self.seletedType);
      self.afterApply = null;
      if (!$('input[name=policy_check1]:eq(0)').is(':checked')) {
        self.showPopByTestDriving('‘개인정보 수집·이용’에 동의하셔야 상담이 가능합니다.');
        return false;
      }
      if (!$('input[name=policy_check2]:eq(0)').is(':checked')) {
        self.showPopByTestDriving('‘개인정보 제3자 제공’에 동의하셔야 상담이 가능합니다.');
        return false;
      }
      if ($('input[name=policy_check3]:eq(0)').is(':checked') && !$('input[name=policy_check4]:eq(0)').is(':checked')) {
        // '[선택] 개인정보 마케팅목적 수집·이용 동의' 시 '[선택] 개인정보 처리위탁 동의' 동의 필요
        self.showPopByTestDriving('‘개인정보 처리위탁’에 동의를 하셔야 유용한 정보를 받아보실 수 있습니다.');
        return false;
      }
      if ($('input[name=policy_check6]:eq(0)').is(':checked') && !$('input[name=policy_check3]:eq(0)').is(':checked')) {
        // '[선택] 광고성 정보 수신 동의' 시 '[선택] 개인정보 마케팅목적 수집·이용 동의' 동의 필요
        self.showPopByTestDriving('‘개인정보 마케팅목적 수집·이용 동의’에 동의를 하셔야 유용한 정보를 받아보실 수 있습니다.');
        return false;
      }
      if (!$('input[name=policy_check3]:eq(0)').is(':checked') && !$('input[name=policy_check6]:eq(0)').is(':checked') && $('input[name=policy_check4]:eq(0)').is(':checked')) {
        // '[선택] 개인정보 처리위탁 동의' 시 '[선택] 개인정보 마케팅목적 수집·이용 동의', [선택] 개인정보 처리위탁 동의' 동의 필요
        self.showPopByTestDriving('‘개인정보 마케팅 목적 수집·이용’에 동의하셔야 유용한 정보를 받아보실 수 있습니다.');
        return false;
      }

      self.user.policy_check0 = 'Y'; // [필수] 개인정보 수집·이용 동의
      self.user.policy_check1 = 'Y'; // [필수] 개인정보 제3자 제공 동의
      if ($('input[name=policy_check3]:eq(0)').is(':checked')) {
        self.user.policy_check2 = 'Y'; // [선택] 개인정보 마케팅목적 수집·이용 동의
      }
      if ($('input[name=policy_check4]:eq(0)').is(':checked')) {
        self.user.policy_check3 = 'Y'; // [선택] 개인정보 처리위탁 동의
      }
      if ($('input[name=policy_check5]:eq(0)').is(':checked')) {
        self.user.policy_check4 = 'Y'; // [선택] 개인정보 마케팅목적 제3자 제공 동의
      }
      if ($('input[name=policy_check6]:eq(0)').is(':checked')) {
        self.user.policy_check5 = 'Y'; // [선택] 광고성 정보 수신 동의
      }
      var url = '';
      if (self.seletedType == 'consulting') {
        url = 'https://cms.vwk.co.kr/new_app/arteon_counsel_reg.jsp?callback=?';
      } else if (self.seletedType == 'drive') {
        url = 'https://cms.vwk.co.kr/new_app/arteon_driving_reg.jsp?callback=?';
      } else {
        this.showPopByTestDriving('새로고침 후 다시 등록해주세요');
      }
      $.getJSON(url, self.user, function (res) {
        // console.log(res);
        if (res.RESCODE == 'OK') {
          self.afterApply = null;
          self.afterApply = function () {
            loadJsFile('https://i39.icast-ad.com/track?ccd=4339&mcd=01040601&pcd=' + (deviceKind == 'm' ? '11307' : '11300'))
		    self.user.inter_car = 12;
		    self.user.inter_name = 'Touareg';
		    self.user.jointype = 'WEB';
		    self.user.site = 'MICROSITE';
		    self.user.inter_trim_name = '3.0 TDI Premium',
		    self.user.inter_color = 1,
		    self.user.inter_color_name = 'Pure White',
			self.user.name = null;
			self.user.birth = '1980';
			self.user.phone = null;
			self.user.sendchkD = 'N';
			self.user.certchkD = 'N';
			self.user.carModel = '';
			self.user.showroom = null;
			self.user.showroomname = '';
			self.stores.sido = '';
			self.stores.gugun = '';
			self.user.com_idx = null;
			self.user.purtime = null;
			self.user.policy_check0 = 'N';
			self.user.policy_check1 = 'N';
			self.user.policy_check2 = 'N';
			self.user.policy_check3 = 'N';
			self.user.policy_check4 = 'N';
			self.user.policy_check5 = 'N';
			$('#driveday').val('');
			self.user.hopedate = null;
			self.user.coultype = null;
			$('.policy-check input').prop('checked', false);
			self.seletedType = 'drive';
	        self.stepToggle(1);
          };
          if (self.seletedType == 'consulting') {
            self.showPopByTestDriving('상담신청이 완료되었습니다. 가까운 전시장을 통해 빠른 시일 내 연락 드리겠습니다.');
          } else if (self.seletedType == 'drive') {
            self.showPopByTestDriving('시승신청이 완료되었습니다. 가까운 전시장을 통해 빠른 시일 내 연락 드리겠습니다.');
          }
        } else {
          self.showPopByTestDriving(res.MESSAGE);
        }
      });
    },
    showPopByTestDriving: function (message) {
      this.alertMessage = message;
      showPop('alert');
    }
  }
};

function initConsultation() {
  if (deviceKind === 'pc') {
    $('.term-list .tit button').on('click', function () {
      togglePolicyDetail(this);
    });
  } else {
    $('.term-list .tit em').on('click', function () {
      togglePolicyDetail($(this).next());
    });
    $('.term-list .tit button').on('click', function () {
      togglePolicyDetail(this);
    });
  }
}

function togglePolicyDetail(el) {
  $(el).toggleClass('is-show');
  $(el)
    .parent()
    .parent()
    .find('.term')
    .toggleClass('is-show');
}

function showPop(popName) {
  $('.pop-' + popName)
    .fadeIn()
    .addClass('is-show');
  if (popName === 'spec') {
    $('.spec-wrap').scrollTop(0);
    if (device == 'm') tabsUtil.setCurrent('spec', 0);
  }
}

function closeAlert(callback) {
  $('.pop-alert')
    .fadeOut('slow', function () {
      if (callback) callback();
    })
    .removeClass('is-show');
}