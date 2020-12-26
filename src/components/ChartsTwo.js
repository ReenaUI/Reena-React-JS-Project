import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class ChartsTwo extends React.Component {
    constructor(props) {      
        super(props);
        var c = ['A', 'B', 'C', 'D', 'E2'];
        var d = [10000, 10200, 11200, 12000, 10100, 10500, 20];
        this.state = {
          chartOptions: {
            title:false,
            xAxis: {
              categories: c,
            },
            series: [
              { data: d }
            ],
            plotOptions: {
              series: {
                point: {
                  events: {
                    mouseOver: this.setHoverData.bind(this)
                  }
                }
              }
            }
          },
          hoverData: null
        };
      }
     
      setHoverData = (e) => {
        // The chart is not updated because `chartOptions` has not changed.
        this.setState({ hoverData: e.target.category })
      }
     
     render()  {
    const { chartOptions, hoverData } = this.state;
 
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />

      </div>
    )
  }
}

export default ChartsTwo;