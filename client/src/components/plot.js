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
              categories: [ 'Speed', 'Rarity', 'Temperment', 'Attack', 'Defence', 'Strength']
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
              data: props.stats
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
              width="500"
            />
            </div>
        )
    }
}

export default Plot
