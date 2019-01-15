import React, { Component } from 'react';
import './_navbar.scss'
import Logo from '../images/logo.png'
import SideBar from './sidebar';

class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }

      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }

    sair(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        window.location.href = './'  
    }
 
    render() {
        return (
            <div>
            <nav class="navbar">
                <div className="box text-center">
                    <img src={Logo} alt="Logo Itechmed soluções medicas" srcset=""/>
                </div>
                        <a href="" onClick={this.sair.bind(this)}><i class="fas fa-times-circle"></i>Sair </a>
            </nav>
            <SideBar/>
      </div>
        );
    }
}

export default Navbar;