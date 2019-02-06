import React, { Component } from 'react'
import Modal from '../components/Modal'
import './_acoes.tabela.scss'


class ActionsFormatter extends Component {
    state = {  }
    render() {
        return (
            <div className='row'>
                    <Modal iconeAbrir={<i className="click azul mr-2 fas fa-pen-square fa-2x"></i>} 
                        nomeBotao='Atualizar' tituloModal={`Atualizar  ${this.props.nome_equipamento}`} 
                        nome_equipamento={'teste'}
                        >
                    </Modal>
                    <i className="click cinza fas fa-trash-alt fa-2x"></i>
            </div>
        );
    }
}


export default ActionsFormatter;