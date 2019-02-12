
import React, { Component } from 'react'
import Tabela from '../components/Tabelas'
import Modal_cadastro_setores from '../components/Modal_cadastro_setores'
import {Lista_Setores} from '../Funcions'
import Acoes from '../components/acoes_tabela'

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

    acoes = (cell, row) => <Acoes  tipo_de_modal={1} id={row.id} nome={row.nome}  sigla={row.sigla} andar={row.andar} capacidade={row.capacidade}  permanencia={row.permanencia}
    tracking={row.tracking} ativo={row.ativo} atendimentos={row.atendimentos} tabela_que_ira_ocultar={'setores'}/>;

   
    componentDidMount(){
          this.listar()
    }
        

    render() {
        const columns = [
               {
                    dataField: 'id',
                    text: 'Id',
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
                    text: 'Nome',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'sigla',
                    text: 'Sigla',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'andar',
                    text: 'Andar',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'capacidade',
                    text: 'Capacidade',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'permanencia',
                    text: 'Permanencia',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                },
               {
                    dataField: 'tracking',
                    text: 'Tracking',
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
                    dataField: 'atendimentos',
                    text: 'Atendimentos',
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
                <div className="row pt-5">
                <Tabela titulo_pagina={'Cadastro de Equipamento'} colunas={columns} data={this.state.data}/>
                                <Modal_cadastro_setores iconeAbrir={<i class="fas fa-plus-circle fa-3x"></i>}  tituloModal='Cadastrar Setor' />
                        </div>
                </div>

        );
    }
}

export default Cadastro_setores;