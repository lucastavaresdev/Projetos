import React, { Component } from "react";
import "./scss/Ronda_Calibracao.scss";
import Card_Ronda_Calibracao from "../components/Card_Ronda_Calibracao";

class Ronda_Calibracao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_equipamento: "",
      ronda: "",
      calibracao: ""
    };
  }

  componentDidMount() {
    this.pegar_id_do_equipamento();
  }

  pegar_id_do_equipamento() {
    try {
      this.setState({
        id_equipamento: this.props.location.query.idx,
        ronda: this.props.location.query.ronda,
        calibracao: this.props.location.query.calibracao
      });
    } catch {
      window.location.href = "http://itechflow.cloudapp.net/demos/painel_equipamento/#/listarequipamentos";
    }
  }

  tipo_de_formulario_ira_aprentar_para_atualizar() {
    const ronda = this.state.ronda;
    const calibracao = this.state.calibracao;

    if (ronda && calibracao === 0) {
      return (
        <Card_Ronda_Calibracao
          id_do_equipamento_selecionado={this.state.id_equipamento}
          nome_do_campo={"Ronda"}
          tabela_no_banco={"rondas"}
          coluna_no_banco={"ronda_ultima"}
        />
      );
    } else if (calibracao && ronda === 0) {
      console.log("Calibracao");
      return (
        <Card_Ronda_Calibracao
          id_do_equipamento_selecionado={this.state.id_equipamento}
          nome_do_campo={"Calibracao"}
          tabela_no_banco={"calibracoes"}
          coluna_no_banco={"calibracao_ultima"}
        />
      );
    } else if (
      calibracao === ronda ||
      (calibracao !== 0 && ronda !== 0 && calibracao !== 0)
    ) {
      return (
        <div className="row">
          <Card_Ronda_Calibracao
            id_do_equipamento_selecionado={this.state.id_equipamento}
            nome_do_campo={"Ronda"}
            tabela_no_banco={"rondas"}
            coluna_no_banco={"ronda_ultima"}
            reflesh_ronda={1}
          />
          <Card_Ronda_Calibracao
            id_do_equipamento_selecionado={this.state.id_equipamento}
            nome_do_campo={"Calibracao"}
            tabela_no_banco={"calibracoes"}
            coluna_no_banco={"calibracao_ultima"}
            reflesh_calibracao={1}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div class="container  pt-20">
          <div class="row btn_voltar">
            {this.tipo_de_formulario_ira_aprentar_para_atualizar()}
          </div>
        </div>
      </div>
    );
  }
}

export default Ronda_Calibracao;
