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
                        varificados  : 0
                };
        }

        exibir_quantidade_de_equipamento() {
                quantidade_de_equipamento().then(json => {
                        console.log(json.data[0]);
                        this.setState({ quantidade_de_equipamento: json.data[0].quantidade_de_equipamentos})
                })
        }

     componentDidMount(){
        document.querySelector('.screens').style.display = 'block';
        this.exibir_quantidade_de_equipamento()
      }

    render () {
        return (
                <div>   
                        <div className="container-fluid">
                                <div className="row ">
                                        <div className="col-md-12">
                                        <h1 className='mt-70 titulo_das_paginas titulo_left '>Dashboard</h1>
                                        </div>
                                </div>
                                <div className="row mt-2">
                                        <div className="col-md-4 col-sm-12">
                                              <Card  nome='Equipamentos' qtd={this.state.quantidade_de_equipamento} icone='tools'/>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                              <Card  nome='Em manutenção' qtd={this.state.em_manutencao} icone='exclamation-triangle'/>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                              <Card  nome='Total de Verificados' qtd={this.state.varificados} icone='check'/>
                                        </div>
                                </div>
                        </div>
                </div>
        )
    }
}

export default Admin