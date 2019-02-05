import React, { Component } from 'react'
import { quantidade_de_equipamentos } from '../Funcions'
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
                quantidade_de_equipamentos: {},
                soma: 0
        };
    }

    exibir_quantidade_de_equipamentos() {
        quantidade_de_equipamentos().then(json => {
                const equipamentojson = json.data;
                        let labels = [];
                        let data = [];

                        equipamentojson.forEach(element => {
                            element.nome !== null ?  labels.push(element.nome): labels.push('Setor não informado')
                            data.push(element.contagem);
                        });

                        var result = 0
                        for (var k =0; k < data.length; k++){
                               result += parseInt(data[k]);
                        }  

                        this.setState({soma: result})

                        var hexadecimais = '0123456789ABCDEF';
                        var cor = '#';
                        var arr = [];
                        for(var j = 0; j < data.length;j++){
                            for (var i = 0; i < 6 ; i++ ) {
                                cor += hexadecimais[Math.floor(Math.random() * 16)];
                            }
                            arr.push(cor)    
                            cor = '#';
                        }
                        
                    this.setState({
                        quantidade_de_equipamentos: {
                            labels: labels,
                            datasets: [{
                                data: data,
                                backgroundColor: arr,
                                hoverBackgroundColor: arr
                            }],
                            text: this.state.soma
                        }
                });
        })
}

componentDidMount(){
    this.exibir_quantidade_de_equipamentos()
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
        
            var fontSize = (height / 100).toFixed(2);
            ctx.font = fontSize + "em Verdana";
            ctx.textBaseline = "middle";
        
            var text = chart.config.data.text,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
        
            ctx.fillText(text, textX, textY);
          }
        });

        return (
            <div>
                <p>Equipamentos</p>
                <div className="row justify-content-center">
                    <div className="col-md-8 ">
                    {Object.keys(this.state.quantidade_de_equipamentos).length &&
                        <Doughnut data={this.state.quantidade_de_equipamentos} />
                    }
                    </div>
                 </div>
            </div>
        );
    }
}



export default Rondas;