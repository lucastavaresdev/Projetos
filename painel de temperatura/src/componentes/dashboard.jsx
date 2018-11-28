import React, { Component } from 'react'
import NavBar from './navbar/navbar'
import Tabela from './tabela/tabela'
import Grafico from './graficos/graficos'
import Temperatura_Atual from './temperaturas/Temperatura_atual'
import './_estilos_paginas/_dashboard.scss'


class Dashboard extends Component {
    render() {
        return (
            <div >
                <NavBar tituloPag={'Dashboard'} />
                <div className='container-fluid'>
                    <div className="row bg_grafico_media">

                        <div className='col-md-7 col-xs-12 mt-3 tamanho' >
                            <p class='texto-branco text-center'>Temperatura</p>
                            <Grafico />
                        </div>

                        <div className='col-md-5 col-xs-12 mt-3 tamanho text-white text-center' >
                            <p className='mt-5'>Temperatura Média</p>
                            <h1 className='titulo_temperatura_media'>23°C</h1>
                        </div>

                    </div>
                    <div className="row mt-3">

                        <div className='col-md-7 tamanho' >
                            <Tabela />
                        </div>

                                <Temperatura_Atual/>
                    </div>
                </div>
            </div >
        )
    }
}

export default Dashboard
