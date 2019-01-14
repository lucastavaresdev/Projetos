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
      <div className="bg">
      <div className="App-Login">
        <header className="App-header">
         
          <div className='card card-login'>
                  <div className="card-header card-topo text-center"> <img src={Logo} /> </div>

                  <div className='row justify-content-center'>
                      <div className='col-10'>
                            <form noValidate onSubmit={this.onSubmit}>
                            
                      <div className='row'>
                            <div className='col-1'>
                              <i class="fas fa-user icones_login"></i>
                            </div>
                            <div className='col-11'>
                                  <input type="text"  className="form-control mb-3" name="usuario" placeholder="Usuario" value={this.state.usuario} onChange={this.onChange} />
                            </div>
                      </div>
                      <div className='row'>
                            <div className='col-1'>
                            <i class="fas fa-lock icones_login"></i>
                            </div>
                            <div className='col-11'>
                                  <input type="password" className="form-control mb-3" name="senha" placeholder="Senha" value={this.state.senha} onChange={this.onChange} />
                            </div>
                      </div>
                      <div className='row'>
                              <div className='col-12 mt-4'>
                                   <button type="submit" className="btn  cor-botao col-12">Entrar</button>
                           </div>
                      </div>

                              </form>
                        </div>
                      </div>
       </div>
      </header>
    </div>
    </div>
    );
  }
}

export default Login;
