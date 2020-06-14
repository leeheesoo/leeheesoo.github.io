var carInfo = {
  trims: [{
      id: 0,
      inter_trim: 25,
      inter_trim_name: '3.0 TDI Premium',
      price: '0000000원',
      discount_price: '개별소비세 인하 후 0000원',
      img: '',
      wheel: 'Nevada　　　　Black 9J x 20',
      engine: 'V6 디젤',
      max_gravity: '286/3,500~　　　　4,000(ps/rpm)',
      max_torque: '61.2/2,250~　　　　3,250(kgㆍm/rpm)',
      displacement: '2,967cc',
      co2_emissions: '188(g/km)',
      compound_fuel_efficiency: '10.3km/4등급',
      highway_fuel_efficiency: '9.5 / 11.5(km/l)'
    },
    {
      id: 1,
      inter_trim: 26,
      inter_trim_name: '3.0 TDI Prestige',
      price: '0000원',
      discount_price: '개별소비세 인하 후 000원',
      img: '',
      wheel: 'Braga Dark Graphite 9J x 20',
      engine: 'V6 디젤',
      max_gravity: '286/3,500~　　　　4,000(ps/rpm)',
      max_torque: '61.2/2,250~　　　　3,250(kgㆍm/rpm)',
      displacement: '2,967cc',
      co2_emissions: '188(g/km)',
      compound_fuel_efficiency: '10.3km/4등급',
      highway_fuel_efficiency: '9.5 / 11.5(km/l)'
    },
    {
      id: 2,
      inter_trim: 29,
      inter_trim_name: '3.0 TDI R-Line',
      price: '00원',
      discount_price: '개별소비세 인하 후 00000원',
      img: '',
      wheel: 'Suzuka 　　　　Black 9.5J x 21',
      engine: 'V6 디젤',
      max_gravity: '286/3,500~　　　　4,000(ps/rpm)',
      max_torque: '61.2/2,250~　　　　3,250(kgㆍm/rpm)',
      displacement: '2,967cc',
      co2_emissions: '188(g/km)',
      compound_fuel_efficiency: '10.3km/4등급',
      highway_fuel_efficiency: '9.5 / 11.5(km/l)'
    }
  ],
  colors: [{
      name: '화이트',
      inter_color_name: 'Pure White',
      inter_color: 1
    },
    {
      name: '브라운',
      inter_color_name: 'Tamarind Brown Metallic',
      inter_color: 59
    },
    {
      name: '그레이',
      inter_color_name: 'Silicon Grey Metallic',
      inter_color: 60
    },
    {
      name: '실버',
      inter_color_name: 'Antimonial Silver Metallic',
      inter_color: 61
    },
    {
      name: '블루',
      inter_color_name: 'Moonlight Blue Meallic',
      inter_color: 58
    },
    {
      name: '블랙',
      inter_color_name: 'Deep Black Pearleffect',
      inter_color: 7
    }
  ],
  rlineColors: [{
    name: '화이트',
    inter_color_name: 'Pure White',
    inter_color: 1
  }, {
    name: '블랙',
    inter_color_name: 'Deep Black Pearleffect',
    inter_color: 7
  }],
  // heeok / add / 2019-02-14 / 데이타연동
  imgUrl: {
    root: 'https://vwkr-touareg.s3.amazonaws.com/static/launching/images/car-trim-',
    kinds: ['premium', 'prestige', 'rline'],
    fileNamePrefix: 'trim_inter_color_'
  }
};