import React, { Component } from 'react'
import NavBar from './navbar/navbar'
import Tabela from './tabela/tabela'
import Grafico from './graficos/graficos'
import Temperatura_Atual from './temperaturas/Temperatura_atual'
import Temperatura_media from './temperaturas/Temperatura_media'
import './_estilos_paginas/_dashboard.scss'
import axios from "axios";

    class Dashboard extends Component{

        render(){
              return (
                        <div >
                                        { <NavBar tituloPag={this.props.TitulodaPagina}/> }
                                                <div className='container-fluid'>
                                                    <div className="row bg_grafico_media">
                                                        <div className='col-md-7 col-xs-12 mt-3 tamanho' >
                                                            <p className='texto-branco text-center'>Temperatura</p>
                                                            <Grafico />
                                                        </div>
                                                        <Temperatura_media />
                                                    </div>
                                              <div className="row mt-3">
                                                <div className='col-md-7 tamanho' >
                                                    <Tabela />
                                                </div>
                                                <Temperatura_Atual tempertatura_atual={'this.state.temp'}/>
                                            </div>
                                        </div>
                                    </div >
                      
        )
    }
}



export default Dashboard
