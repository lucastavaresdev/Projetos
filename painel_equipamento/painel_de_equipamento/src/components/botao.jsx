import React, { Component } from 'react';
import './_botao.scss';

class Botao extends Component {

    render() {
        return (
            <div className='box-botao'>
               <i class={this.props.iconebotao}></i> <buttom href="#">{this.props.titulodobotao}</buttom>
            </div>            
        );
    }
}

export default Botao;