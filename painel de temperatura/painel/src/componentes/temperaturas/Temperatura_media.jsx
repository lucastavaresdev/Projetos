import React , {Component } from 'react';


class Temperatura_Atual extends Component {
    render(){
        return(
            <div className='col-md-5 col-xs-12 mt-3 tamanho text-white text-center' >
                <p className='mt-5'>Temperatura Média do dia</p>
                <h1 className='titulo_temperatura_media'>23°C</h1>
            </div>
        )
    }
}

export default Temperatura_Atual;

