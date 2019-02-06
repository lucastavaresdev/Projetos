import React, { Component } from 'react';
import Modal from 'react-modal'
import {Inserir_Equipamento} from '../Funcions'
import JSAlert from 'js-alert' 
import './_modal.scss'


const customStyles = {
    content : {
      top : '50%',
      left : '50%',
      right : 'auto',
      bottom : 'auto',
      marginRight : '-50%',
      transform : 'translate(-50%, -50%)'
    }
  };

class Modal2 extends Component {
   
    constructor() {
        super();
          this.state = {
            modalIsOpen: false,
            nome: ' ',
            marca: ' ',
            modelo: ' ',
            serie: 0,
            patrimonio: '',
            ronda: '',
            calibracao: 0,
            situacao:  ' ',
            ativo: ' ',
            setor: 0,
            cod: 3
          };
     
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }

     
    openModal() {
      this.setState({modalIsOpen: true});
    }
     
    closeModal() {
        this.setState({modalIsOpen: false});
    }


    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const equipamento = {
            nome: this.state.nome,
            marca: this.state.marca,
            modelo:this.state.modelo,
            serie: this.state.serie,
            patrimonio: this.state.patrimonio,
            ronda: this.state.ronda,
            calibracao: this.state.calibracao,
            situacao:  this.state.situacao,
            ativo: this.state.ativo,
            setor: this.state.setor,
        }

        
         
        Inserir_Equipamento(equipamento).then(res => {
           const codigo  = parseInt(res.data.cod)
            if(codigo === 1){
                return (
                        <div>
                            {JSAlert.alert('Número de serie ja cadastrado')}
                        </div>
                );
            }else{
                return(
                        <div>
                             {JSAlert.alert('Cadastro realizado com sucesso')}
                             {this.closeModal()}
                        </div>
                )
            }
        })
    }


    render() {
        return (
            <section >
                            <div onClick={this.openModal}><i className="abrirCad fas fa-plus-circle fa-3x"></i></div> 
                                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Inserir Equipamento">
                                        <div className="row">
                                        <div className="col-md-10 modal_equipamentos p-4">
                                            <div className="row ">
                                                    <div className="col-md-11 col-sm-10">
                                                        <h2 className='text-center' >Cadastro de Equipamentos</h2>
                                                    </div>
                                                    <div className="col-1">
                                                        <div className='icone_fechar'  onClick={this.closeModal}><i className=" fas fa-times"></i>
                                                    </div>
                                                </div>
                                            </div>
                                         <form className='formulario_cadastro_equipamento' onSubmit={this.onSubmit}>
                                            <p className='col-12' >Dados do Equipamento</p>

                                                <label className="col-md-9 col-sm-12">Nome do Equipamento:
                                                    <input  className="col-12" type="text" name="nome" value={this.state.nome}  onChange={this.onChange} required/>
                                                </label>

                                                <label className="col-md-3 col-sm-12">Marca:
                                                    <input  className="col-12" type="text" name="marca"  value={this.state.marca}  onChange={this.onChange} required/>
                                                </label>

                                                <label className="col-md-4 col-sm-12"> Modelo:
                                                    <input className="col-12" type="text" name="modelo" value={this.state.modelo}  onChange={this.onChange} required/>
                                                </label>

                                                <label className="col-md-4 col-sm-12"> serie:
                                                    <input  className="col-12" type="text" name="serie" value={this.state.serie}  onChange={this.onChange} required/>
                                                </label>

                                                <label className="col-md-4 col-sm-12">   Patrimonio:
                                                    <input  className="col-12" type="text" name="patrimonio"  value={this.state.patrimonio}  onChange={this.onChange} required/>
                                                </label>

                                                <hr/>

                                                <p className='col-12' >Dados para o beacon</p>

                                                <label className="col-md-4 col-sm-12">   Ronda:
                                                        <input  className="col-12" type="number" name="ronda" placeholder='Qtd. de Dias' value={this.state.ronda}  onChange={this.onChange} required/>
                                                </label>
                                                <label className="col-md-4 col-sm-12">  Calibração:
                                                        <input  className="col-12" type="number" name="calibracao" placeholder='Qtd. de Dias' value={this.state.calibracao}  onChange={this.onChange} required/>
                                                </label>
                                                                                         
                                                <label className="col-md-4 col-sm-12">   Situação:
                                                        <select className='col-12' name="situacao"  value={this.state.situacao}  onChange={this.onChange}>
                                                            <option value="0">Disponivel</option>
                                                            <option value="1">Utilizado</option>
                                                            <option value="2">Necessita Manutenção</option>
                                                            <option value="3">Necessita Higienizar</option>
                                                            <option value="4">Reservado</option>
                                                            <option value="5">Em Higienização</option>
                                                            <option value="6">Em Manutenção</option>
                                                            <option value="7">Não Encontrado</option>
                                                        </select>
                                                </label>

                                                <label className="col-md-4 col-sm-12">  Ativo:
                                                    <input  className="col-12" type="text" name="ativo" value={this.state.ativo}  onChange={this.onChange} required/>
                                                </label>
                                                <label className="col-md-4 col-sm-12"> Setor:
                                                    <input  className="col-12" type="text" name="setor" value={this.state.setor}  onChange={this.onChange} required/>
                                                </label>

                                                <div className="col-12 mt-2">
                                                    <input   type="submit" className="offset-md-10 col-md-2 col-sm-12 cadastrar" value="Cadastrar" />
                                                </div>

                                            </form>
                                         </div>
                                         <div className="col-md-2 modal_imagem"></div>
                                         </div>
                                </Modal>
                              
                </section>
        );
    }
}

export default Modal2;