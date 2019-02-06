import React, { Component } from 'react'
import Tabela from '../components/Tabelas'
import {lista_de_equipamentos} from '../Funcions'

class Lista_Equipamentos extends Component {

    constructor(){
        super() 
        this.state = { data: [] };
    }
    
    listar() {
        lista_de_equipamentos().then(json => {
            this.setState({ data: json.data})
        })
    }
    
    componentDidMount(){
          this.listar()
          this.interval = setInterval(() => {
            this.listar();
        }, 50000 );
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
               {
                    dataField: 'marca',
                    text: 'marca',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'modelo',
                    text: 'modelo',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'serie',
                    text: 'serie',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'patrimonio',
                    text: 'patrimonio',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'ronda',
                    text: 'ronda',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'calibracao',
                    text: 'calibracao',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'situacao',
                    text: 'situacao',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'ativo',
                    text: 'ativo',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'setor',
                    text: 'setor',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'icon',
                    text: 'icon',
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
                <Tabela titulo_pagina={'Listar Equipamentos'} colunas={columns} data={this.state.data}/>
            </div>
        );
    }
}

export default Lista_Equipamentos;