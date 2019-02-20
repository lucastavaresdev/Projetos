import React, { Component } from 'react'
import { quantidade_de_rondas } from '../Funcions'
import { Bar  } from 'react-chartjs-2'

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

    exibir_quantidade_de_rondas() {
            quantidade_de_rondas().then(json => {
                    const equipamentojson = json.data;
                            let labels = [];
                            let data = [];
                            equipamentojson.forEach(element => {
                                    labels.push(element.nome_situacoes);
                                    data.push(element.qtd);
                    });
                    
                    this.setState({
                        quantidade_de_rondas: {
                                        datasets: [
                                            {
                                                    label: labels[0],
                                                    data: [data[0]],
                                                    backgroundColor: "rgba(245, 74, 85, 0.5)",
                                                    borderWidth: 1
                                                  },
                                                  {
                                                    label: labels[1],
                                                    data: [data[1]],
                                                    backgroundColor: "rgba(90, 173, 246, 0.5)",
                                                    borderWidth: 1
                                                  },
                                                  {
                                                    label: labels[2],
                                                    data: [data[2]],
                                                    backgroundColor: "rgba(245, 192, 50, 0.5)",
                                                    borderWidth: 1
                                                  },
                                                  {
                                                    label: labels[3],
                                                    data: [data[3]],
                                                    backgroundColor: "rgba(245, 192, 50, 0.5)",
                                                    borderWidth: 1
                                                  },
                                                  {
                                                    label: labels[4],
                                                    data: [data[4]],
                                                    backgroundColor: "rgba(245, 192, 50, 0.5)",
                                                    borderWidth: 1
                                                  },
                                                  {
                                                    label: labels[5],
                                                    data: [data[5]],
                                                    backgroundColor: "rgba(245, 192, 50, 0.5)",
                                                    borderWidth: 1
                                                  },
                                                  {
                                                    label: labels[6],
                                                    data: [data[6]],
                                                    backgroundColor: "rgba(245, 192, 50, 0.5)",
                                                    borderWidth: 1
                                                  },
                                                  {
                                                    label: labels[7],
                                                    data: [data[7]],
                                                    backgroundColor: "rgba(245, 192, 50, 0.5)",
                                                    borderWidth: 1
                                                  },
                                                ]
                            }
                        });
         })
       
    }

    componentDidMount(){
        this.exibir_quantidade_de_rondas()
    }

    render() {
        return (
            <div>
            <p>Rondas</p> 

            {Object.keys(this.state.quantidade_de_rondas).length &&
                    <Bar 
                            data={this.state.quantidade_de_rondas} 
                            options={options}
                            height={300}
                            width={1000}
                            maintainAspectRatio={false}
                            >
                    </Bar>
            }
            </div>
        );
    }
}

export default Rondas;