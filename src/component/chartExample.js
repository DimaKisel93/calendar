import Colors from './colors'
// 30 строчка кода - должна закруглить label


const plugins = [{
  afterDraw: (chartInstance, easing) => {
      const ctx = chartInstance.chart.ctx;
      ctx.fillText("Team OutPut", 50, 20);
  }
}];

export default ({ series, categories }, text = null, max = 9) => ({
  chart: {
    styledMode: false, 
    type: 'spline',
    scrollablePlotArea: {
      minWidth: 800,
      scrollPositionX: 2
    }
  },
  exporting: false,
  title: {
    text,
    align: 'left',
    style: { fontSize: 16, fontFamily: 'Work Sans', fontWeight: '700', color: '#000' },
    margin: 30
  },
  legend: {
    layout: 'horizontal',
    align: 'right',
    verticalAlign: 'top',
    borderRadius:20,
    title: { tyle: { fontFamily: 'Muli', fontWeight: 700 } },
    itemStyle: { color: '#000', fontFamily: 'Mulish', fontSize: 12, fontWeight: 400 },
    symbolWidth: 10,
    squareSymbol: true
  },
  tooltip: {
    // crosshairs: {
    //   enabled: true,
    //   color: 'red',
    //   dashStyle: 'solid'
    // },
    crosshairs: true,
    shared: false,
    valueSuffix: '',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    shadow: false,
    zIndex: 10,
    distance: 50,
    style: {
      color: '#000',
      cursor: 'default',
      fontSize: '16px',
      fontFamily: 'Muli',
      pointerEvents: 'none',
      fontWeight: 700
    },
    formatter: function () {
      return `<div style="color: ${this.color}">${this.y}</div>`
    }
  },
  credits: {
    enabled: false
  },
  xAxis: {
    title: {
      enabled: true,
      text: ''
    },
    verticalAlign: 'top',
    // tickmarkPlacement: 'on',
    gridLineColor: 'transparent',
    gridZIndex: 5,
    gridLineWidth: 1,
    labels: {
      format: `{value}`,
      useHTML: true,
      padding: 5,
      staggerLines: 1,
      zIndex: 20
    },
    minorGridLineWidth: 1,
    alternateGridColor: 'transparent',
    crosshair: {
      color: 'transparent'
    },
    startOnTick: true,
    minPadding: 0,
    lineColor: 'transparent',
    minorTickLength: 0,
    tickLength: 0,
    categories,
    formatter: function () {
      return '<h6>' + this.value + '</h6>';
    },
    min: 0,
    scrollbar: {
      liveRedraw: true,
      // enabled: max > 12,
      barBackgroundColor: '#fff',
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: Colors.blue,
      buttonBorderWidth: 0,
      buttonArrowColor: 'black',
      buttonBorderRadius: 7,
      rifleColor: '#fff',
      trackBackgroundColor: 'white',
      trackBorderWidth: 1,
      trackBorderColor: '#fff',
      trackBorderRadius: 7
    },
    lineWidth: 0,
    minorGridLineWidth: 0,
    lineColor: 'transparent'
  },
  yAxis: {
    title: {
      enabled: false,
      text: ''
    },
    offset: -10,
    labels: {
      format: `{value}`,
      useHTML: true,
      align: 'right',
      x: -10,
      style: { color: '#92929d', fontSize: 10, fontFamily: 'Mulish' }
    },
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: 'transparent',
    minPadding: 10,
    gridLineColor: 'transparent',
    gridZIndex: 5,
    lineWidth: 0,
    lineColor: 'transparent',
    minorTickLength: 0,
    tickLength: 0
  },
  plotOptions: {
    series: {
      states: {
        hover: {
          brightness: '.9',
          enabled: true
        }
      }
    },
    areaspline: {
      threshold: null,
      softThreshold: true
    },
    spline: {
      lineWidth: 3,
      states: {
        hover: {
          lineWidth: 2
        }
      },
      marker: { enabled: false }
    }
  },
  series
})
