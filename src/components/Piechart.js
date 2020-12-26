import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';

const options = {
    chart: {
      type: "pie"
    },
    title: {
        text: null
    },
    series: [
      {
        data: [
          {
            y: 100
          },
          {
            y: 50
          }
        ]
      }
    ]
  };

class Piechart extends React.Component {
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
export default Piechart;