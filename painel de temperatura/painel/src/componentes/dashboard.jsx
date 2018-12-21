import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            nome: '',
        }
    }


    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            nome: decoded.nome,
        })
    }

    
    render () {
        document.body.classList.remove('login_body');

        return (
            <div className="container bem-vindo">
                <div className="jumbotron ">
                    <div className="col-md-6 mx-auto ">
                        <h1 className="text-center">Bem-Vindo <span>{this.state.nome}</span></h1>
                    </div>
                    </div>
                    
                </div>
        )
    }
}

export default Profile