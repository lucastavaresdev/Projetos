import React, { Component } from 'react'
import Card from './cards/card'
import Titulo from './navbar/navbar'
import './estilos_paginas/consolidado.scss'

class Consolidado extends Component {

    render() {
        return (
            <div>
            { <Titulo titulo={'Consolidado'} /> }
                <div className='container-fluid '>
                    <div className='row mt-5'>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <Card />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <Card />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <Card />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Consolidado
