import React, { Component } from 'react';
import './_navbar.scss'
import Logo from '../images/logo.png'
import Sidebar from "react-sidebar";

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
            <img src={Logo} alt="Logo Itechmed soluções medicas" srcset=""/>
                <a href="" onClick={this.sair.bind(this)}><i class="fas fa-times-circle"></i>Sair </a>
            </nav>
       
        <Sidebar sidebar={<b>Sidebar content dsadsadsdsa</b>} 
            open={this.state.sidebarOpen} 
            onSetOpen={this.onSetSidebarOpen}  
            styles={{ sidebar: { background: "white" } }}
            rootClassName = 'sidebar'
            >


                        <button onClick={() => this.onSetSidebarOpen(true)}> Open sidebar </button>
         </Sidebar>

      </div>
        );
    }
}

export default Navbar;





