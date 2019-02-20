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
                    
                        }
                });
        })
}

componentDidMount(){
    this.exibir_quantidade_de_equipamentos()
}

    render() {
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