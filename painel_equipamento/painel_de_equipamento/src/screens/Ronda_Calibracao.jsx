import React, { Component } from 'react'
import './scss/Ronda_Calibracao.scss'

class Ronda_Calibracao extends Component {
    state = {  }
    render() {
        return (
        <div>
            <div class="container  pt-20">
                <div class="row">
                    <div class="col-6 mx-auto">
                        
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Ronda</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Ronda periodica realizar</h6>
                                   
                                    <form className="formulario_cadastro_equipamento" onSubmit={this.onSubmit} >

                                            <label className="col-md-8 col-sm-12">
                                            Data/Hora:
                                             <input  className="col-12" type="text" name="nome" Value={this.state.nome}  onChange={this.onChange} disabled/>
                                            </label>

                                            <label className="col-md-4 col-sm-12">
                                                    Situação:
                                                    <select className="col-12" name="situacao" value={this.state.situacao} onChange={this.onChange}>
                                                        <option value="0" selected disabled>Selecionar...</option>
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
                                            <div className='pb-1'>Observação:</div>
                                                <textarea rows="4" cols="50" className="col-12 " name="marca" maxlength="180"   value={this.state.marca}
                                                    onChange={this.onChange}
                                                    required>
                                                </textarea>
                                            </label>
                                    
                                            <div className="col-12 mt-2 " >
                                                <input  type="submit" className="offset-md-10 col-md-2 col-sm-12 cadastrar" value={this.props.nomeBotao}/>
                                            </div>
                                        </form>
                                </div>
                            </div>

                    </div>
                </div>
            </div>

        </div>
        );
    }
}

export default Ronda_Calibracao;