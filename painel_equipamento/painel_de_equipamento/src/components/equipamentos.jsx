import React, { Component } from 'react'
import { quantidade_de_rondas } from '../Funcions'
import { Doughnut,Chart  } from 'react-chartjs-2'

const options={
    legend: {
            position: 'bottom',
    },
};


class Rondas extends Component {
    constructor(){
        super()
        this.state = { 
                quantidade_de_rondas: {}
        };
    }



    


    render() {
        var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
        Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
          draw: function() {
            originalDoughnutDraw.apply(this, arguments);
            
            var chart = this.chart.chart;
            var ctx = chart.ctx;
            var width = chart.width;
            var height = chart.height;
        
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em Verdana";
            ctx.textBaseline = "middle";
        
            var text = chart.config.data.text,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
        
            ctx.fillText(text, textX, textY);
          }
        });

        const data = {
          labels: [
            'Red',
            'Green',
            'Yellow'
          ],
          datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
          }],
          text: '10'
        };
        
        return (
            <div>
                <div className='row'>
                <div className='col-md-5'>
                    <p>Equipamentos</p>
                    <Doughnut data={data} />
                </div>
                </div>
            </div>
        );
    }
}

export default Rondas;