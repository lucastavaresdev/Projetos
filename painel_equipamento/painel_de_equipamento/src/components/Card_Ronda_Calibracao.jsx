import React, { Component } from "react";
import date from "date-and-time";
import { Atualizar_Ronda_Calibracao } from "../Funcions";
import JSAlert from "js-alert";
import { Link } from "react-router-dom";

const now = new Date();


class Card_Ronda_Calibracao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_e_hora: ' ',
      data_e_hora_no_banco: '',
      id_equipamento: "",
      situacao: 1,
      observacao: "",
      tabela: this.props.tabela_no_banco,
      coluna: this.props.coluna_no_banco,
      reflesh_ronda: this.props.reflesh_ronda,
      reflesh_calibracao: this.props.reflesh_calibracao
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.render_hora = this.render_hora.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const rondacalibracao = {
      id_equipamento: this.props.id_do_equipamento_selecionado,
      ronda_ultima: this.state.data_e_hora_no_banco,
      situacao: this.state.situacao,
      observacao: this.state.observacao
    };

    var tabela = this.state.tabela;
    var coluna = this.state.coluna;

    if (this.state.reflesh_calibracao === 1 || this.state.reflesh_ronda === 1) {
      var reflesh = 1;
    }

    Atualizar_Ronda_Calibracao(rondacalibracao, tabela, coluna, reflesh).then(
      res => {
        console.log(reflesh);
        {
          JSAlert.alert("Atualizado com sucesso").then(function(res) {
            if (reflesh === 1) {
              console.log("tes");
            } else {
              window.location.href = "/listarequipamentos";
            }
          });
        }
      }
    );
  }

  render_hora(){
    const dt = new Date();

    this.setState({ 
        data_e_hora: date.format(dt, "DD/MM/YYYY HH:mm:ss"),
        data_e_hora_no_banco: date.format(dt, "YYYY-MM-DD HH:mm:ss")
      })
  }

  componentWillMount(){
    setInterval(this.render_hora , 1000) 
  }


  render() {

    return (
      <div class="col-6 mx-auto">
        <div class="card">
          <Link to="/listarequipamentos" className="btn_voltar ">
            <i class="fas fa-arrow-left fa-1x p-1 pl-2 pt-3 fa-1x" />
          </Link>

          <div class="card-body card_ronda_calibracao">
            <h5 class="card-title">{this.props.nome_do_campo}</h5>

            <h6 class="card-subtitle mb-2 text-muted">
              {this.props.nome_do_campo} periódica realizar em{" "}
              {this.state.data_e_hora}
            </h6>
            <form
              className="formulario_cadastro_equipamento"
              onSubmit={this.onSubmit}
            >
              <input
                className="text"
                type="hidden"
                Value={this.state.data_e_hora_no_banco}
                onChange={this.onChange}
              />
              <label className="col-md-12 col-sm-12">
                Situação:
                <select
                  className="col-12"
                  name="situacao"
                  onChange={this.onChange}
                  required
                >
                  <option value="" selected disabled>
                    Selecionar...
                  </option>
                  <option value="1">Disponivel</option>
                  <option value="2">Utilizado</option>
                  <option value="3">Reservado</option>
                  <option value="4">Necessita Higienizar</option>
                  <option value="5">Em Higienização</option>
                  <option value="6">Necessita Manutenção</option>
                  <option value="7">Em Manutenção</option>
                  <option value="8">Não Encontrado</option>
                </select>
              </label>
              <label className="col-md-12 col-sm-12 ">
                <div className="pb-1">Observação:</div>
                <textarea
                  rows="4"
                  cols="50"
                  className="col-12 "
                  name="observacao"
                  maxlength="180"
                  value={this.state.observacao}
                  onChange={this.onChange}
                />
              </label>

              <div className="col-12 mt-2 ">
                <div className="row">
                  <div className="col-md-12 btn_card_ronda_calibracao">
                    <button
                      type="submit"
                      className="btn btn-primary botao_atualizar cadastrar col-12"
                    >
                      Atualizar
                    </button>
                  </div>
                </div>
              </div>
              <span className="input-group-btn" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Card_Ronda_Calibracao;
