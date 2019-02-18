import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class Listar_Ronda extends Component {
  render() {
    return (
      <div className="container-fluid p-5 espaco-top">
        <h3 className="titulo_das_paginas">Relatórios</h3>

        <Tabs>
          <TabList>
            <Tab>Rondas</Tab>
            <Tab>Calibração</Tab>
          </TabList>

          <TabPanel className='bg-primary'>
                    <div className="container-fluid ">
                    dsa
                    </div>
          </TabPanel>


          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Listar_Ronda;
