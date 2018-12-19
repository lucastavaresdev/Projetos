import React, {Component} from 'react'
import {login} from './UserFuncions'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            login: '',
            senha: ''
        }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    }

onChange(e){
    this.setState({[e.target.name]: e.target.value})
}

onSubmit(e){
    e.preventDefault()

    const user = {
        login: this.state.login,
        senha: this.state.senha
    }

    login(user).then(res => {
        if(res){
            this.props.history.push('/perfil/home')
        }
    })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            
                            <div className="form-group">
                                    <label htmlFor="login">Usuario</label>
                                    <input type="login" 
                                    className="form-control"
                                    name="login"
                                    placeholder="Usuario"
                                    value={this.state.login}
                                    onChange={this.onChange}
                                    />
                            </div>

                            <div className="form-group">
                                    <label htmlFor="senha">Senha</label>
                                    <input type="senha" 
                                    className="form-control"
                                    name="senha"
                                    placeholder="senha"
                                    value={this.state.senha}
                                    onChange={this.onChange}
                                    />
                            </div>

                             <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                    Acessar                                
                               </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login