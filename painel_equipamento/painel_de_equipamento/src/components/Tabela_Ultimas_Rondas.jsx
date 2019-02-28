import React, { Component } from 'react'
import Tabela from './Tabelas'
import { Ultimos_registros_lista } from "../Funcions";



class Tabela_Ultimas_Rondas extends Component {
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
        Ultimos_registros_lista(tabela, coluna).then(json => {
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
              dataField: "datas",
              text: "Data ultima verificação",
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
          ];

        return (
               <Tabela
                titulo_pagina={`Lista de status de cada equipamento `}
                colunas={colunas_gerais}
                data={this.state.data2}
              /> 
        );
    }
}

export default Tabela_Ultimas_Rondas;