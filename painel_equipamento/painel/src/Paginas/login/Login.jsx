import React, {Component} from 'react'
import {login} from '../../Funcions'
import jwt_decode from 'jwt-decode'

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import logo from '../../img/logo.png'
import './login.scss'
import TextField from '@material-ui/core/TextField';



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
            <div>
                <Grid container spacing={0} direction="column"  alignItems="center"  justify="center" style={{ minHeight: '100vh' }}>
                    <Grid>
                        <Card  className='container-card'>
                            <div className='card-topo'><img src={logo} /></div>
                            <form noValidate onSubmit={this.onSubmit}>
                                        <CardContent>
                            

                                                <div>
                                                        <input type="text"     
                                                        name="usuario"
                                                        placeholder="usuario"
                                                        value={this.state.usuario}
                                                        onChange={this.onChange}
                                                        />
                                                </div>
                                                <div>
                                                        <input type="password" name="senha" placeholder="Enter senha" value={this.state.senha} onChange={this.onChange} />
                                                </div>

                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" type="submit" >Entrar</Button>
                                        </CardActions>
                        </form>
                    </Card>
                </Grid>   
            </Grid> 
        </div>
        )
    }
}

export default Login