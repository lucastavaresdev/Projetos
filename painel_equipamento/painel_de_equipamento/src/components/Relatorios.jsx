import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Grafico_status, Ultimos_registros, Atrasos, Listar_Ronda_Calibracao } from "../Funcions";
import Tabela from "../components/Tabelas";
import "./_relatorios.scss";

const options = {
  legend: {
    position: "bottom"
  }
};

class Relatorios extends Component {
  constructor() {
    super();
    this.state = {
      quantidade_de_rondas_semanais: {},
      Ultimos_registros: [],
      Atrasos: [],
      Coluna_ultimos_registros: '',
      Listar_Ronda_Calibracao: '',
      data2: [],
      
    };
    this.listar = this.listar.bind(this);
  }


  listar() {
    const tabela = this.props.tabela;
    const coluna = this.props.coluna;
    Listar_Ronda_Calibracao(tabela, coluna).then(json => {
      this.setState({ data2: json.data });
    });
  }

  exibir_quantidade_de_rondas_semanais() {
    const tabela = this.props.tabela;
    const coluna = this.props.coluna;

    Grafico_status(tabela, coluna).then(json => {
      const rondajson = json.data;
      let data = [];
      let labels = [];

      rondajson.forEach(element => {
        if (element.qtd !== 0) {
          element.nome !== null
            ? labels.push(element.nome_situacoes)
            : labels.push("Setor não informado");
          data.push(element.qtd);
        } 
      });

      this.setState({
        quantidade_de_rondas_semanais: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#3D92B2",
                "#D9CDC7",
                "#1D3775",
                "#43005A",
                "#36A2EB"
              ],
              hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#3D92B2",
                "#D9CDC7",
                "#1D3775",
                "#43005A",
                "#36A2EB"
              ]
            }
          ]
        }
      });
    });
  }

  Ultimos_registros() {
    const tabela = this.props.tabela;
    const coluna = this.props.coluna;
   
    Ultimos_registros(tabela, coluna).then(json => {
      this.setState({
        Ultimos_registros: json.data,
      });
    });
    
  }
  
  Atrasos(){
    const tabela = this.props.tabela;
    const coluna = this.props.coluna;
    
    Atrasos(tabela, coluna).then(json => {
        this.setState({
          Atrasos: json.data,
        });
      })
  }

  numeros_para_positivo(numero){
    const  x = numero;
          return x * -1;
  }

  componentDidMount() {
    this.exibir_quantidade_de_rondas_semanais();
    this.Ultimos_registros();
    this.Atrasos();
    this.listar();
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
        dataField: `data_ultima`,
        text: `Ultima ${this.props.titulo_grafico}`,
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
      },

    ];
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  Status de {this.props.titulo_grafico}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Dados dos Ultimos 7 dias de {this.props.subtitulo_grafico}
                </h6>
              </div>
              <div className="mb-4">
                {Object.keys(this.state.quantidade_de_rondas_semanais)
                  .length && (
                  <Doughnut
                    data={this.state.quantidade_de_rondas_semanais}
                    options={options}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="col-md-4">
                  <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Ultimas Rondas</h5>
                        <h6 class="card-subtitle mb-2 text-muted">5 Ultimas rondas realizadas</h6>
                    </div>
                    <div className='tamanho_cards' >
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Equipamento</th>
                            <th scope="col">Data</th>
                          </tr>
                        </thead>
                        <tbody>
                
                                       
                        {this.state.Ultimos_registros.map((item, state) => (
                            <React.Fragment key={item.nome} >
                                <tr>
                                  <td>{item.nome}</td>
                                  <td>{item.ronda_ultima}{item.calibracao_ultima}</td>
                                </tr>
                              </React.Fragment>
                          ))}
                        
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>



                <div className="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">{this.props.titulo_grafico} Atrasadas</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{this.props.titulo_grafico} não realizadas </h6>
                    </div>
                    <div className='tamanho_cards'>
                      <table class="table">
                        <thead >
                          <tr>
                            <th scope="col">Status</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Dias Atrasados</th>
                          </tr>
                        </thead>
                        <tbody >
                
                        {this.state.Atrasos.map((item) => (
                              <React.Fragment key={item.nome} >
                                <tr>
                                  <td>{item.nome}</td>
                                  <td>{item.data_qtd_de_dias}</td>
                                  <td>
                                        {this.numeros_para_positivo(item.data_qtd_de_dias_atraso)}   
                                  </td>
                                </tr>
                              </React.Fragment>
                            ))}
                        
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
         
                <Tabela
                titulo_pagina={`Listar de ${    this.props.titulo_grafico}`}
                colunas={columns}
                data={this.state.data2}
              />

        </div>
      </div>
    );
  }
}

export default Relatorios;
