import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
 
const options = {
    title: {
      text: ''
    },
    zoomType: "x",
    credits: false,
    navigation: {
        buttonOptions: {
            enabled: false
        }
    },
    rangeSelector: {
      labelStyle: {
          display: 'none'
      },
      buttons: [{
              type: "month",
              count: 1,
              text: "1m"
          }, {
              type: "month",
              count: 3,
              text: "3m"
          }, {
              type: "month",
              count: 6,
              text: "6m"
          }, {
              type: "year",
              count: 1,
              text: "1y"
          }, {
              type: "all",
              text: "All"
          }],
      selected: 6
        },plotOptions: {
          series: {
              color: "#93dbd0",
              lineWidth: 3,
          }
      },
      yAxis: {
          title: {
              text: ""
          }
      },
      title: {
        text: ""
      },
      subtitle: {
          text: "" // dummy text to reserve space for dynamic subtitle
      },
      navigator: {
          enabled: true
      },
      scrollbar: {
          barBackgroundColor: "#93dbd0",
          barBorderRadius: 7,
          barBorderWidth: 0,
          barBorderHeight: 1,
          buttonBackgroundColor: "#93dbd0",
          buttonBorderWidth: 0,
          buttonBorderRadius: 7,
          trackBackgroundColor: "none",
          trackBorderWidth: 1,
          trackBorderRadius: 8,
          trackBorderColor: "#CCC"
      },
      series: [{
        name: "Value",
        data: [0, 0, 4951, 5000, 5107, 5307, 5407, 5507, 15890, 16000, 16034, 16099, 16122, 16500, 16800, 16900, 17000, 17001, 17100, 17200, 17300, 17399, 17405,7049,8200,8400,8500,8800,9000,9600,5539,5545,5547,5589,5599,5700,5800,5900,9978,9999,10000,10002,10004,10101,10004,10300,100700,10800,10900,4951, 5000, 5107, 5307, 5407, 5507, 15890, 16000, 16034, 16099, 16122, 16500, 16800, 16900, 17000, 17001, 17405,7049,8200,8400,8500,8800,9000,9600,5539,5545,5547,5589,5599,5700,5800,5900,9978,9999,10000,10002,10004,10101,10004,10300,100700,10800],
        type: "spline",
        pointInterval: 3600 * 1000 * 24,
        tooltip: {
            xDateFormat: "%d-%m-%Y",
            valueDecimals: 2,
            valuePrefix: "$"
        }
    }]

  };

  const InvestmentChart = () => (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );

  render(<InvestmentChart />, document.getElementById('root'));

  export default InvestmentChart;