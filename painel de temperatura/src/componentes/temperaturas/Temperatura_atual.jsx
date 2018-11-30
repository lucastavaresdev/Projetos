import React , {Component } from 'react';
import axios from 'axios'




class Temperatura_Atual extends Component {
    render(){
        return(
            <div className='col-md-5 tamanho text-center' >
                    <h1 className='mt-5 '>Temperatura Atual</h1>
                    <h1 className='titulo_temperatura_atual p-1'>{this.props.tempertatura_atual}</h1>
            </div>
        )
    }
}

export default Temperatura_Atual;

