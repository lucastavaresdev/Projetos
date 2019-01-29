import React , {Component}from 'react';
import './scss/_Admin.scss'
import '../components/_card.scss'
import Card from '../components/card'
import { quantidade_de_equipamento } from '../Funcions'


      
class Admin extends Component {
        constructor(){
                super()
                this.state = { 
                        quantidade_de_equipamento  : 0,
                        em_manutencao  : 0,
                        varificados  : 0,
                        equipamento_visivel: false,
                        ronda_visivel: false,
                        calibracao_visivel: false
                };
        }

        componentDidMount(){
                document.querySelector('.screens').style.display = 'block';
                this.exibir_quantidade_de_equipamento()
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
                <h1>Equipamentos</h1>
                );
        }

        ComponenteRonda = () => {
                if (!this.state.ronda_visivel) return null;
                return (
                        <h1>Ronda</h1>
                );
        }
                
        ComponenteCalibracao = () => {
                if (!this.state.calibracao_visivel) return null;
                return (
                        <h1>Calibração</h1>
                );
        }
                

      render () {
        return (
                <div className="container-fluid">
                        <div className="row ">
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
                                        <div className="col-md-11 titulo_left  box-card">
                                                <div class="card">
                                                        <div class="card-body">
                                                                <h5 class="card-title">Equipamentos verificados</h5>
                                                        </div>
                                                        <div className="row pt-5">
                                                                <div className="col-md-5">
                                                                {this.ComponenteCalibracao()}
                                                                {this.ComponenteEquipamentos()}
                                                                {this.ComponenteRonda()}
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                </div>
        )
    }
}

export default Admin