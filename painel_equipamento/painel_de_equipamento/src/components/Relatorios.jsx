import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Grafico_status, Ultimos_registros } from "../Funcions";
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
      Coluna_ultimos_registros: ''
    };
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
        } else {
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

  

  componentDidMount() {
    this.exibir_quantidade_de_rondas_semanais();
    this.Ultimos_registros();
  }

  render() {


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
            <div class="card card_relatorios">
              <div class="card-body ">
                <h5 class="card-title">Ultimas Rondas</h5>
                <h6 class="card-subtitle mb-2 text-muted">Status da semana</h6>
                <table class="table mt-4">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Equipamento</th>
                      <th scope="col">Ultima {this.props.titulo_grafico}</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                      
                      {this.state.Ultimos_registros.map((item, state) => (
                        <React.Fragment key={item.nome} >
                          <tr>
                            <td></td>
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
                <h5 class="card-title">Rondas Atrasadas</h5>
                <h6 class="card-subtitle mb-2 text-muted">Status da semana</h6>
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
      </div>
    );
  }
}

export default Relatorios;
