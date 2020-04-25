import React, { Component } from 'react'
import Chart from 'react-apexcharts' 

class Plot extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "basic-bar",
            },
            xaxis: {
              categories: [ 'SPEED', 'RARITY', 'TEMPERMENT', 'ATTACK', 'DEFENCE', 'STRENGTH']
            },
            plotOptions:{
                bar:{
                    horizontal:false
                }
            },
            colors:['#004080', '#00264d', '#9C27B0']
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60]
            }
          ]
        };
      }

    render() {
        return (
            <div>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="350"
              width="500"
            />
            </div>
        )
    }
}

export default Plot
