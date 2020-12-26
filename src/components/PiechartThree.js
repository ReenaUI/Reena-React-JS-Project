import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';

const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
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
      colorByPoint: true,
      data: [{
        name: 'Australasian equities',
        color: '#90D9CF',
        y: 50,
        sliced: false,
        selected: true,
      }, {
        name: 'Cash and equivalents',
        color: '#8F8D8C',
        y: 5
      },
      {
        name: 'Global equities',
        color: '#799FC4',
        y: 5
      },
      {
        name: 'International equities',
        color: '#3B888A',
        y: 30
      },
      {
        name: 'Listed property',
        color: '#C44B38',
        y: 5
      },
      {
        name: 'New Zealand fixed interest',
        color: '#BFBFBF',
        y: 5
      }],
    
    }]
  };

class PiechartThree extends React.Component {
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
export default PiechartThree;