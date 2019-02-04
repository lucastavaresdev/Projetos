import React , {Component}from 'react';
import './scss/_Admin.scss'
import '../components/_card.scss'
import Card from '../components/card'
import { quantidade_de_equipamento, quantidade_de_calibracoes } from '../Funcions'
import { Bar  } from 'react-chartjs-2'
import Rondas from '../components/rondas';


const options={
        legend: {
                position: 'bottom',
        },
    };

class Admin extends Component {
        constructor(){
                super()
                this.state = { 
                        quantidade_de_equipamento  : 0,
                        em_manutencao  : 0,
                        varificados  : 0,
                        equipamento_visivel: false,
                        ronda_visivel: false,
                        calibracao_visivel: false,
                        quantidade_de_calibracoes: {}
                };
        }

     

        componentDidMount(){
                document.querySelector('.screens').style.display = 'block';
                this.exibir_quantidade_de_equipamento()
                this.exibir_quantidade_de_calibracoes()
        
        }

        exibir_quantidade_de_calibracoes() {
                quantidade_de_calibracoes().then(json => {

                        const equipamentojson = json.data;
                                let labels = [];
                                let data = [];
                                equipamentojson.forEach(element => {
                                        labels.push(element.nome_situacoes);
                                        data.push(element.quantidade);
                          });

                         
                          this.setState({
                                quantidade_de_calibracoes: {
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

        exibir_quantidade_de_equipamento() {
                quantidade_de_equipamento().then(json => {
                        this.setState({ quantidade_de_equipamento: json.data[0].quantidade_de_equipamentos})
                })
        }

        ExibirEquipamento = () => {
                (this.state.equipamento_visivel === false) ? 
                        this.setState({equipamento_visivel: true,  ronda_visivel: false, calibracao_visivel:false}): this.setState({equipamento_visivel: false });
        }
     
        ExibirRonda = () => {
                (this.state.ronda_visivel === false) ? 
                        this.setState({ronda_visivel: true, equipamento_visivel: false, calibracao_visivel:false}) : this.setState({ronda_visivel: false });
        }

        ExibirCalibracao = () => {
                (this.state.calibracao_visivel === false) ? 
                        this.setState({calibracao_visivel: true ,ronda_visivel: false, equipamento_visivel: false}) : this.setState({calibracao_visivel: false });
        }
        
        ComponenteEquipamentos = () => {
                if (!this.state.equipamento_visivel) return null;
                return (
                <div className="card-body">
                        <h5 className="card-title">Equipamentos</h5>
                </div>
                );
        }

        ComponenteRonda = () => {
                if (!this.state.ronda_visivel) return null;
                return (
                        <Rondas />
                );
        }
                
        ComponenteCalibracao = () => {
                if (!this.state.calibracao_visivel) return null;
                return (
                        <div>
                                <p>Calibração</p> 

                                {Object.keys(this.state.quantidade_de_calibracoes).length &&
                                        <Bar 
                                                data={this.state.quantidade_de_calibracoes} 
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
                

      render () {
        return (
                <div className="container-fluid">
                        <div className="row">
                                <div className="col-md-12">
                                <h1 className='mt-70 titulo_das_paginas titulo_left '>Dashboard</h1>
                                </div>
                        </div>
                                                        
                        <div className="row mt-2">
                                <div className="col-md-4 col-sm-12"  onClick={this.ExibirEquipamento}>
                                        <Card  nome='Equipamentos' qtd={this.state.quantidade_de_equipamento} icone='tools' click='click'/>
                                </div>
                                <div className="col-md-4 col-sm-12" onClick={this.ExibirRonda}>
                                        <Card  nome='Rondas' qtd={this.state.em_manutencao} icone='retweet' click='click'/>
                                </div>
                                <div className="col-md-4 col-sm-12" onClick={this.ExibirCalibracao}>
                                        <Card  nome='Calibração' qtd={this.state.varificados} icone='cog' click='click'/>
                                </div>
                        </div>

                        <div className="row mt-5">
                                <div className="col-md-8 col-sm-12">
                                        <div className="col-md-11 titulo_left">
                                                <div className="card">
                                                     
                                                        <div className="row pt-5">
                                                                <div className="col-md-12">
                                                                {this.ComponenteCalibracao()}
                                                                {this.ComponenteEquipamentos()}
                                                                {this.ComponenteRonda()}
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <div className="col-md-4 col-sm-12">
                                        <div className="col-md-11">
                                                <div className="card">
                                                                <p>Equipamentos fora do Antena</p>
                                               </div>
                                        </div>
                                </div>
                        </div>
                        <script>
                        
                        </script>
                </div>
        )
    }
}

export default Admin