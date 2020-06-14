deviceKind = "pc";

var mobileBr = deviceKind == 'm' ? '<br>' : '';
var pcBr = deviceKind == 'pc' ? '<br>' : '';

var navList = [{
    number: 0,
    isOn: false,
    name: 'kv',
    goId: 'kv',
    area: null
  },
  {
    number: 2,
    isOn: false,
    name: 'kvLook',
    goId: 'kvLook',
    area: null
  },
  {
    number: 3,
    isOn: false,
    name: 'EXTERIOR',
    goId: 'exterior',
    area: null
  },
  {
    number: 4,
    isOn: false,
    name: 'INTERIOR',
    goId: 'interior',
    area: null
  },
  {
    number: 5,
    isOn: false,
    name: 'DRIVING',
    goId: 'driving',
    area: null
  },
  {
    number: 6,
    isOn: false,
    name: 'TECHNOLOGY',
    goId: 'technology',
    area: null
  },
  {
    number: 7,
    isOn: false,
    name: 'GALLERY',
    goId: 'gallery',
    area: null
  },
  {
    number: 8,
    isOn: false,
    name: 'TRIM',
    goId: 'trim',
    area: null
  },
  {
    number: 9,
    isOn: false,
    name: 'PROMOTION',
    goId: 'promotion',
    area: null
  },
  {
    number: 10,
    isOn: false,
    name: 'TEST DRIVING',
    goId: 'testdriving',
    area: null
  }
];

var exteriorData = [{
    number: 0,
    isOn: false,
    title: 'Design',
    popTitle: 'Unmistakable design',
    image: 'exterior1.jpg',
    txt: '폭스바겐만의 고유한 디자인 랭귀지가 반영된 투아렉은 SUV의 리더로서 다방면에서 새로운 기준을 제시합니다.<br>눈길을 사로잡는 헤드램프와 크롬 라디에이터 그릴, 길게 뻗은 보닛에서 펼쳐지는 유려한 사이드 라인, 스포티하면서도 우아한 후방의 숄더 라인까지. 투아렉만의 압도적인 디자인은 모두의 시선을 사로잡을 것입니다.',
    slide: [{
        video: false,
        image: 'exterior_s1-1.jpg'
      },
      {
        video: false,
        image: 'exterior_s1-2.jpg'
      },
      {
        video: false,
        image: 'exterior_s1-3.jpg'
      },
      {
        video: false,
        image: 'exterior_s1-4.jpg'
      },
      {
        video: false,
        image: 'exterior_s1-5.jpg'
      }
    ]
  },
  {
    number: 1,
    isOn: false,
    title: 'R-Line Design',
    image: 'exterior2.jpg',
    txt: '다이내믹한 투아렉 R-Line을 만나보세요. 역동적인 외관이 강조된 R-Line은 다양한 디테일이 살아 있습니다.<br>프런트 범퍼에 디자인된 R-Line 고유의 C 시그니처, 독특한 21인치 스즈카 알로이 휠, 차체 색상의 휠 패널, 특수 설계된 전면 및 후면 범퍼의 R-Line 스타일링은 역동적인 드라이빙 감성을 표현합니다.',
    slide: [{
        title: 'Exclusive R-Line design' + mobileBr + 'and styling',
        video: false,
        image: 'exterior_s2-1.jpg',
        txt: '다이내믹한 투아렉 R-Line을 만나보세요. 역동적인 외관이 강조된 R-Line은 다양한 디테일이 살아 있습니다.<br>프런트 범퍼에 디자인된 R-Line 고유의 C 시그니처, 독특한 21인치 스즈카 알로이 휠, 차체 색상의 휠 패널, 특수 설계된 전면 및 후면 범퍼의 R-Line 스타일링은 역동적인 드라이빙 감성을 표현합니다.'
      },
      {
        title: 'Exclusive R-Line design' + mobileBr + 'and styling',
        video: false,
        image: 'exterior_s2-2.jpg',
        txt: '다이내믹한 투아렉 R-Line을 만나보세요. 역동적인 외관이 강조된 R-Line은 다양한 디테일이 살아 있습니다.<br>프런트 범퍼에 디자인된 R-Line 고유의 C 시그니처, 독특한 21인치 스즈카 알로이 휠, 차체 색상의 휠 패널, 특수 설계된 전면 및 후면 범퍼의 R-Line 스타일링은 역동적인 드라이빙 감성을 표현합니다.'
      },
      {
        title: 'R-Line Logo Badge',
        video: false,
        image: 'exterior_s2-3.jpg',
        txt: '그릴에 위치한 R-Line 로고는 투아렉의 스포티한 감성을 강조하면서, 강렬한 디자인을 완성합니다.'
      },
      {
        title: '‘Suzuka’ Alloy Wheels',
        video: false,
        image: 'exterior_s2-4.jpg',
        txt: '9.5 J x 21”, Tyres 285/40 R 21, 투아렉 R-Line에 적용된 21인치 스즈카 알로이 휠이 투아렉의  ' + pcBr + '다이내믹한 외관을 더욱 강인하게 만들어 줍니다.'
      }
      // {
      //   title: 'Exclusive R-Line design' + mobileBr + 'and styling.',
      //   video: false,
      //   image: 'exterior_s2-5.jpg',
      //   txt: '“Suzuka”Alloy Wheels 9.5 J x 21, Tire 285/40 R 21<br>투아렉 R-Line에 적용된 21인치 스즈카 알로이 휠 이 투아렉의 다이내믹한 외관을 더욱 강인하게 만들어 줍니다.'
      // }
    ]
  },
  {
    number: 2,
    isOn: false,
    title: 'Easy Open Trunk',
    image: 'exterior3.jpg',
    txt: '트렁크 이지 오픈 기능으로 양손으로 짐을 들고 있을 때에도 범퍼 아래에 발을 뻗는 동작만으로도 손쉽게 파워 테일게이트를 열 수 있습니다.',
    slide: [{
        title: 'Easy Open and ' + mobileBr + 'Electronic Closing Trunk',
        video: false,
        image: 'exterior_s4-1.jpg',
        txt: '트렁크 이지 오픈 기능으로 양손으로 짐을 들고 있을 때에도 범퍼 아래에 발을 뻗는 동작만으로도 손쉽게 파워 테일게이트를 열 수 있습니다.'
      },
      {
        title: 'Trunk Capacity',
        video: false,
        image: 'exterior_s4-2.jpg',
        txt: '투아렉의 트렁크는 810리터로 이전 모델 대비 최대 113리터 넓어졌습니다.' + pcBr + '적재용량을 1,800리터까지 늘릴 수 있어 길이가 길거나 부피가 큰 물건도 여유롭게 실을 수 있습니다.'
      }
    ]
  }
];

