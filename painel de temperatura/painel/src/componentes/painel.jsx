import React, { Component } from 'react'
import Titulo from './navbar/navbar'
import Tabela from './tabela/tabela'
import './estilos_paginas/painel.scss'
import jwt_decode from 'jwt-decode'
import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';


 class Painel extends Component{

    state = {
        temperatura: [{ name: '0', graus: 0 }],
        temperaturaAtual: 0,
        temperaturaCidade: []
    }

    
    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        
        //axios
        
        axios.get(`http://localhost:3001/umdi/temperatura_media_hora/${this.props.mac}`)
        .then(res => {
            this.setState({ temperatura : res.data });
        })

        this.tempertaturaAtual();
        this.tempertaturaCidade();
        
        this.interval = setInterval(() => {
          this.tempertaturaAtual();
        }, 5000);


      
          this.tempertaturaCidade();
    }

        //o acesso a api esta no email suporte
        tempertaturaCidade()  {
        axios.get(`http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token=bd9733ed4b32e51e5761a078d552770c`)
            .then(res => {
                this.setState({ temperaturaCidade : res.data.data });
            })
        }
        
        tempertaturaAtual()  {
            axios.get(`http://localhost:3001/umdi/temperatura_atual/${this.props.mac}`)
            .then(res => {
                    this.setState({ temperaturaAtual : res.data[0].temperatura });
            })
        }
    

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render(){
              return (
                        <div >
                               <Titulo titulo={this.props.TitulodaPagina} /> 
                               <div className='container-fluid'>
                                    <div className="row bg_grafico_media">
                                        <div className='col-md-7 col-xs-12 mt-3 tamanho' >
                                            <p className='texto-branco text-center'>Temperatura</p>
                                                    <ResponsiveContainer width="100%" height="80%">
                                                        <LineChart width={730} height={250} data={this.state.temperatura}>
                                                            <XAxis dataKey="name" stroke="#ffffff" />
                                                            <YAxis stroke="#ffffff" />
                                                            <Tooltip />
                                                            <Legend />
                                                            <Line type="monotone" dataKey="graus" stroke="#ffffff" />
                                                        </LineChart>
                                                    </ResponsiveContainer>
                                        </div>


                                        <div className='col-md-5 col-xs-12 mt-3 tamanho text-white text-center' >
                                                <p className='mt-5'>Temperatura diaria</p>
                                                {console.log(this.state.temperaturaCidade)}
                                                <h1 className='titulo_temperatura_media'>{this.state.temperaturaCidade.temperature} °C</h1>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <p>Sensação</p>
                                                        <p>{this.state.temperaturaCidade.sensation}</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <p>Umidade </p>
                                                        <p>{this.state.temperaturaCidade.humidity}</p>
                                                    </div>
                                                    <div className="col-4">
                                                                <div className={'a'+ this.state.temperaturaCidade.icon}></div>
                                                       </div>
                                                </div>
                                            </div>
                                        </div>


                                    <div className='container-fluid'>
                                    </div>
                                    <div className="row mt-3">
                                        <div className='col-md-7 tamanho' >
                                                <Tabela macpage={this.props.mac}/>
                                        </div>   
                                        <div className='col-md-5 text-center tempertatura_Atual' >
                                            <h1 className='mt-5 '>Temperatura Atual</h1>
                                                <h3 className=' p-3'>{this.state.temperaturaAtual}</h3>
                                            </div>
                                    </div>
                               </div>
                        </div >
        )
    }
}


export default Painel
