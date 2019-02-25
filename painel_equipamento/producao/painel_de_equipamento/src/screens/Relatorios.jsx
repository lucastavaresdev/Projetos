import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Relatorios from "../components/Relatorios";


class Relatorios_pagina extends Component {
  constructor() {
    super();
    this.state = {
      Ultimos_registros: [],
    };
  }

  render() {
    return (
      <div className="container-fluid p-5 espaco-top">

        <Tabs>
        <h3 className="titulo_das_paginas espaco-top mt-5">Relatórios</h3>
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

export default Relatorios_pagina;
