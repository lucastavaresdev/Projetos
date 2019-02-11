import React, { Component } from 'react'
import Tabela from '../components/Tabelas'
import {lista_de_equipamentos} from '../Funcions'
import Acoes from '../components/acoes_tabela'

class Lista_Equipamentos extends Component {

    constructor(){
        super() 
        this.state = { 
            data: [],
        };
        this.listar = this.listar.bind(this);
    }
    
  listar() {
        lista_de_equipamentos().then(json => {
            this.setState({ data: json.data})
        })
    }

    acoes = (cell, row) => <Acoes id={row.id} nome={row.nome} serie={row.serie}  
    marca={row.marca} modelo={row.modelo} serie={row.serie} patrimonio={row.patrimonio}
    ronda={row.ronda} calibracao={row.calibracao} situacao={row.id_situacao} ativo={row.ativo} setor={row.setor}    />;

    componentDidMount(){
          this.listar()
    }
        
    componentDidUpdate(){
            document.addEventListener('submit', this.listar);
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
                    dataField: 'nome_status',
                    text: 'Status',
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
                    dataField: 'ações',
                    text: 'Ações',
                    isDummyField: true,
                    csvExport: false,
                    formatter: this.acoes,
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