var interiorData = [{
    number: 0,
    isOn: true,
    title: 'Innovision Cockpit',
    image: 'interior1.jpg',
    txt: '15인치의 대형 TFT 터치스크린과 12.3인치 디지털 콕핏은 경계 없이 하나로 연결되어 한눈에 차량의 상태를 확인 가능하며, 시각적으로도 시원한 개방감을 선사합니다.<br>15인치 TFT 터치스크린은 터치와 제스처 인식을 통해 물리 버튼 없이 컨트롤이 가능하며, 다양한 커스터마이징 옵션을 통해 나만의 설정이 가능합니다. 또한 운전 중에도 손쉽게 인포테인먼트를 조작할 수 있는 기능까지 제공합니다.',
    slide: [{
        title: 'The futuristic Innovision Cockpit',
        video: true,
        image: 'interior_s2-2.mp4',
        txt: '15인치의 대형 TFT 터치스크린과 12.3인치 디지털 콕핏은 경계 없이 하나로 연결되어 한눈에 차량의 상태를 확인 가능하며, 시각적으로도 시원한 개방감을 선사합니다.<br>15인치 TFT 터치스크린은 터치와 제스처 인식을 통해 물리 버튼 없이 컨트롤이 가능하며, 다양한 커스터마이징 옵션을 통해 나만의 설정이 가능합니다. 또한 운전 중에도 손쉽게 인포테인먼트를 조작할 수 있는 기능까지 제공합니다.',
      },
      {
        title: 'The futuristic Innovision Cockpit',
        video: false,
        image: 'interior_s1-1.jpg',
        txt: '15인치의 대형 TFT 터치스크린과 12.3인치 디지털 콕핏은 경계 없이 하나로 연결되어 한눈에 차량의 상태를 확인 가능하며, 시각적으로도 시원한 개방감을 선사합니다.<br>15인치 TFT 터치스크린은 터치와 제스처 인식을 통해 물리 버튼 없이 컨트롤이 가능하며, 다양한 커스터마이징 옵션을 통해 나만의 설정이 가능합니다. 또한 운전 중에도 손쉽게 인포테인먼트를 조작할 수 있는 기능까지 제공합니다.',
      },
      {
        title: 'Digital Cockpit',
        video: false,
        image: 'interior_s3-6.jpg',
        txt: '디지털 계기판인 디지털 콕핏은 주행 속도, rpm, 연료 상태 외에도 원하는 정보를 맞춤 구성하여 다양한 정보를 원하는 대로 표시할 수 있습니다.<br>12.3인치 디스플레이는 내비게이션 맵 확대, 운전 보조 시스템의 3D 표현을 통해 기존에 볼 수 없던 폭스바겐의 혁신을 보여줍니다.'
      }
    ]
  },
  {
    number: 1,
    isOn: false,
    title: 'Interior',
    // popTitle: 'Sophisticated and luxurious interior',
    image: 'interior2.jpg',
    txt: '다이내믹한 외관과 달리, 내부에서는 평온함을 즐길 수 있습니다.<br>투아렉의 내부는 군더더기 없는 깔끔한 디자인과 넓은 공간 구성으로, 운전자에게 최적화되어 편안함을 선사합니다.',
    slide: [{
        title: 'ErgoComfort Seats',
        video: false,
        image: 'interior_s4-1.jpg',
        txt: '앞좌석에 적용된 ErgoComfort 시트는 인체공학적으로 설계되어<br>시트의 높이, 길이, 쿠션 각도, 등받이 기울기 등 14방향으로 전동 조절이 가능하며, ' + pcBr + '4방향으로 조절이 가능한 공압식 요추지지대를 포함하여 총 18방향으로 시트 포지션을 탑승자의 신체에 최적화할 수 있습니다.'
      },
      {
        title: 'Sophisticated and luxurious interior',
        video: false,
        image: 'interior_s2-1.jpg',
        txt: '다이내믹한 외관과 달리, 내부에서는 평온함을 즐길 수 있습니다.<br>투아렉의 내부는 군더더기 없는 깔끔한 디자인과 넓은 공간 구성으로, 운전자에게 최적화되어 편안함을 선사합니다.',
      }
    ]
  },
  {
    number: 2,
    isOn: false,
    title: 'Multimedia',
    image: 'interior3.jpg',
    txt: '투아렉은 돋보이는 멀티미디어 시스템을 가졌습니다. 12.3인치 디지털 콕핏과 15인치 터치스크린이 하나로 연결되어 있는 이노비전 콕핏은 아름다운 디자인뿐만 아니라 기능적인 측면에서도 투아렉다운 리더의 면모를 보여줍니다.',
    slide: [{
        title: 'Innovative Gesture Control',
        video: false,
        image: 'interior_s3-1.jpg',
        txt: '제스처 컨트롤을 통해서 디스커버 프리미엄(Discover Premium) 인포테인먼트 시스템을 간편하게 이용하세요. 스크린을 터치하지 않고 수평으로 손을 움직여서 간단하게 메뉴 항목을 제어할 수 있으며 음악이나 라디오 채널 또한 넘길 수 있습니다.'
      },
      {
        title: 'Home Screen Customization',
        video: false,
        image: 'interior_s3-2.jpg',
        txt: '홈 스크린의 넓은 화면을 취향에 따라 구성할 수 있습니다. 좋아하는 사진과 즐겨 찾는 기능을 홈 스크린에 배치해 보세요.<br>나만의 설정으로 구성한 홈 스크린을 저장하여 언제든지 불러올 수 있습니다.'
      },
      {
        title: 'Home Screen Customization',
        video: false,
        image: 'interior_s3-3.jpg',
        txt: '홈 스크린의 넓은 화면을 취향에 따라 구성할 수 있습니다.  좋아하는 사진과 즐겨 찾는 기능을 홈 스크린에 배치해 보세요.<br>나만의 설정으로 구성한 홈 스크린을 저장하여 언제든지 불러올 수 있습니다.'
      },
      {
        title: 'Discover Premium Infotainment Systems',
        video: false,
        image: 'interior_s3-5.jpg',
        txt: '15인치 대형 TFT 터치 디스플레이와 12.3인치 디지털 콕핏은 경계없이 하나로 연결되어 있습니다. 운전자는 근접 센서와 Innovative Gesture Control을 이용하여 손쉽게 인포테인먼트 시스템을 조작할 수 있습니다. 내장 내비게이션과 SD 카드 슬롯,  4개의 USB 포트, 블루투스, 앱 커넥트까지 다양한 편의 장치와 기능을 갖추고 있습니다.'
      }
    ]
  },
  {
    number: 3,
    isOn: false,
    title: 'R-Line Interior',
    image: 'interior5.jpg',
    txt: '투아렉 R-Line 옵션으로 첫 감촉부터 생생한 내부 공간을 경험하세요. 히팅 기능 및 패들 시프트가 장착된 멀티펑션 스티어링 휠은 가죽 소재로 구성되었으며, 각인된 R-Line 로고는 실버 웨이브(Silver Wave) 알루미늄 데코 소재와 함께 투아렉의 역동적인 모습을 표현합니다.',
    slide: [{
        title: 'Exclusive R-Line design and styling',
        video: false,
        image: 'interior_s5-1.jpg',
        txt: '투아렉 R-Line 옵션으로 첫 감촉부터 생생한 내부 공간을 경험하세요. ' + pcBr + '히팅 기능 및 패들 시프트가 장착된 멀티펑션 스티어링 휠은 가죽 소재로 구성되었으며, ' + pcBr + '각인된 R-Line 로고는 실버 웨이브(Silver Wave) 알루미늄 데코 소재와 함께 투아렉의 역동적인 모습을 표현합니다.'
      },
      {
        title: 'Exclusive R-Line design and styling',
        video: false,
        image: 'interior_s5-2.jpg',
        txt: '사보나 레더로 제작된 ErgoComfort 시트와 카본 스타일(스플리트 가죽)을 활용한 투톤 디자인으로 ' + pcBr + '내부 공간을 더욱 스포티하게 연출합니다. 특히 앞좌석 R-Line 로고가 새겨진 크리스털 그레이 데코와 ' + pcBr + '이노비전 콕핏 디스플레이의 적절한 조화는 전에 없던 우아함을 선사합니다.'
      },
      {
        title: 'R-Line Logo Illuminated Door Scuff Plate',
        video: false,
        image: 'interior_s5-3.jpg',
        txt: '운전석과 조수석 도어의 R-Line 로고가 새겨진 스테인리스 스틸 도어 스커프 플레이트는 투아렉의 ' + pcBr + 'R-Line 패키지 디자인을 시각적으로 더욱 강조합니다.'
      }
    ]
  },
  {
    number: 4,
    isOn: false,
    title: 'Head-up Display',
    image: 'interior4.jpg',
    txt: '속도, 내비게이션 세부 정보를 포함한 주행 정보가 윈드 스크린에 투사되어 명확하게 표시되므로, 운전자가 시선을 돌리지 않고 집중해서 운전할 수 있도록 도와줍니다.',
    slide: [{
      title: 'Head-up Display',
      video: false,
      image: 'interior_s3-4.jpg',
      txt: '속도, 내비게이션 세부 정보를 포함한 주행 정보가 윈드 스크린에 투사되어 명확하게 표시되므로, 운전자가 시선을 돌리지 않고 집중해서 운전할 수 있도록 도와줍니다. '
    }]
  }
];

