import React , {Component}from 'react';
import jwt_decode from 'jwt-decode'
import Navbar from '../components/navbar';
import './scss/_Admin.scss'

class Profile extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         nome: '',
    //         usuario: '',
    //         perfil: ''
    //     }
    // }

    // componentDidMount () {
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decode(token)
    //     this.setState({
    //       nome: decoded.nome,
    //       usuario: decoded.usuario,
    //       perfil: decoded.perfil
    //     })
   // }

    render () {
        return (
            <div>
                 <h1>Dashboard</h1>
              
            </div>
        )
    }
}

export default Profile