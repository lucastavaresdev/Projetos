import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { quantidade_de_calibracoes } from "../Funcions";

const options = {
  legend: {
    position: "bottom"
  }
};

class Calibracao extends Component {
  constructor() {
    super();
    this.state = {
      quantidade_de_calibracoes: {}
    };
  }

  exibir_quantidade_de_calibracoes() {
    quantidade_de_calibracoes().then(json => {
      const equipamentojson = json.data;
      let labels = [];
      let data = [];

      equipamentojson.forEach(element => {
        labels.push(element.nome_situacoes);
        data.push(element.quantidade);
      });

      this.setState({
        quantidade_de_calibracoes: {
          datasets: [
            {
              label: labels[0],
              data: [data[0]],
              backgroundColor: "#FF6384",
              borderWidth: 1
            },
            {
              label: labels[1],
              data: [data[1]],
              backgroundColor: "#36A2EB",
              borderWidth: 1
            },
            {
              label: labels[2],
              data: [data[2]],
              backgroundColor: "#FFCE56",
              borderWidth: 1
            },
            {
              label: labels[3],
              data: [data[3]],
              backgroundColor: "#3D92B2",
              borderWidth: 1
            },
            {
              label: labels[4],
              data: [data[4]],
              backgroundColor: "#D9CDC7",
              borderWidth: 1
            },
            {
              label: labels[5],
              data: [data[5]],
              backgroundColor: "#1D3775",
              borderWidth: 1
            },
            {
              label: labels[6],
              data: [data[6]],
              backgroundColor: "#43005A",
              borderWidth: 1
            },
            {
              label: labels[7],
              data: [data[7]],
              backgroundColor: "#36A2EB",
              borderWidth: 1
            }
          ]
        }
      });
    });
  }

  componentDidMount() {
    this.exibir_quantidade_de_calibracoes();
  }

  render() {
    return (
      <div>
        <div>
          <p>Calibração</p>
          {Object.keys(this.state.quantidade_de_calibracoes) && (
            <Bar
              data={this.state.quantidade_de_calibracoes}
              options={options}
              height={300}
              width={1000}
              maintainAspectRatio={false}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Calibracao;
