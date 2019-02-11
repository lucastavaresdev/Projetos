import React, { Component } from "react";
import Modal from "react-modal";
import { Inserir_Equipamento,Atualizar_Equipamento, Lista_Setores } from "../Funcions";
import JSAlert from "js-alert";
import "./_modal.scss";

class Modal_cadastro_setores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      nome: this.props.nome_do_setor,
      sigla: this.props.marca_do_setor,
      andar:this.props.modelo_do_setor,
      capacidade: this.props.serie_do_setor,
      permanência:  this.props.patrimonio_do_setor,
      tracking: this.props.ronda_do_setor,
      ativo: this.props.calibracao_do_setor,
      atendimentos: this.props.situacao_do_setor,
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
      sigla: this.state.sigla,
      andar: this.state.andar,
      capacidade: this.state.capacidade,
      permanência: this.state.permanência,
      tracking: this.state.tracking,
      ativo: this.state.ativo,
      atendimentos: this.state.atendimentos,
    };


    const tipo_de_envio = this.props.tipo_de_envio
    
    const id = this.props.id_do_equipamento //----------------------------------



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
        <div onClick={this.openModal}> <i className="abrirCad" /> {this.props.iconeAbrir}  </div>
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
              <form  className="formulario_cadastro_equipamento" onSubmit={this.onSubmit}>

                <p className="col-12">Cadastrar Setor</p>

                <label className="col-md-9 col-sm-12">
                  Nome:
                  <input  className="col-12" type="text" name="nome" Value={this.state.nome}  onChange={this.onChange}   required />
                </label>

                <label className="col-md-3 col-sm-12">  Sigla:
                 <input className="col-12" type="text" name="sigla" value={this.state.sigla} onChange={this.onChange}   required  />
                </label>

                <label className="col-md-4 col-sm-12">
                    Andar:
                  <input
                    className="col-12"
                    type="text"
                    name="andar"
                    value={this.state.andar}
                    onChange={this.onChange}
                    required
                  />
                </label>

                <label className="col-md-4 col-sm-12">
                    capacidade:
                  <input
                    className="col-12"
                    type="text"
                    name="capacidade"
                    defaultValue={this.state.capacidade}
                    onChange={this.onChange}
                    required
                  />
                </label>

                <label className="col-md-4 col-sm-12">
                  permancecia:
                  <input
                    className="col-12"
                    type="text"
                    name="permancecia"
                    value={this.state.permancecia}
                    onChange={this.onChange}
                    required
                  />
                </label>

                <hr />

                <p className="col-12">Dados para o beacon</p>

 

                <label className="col-md-4 col-sm-12">
                Tracking:
                  <select className="col-12" name="tracking" value={this.state.tracking} onChange={this.onChange} >
                    <option value="1">Ativo</option>
                    <option value="0">Inativo</option>
                  </select>
                </label>


               
                <label className="col-md-4 col-sm-12">
                  Status:
                  <select className="col-12" name="ativo" value={this.state.ativo} onChange={this.onChange} >
                    <option value="1">Manual</option>
                    <option value="0">Automatico</option>
                  </select>
                </label>

                <label className="col-md-4 col-sm-12">
                Atendimentos:
                  <input
                    className="col-12"
                    type="text"
                    name="atendimentos"
                    value={this.state.atendimentos}
                    onChange={this.onChange}
                    required
                  />
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

export default Modal_cadastro_setores;

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