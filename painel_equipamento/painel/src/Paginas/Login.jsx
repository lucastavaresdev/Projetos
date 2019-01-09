import React, {Component} from 'react'
import {login} from '../Funcions'
import jwt_decode from 'jwt-decode'


class Login extends Component{
    constructor(){
        super()
        this.state = {
            usuario: '',
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
      usuario: this.state.usuario,
      senha: this.state.senha
    }

    login(user).then(res => {
        if(res){
            const decoded = jwt_decode(res)
            if(decoded.perfil == 0){
                this.props.history.push('/admin')
            }else if(decoded.perfil == 1){
                this.props.history.push('/usuario')
            }
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
                                    <input type="text"     
                                    name="usuario"
                                    placeholder="usuario"
                                    value={this.state.usuario}
                                    onChange={this.onChange}
                                    />
                            </div>
                            <div className="form-group">
                                    <input type="password" 
                                    className="form-control"
                                    name="senha"
                                    placeholder="Enter senha"
                                    value={this.state.senha}
                                    onChange={this.onChange}
                                    />
                            </div>

                             <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Entrar
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login