import React, { Component } from 'react'
import { registrar } from './login/UserFuncions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            nome: '',
            sexo: '',
            cadastro: '',
            perfil: '',
            login: '',
            senha: '',
            ativo: 'ativo',
            tipoUsuario: '',
            crm: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            nome: this.state.nome,
            sexo: this.state.sexo,
            cadastro: this.state.login,
            perfil: this.state.perfil,
            login: this.state.login,
            senha: this.state.senha,
            ativo: this.state.ativo,
            tipoUsuario: this.state.tipoUsuario,
            crm: this.state.crm,
        }

        registrar(user).then(res => {
                this.props.history.push(`/`)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Cadastro</h1>
                            <div className="form-group">
                                <input type="text" className="form-control" name="nome" placeholder="Nome"  value={this.state.nome}     onChange={this.onChange}  />
                            </div>
                            <div className="form-group">
                                <select className="form-control"  name="sexo"  value={this.state.sexo} onChange={this.onChange}  required>
                                <option value="" disabled selected>Seleciona a opção</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="perfil" placeholder="perfil"  value={this.state.perfil}     onChange={this.onChange}  />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="login" placeholder="login"  value={this.state.login}     onChange={this.onChange}  />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="senha" placeholder="senha"  value={this.state.senha}     onChange={this.onChange}  />
                            </div>

                            <div className="form-group">
                                <select className="form-control"  name="tipoUsuario"  value={this.state.tipoUsuario} onChange={this.onChange}>
                                    <option value="" disabled selected>Seleciona a opção</option>
                                    <option value="adm">Administrador</option>
                                    <option value="Medico">Médico</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" name="crm" placeholder="crm"  value={this.state.crm}     onChange={this.onChange}  />
                            </div>
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Registrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register