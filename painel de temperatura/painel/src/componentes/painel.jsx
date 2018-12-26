import React, { Component } from 'react'
import Titulo from './navbar/navbar'
import Tabela from './tabela/tabela'
import Grafico from './graficos/graficos'
import Temperatura_Atual from './temperaturas/Temperatura_atual'
import Temperatura_media from './temperaturas/Temperatura_media'

import jwt_decode from 'jwt-decode'


 class Painel extends Component{
    
    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
    }

        render(){
              return (
                        <div >
                               <Titulo titulo={this.props.TitulodaPagina} /> 
                               <div className='container-fluid'>
                                    <div className="row bg_grafico_media">
                                        <div className='col-md-7 col-xs-12 mt-3 tamanho' >
                                            <p className='texto-branco text-center'>Temperatura</p>
                                            <Grafico />
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
