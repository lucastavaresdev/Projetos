import React, { Component } from 'react'
import Tabela from './Tabelas'
import { Atrasos_tabela } from "../Funcions";



class Tabela_Rondas_Atrasadas extends Component {

    constructor() {
    super();
    this.state = {
        Atrasos_tabela: [],
    };

    }

      
    Atrasos(){
    const tabela = this.props.tabela;
    const coluna = this.props.coluna;
    
    Atrasos_tabela(tabela, coluna).then(json => {
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
          ];

          
        return (
            <Tabela
            titulo_pagina={`Atrasos`}
            colunas={columns}
            data={this.state.Atrasos_tabela}
          />
        );
    }
}

export default Tabela_Rondas_Atrasadas;