var drivingData = [{
    id: 0,
    isOn: true,
    title: '1. All Wheel Steering',
    coverImg: 'driving01.jpg',
    video: '01_All_Wheel_Steering.mp4',
    txt: ' 올 휠 스티어링 시스템을 통해 시속 37km 이하에서는 앞바퀴와 뒷바퀴가 반대 방향으로 회전하여 좁은 길에서의 코너링이나 유턴이 더 쉬워졌으며, 시속 37km 이상에서는 앞바퀴와 뒷바퀴가 같은 방향으로 회전하여 주행 안정성 또한 높아졌습니다. (3.0 TDI Prestige 이상 적용)'
  },
  {
    id: 1,
    isOn: false,
    title: '2. Air Suspension + Driving Mode',
    coverImg: 'driving02.jpg',
    video: '02_Air_Suspension.mp4',
    txt: '센터 콘솔 우측에 위치한 에어 서스펜션 스위치로 차체의 높낮이를 최저 -40mm부터 최대 70mm까지 조절이 가능합니다. 올 휠 스티어링과 에어 서스펜션을 통해 어떠한 주행 상황에서도 편안한 드라이빙을 만끽할 수 있습니다. ' +
      mobileBr +
      '(3.0 TDI Prestige 이상 적용)<br>투아렉의 센터 콘솔 좌측에 위치한 드라이빙 프로파일 셀렉션 스위치를 이용하여 손쉽게 모든 상황에 맞는 드라이빙 모드 설정이 가능합니다.<br>(노멀 / 스포츠 / 컴포트 / 에코 / 스노우 / 오프로드 / 인디비쥬얼) 선택한 모드에 따라 엔진과 변속기 및 지정된 보조 시스템이 주어진 지형 조건에 맞게 조정됩니다. ' +
      mobileBr +
      '(컴포트 모드 : 3.0 TDI Prestige 이상 적용)'
  }
];

