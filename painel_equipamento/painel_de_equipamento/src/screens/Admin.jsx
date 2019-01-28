import React , {Component}from 'react';
import './scss/_Admin.scss'
import '../components/_card.scss'
import Card from '../components/card'
import { quantidade_de_equipamento } from '../Funcions'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];

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

        equipamentos = (param) => {
                console.log(param);
        }

        

     componentDidMount(){
        document.querySelector('.screens').style.display = 'block';
        this.exibir_quantidade_de_equipamento()
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
                                <div className="col-md-4 col-sm-12"  onClick={this.equipamentos('Equipamento')}>
                                        <Card  nome='Equipamentos' qtd={this.state.quantidade_de_equipamento} icone='tools' click='click'/>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                        <Card  nome='Rondas' qtd={this.state.em_manutencao} icone='retweet'/>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                        <Card  nome='Calibração' qtd={this.state.varificados} icone='cog'/>
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






                                                                        {/* <ResponsiveContainer aspect={1.5}>
                                                                                <LineChart data={data}>
                                                                                <XAxis dataKey="name"/>
                                                                                <YAxis/>
                                                                                <CartesianGrid strokeDasharray="3 3"/>
                                                                                <Tooltip/>
                                                                                <Legend />
                                                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                                                                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                                                                </LineChart>
                                                                        </ResponsiveContainer> */}
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