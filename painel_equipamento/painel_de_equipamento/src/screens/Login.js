import React, { Component } from 'react';
import './scss/Login.scss';
import {login} from '../Funcions'
import jwt_decode from 'jwt-decode'
import Logo from './../images/logo.png'

class Login extends Component {
  
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

          var perfil = parseInt(decoded.perfil)

            if(perfil === 0){
                this.props.history.push('/admin')
            }else if(perfil === 1){
                this.props.history.push('/usuario')
            }
        }
    })
}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <div className='card card-login'>
                  <div className="card-header card-topo text-center"> <img src={Logo} /> </div>

                  <div className='row justify-content-center'>
                      <div className='col-9'>
                            <form noValidate onSubmit={this.onSubmit}>
                                  <input type="text"  className="form-control mb-3" name="usuario" placeholder="Usuario" value={this.state.usuario} onChange={this.onChange} />
                                  <input type="password" className="form-control mb-3" name="senha" placeholder="Senha" value={this.state.senha} onChange={this.onChange} />
                                  <button type="submit" className="btn btn-lg btn-primary btn-block">Entrar</button>
                              </form>
                        </div>
                      </div>
       </div>
      </header>
    </div>
    );
  }
}

export default Login;