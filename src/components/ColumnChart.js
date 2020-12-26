import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column'
},
credits: false,
title: {
    text: '',
},
subtitle: {
    text: ''
},
xAxis: {
    type: 'category',
    title: {
      text: 'Mint Australasian Equity Fund',
    },
    labels: {
        rotation: -45,
        style: {
            fontSize: '13px',
            // fontFamily: 'Verdana, sans-serif'
        }
    }
},
yAxis: {
    min: 0,
    title: {
        text: ''
    }
},
legend: {
    enabled: false
},
tooltip: {
    pointFormat: 'Mint Australasian Equity Fund: <b>{point.y:.1f} millions</b>'
},
series: [{
    name: 'Equity Fund',
    data: [
        [16],

    ],

  }]
};

class ColumnChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
export default ColumnChart;