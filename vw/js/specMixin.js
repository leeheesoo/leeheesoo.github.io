
var specMixin = {
  data: {
    specInfo: null
  },


  filters: {
    optionDesc: function (str) {
      if (str === 'O') return '●';
      if (str === 'X') return '-';
      return str;
    }
  },
  // =========================================
  created: function () {
    this.specInfo = carSpec;
  }
};

var carSpec = {
  brand: 'Touareg',
  modelYear: 'MY20',
  kinds: ['3.0 TDI Premium', '3.0 TDI Prestige', '3.0 TDI R-Line'],
  categories: [{
      title: '차량 제원',
      list: [{
          title: '전장 / 전폭 / 전고 (mm)',
          desc: ['4,880 / 1,985 / 1,700', '4,880 / 1,985 / 1,670', '4,880 / 1,985 / 1,670']
        },
        {
          title: '휠 베이스 (mm)',
          desc: ['2,899', '2,899', '2,899']
        },
        {
          title: '공차중량 (kg)',
          desc: ['2,250', '2,250', '2,250']
        },
        {
          title: '휠 사이즈 ',
          desc: ['9J x20"', '9J x20"', '9.5J x21"']
        },
        {
          title: '타이어 규격',
          desc: ['285/45 R20', '285/45 R20', '285/40 R21']
        },
        {
          title: '트렁크 용량 (ℓ), (2열 폴딩 시)',
          desc: ['810 / 1,800', '810 / 1,800', '810 / 1,800']
        }
      ]
    },
    {
      title: '엔진',
      list: [{
          title: '엔진 형식',
          desc: ['V6 디젤', 'V6 디젤', 'V6 디젤']
        },
        {
          title: '배기량 (cc)',
          desc: ['2,967', '2,967', '2,967']
        },
        {
          title: '최고출력 (ps/rpm)',
          desc: ['286 / 3,500 - 4,000', '286 / 3,500 - 4,000', '286 / 3,500 - 4,000']
        },
        {
          title: '최대토크 (kgㆍm/rpm)',
          desc: ['61.2 / 2,250 - 3,250', '61.2 / 2,250 - 3,250', '61.2 / 2,250 - 3,250']
        }
      ]
    },
    {
      title: '동력전달장치',
      list: [{
          title: '구동형식',
          desc: ['사륜구동 (Four wheel drive)', '사륜구동 (Four wheel drive)', '사륜구동 (Four wheel drive)']
        },
        {
          title: '변속기',
          desc: ['8단 자동', '8단 자동', '8단 자동']
        }
      ]
    },
    {
      title: '서스펜션 & 제동장치',
      list: [{
          title: '서스펜션 (앞)',
          desc: ['5-링크', '에어서스펜션', '에어서스펜션']
        },
        {
          title: '서스펜션 (뒤)',
          desc: ['5-링크', '에어서스펜션', '에어서스펜션']
        },
        {
          title: '제동장치 (앞)',
          desc: ['벤틸레이티드 디스크', '벤틸레이티드 디스크', '벤틸레이티드 디스크']
        },
        {
          title: '제동장치 (뒤)',
          desc: ['벤틸레이티드 디스크', '벤틸레이티드 디스크', '벤틸레이티드 디스크']
        }
      ]
    },
    {
      title: '표준연비 및 등급',
      list: [{
          title: '연료탱크 용량(ℓ)',
          desc: ['90', '90', '90']
        },
        {
          title: '복합연비 (km/ℓ)',
          desc: ['10.3', '10.3', '10.3']
        },
        {
          title: '도심 / 고속도로 연비 (km/ℓ)',
          desc: ['9.5 / 11.5', '9.5 / 11.5', '9.5 / 11.5']
        },
        {
          title: '복합 CO<sub>2</sub> 배출량 (g/km)',
          desc: ['188', '188', '188']
        },
        {
          title: '등급',
          desc: ['4', '4', '4']
        }
      ]
    },

    {
      title: '주행성능',
      list: [{
          title: '최고속도 (km/h)',
          desc: ['235', '238', '238']
        },
        {
          title: '0-100 km/h (초)',
          desc: ['6.1', '6.1', '6.1']
        }
      ],
      caption: '* 위 연비는 표준모드에 의한 연비로서 도로 상태, 운전 방법, 차량 적재, 정비 상태 및 외기 온도 등에 따라 실주행 연비와 차이가 있습니다.'
    },
    {
      title: '안전',
      list: [{
          title: '전면 에어백 / 앞,뒷좌석 사이드 에어백 /<br>사이드 커튼 에어백(프런트/리어) / 앞좌석 무릎 에어백',
          titleM: '전면 에어백 / 앞,뒷좌석 사이드 에어백 /<br>사이드 커튼 에어백(프런트/리어) / 앞좌석 무릎 에어백',
          desc: ['O', 'O', 'O']
        },
        {
          title: '동승석 에어백 차단 스위치',
          desc: ['O', 'O', 'O']
        },
        {
          title: '도난 방지 이모빌라이저',
          desc: ['O', 'O', 'O']
        },
        {
          title: 'ESC (전자식 주행 안정화 컨트롤) / ABS / EDL / ASR',
          desc: ['O', 'O', 'O']
        },
        // {
        //   title: 'EDL (Electronic Differential Lock) / ASR (Anti-Slip Regulation)',
        //   desc: ['O', 'O', 'O']
        // },
        {
          title: '다중 충돌 방지 브레이크',
          desc: ['O', 'O', 'O']
        },
        {
          title: '프로액티브 탑승자 보호 시스템(Pre Crash)',
          desc: ['O', 'O', 'O']
        },
        {
          title: '보행자 보호 시스템<br>- 보행자 및 사이클리스트 감지<br>- Active Bonnet',
          desc: ['O', 'O', 'O']
        },
        {
          title: '플랫 타이어 경고 시스템',
          desc: ['O', 'O', 'O']
        },
        {
          title: 'ISOFIX (유아용 시트 고정 장치)',
          desc: ['O', 'O', 'O']
        },
        {
          title: '탑승자 안전벨트 경고등(앞좌석/뒷자석)',
          desc: ['O', 'O', 'O']
        },
        {
          title: '비상 삼각대',
          desc: ['O', 'O', 'O']
        }
      ]
    },
    {
      title: '외장',
      list: [{
          title: '전방 안개등',
          desc: ['O', 'O', 'O']
        },
        {
          title: '후방 안개등',
          desc: ['O', 'O', 'O']
        },
        {
          title: 'LED 헤드램프 및 LED 주간 주행등',
          desc: ['O', 'O', 'O']
        },
        {
          title: '오토 헤드램프 (전조등 자동 점등 기능 및 커밍홈/리빙홈)',
          desc: ['O', 'O', 'O']
        },
        {
          title: 'LED 리어 컴비네이션 램프',
          desc: ['O', 'O', 'O']
        },
        {
          title: '바디컬러 범퍼',
          desc: ['O', 'O', 'O']
        },
        {
          title: '도어 하단부 컬러',
          desc: ['블랙컬러', '바디컬러<br>(도어 하단부 및<br>에어인테이크 크롬 적용)', '바디컬러<br>(R-Line 범퍼)']
        },
        {
          title: '사이드 윈도우 데코 트림',
          desc: ['블랙', '크롬', '크롬']
        },
        {
          title: '실버 루프 레일',
          desc: ['O', 'O', 'O']
        },
        {
          title: '도난방지 휠 볼트',
          desc: ['O', 'O', 'O']
        },
        {
          title: '트렁크 로딩 엣지 프로텍션',
          desc: ['플라스틱', '스테인리스 스틸', '스테인리스 스틸']
        },
        {
          title: '배기 테일파이프',
          desc: ['듀얼 기본 (원형)', '듀얼 크롬 (오각형)', '듀얼 크롬 (오각형)']
        }
      ]
    },

    {
      title: '내장 & 시트',
      list: [{
          title: '인테리어 트림 (대쉬보드 및 도어 트림 패널)',
          desc: ['Silver Birch', 'Open-cell Fine Grain Ash', 'Silver Wave']
        },
        {
          title: '블랙 글로시 / 실버 센터 콘솔',
          desc: ['O', 'O', 'O']
        },
        {
          title: '루프 라이너',
          desc: ['그레이', '베이지', '블랙']
        },
        {
          title: '더블 선바이저 및 조명 미러 ',
          desc: ['O', 'O', 'O']
        },
        {
          title: '가죽 시트',
          desc: ['Vienna', 'Savona', 'Savona, R-Line 로고']
        },
        {
          title: '앞좌석 ErgoComfort 시트 <br>- 18 way 전동식 조절<br>- 공압식 사이드 볼스터(쿠션, 등받이) 및 쿠션 익스텐션 조절<br>- 4 way 공압식 요추 지지대',
          desc: ['O', 'O', 'O']
        },
        {
          title: '메모리 시트',
          desc: ['운전석', '앞좌석', '앞좌석']
        },
        {
          title: '앞좌석 통풍 시트 ',
          desc: ['X', 'O', 'O']
        },
        {
          title: '히팅 시트 (앞좌석/뒷좌석) ',
          desc: ['O', 'O', 'O']
        },
        {
          title: '센터 암레스트 (앞좌석/뒷좌석)',
          desc: ['O', 'O', 'O']
        },
        {
          title: '스티어링 칼럼 조절',
          desc: ['수동', '전동 (메모리)', '전동 (메모리)']
        },
        {
          title: '가죽 멀티펑션 스티어링 휠 / 히팅 기능',
          desc: ['O', 'O', 'X']
        },
        {
          title: 'R-line 가죽 멀티펑션 스티어링 휠 / 히팅 기능 / 패들시프트',
          desc: ['X', 'X', 'O']
        },
        {
          title: '브러시드 스테인리스 스틸 페달 ',
          desc: ['X', 'X', 'O']
        },
        {
          title: '도어 스커프 플레이트 ',
          desc: ['플라스틱', '스테인리스 스틸<br>일루미네이티드', '스테인리스 스틸<br>R-line 로고<br>일루미네이티드']
        },
        {
          title: '엠비언트 라이트',
          desc: ['화이트', '무드 라이팅 (30컬러)', '무드 라이팅 (30컬러)']
        },
        {
          title: '분할 접이식 뒷좌석, 슬라이딩 및 등받이 각도 조절',
          desc: ['O', 'O', 'O']
        }
      ]
    },
    {
      title: '편의 & 기능',
      list: [{
          title: '2존 클리마트로닉 자동 에어컨',
          desc: ['O', 'X', 'X']
        },
        {
          title: '4존 클리마트로닉 자동 에어컨',
          desc: ['X', 'O', 'O']
        },
        {
          title: '헤드업 디스플레이',
          desc: ['X', 'O', 'O']
        },
        {
          title: '스타트 & 스톱 기능 ',
          desc: ['O', 'O', 'O']
        },
        {
          title: '엔진 스타트 / 스톱 버튼',
          desc: ['O', 'O', 'O']
        },
        {
          title: '"Keyless Access" 스마트키 시스템',
          desc: ['O', 'O', 'O']
        },
        {
          title: '파노라마 선루프 (틸팅 및 슬라이딩)',
          desc: ['O', 'O', 'O']
        },
        {
          title: '전자식 파킹 브레이크 및 오토홀드',
          desc: ['O', 'O', 'O']
        },
        {
          title: '전동 사이드 미러<br>(히팅 / 폴딩 / 눈부심 방지 / 후진 자동 하향(우측) / 메모리)',
          desc: ['O', 'O', 'O']
        },
        {
          title: '눈부심 방지 룸미러',
          desc: ['O', 'O', 'O']
        },
        {
          title: '드라이빙 프로파일 셀렉션 (주행 모드 선택 기능)',
          desc: ['6개 모드', '7개 모드', '7개 모드']
        },
        {
          title: '에어서스펜션 (셀프 레벨링, 높이 조절 및 전자식 쇼크 업소버 제어)',
          desc: ['X', 'O', 'O']
        },
        {
          title: '올 휠 스티어링',
          desc: ['X', 'O', 'O']
        },
        {
          title: '전방추돌경고 및 긴급제동 프론트 어시스트 (0~250km/h)',
          desc: ['O', 'O', 'O']
        },
        {
          title: '어댑티브 크루즈 컨트롤 (0~250km/h)',
          desc: ['O', 'O', 'O']
        },
        {
          title: '레인 어시스트',
          desc: ['O', 'O', 'O']
        },
        {
          title: '트래픽 잼 어시스트 (0~60km/h)',
          desc: ['O', 'O', 'O']
        },
        {
          title: '사이드 어시스트',
          desc: ['O', 'O', 'O']
        },
        {
          title: '후방 트래픽 경고 시스템',
          desc: ['O', 'O', 'O']
        },
        {
          title: '전방 크로스 트래픽 어시스트',
          desc: ['O', 'O', 'O']
        },
        {
          title: '전방 및 후방 센서, 파크 어시스트',
          desc: ['O', 'O', 'O']
        },
        {
          title: '전방 및 후방 센서, 파크 어시스트 플러스',
          desc: ['X', 'X', 'O']
        },
        {
          title: '후방카메라',
          desc: ['O', 'O', 'X']
        },
        {
          title: '에어리어 뷰 (360° 뷰 카메라)',
          desc: ['X', 'X', 'O']
        },
        {
          title: '피로 경고 시스템',
          desc: ['O', 'O', 'O']
        },
        {
          title: '워셔 노즐 히팅 기능',
          desc: ['O', 'O', 'O']
        },
        {
          title: '전동식 파워 트렁크 및 이지오픈',
          desc: ['O', 'O', 'O']
        },
        {
          title: '임시 스페어타이어 / 툴킷 및 잭',
          desc: ['O', 'O', 'O']
        }

      ]
    },
    {
      title: '인포테인먼트',
      list: [{
          title: '디지털 콕핏 (액티브 인포 디스플레이)<br>- 12.3" TFT 컬러 디스플레이 (1,920X720)',
          desc: ['O', 'O', 'O']
        },
        {
          title: '디스커버 프리미엄 인포테인먼트 시스템 <br>- 프리미엄 내비게이션 시스템 (한국형)<br>- 2 USB 인터페이스 (아이팟/아이폰) / 2 USB 충전 소켓<br>- 15"" TFT 컬러 터치 디스플레이 (1,920x1,020) <br>- 근접센서 및 제스쳐 컨트롤<br>- SD 카드 슬롯<br>- 블루투스',
          desc: ['O', 'O', 'O']
        },
        {
          title: 'TPEG 교통정보',
          desc: ['O', 'O', 'O']
        },
        {
          title: 'App-Connect',
          desc: ['O', 'O', 'O']
        },
        {
          title: '모바일폰 무선충전',
          desc: ['O', 'O', 'O']
        },
        {
          title: '8 스피커',
          desc: ['O', 'O', 'O']
        }
      ],
      caption: '* 차량에 적용된 운전자 보조 시스템은 안전 장치가 아닌 운전자를 위한 편의 장치이므로 차량의 통제는 운전자의 판단에 의해 이루어져야 하며 본 시스템에만 의존할 경우 사고가 날 수 있습니다. <br><br> * 표시된 사양, 컬러 및 제원은 차의 외관 및 성능 개선을 위해 변경될 수 있습니다. 가죽 시트에는 부분적으로 인조가죽이 포함되어 있습니다.'
    }
  ]
};