import React, { Component } from 'react'
import Modal from '../components/Modal'
import './_acoes.tabela.scss'


class ActionsFormatter extends Component {
    state = {  }
    render() {
        return (
            <div className='row'>
                    <Modal iconeAbrir={<i className="click azul mr-2 fas fa-pen-square fa-2x"></i>} 
                        nomeBotao='Atualizar' tituloModal={`Atualizar  ${this.props.nome}`} 
                         tipo_de_envio={1} disabled={'disabled'}
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
                        >
                    </Modal>
                    <i className="click cinza fas fa-trash-alt fa-2x"></i>
            </div>
        );
    }
}


export default ActionsFormatter;