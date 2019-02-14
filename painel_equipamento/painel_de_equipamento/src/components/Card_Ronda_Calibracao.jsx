import React, { Component } from "react";
import date from 'date-and-time';
import { Atualizar_Ronda_Calibracao } from "../Funcions";
import JSAlert from "js-alert";



const now = new Date();

class Card_Ronda_Calibracao extends Component {
    constructor(props) {
        super(props);
            this.state = {
                    data_e_hora: date.format(now, 'DD/MM/YYYY HH:mm'),
                    data_e_hora_no_banco: date.format(now, 'YYYY-MM-DD HH:mm:ss'),
                    id_equipamento: '' ,
                    situacao: 1,
                    observacao: '',
            }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
         observacao: this.state.observacao,
        };
    
        var tabela='rondas'
        var coluna='ronda_ultima'
        
        Atualizar_Ronda_Calibracao(rondacalibracao, tabela, coluna).then(res => {
                {JSAlert.alert("Cadastro realizado com sucesso").then(function(res) {
                        window.location.href = "/listarequipamentos";
                });
                }
           });
         }

  render() {
    return (
      <div class="col-6 mx-auto">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{this.props.nome_do_campo}</h5>

            <h6 class="card-subtitle mb-2 text-muted">
             {this.props.nome_do_campo} periódica realizar em {this.state.data_e_hora}
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
                <input
                  type="submit"
                  className="offset-md-10 col-md-2 col-sm-12 cadastrar"
                  value="Inserir"
                />
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Card_Ronda_Calibracao;
