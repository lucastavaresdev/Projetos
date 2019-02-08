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
  this.escode_menu = this.escode_menu.bind(this)
  this.abre_menu = this.escode_menu.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  escode_menu(){
     document.querySelector('.screens').style.display = 'none';
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

componentDidMount(){
  this.escode_menu()
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
                              <i className="fas fa-user icones_login"></i>
                            </div>
                            <div className='col-10'>
                                  <input type="text"  className="form-control mb-3" name="usuario" placeholder="Usuario" value={this.state.usuario} onChange={this.onChange} />
                            </div>
                      </div>
                      <div className='row'>
                            <div className='col-1'>
                            <i className="fas fa-lock icones_login"></i>
                            </div>
                            <div className='col-10'>
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
