import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Listar_Ronda_Calibracao } from "../Funcions";
import Tabela from "../components/Tabelas";
import Relatorios from "../components/Relatorios";


class Listar_Ronda extends Component {
  constructor() {
    super();
    this.state = {
      data2: [],
    };
    this.listar = this.listar.bind(this);
  }

  listar() {
    var tabela = "rondas";
    var coluna = "ronda_ultima";

    Listar_Ronda_Calibracao(tabela, coluna).then(json => {
      console.log(json);
      this.setState({ data2: json.data });
    });
  }

  componentDidMount() {
    this.listar();
  }

  



  render() {
    const columns = [
      {
        dataField: "nome",
        text: "nome",
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
        dataField: "ronda_ultima",
        text: "ronda_ultima",
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
        text: "nome_situacoes",
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
        text: "observacao",
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
      }
    ];

    return (
      <div className="container-fluid p-5 espaco-top">
        <h3 className="titulo_das_paginas">Relatórios</h3>

        <Tabs>
          <TabList>
            <Tab>Rondas</Tab>
            <Tab>Calibração</Tab>
          </TabList>

          <TabPanel>
            

              <Relatorios tabela='rondas' coluna='ronda_ultima' titulo_grafico='Ronda' subtitulo_grafico='rondas'/>

              <Tabela
                titulo_pagina={"Listar de Rondas"}
                colunas={columns}
                data={this.state.data2}
              />
           
          </TabPanel>

          <TabPanel>
                  <Relatorios tabela='calibracoes' coluna='calibracao_ultima' titulo_grafico='Calibracao' subtitulo_grafico='calibracao'/>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Listar_Ronda;
