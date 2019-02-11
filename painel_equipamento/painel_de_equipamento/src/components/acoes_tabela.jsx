import React, { Component } from "react";
import Modal from "../components/Modal";
import "./_acoes.tabela.scss";
import { Ocultar_Equipamento } from "../Funcions";
import JSAlert from "js-alert";
import Tabela from '../components/Tabelas'

class Acoes_Tabela extends Component {


    // botao deletar só que ele nao deleta e sim faz um updade e oculta
  ocultar = () => {
    var alert = new JSAlert(`Voce deseja deletar o ${this.props.nome}`, ``);
    var id = this.props.id;
  
    alert.addButton("Deletar").then(function() {
      Ocultar_Equipamento(id).then(res => {
        JSAlert.alert("Equipamento  Deletado!").then(function(result) {
          window.location.reload()
         });
      });
    });
    alert.addButton("Cancelar").then(function() {
      return;
    });
    alert.show();
  };



  render() {
    return (
      <div className="row">
        <Modal
          iconeAbrir={<i className="click azul mr-2 fas fa-pen-square fa-2x" />}
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
        />

        <div >
          <i  className="btn_modal_submit click cinza fas fa-trash-alt fa-2x"  onClick={this.ocultar}>  </i>
         
        </div>

      </div>
    );
  }
}

export default Acoes_Tabela;
