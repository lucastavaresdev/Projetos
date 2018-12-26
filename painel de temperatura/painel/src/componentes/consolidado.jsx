import React, { Component } from 'react'
import Card from './cards/card'
import Titulo from './navbar/navbar'
import './estilos_paginas/consolidado.scss'
import axios from 'axios';




class Consolidado extends Component {
  
    state = {
        cards: []
      }

      componentDidMount() {
        axios.get(`http://localhost:3001/hcor/beacons_temperatura_atual`)
          .then(res => {
            const cards = res.data;
            this.setState({ cards });
          })
      }

    render() {
        return (
            <div>
            { <Titulo titulo={'Consolidado'} /> }
                <div className='container-fluid '>
                    <div className='row mt-5'>

                    {this.state.cards.map(cards =>


                    <div className='col-lg-4 col-md-6 col-sm-12'>
                          <Card temperatura_atual={cards.temperatura.substr(0, 4)} equipamento={cards.nome_do_beacon} setor={cards.nome_setor}/> 
                    </div>)}
                     
                          
                    
                    </div>
                </div>
            </div >
        )
    }
}

export default Consolidado
