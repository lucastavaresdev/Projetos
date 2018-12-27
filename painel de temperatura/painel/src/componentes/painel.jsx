import React, { Component } from 'react'
import Titulo from './navbar/navbar'
import Tabela from './tabela/tabela'
import Temperatura_Atual from './temperaturas/Temperatura_atual'
import Temperatura_media from './temperaturas/Temperatura_media'

import jwt_decode from 'jwt-decode'


import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';


 class Painel extends Component{

    state = {
        temperatura: 
            [
                { name: '0h', graus: 5 },
                { name: '1h', graus: 5 },
                { name: '0h', graus: 5 },
                { name: '1h', graus: 5 },
          ]
        }

    
    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

        //axios

        axios.get(`http://localhost:3001/umdi/temperatura_media_hora/${this.props.mac}`)
        .then(res => {
          const temperatura = res.data;
          console.log(temperatura)
          this.setState({ temperatura : res.data });
        })
        

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
                                        {/* <Temperatura_media /> */}
                                    </div>
                                    <div className="row mt-3">
                                        <div className='col-md-7 tamanho' >
                                            {/* <Tabela /> */}
                                        </div>
                                        {/* <Temperatura_Atual tempertatura_atual={this.props.mac} temperatura={this.props.temperatura}/> */}
                                    </div>
                               </div>
                        </div >
        )
    }
}


export default Painel
