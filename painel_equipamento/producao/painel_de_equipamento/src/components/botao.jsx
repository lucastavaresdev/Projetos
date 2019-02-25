import React, { Component } from 'react';
import './_botao.scss';
import { NavLink } from 'react-router-dom';

class Botao extends Component {

    render() {
        return (
            <div className='box-botao'>
               <i className={this.props.iconebotao}></i> <NavLink replace to={this.props.link}>{this.props.titulodobotao}</NavLink>
            </div>            
        );
    }
}

export default Botao;