var technologyData = [{
    id: 0,
    isOn: true,
    title: '1. Front Cross Traffic Assist',
    txt: '전방 크로스 트래픽 어시스트는 예측이 어려운 터널의 출구나 교차로에서 매우 유용합니다. ACC에 적용된 레이더 기술을 동일하게 사용하여 차량 앞부분을 모니터링하고 측면에서 접근하는 차량이나 보행자를 감지합니다. 이 시스템은 교차로 진입 시 좌우 사각지대로 인해 발생하는 위험을 감지하여 긴급 정지(~10km/h) 또는 경고(~30km/h)를  통해 사고 예방에 도움을 줍니다.'
  },
  {
    id: 1,
    isOn: false,
    title: '2. The Proactive Passenger Protection',
    image: '',
    txt: '충돌 위험이 감지되면 충돌하기 전 안전벨트를 조이고,<br>열려 있던 창문과 파노라마 선 루프가 닫히는 등 자동으로 보호 조치가 작동하여 탑승자의 안전을 보호합니다.'
  },
  {
    id: 2,
    isOn: false,
    title: '3. Adaptive Cruise Control (ACC)',
    txt: 'ACC는 도심이나 고속도로, 장소에 관계없이 전방 주행 차량의 속도에 맞게 차량의 속도를 제어하고, ' + pcBr + '설정한 거리를 유지하는 스마트한 안전 시스템입니다. (약 0-250 km/h까지 적용)'
  },
  {
    id: 3,
    isOn: false,
    title: '4. Traffic Jam Assist',
    txt: '교통 체증 상황에서도 편안하게 주행할 수 있도록 하며 교통 체증 시 발생하는 전형적인 사고를 예방합니다.<br>ACC와 레인 어시스트가 결합된 기능으로 저속(0~60 km/h) 주행 시 앞 차량과 간격, 차선을 유지하도록 돕습니다.'
  },
  {
    id: 4,
    isOn: false,
    title: '5. Predictive Pedestrian Monitoring ',
    txt: '차로나 도로의 가장자리에 있는 보행자를 감지할 경우 가벼운 브레이크 조작과 함께 시청각적 신호로 운전자에게 경고하며,<br>충돌이 예상되는 상황에도 운전자가 반응하지 않으면 시스템이 차량 비상 제동을 작동할 수 있습니다.'
  },
  {
    id: 5,
    isOn: false,
    title: '6. Lane Assist ',
    txt: '레인 어시스트는 차선 유지 시스템으로 무의식적인 차선 이탈에 의한 사고를 예방하는 데에 도움을 주는 기능입니다.<br>차량이 차선을 이탈하는 움직임이 감지되면, 운전자에게 즉각 경고를 보내고 스티어링 보조를 통해 보다 안전하고 편안한 주행을 돕습니다.'
  },
  {
    id: 6,
    isOn: false,
    title: '7. Park Assist',
    image: '',
    txt: '주차 보조 기능을 활용하면 누구나 쉽게 주차가 가능합니다.<br>버튼 하나만 누르면 차량이 스스로 방향을 조절해 아주 좁은 공간에도 주차할 수 있습니다.'
  }
];

