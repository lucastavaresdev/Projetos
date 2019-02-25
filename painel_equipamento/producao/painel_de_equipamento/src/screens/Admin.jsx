import React , {Component}from 'react';
import './scss/_Admin.scss'
import '../components/_card.scss'
import Card from '../components/card'
import { quantidade_de_equipamento, quantidade_de_rondas, quantidade_de_calibracoes } from '../Funcions'
import Rondas from '../components/rondas';
import Equipamentos from '../components/equipamentos';
import Calibracao from '../components/calibracao'
import Modal from '../components/Modal'


class Admin extends Component {
        constructor(){
                super()
                this.state = { 
                        quantidade_de_equipamento  : 0,
                        quantidade_de_rondas  : 0,
                        quantidade_de_calibracoes  : 0,
                        equipamento_visivel: false,
                        ronda_visivel: false,
                        calibracao_visivel: false,
                };
        }

        componentDidMount(){
                document.querySelector('.screens').style.display = 'block';
                this.exibir_quantidade_de_equipamento()
                this.exibir_quantidade_de_rondas()
                this.exibir_quantidade_de_calibracoes()
        }

        exibir_quantidade_de_rondas() {
                quantidade_de_rondas().then(json => {
                        const rondajson = json.data;
                        let data = [];
                      
                        rondajson.forEach(element => {
                                data.push(element.qtd);
                         });

                        var result = 0
                        for (var i =0; i < data.length; i++){
                               result += parseInt(data[i]);
                        }  

                        this.setState({ quantidade_de_rondas: result})

                })
        }

        exibir_quantidade_de_calibracoes() {
                quantidade_de_calibracoes().then(json => {
                        const calibracaojson = json.data;
                        let data = [];
                      
                        calibracaojson.forEach(element => {
                                data.push(element.quantidade);
                         });

                        var result = 0
                        for (var i =0; i < data.length; i++){
                               result += parseInt(data[i]);
                        }  

                        this.setState({ quantidade_de_calibracoes: result})

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
                        <Equipamentos />
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
                        <Calibracao />
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
                                        <Card  nome='Rondas' qtd={this.state.quantidade_de_rondas} icone='retweet' click='click'/>
                                </div>
                                <div className="col-md-4 col-sm-12" onClick={this.ExibirCalibracao}>
                                        <Card  nome='Calibração' qtd={this.state.quantidade_de_calibracoes} icone='cog' click='click'/>
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
                                <Modal iconeAbrir={<i class="fas fa-plus-circle fa-3x abrirCad "></i>}  tituloModal='Cadastrar Equipamento' />
                        </div>
                </div>

                          
        )
    }
}

export default Admin