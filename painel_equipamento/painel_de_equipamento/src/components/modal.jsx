import React, { Component } from "react";
import Modal from "react-modal";
import { Inserir_Equipamento,Atualizar_Equipamento, Lista_Setores } from "../Funcions";
import JSAlert from "js-alert";
import "./_modal.scss";


class Modal2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      nome: this.props.nome_do_equipamento,
      marca: this.props.marca_do_equipamento,
      modelo:this.props.modelo_do_equipamento,
      serie: this.props.serie_do_equipamento,
      patrimonio:  this.props.patrimonio_do_equipamento,
      ronda: this.props.ronda_do_equipamento,
      calibracao: this.props.calibracao_do_equipamento,
      situacao: this.props.situacao_do_equipamento,
      ativo:  this.props.ativo_do_equipamento,
      setor:   this.props.setor_do_equipamento,
      cod: 3,
      tipo_de_envio: 0,
      setores: [],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const equipamento = {
      tipo_de_envio: this.state.tipo_de_envio,
      nome: this.state.nome,
      marca: this.state.marca,
      modelo: this.state.modelo,
      serie: this.state.serie,
      patrimonio: this.state.patrimonio,
      ronda: this.state.ronda,
      calibracao: this.state.calibracao,
      situacao: this.state.situacao,
      ativo: this.state.ativo,
      setor: this.state.setor,
    };

    const tipo_de_envio = this.props.tipo_de_envio
    const id = this.props.id_do_equipamento

    if(tipo_de_envio === 1  && tipo_de_envio != ""){
      Atualizar_Equipamento(equipamento, id).then(res => {
        {JSAlert.alert("Atualizado com sucesso")}
        {this.closeModal()}
      });

    } else {
      Inserir_Equipamento(equipamento).then(res => {
        const codigo = parseInt(res.data.cod);
        if (codigo === 1) {
          return <div>{JSAlert.alert("Número de serie ja cadastrado")}</div>;
        } else {
          return (
            <div>
              {JSAlert.alert("Cadastro realizado com sucesso")}
              {this.closeModal()}
            </div>
          );
        }
      });
    }
  }

  
  componentDidMount(){
    this.listar_setores()
}


  listar_setores() {    
    Lista_Setores().then(res => {
      this.setState({setores: res.data});
    });
  }

  render() {
    return (
      <section>
        <div onClick={this.openModal}>{this.props.iconeAbrir}</div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Inserir Equipamento">
          <div className="row">
            <div className="col-md-10 modal_equipamentos p-4">
              <div className="row ">
                <div className="col-md-11 col-sm-10">
                  <h2 className="text-center">{this.props.tituloModal}</h2>
                </div>
                <div className="col-1">
                  <div className="icone_fechar" onClick={this.closeModal}>
                    <i className=" fas fa-times" />
                  </div>
                </div>
              </div>
              <form
                className="formulario_cadastro_equipamento"
                onSubmit={this.onSubmit}
              >
                <p className="col-12">Dados do Equipamento </p>

                <label className="col-md-9 col-sm-12">
                  Nome do Equipamento:
                  <input  className="col-12" type="text" name="nome" Value={this.state.nome}  onChange={this.onChange}   required />
                </label>

                <label className="col-md-3 col-sm-12">
                  Marca:
                  <input
                    className="col-12"
                    type="text"
                    name="marca"
                    value={this.state.marca}
                    onChange={this.onChange}
                    required
                  />
                </label>

                <label className="col-md-4 col-sm-12">
                    Modelo:
                  <input
                    className="col-12"
                    type="text"
                    name="modelo"
                    value={this.state.modelo}
                    onChange={this.onChange}
                    required
                  />
                </label>

                <label className="col-md-4 col-sm-12">
                    serie:
                  <input
                    className="col-12"
                    type="text"
                    name="serie"
                    defaultValue={this.state.serie}
                    onChange={this.onChange}
                    disabled = {this.props.disabled}
                    required
                  />
                </label>

                <label className="col-md-4 col-sm-12">
                  Patrimonio:
                  <input
                    className="col-12"
                    type="text"
                    name="patrimonio"
                    value={this.state.patrimonio}
                    onChange={this.onChange}
                    required
                  />
                </label>

                <hr />

                <p className="col-12">Dados para o beacon</p>

                <label className="col-md-4 col-sm-12">
                  Ronda:
                  <input
                    className="col-12"
                    type="number"
                    maxlength = "3"
                    min="0"
                    max="360"
                    name="ronda"
                    placeholder="Qtd. de Dias"
                    value={this.state.ronda}
                    onChange={this.onChange}
                    required
                  />
                </label>
                <label className="col-md-4 col-sm-12">
                  Calibração:
                  <input
                    className="col-12"
                    type="number"
                    maxlength = "3"
                    min="0"
                    max="360"
                    name="calibracao"
                    placeholder="Qtd. de Dias"
                    value={this.state.calibracao}
                    onChange={this.onChange}
                    required
                  />
                </label>

                <label className="col-md-4 col-sm-12">
                  Situação:
                  <select
                    className="col-12"
                    name="situacao"
                    value={this.state.situacao}
                    onChange={this.onChange}
                    required
                  >
                    <option value="" selected disabled>Selecionar...</option>
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

       
                <label className="col-md-4 col-sm-12">
                  Status:
                  <select className="col-12" name="ativo" value={this.state.ativo} onChange={this.onChange} >
                    <option value="1">Ativo</option>
                    <option value="0">Inativo</option>
                  </select>
                </label>

                <label className="col-md-4 col-sm-12">
                Setor:
                <select className="col-12" name="setor" value={this.state.setor} onChange={this.onChange}   required>

                <option value="" selected disabled>Selecionar...</option>
                        {
                          this.state.setores.map(function(index, e) {
                           return <option key={index.id} value={index.id}>{index.nome}</option>
                          })
                        }
                  </select>
                </label>
                <div className="col-12 mt-2 ">
                  <input  type="submit" className="offset-md-10 col-md-2 col-sm-12 cadastrar" value={this.props.nomeBotao}/>
                </div>
              </form>
            </div>
            <div className="col-md-2 modal_imagem" />
          </div>
        </Modal>
      </section>
    );
  }
}

export default Modal2;

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };