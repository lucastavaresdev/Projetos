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
        nome: this.props.location.query.nome,
        id_equipamento: this.props.location.query.idx,
        ronda: this.props.location.query.ronda,
        calibracao: this.props.location.query.calibracao
      });
    } catch {
      window.location.href = "/listarequipamentos";
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
          titulo_nome_do_campo={"Cadastrar Ronda"}
          tabela_no_banco={"rondas"}
          coluna_no_banco={"ronda_ultima"}
          />
      );
    } else if (calibracao && ronda === 0) {
      return (
       
        <Card_Ronda_Calibracao
          id_do_equipamento_selecionado={this.state.id_equipamento}
          nome_do_campo={"Calibracao"}
          titulo_nome_do_campo={"Cadastrar Calibração"}
          tabela_no_banco={"calibracoes"}
          coluna_no_banco={"calibracao_ultima"}
        />
      );
    } else if (
      calibracao === ronda ||
      (calibracao !== 0 && ronda !== 0 && calibracao !== 0)
    ) {
      return (
        <div>
          <div className="row justify-content-center pb-3">
            <div className="col-md-12 text-center">
              <h4>Cadastrar Calibração e Ronda </h4>
            </div>
            <div className="col-md-12 text-center">
              <p> {this.state.nome}</p>
            </div>
          </div>

        <div className="row">
            <Card_Ronda_Calibracao
              id_do_equipamento_selecionado={this.state.id_equipamento}
              nome_do_campo={"Ronda"}
              titulo_nome_do_campo={"Ronda"}
              tabela_no_banco={"rondas"}
              coluna_no_banco={"ronda_ultima"}
              reflesh_ronda={1}
            />
            <Card_Ronda_Calibracao
              id_do_equipamento_selecionado={this.state.id_equipamento}
              nome_do_campo={"Calibracao"}
              titulo_nome_do_campo={"Calibração"}
              tabela_no_banco={"calibracoes"}
              coluna_no_banco={"calibracao_ultima"}
              reflesh_calibracao={1}
            />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="container  pt-20">
          <div className="row btn_voltar">
            {this.tipo_de_formulario_ira_aprentar_para_atualizar()}
          </div>
        </div>
      </div>
    );
  }
}

export default Ronda_Calibracao;
