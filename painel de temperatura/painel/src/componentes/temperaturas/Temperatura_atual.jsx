import React , {Component } from 'react';
import axios from 'axios'



class Temperatura_Atual extends Component {
    


    render(){
        return(
            <div className='col-md-5 tamanho text-center' >
                    <h1 className='mt-5 '>Temperatura Atual</h1>
                    <h3 className='titulo_temperatura_atual p-1'>21C</h3>
            </div>
        )
    }
}

export default Temperatura_Atual;

