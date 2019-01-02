import React, { Component } from 'react'
import logo2 from '../../img/logo.png';


class Logo extends Component {
  

  
    sair(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        window.location.href = '/'  

    }

 
    render() {
        return (
            <div>
                <div className='logo-bg '>
                    <div className='col-8'>
                        <img src={logo2} width='220px' alt='Logo' className='logo_imagem' />
                    </div>
                    <div className="container">
                        <div className="row">
                    <div className='col-12 text-right sair'>
                        <a href="" onClick={this.sair.bind(this)} className="nav-link"> <i className="fa fa-power-off" aria-hidden="true"></i> Sair  </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default Logo

