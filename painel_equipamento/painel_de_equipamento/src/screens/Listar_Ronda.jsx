import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Listar_Ronda_Calibracao } from "../Funcions";
import Tabela from "../components/Tabelas";
import { Doughnut } from "react-chartjs-2";

class Listar_Ronda extends Component {
  constructor() {
    super();
    this.state = {
      data2: [],
      data: {
        labels: ["Red", "Green", "Yellow"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
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

    this.timer = setInterval(() => this.increment(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  increment() {
    const datasetsCopy = this.state.data.datasets.slice(0);
    const dataCopy = datasetsCopy[0].data.slice(0);
    dataCopy[0] = dataCopy[0] + 10;
    datasetsCopy[0].data = dataCopy;

    this.setState({
      data: Object.assign({}, this.state.data, {
        datasets: datasetsCopy
      })
    });
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
            <div className="container-fluid ">
              <div className="row">
                    <div className="col-md-4">
                              <div class="card">
                                            <div class="card-body">
                                              <h5 class="card-title">Status</h5>
                                              <h6 class="card-subtitle mb-2 text-muted">
                                                Status da semana
                                              </h6>
                                            </div>
                                          <div className="mb-4">
                                            <Doughnut data={this.state.data} />
                                          </div>
                              </div>
                    </div>
                    <div className="col-md-4">
                              <div class="card">
                                            <div class="card-body">
                                              <h5 class="card-title">Ultimas Rondas</h5>
                                              <h6 class="card-subtitle mb-2 text-muted">
                                                Status da semana
                                              </h6>
                                            </div>
                                          <div >
                                          <table class="table">
                                              <thead>
                                                <tr>
                                                  <th scope="col">#</th>
                                                  <th scope="col">First</th>
                                                  <th scope="col">Last</th>
                                                  <th scope="col">Handle</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <th scope="row">1</th>
                                                  <td>Mark</td>
                                                  <td>Otto</td>
                                                  <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                  <th scope="row">2</th>
                                                  <td>Jacob</td>
                                                  <td>Thornton</td>
                                                  <td>@fat</td>
                                                </tr>
                                                <tr>
                                                  <th scope="row">3</th>
                                                  <td>Larry</td>
                                                  <td>the Bird</td>
                                                  <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                  <th scope="row">4</th>
                                                  <td>Larry</td>
                                                  <td>the Bird</td>
                                                  <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                  <th scope="row">5</th>
                                                  <td>Larry</td>
                                                  <td>the Bird</td>
                                                  <td>@twitter</td>
                                                </tr>
                                              </tbody>
                                            </table>

                                          </div>
                              </div>
                    </div>
                    <div className="col-md-4">
                              <div class="card">
                                            <div class="card-body">
                                              <h5 class="card-title">Rondas Atrasadas</h5>
                                              <h6 class="card-subtitle mb-2 text-muted">
                                                Status da semana
                                              </h6>

                                              
                                            </div>
                                          <div>
                                          <table class="table">
                                              <thead>
                                                <tr>
                                                  <th scope="col">#</th>
                                                  <th scope="col">Status</th>
                                                  <th scope="col">Quantidade</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <th scope="row">1</th>
                                                  <td>Mark</td>
                                                  <td>Otto</td>
                                                </tr>
                                                <tr>
                                                  <th scope="row">2</th>
                                                  <td>Jacob</td>
                                                  <td>Thornton</td>
                                                </tr>
                                                <tr>
                                                  <th scope="row">3</th>
                                                  <td>Larry</td>
                                                  <td>the Bird</td>
                                                </tr>
                                                
                                              </tbody>
                                            </table>
                                          </div>
                              </div>
                    </div>
              </div>






              <Tabela
                titulo_pagina={"Listar de Rondas"}
                colunas={columns}
                data={this.state.data2}
              />
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
