import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';

const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    credits:false,
    title: {
        text: null
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },

    plotOptions: {
      pie: {
        borderWidth: 0,
        allowPointSelect: true,
        cursor: 'pointer',
        innerSize: '50%',     
        dataLabels: {
          enabled: false
        },
        
        showInLegend: true
      }
    },
    series: [{
      name: 'Brands',
      padding: 10,   
      colorByPoint: true,
      data: [{
        name: 'Mint Australasian Equity Fund',
        color: 'rgb(116, 204, 192)',
        y: 5,
        sliced: false,
        selected: true,
      }, {
        name: 'Mint Australasian Property Fund Z',
        color: 'rgb(198, 75, 56)',
        y: 40
      },
      {
        name: 'Mint Diversified Income Fund',
        color: '#799fc4',
        y: 5
      },
      {
        name: 'Mint Diversified Income Fund',
        color: '#8f8d8c',
        y: 50
      }],
    
    }]
  };

class PiechartTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <PieChart highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
export default PiechartTwo;