var trimData = [{
    id: 0,
    isOn: true,
    title: '3.0 TDI Premium',
    images: ['01Web_04Trim_01Premium_06_1.jpg', '01Web_04Trim_01Premium_06_2.jpg', '01Web_04Trim_01Premium_06_3.jpg', '01Web_04Trim_01Premium_06_4.jpg', '01Web_04Trim_01Premium_06_5.jpg', '01Web_04Trim_01Premium_06_6.jpg', '01Web_04Trim_01Premium_06_7.jpg', 'Trim_01Premium_00_1.jpg', 'Trim_01Premium_00_2.jpg']
  },
  {
    id: 1,
    isOn: false,
    title: '3.0 TDI Prestige',
    images: ['01Web_04Trim_02Prestige_03_1.jpg', '01Web_04Trim_02Prestige_03_2.jpg', '01Web_04Trim_02Prestige_03_3.jpg', '01Web_04Trim_02Prestige_03_4.jpg', '01Web_04Trim_02Prestige_03_5.jpg', '01Web_04Trim_02Prestige_03_6.jpg', '01Web_04Trim_02Prestige_03_7.jpg', 'Trim_01Premium_00_1.jpg', 'Trim_01Premium_00_2.jpg']
  },
  {
    id: 2,
    isOn: false,
    title: '3.0 TDI R-Line',
    images: ['01Web_04Trim_03Rline_01_1.jpg', '01Web_04Trim_03Rline_01_2.jpg', '01Web_04Trim_03Rline_01_3.jpg', '01Web_04Trim_03Rline_01_4.jpg', '01Web_04Trim_03Rline_01_5.jpg', '01Web_04Trim_03Rline_01_6.jpg', '01Web_04Trim_03Rline_01_7.jpg', 'Trim_01Premium_00_1.jpg', 'Trim_01Premium_00_2.jpg']
  }
  // {
  //   id: 3,
  //   isOn: false,
  //   title: '4.0 TDI Premium',
  //   images: ['3.0_pre_wh_01.jpg', '3.0_pre_wh_02.jpg', '3.0_pre_wh_03.jpg']
  // },
  // {
  //   id: 4,
  //   isOn: false,
  //   title: '4.0 TDI R-Line',
  //   images: ['3.0_pre_wh_01.jpg', '3.0_pre_wh_02.jpg', '3.0_pre_wh_03.jpg']
  // }
];

