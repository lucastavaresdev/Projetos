import React, { Component } from "react";
import "./scss/Ronda_Calibracao.scss";
import Card_Ronda_Calibracao from "../components/Card_Ronda_Calibracao";

class Ronda_Calibracao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_equipamento: ""
    };
  }

  componentDidMount() {
    this.pegar_id_do_equipamento();
  }

  pegar_id_do_equipamento() {
    try {
      this.setState({ id_equipamento: this.props.location.query.idx });
    } catch {
      window.location.href = "/listarequipamentos";
    }
  }

  render() {
    return (
      <div>
        <div class="container  pt-20">
          <div class="row">

                <Card_Ronda_Calibracao  id_do_equipamento_selecionado={this.state.id_equipamento} nome_do_campo={'Calibracao'}/>
                <Card_Ronda_Calibracao  id_do_equipamento_selecionado={this.state.id_equipamento} nome_do_campo={'Ronda'}/>

                
          </div>

        </div>
      </div>
    );
  }
}

export default Ronda_Calibracao;
