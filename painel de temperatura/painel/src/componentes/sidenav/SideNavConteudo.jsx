import React, { Component } from 'react'
import logo2 from '../../img/logo.png';

import jwt_decode from 'jwt-decode'

class Logo extends Component {
  
    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
    }

  
    sair(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

 
    render() {
        return (
            <div>
                <div className='row logo-bg '>
                    <div className='col-12'>
                        <img src={logo2} width='220px' alt='Logo' className='logo_imagem' />
                    </div>
                    <div className="container">
                        <div className="row">
                    <div className='col-12 text-right sair'>
                        <a href="" onClick={this.sair.bind(this)} className="nav-link"> <i class="fa fa-power-off" aria-hidden="true"></i> Sair  </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default Logo

