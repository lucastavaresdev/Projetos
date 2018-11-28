import React, { Component } from 'react'
import NavBar from './navbar/navbar'
import Tabela from './tabela/tabela'
import Grafico from './graficos/graficos'
import Temperatura_Atual from './temperaturas/Temperatura_atual'
import Temperatura_media from './temperaturas/Temperatura_media'
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
                                <Temperatura_media />
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
