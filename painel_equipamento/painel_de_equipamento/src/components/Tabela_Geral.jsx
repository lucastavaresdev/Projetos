import React, { Component } from 'react'
import Tabela from './Tabelas'
import { Listar_Ronda_Calibracao } from "../Funcions";



class Tabela_Geral extends Component {
    constructor() {
        super();
        this.state = {
          data2: [],
        };
        this.listar = this.Listar.bind(this);
      }
    
    
      Listar() {
        const tabela = this.props.tabela;
        const coluna = this.props.coluna;
        Listar_Ronda_Calibracao(tabela, coluna).then(json => {
          this.setState({ data2: json.data });
        });
      }
    
      componentDidMount() {
        this.Listar();
      }
    
    render() {
        const colunas_gerais = [
            {
              dataField: "nome",
              text: "Nome",
              sort: true,
              sortCaret: (order, column) => {
                if (!order)
                  return (
                    <span>
                      <i className="setas fas fa-chevron-up" />
                    </span>
                  );
                else if (order === "asc")
                  return (
                    <span>
                      <i className="setas fas fa-chevron-up" />
                    </span>
                  );
                else if (order === "desc")
                  return (
                    <span>
                      <i className="setas fas fa-chevron-down" />
                    </span>
                  );
                return null;
              }
            },
            {
              dataField: "data_ultima",
              text: "Data",
              sort: true,
              sortCaret: (order, column) => {
                if (!order)
                  return (
                    <span>
                      <i className="setas fas fa-chevron-up" />
                    </span>
                  );
                else if (order === "asc")
                  return (
                    <span>
                      <i className="setas fas fa-chevron-up" />
                    </span>
                  );
                else if (order === "desc")
                  return (
                    <span>
                      <i className="setas fas fa-chevron-down" />
                    </span>
                  );
                return null;
              }
            },
            {
              dataField: "nome_situacoes",
              text: "Status",
              sort: true,
              sortCaret: (order, column) => {
                if (!order)
                  return (
                    <span>
                      <i className="setas fas fa-chevron-up" />
                    </span>
                  );
                else if (order === "asc")
                  return (
                    <span>
                      <i className="setas fas fa-chevron-up" />
                    </span>
                  );
                else if (order === "desc")
                  return (
                    <span>
                      <i className="setas fas fa-chevron-down" />
                    </span>
                  );
                return null;
              }
            },
            {
              dataField: "observacao",
              text: "Observacao",
              sort: true,
              sortCaret: (order, column) => {
                if (!order)
                  return (
                    <span>
                      <i className="setas fas fa-chevron-up" />
                    </span>
                  );
                else if (order === "asc")
                  return (
                    <span>
                      <i className="setas fas fa-chevron-up" />
                    </span>
                  );
                else if (order === "desc")
                  return (
                    <span>
                      <i className="setas fas fa-chevron-down" />
                    </span>
                  );
                return null;
              }
            },
          ];

        return (
               <Tabela
                titulo_pagina={`Lista de todas as ${this.props.titulo}`}
                colunas={colunas_gerais}
                data={this.state.data2}
              /> 
        );
    }
}

export default Tabela_Geral;