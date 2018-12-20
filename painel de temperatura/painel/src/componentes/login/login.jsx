import React, {Component} from 'react'
import {login} from './UserFuncions'
import Logo from '../../img/logo.png'
import './login.scss'

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
        function getUrlVars() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
            });
            return vars;
            }
        
        var invalido = getUrlVars()["usuario"];
        
                if (invalido) {
                    invalido = "Usuario ou senha invalido";
                } 

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto login_espaço_card">
                        <img src={Logo} alt="Itechmed" width='250'/>
                        <div class="card pt-5 pb-5 pl-3 pr-3">
                            <form noValidate onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                                <input type="login" 
                                                className="form-control"
                                                name="login"
                                                placeholder="Usuario"
                                                value={this.state.login}
                                                onChange={this.onChange}
                                                />
                                        </div>

                                        <div className="form-group ">
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
                                            className="btn btn-lg  cor_do_botao btn-block">
                                                Acessar                                
                                        </button>
                                        </div>
                            </form>
                            <p className='text-danger pt-3'>{invalido}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login