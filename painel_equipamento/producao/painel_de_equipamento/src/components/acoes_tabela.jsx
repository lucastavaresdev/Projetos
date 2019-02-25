import React, { Component } from "react";
import "./_acoes.tabela.scss";
import { Ocultar_Linha_Tabela } from "../Funcions";
import JSAlert from "js-alert";

import Modal from "../components/Modal";
import Modal_cadastro_setores from "../components/Modal_cadastro_setores";
import { Link } from 'react-router-dom'


class Acoes_Tabela extends Component {
 
  // botao deletar só que ele nao deleta e sim faz um updade e oculta
  ocultar = () => {
    var alert = new JSAlert(`Voce deseja deletar o ${this.props.nome}`, ``);
      
    var id = this.props.id;
    var nome = this.props.nome;
    var tabela = this.props.tabela_que_ira_ocultar

    alert.addButton("Deletar").then(function() {

      Ocultar_Linha_Tabela(id, tabela, nome).then(res => {
        JSAlert.alert(`${nome} Deletado!`).then(function(result) {
          window.location.reload();
        });
      });
      
    });

    alert.addButton("Cancelar").then(function() {
      return;
    });
    alert.show();
  };


  exibir_botao_calibracao_ronda = () =>{
   if (this.props.ronda === 0 && this.props.calibracao === 0){
    return(
      <i class="mr-2 fas fa-cog fa-2x "></i>
      )
    }else{
      return(
        <Link to={{ pathname: '/ronda_calibracao', query: { idx: this.props.id, ronda:this.props.ronda, calibracao: this.props.calibracao  } }} > <i class="click mr-2 fas fa-cog fa-2x cinza-escuro"></i></Link>
      )
   }
 }

  decide_tipo_modal_dependo_da_pagina() {
    if (this.props.tipo_de_modal === 1) {
      return (
        <div className="row">
          <Modal_cadastro_setores
            iconeAbrir={<i className="click azul mr-2 fas fa-pen-square fa-2x" />}
            tipo_de_envio={1}
            tituloModal= {`Atualizar ${this.props.nome}`}
            id_do_setor={this.props.id}
            nome_do_setor={this.props.nome}
            sigla_do_setor={this.props.sigla}
            andar_do_setor={this.props.andar}
            capacidade_do_setor={this.props.capacidade}
            permanencia_do_setor={this.props.permanencia}
            tracking_do_setor={this.props.tracking}
            ativo_do_setor={this.props.ativo}
            atendimentos_do_setor={this.props.atendimentos}
          />
          <div>
          <i  className="btn_modal_submit click cinza fas fa-trash-alt fa-2x" onClick={this.ocultar}  > </i>
          </div>
        </div>
      );

    } else {
      return (
        <div className="row">
          <div>
          {this.exibir_botao_calibracao_ronda()}
          </div>

          <Modal
            iconeAbrir={
              <i className="click azul mr-2 fas fa-pen-square fa-2x " />
            }
            nomeBotao="Atualizar"
            tituloModal={`Atualizar  ${this.props.nome}`}
            tipo_de_envio={1}
            disabled={"disabled"}
            id_do_equipamento={this.props.id}
            nome_do_equipamento={this.props.nome}
            marca_do_equipamento={this.props.marca}
            modelo_do_equipamento={this.props.modelo}
            serie_do_equipamento={this.props.serie}
            patrimonio_do_equipamento={this.props.patrimonio}
            ronda_do_equipamento={this.props.ronda}
            calibracao_do_equipamento={this.props.calibracao}
            situacao_do_equipamento={this.props.situacao}
            ativo_do_equipamento={this.props.ativo}
            setor_do_equipamento={this.props.setor}
            setor_do_equipamento_id={this.props.setor_id}
          />
          <div>
            <i  className="btn_modal_submit click cinza fas fa-trash-alt fa-2x" onClick={this.ocultar}  >
            </i>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="row">
        {this.decide_tipo_modal_dependo_da_pagina()}
      </div>
    );
  }
}

export default Acoes_Tabela;
