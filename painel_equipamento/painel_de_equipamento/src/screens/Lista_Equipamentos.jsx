import React, { Component } from 'react'
import Tabela from '../components/Tabelas'
import {tracking_equipamentos} from '../Funcions'

class Lista_Equipamentos extends Component {

    constructor(){
        super() 
        this.state = { data: [] };
    }
    
    listar() {
        tracking_equipamentos().then(json => {
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
                dataField: 'nome',
                text: 'teste',
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
                    text: 'Localizacao',
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span><i className="setas fas fa-chevron-up"></i></span>);
                        else if (order === 'asc') return (<span><i className="setas fas fa-chevron-up"></i></span>);
                            else if (order === 'desc') return (<span><i className="setas fas fa-chevron-down"></i></span>);
                            return null;
                     }
                }
            ];

            const expandRow = {
                renderer: row => (
                  <div>
                        <h1>teste</h1>
                  </div>
                ),
                showExpandColumn: true,
                expandColumnPosition: 'right',
                expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                  if (isAnyExpands) {
                    return <b>-</b>;
                  }
                  return <b>+</b>;
                },
                expandColumnRenderer: ({ expanded }) => {
                  if (expanded) {
                    return (
                      <b><i className="fas fa-chevron-up"></i></b>
                    );
                  }
                  return (
                    <b><i className="fas fa-chevron-down"></i></b>
                  );
                }
              };  


        return (
            <div>
                <Tabela titulo_pagina={'Listar Equipamentos'} colunas={columns} dados_extras={expandRow} data={this.state.data}/>
            </div>
        );
    }
}

export default Lista_Equipamentos;