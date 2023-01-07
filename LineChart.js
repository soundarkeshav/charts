import React from 'react';
import ReactApexChart from 'react-apexcharts';

class LineChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {          
        series: [{
          name: 'Website Blog',
          type: 'area',
          data: []
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: [0, 4]
          },
          title: {
            text: 'Traffic Sources'
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
          },
          labels: [],
          xaxis: {
            type: 'datetime'
          },
          yaxis: [{
            title: {
              text: 'Indicator',
            },
          }]
        },
      };
    }

    render() {
      return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div> 
      );
    }
}
export default LineChart;