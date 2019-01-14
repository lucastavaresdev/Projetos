import React, { Component } from 'react';
import './_navbar.scss'
import Logo from '../images/logo.png'


class Navbar extends Component {

    sair(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        window.location.href = './'  
    }

    render() {
        return (
            <nav class="navbar">
            <img src={Logo} alt="Logo Itechmed soluções medicas" srcset=""/>
                <a href="" onClick={this.sair.bind(this)}><i class="fas fa-times-circle"></i>Sair </a>
      </nav>
        );
    }
}

export default Navbar;





