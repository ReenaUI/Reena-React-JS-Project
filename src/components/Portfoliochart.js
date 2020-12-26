import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
const options = {
    title:"",
    chart: {
        renderTo: 'container',
        marginBottom: 80
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          rotation: 90
        }
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]        
      }]
  };
  const Portfoliochart = () => (
    <div>
       <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );

  render(<Portfoliochart />, document.getElementById('root'));

  export default Portfoliochart;