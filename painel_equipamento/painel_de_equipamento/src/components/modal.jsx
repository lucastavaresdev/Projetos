import React, { Component } from 'react';
import Modal from 'react-modal'
import './_modal.scss'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Modal2 extends Component {
   
    constructor() {
        super();
          this.state = {
            modalIsOpen: false
          };
     
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
     
      openModal() {
        this.setState({modalIsOpen: true});
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render() {
        return (
            <section >
                            <div onClick={this.openModal}><i class="fas fa-plus-circle fa-3x"></i></div> 
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
                                         <form className='formulario_cadastro_equipamento'>
                                            <p className='col-12' >Dados do Equipamento</p>

                                                <label className="col-md-9 col-sm-12">Nome do Equipamento:
                                                    <input  className="col-12" type="text" name="nome" />
                                                </label>
                                                <label className="col-md-3 col-sm-12">Marca:
                                                    <input  className="col-12" type="text" name="nome" />
                                                </label>

                                                <label className="col-md-4 col-sm-12"> Modelo:
                                                    <input className="col-12" type="text" name="nome" />
                                                </label>
                                                <label className="col-md-4 col-sm-12"> serie:
                                                    <input  className="col-12" type="text" name="nome" />
                                                </label>
                                                <label className="col-md-4 col-sm-12">   Patrimonio:
                                                    <input  className="col-12" type="text" name="nome" />
                                                </label>

                                                <hr/>

                                                <p className='col-12' >Dados para o beacon</p>

                                                <label className="col-md-4 col-sm-12">   Ronda:
                                                        <input  className="col-12" type="number" name="ronda" placeholder='Qtd. de Dias'/>
                                                </label>
                                                <label className="col-md-4 col-sm-12">  Calibração:
                                                        <input  className="col-12" type="number" name="calibracao" placeholder='Qtd. de Dias'/>
                                                </label>

                                            
                                                
                                              
                                                <label className="col-md-4 col-sm-12">   Situação:
                                                        <select className='col-12'>
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
                                                    <input  className="col-12" type="text" name="nome" />
                                                </label>
                                                <label className="col-md-4 col-sm-12"> Setor:
                                                    <input  className="col-12" type="text" name="nome" />
                                                </label>

                                                <div className="col-12 mt-2">
                                                    <input  className="offset-md-10 col-md-2 col-sm-12" type="submit" value="Cadastrar" />
                                                </div>

                                            </form>
                                         </div>

                                            <div className="col-md-2 modal_imagem">
                                            
                                            </div>
                                         </div>
                                </Modal>
                </section>
        );
    }
}

export default Modal2;