//mobile
var interiorDataMo = [{
    number: 1,
    isOn: false,
    title: 'Interior',
    popTitle: 'Sophisticated and luxurious interior',
    image: 'interior2.jpg',
    txt: '다이내믹한 외관과 달리, 내부에서는 평온함을 즐길 수 있습니다.<br>투아렉의 내부는 군더더기 없는 깔끔한 디자인과 넓은 공간 구성으로, 운전자에게 최적화되어 편안함을 선사합니다.',
    slide: [{
        video: false,
        image: 'interior_s2-1.jpg'
      },
      {
        video: false,
        image: 'interior_s2-2.jpg'
      }
    ]
  },
  {
    number: 2,
    isOn: false,
    title: 'Multimedia',
    image: 'interior3.jpg',
    txt: '제스처 컨트롤을 통해서 디스커버 프리미엄(Discover Premium) 인포테인먼트 시스템을 간편하게 이용하세요. 스크린을 터치하지 않고 수평으로 손을 움직여서 간단하게 메뉴 항목을 제어할 수 있으며 음악이나 라디오 채널 또한 넘길 수 있습니다.',
    slide: [{
        title: 'Innovative Gesture Control',
        video: false,
        image: 'interior_s3-1.jpg',
        txt: '제스처 컨트롤을 통해서 디스커버 프리미엄(Discover Premium) 인포테인먼트 시스템을 간편하게 이용하세요. 스크린을 터치하지 않고 수평으로 손을 움직여서 간단하게 메뉴 항목을 제어할 수 있으며 음악이나 라디오 채널 또한 넘길 수 있습니다.'
      },
      {
        title: 'Home Screen Customization',
        video: false,
        image: 'interior_s3-2.jpg',
        txt: '홈 스크린의 넓은 화면을 취향에 따라 구성할 수 있습니다. 좋아하는 사진과 즐겨 찾는 기능을 홈 스크린에 배치해 보세요.<br>나만의 설정으로 구성한 홈 스크린을 저장하여 언제든지 불러올 수 있습니다.'
      },
      {
        title: 'Home Screen Customization',
        video: false,
        image: 'interior_s3-3.jpg',
        txt: '홈 스크린의 넓은 화면을 취향에 따라 구성할 수 있습니다.  좋아하는 사진과 즐겨 찾는 기능을 홈 스크린에 배치해 보세요.<br>나만의 설정으로 구성한 홈 스크린을 저장하여 언제든지 불러올 수 있습니다.'
      },
      {
        title: 'Head-up Display',
        video: false,
        image: 'interior_s3-4.jpg',
        txt: '속도, 내비게이션 세부 정보를 포함한 주행 정보가 윈드 스크린에 투사되어 명확하게 표시되므로, 운전자가 시선을 돌리지 않고 집중해서 운전할 수 있도록 도와줍니다. '
      },
      {
        title: 'Discover Premium Infotainment Systems',
        video: false,
        image: 'interior_s3-5.jpg',
        txt: '15인치 대형 TFT 터치 디스플레이와 12.3인치 디지털 콕핏은 경계없이 하나로 연결되어 있습니다. 운전자는 근접 센서와 Innovative Gesture Control을 이용하여 손쉽게 인포테인먼트 시스템을 조작할 수 있습니다. 내장 내비게이션과 SD 카드 슬롯,  4개의 USB 포트, 블루투스, 앱 커넥트까지 다양한 편의 장치와 기능을 갖추고 있습니다.'
      },
      {
        title: 'Digital Cockpit',
        video: false,
        image: 'interior_s3-6.jpg',
        txt: '디지털 계기판인 디지털 콕핏은 주행 속도, rpm, 연료 상태 외에도 원하는 정보를 맞춤 구성하여 다양한 정보를 원하는 대로 표시할 수 있습니다.<br>12.3인치 디스플레이는 내비게이션 맵 확대, 운전 보조 시스템의 3D 표현을 통해 기존에 볼 수 없던 폭스바겐의 혁신을 보여줍니다.'
      }
    ]
  },
  {
    number: 3,
    isOn: false,
    title: 'R-Line Interior',
    image: 'interior5.jpg',
    txt: '투아렉 R-Line 옵션으로 첫 감촉부터 생생한 내부 공간을 경험하세요. 히팅 기능 및 패들 시프트가 장착된 멀티펑션 스티어링 휠은 가죽 소재로 구성되었으며, 각인된 R-Line 로고는 실버 웨이브(Silver Wave) 알루미늄 데코 소재와 함께 투아렉의 역동적인 모습을 표현합니다.',
    slide: [{
        title: 'Exclusive R-Line design and styling',
        video: false,
        image: 'interior_s5-1.jpg',
        txt: '투아렉 R-Line 옵션으로 첫 감촉부터 생생한 내부 공간을 경험하세요. 히팅 기능 및 패들 시프트가 장착된 멀티펑션 스티어링 휠은 가죽 소재로 구성되었으며, 각인된 R-Line 로고는 실버 웨이브(Silver Wave) 알루미늄 데코 소재와 함께 투아렉의 역동적인 모습을 표현합니다.'
      },
      {
        title: 'Exclusive R-Line design and styling',
        video: false,
        image: 'interior_s5-2.jpg',
        txt: '사보나 레더로 제작된 에르고컴포트(ErgoComfort) 시트와 카본 스타일(스플리트 가죽)을 활용한 투톤 디자인으로 ' + pcBr + '내부 공간을 더욱 스포티하게 연출합니다. 특히 앞 좌석 R-Line 로고가 새겨진 크리스탈 그레이 데코와 ' + pcBr + '이노비전 콕핏 디스플레이의 적절한 조화는 전에 없던 우아함을 선사합니다.'
      },
      {
        title: 'Exclusive R-Line design and styling',
        video: false,
        image: 'interior_s5-3.jpg',
        txt: '운전석과 조수석 도어의 R-Line 로고가 새겨진 스테인레스 스틸 도어씰은 투아렉의 R-Line 패키지 디자인을 시각적으로 더욱 강조합니다.'
      }
    ]
  },
  {
    number: 4,
    isOn: false,
    title: 'Head-up Display',
    image: 'interior4.jpg',
    txt: '속도, 내비게이션 세부 정보를 포함한 주행 정보가 윈드 스크린에 투사되어 명확하게 표시되므로, 운전자가 시선을 돌리지 않고 집중해서 운전할 수 있도록 도와줍니다.',
    slide: [{
      title: 'Head-up Display',
      video: false,
      image: 'interior_s3-4.jpg',
      txt: '속도, 내비게이션 세부 정보를 포함한 주행 정보가 윈드 스크린에 투사되어 명확하게 표시되므로, 운전자가 시선을 돌리지 않고 집중해서 운전할 수 있도록 도와줍니다. '
    }]
  }
];