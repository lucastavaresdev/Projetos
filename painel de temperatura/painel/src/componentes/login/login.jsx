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
                        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                        <div class="card pt-5 pb-5 pl-3 pr-3">
                            <form noValidate onSubmit={this.onSubmit}>
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

                                        <div className="form-group ">
                                                <label htmlFor="senha">Senha</label>
                                                <input type="password" 
                                                className="form-control"
                                                name="senha"
                                                placeholder="senha"
                                                value={this.state.senha}
                                                onChange={this.onChange}
                                                />
                                        </div>
                                    <div className='pt-4'>
                                        <button type="submit "
                                            className="btn btn-lg btn-primary btn-block">
                                                Acessar                                
                                        </button>
                                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login