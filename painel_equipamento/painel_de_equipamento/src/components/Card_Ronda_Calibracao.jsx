import React, { Component } from "react";

class Card_Ronda_Calibracao extends Component {
  state = {};
  render() {
    return (
      <div class="col-6 mx-auto">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Ronda</h5>

            <h6 class="card-subtitle mb-2 text-muted">
              Ronda periodica realizar {this.state.data_e_hora}
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
