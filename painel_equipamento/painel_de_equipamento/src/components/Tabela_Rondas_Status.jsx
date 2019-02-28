import React, { Component } from 'react'
import Tabela from './Tabelas'
import { Status_equipamentos } from "../Funcions";



class Tabela_Rondas_Status extends Component {

    constructor() {
    super();
    this.state = {
        Atrasos_tabela: [],
    };

    }

      
    Atrasos(){
    const tabela = this.props.tabela;
    const coluna = this.props.coluna;
    
    Status_equipamentos(tabela, coluna).then(json => {
        this.setState({
          Atrasos_tabela: json.data,
        });
      })
  }

  componentDidMount() {
    this.Atrasos();
  }

    render() {

        const columns = [
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
              dataField: "reg_recente",
              text: "Registro",
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
              dataField: "data_qtd_de_dias",
              text: "Data de Vencimento",
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
              dataField: "status",
              text: "Situação Atual",
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
            titulo_pagina={`Status de cada ${this.props.titulo}`}
            colunas={columns}
            data={this.state.Atrasos_tabela}
          />
        );
    }
}

export default Tabela_Rondas_Status;