
import React, { Component } from 'react'
import Tabela from '../components/Tabelas'
import Modal_cadastro_setores from '../components/Modal_cadastro_setores'
import {Lista_Setores} from '../Funcions'

class Cadastro_setores extends Component {

    constructor(){
        super() 
        this.state = { 
            data: [],
        };
        this.listar = this.listar.bind(this);
    }
    
  listar() {
    Lista_Setores().then(json => {
            this.setState({ data: json.data})
        })
    }

   
    componentDidMount(){
          this.listar()
    }
        

    render() {
        const columns = [
               {
                    dataField: 'id',
                    text: 'id',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'nome',
                    text: 'nome',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
            ];





        return (
            <div>
                <div className="row pt-5">
                <Tabela titulo_pagina={'Cadastro de Equipamento'} colunas={columns} data={this.state.data}/>
                                <Modal_cadastro_setores iconeAbrir={<i class="fas fa-plus-circle fa-3x"></i>}  tituloModal='Cadastrar Setor' />
                        </div>
                </div>

        );
    }
}

export default Cadastro_setores;