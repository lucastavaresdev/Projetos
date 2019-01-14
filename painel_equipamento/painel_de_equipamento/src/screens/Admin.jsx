import React , {Component}from 'react';
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            nome: '',
            usuario: '',
            perfil: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
          nome: decoded.nome,
          usuario: decoded.usuario,
          perfil: decoded.perfil
        })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.nome}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.usuario}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.perfil}</td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile