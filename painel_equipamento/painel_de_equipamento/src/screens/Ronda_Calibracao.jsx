import React, { Component } from 'react'
import './scss/Ronda_Calibracao.scss'
import date from 'date-and-time';


const now = new Date();

class Ronda_Calibracao extends Component {
    constructor(props) {
        super(props);
            this.state = {
                    data_e_hora: date.format(now, 'DD/MM/YYYY HH:mm')
            }
        this.onSubmit = this.onSubmit.bind(this);
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
    
        //const tipo_de_envio = this.props.tipo_de_envio
        //const id = this.props.id_do_equipamento
    
    
          
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
                                             <input  className="col-12" type="text" name="data_e_hora" Value={this.state.data_e_hora}  onChange={this.onChange} disabled/>
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