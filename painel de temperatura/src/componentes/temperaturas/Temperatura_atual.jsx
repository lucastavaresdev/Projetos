import React , {Component } from 'react';


class Temperatura_Atual extends Component {
    render(){
        return(
            <div className='col-md-5 tamanho text-center' >
                    <h1 className='mt-5 '>Temperatura Atual</h1>
                    <h1 className='titulo_temperatura_atual p-1'>23°C</h1>
            </div>
        )
    }
}

export default Temperatura_Atual;

