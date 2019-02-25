import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Relatorios from "../components/Relatorios";


class Listar_Ronda extends Component {
  constructor() {
    super();
    this.state = {
      Ultimos_registros: [],
    };
  }

  render() {
    return (
      <div className="container-fluid p-5 espaco-top">
        <h3 className="titulo_das_paginas">Relatórios</h3>

        <Tabs>
          <TabList>
            <Tab>Rondas</Tab>
            <Tab>Calibração</Tab>
          </TabList>

          <TabPanel>
              <Relatorios tabela='rondas' coluna='ronda_ultima' titulo_grafico='Ronda' subtitulo_grafico='rondas'  />
      
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
