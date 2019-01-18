import React, {Component} from 'react';
import Modal from 'react-modal';
 
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
 
Modal.setAppElement(document.getElementById('Inserir'))
 
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
      <div>
        <div onClick={this.openModal}><i className="fas fa-plus-circle fa-5x"></i></div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Inserir Equipamento">
          <div className="container">
            <div className="row">
                <div className="col-11">
                    <h2 className='text-center' >Inserir Equipamentos</h2>
                </div>
                <div className="col-1">
                    <div  onClick={this.closeModal}><i className="fas fa-times"></i></div>
                </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
 
export default Modal2