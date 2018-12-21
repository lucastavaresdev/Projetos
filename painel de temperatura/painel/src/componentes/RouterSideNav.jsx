import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from "react-sidebar";
import '../scss/style.scss'
import Botao from './sidenav/botao'
import LogoSideBar from '../componentes/sidenav/SideNavConteudo'
 import Titulo from './navbar/navbar';
import axios from "axios";
import jwt_decode from 'jwt-decode'

import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";


//paginas
import Dashboard from './Dashboard'
import Painel from './painel'
import Consolidado from './consolidado'


const mql = window.matchMedia(`(min-width: 1000px)`);

class Rotas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false,
            userMsg: []
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    componentDidMount(){
		axios.get("http://localhost:3001/hcor/beacons_temperatura_atual",{}).then((res)=>{
				//on success
				this.setState({
            userMsg:res.data
		});
		}).catch((error)=>{
			//on error
            alert("Erro da API");
  
        });
        
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
   
            <Router>
                <Sidebar
                    sidebarClassName={'sidebarClassName'}
                    open={this.state.sidebarOpen}
                    docked={this.state.sidebarDocked}
                    onSetOpen={this.onSetSidebarOpen}
                    sidebar={
                        <div>
                            <LogoSideBar />
                           <Botao tituloBotao='Dashboard' iconeMDB=' fa-dashboard' link='/perfil/home' classepersonalizada='espaçoPrimeiroBotao' />
                           <Botao tituloBotao='Consolidado' iconeMDB='fa-cube' link='/perfil/consolidado' />
                            
                            {this.state.userMsg.map(data => 
                                <div key={data.mac_beacon}>
                                      <Botao tituloBotao= {data.nome_do_beacon} iconeMDB='fa-cube' link={`/perfil/equipamento/${data.mac_beacon}`} nome= {data.nome_do_beacon} />
                                </div>
                            )}
                        </div>


                    }
                >
                
                   
                         <Navbar dark expand="md">
                                    <NavbarNav right>
                                            <NavItem>
                                                <div className="md-form my-0">
                                                        <a id="navbarCollapse3" className='btn_hamburger' onClick={() => this.onSetSidebarOpen(true)} navbar>
                                                                    <i className="fa fa-bars"></i>
                                                        </a>
                                                </div>
                                            </NavItem>
                                            </NavbarNav>
                                    </Navbar>

                    <Route path="/perfil/home" component={Dashboard} />
                    <Route path="/perfil/consolidado" component={Consolidado} />
                    
                    {this.state.userMsg.map(data => 
                        <Route  path={`/perfil/equipamento/${data.mac_beacon}`}
                               render={props => <Painel {...props} TitulodaPagina={data.nome_do_beacon} mac={data.mac_beacon} temperatura={data.temperatura} setor={data.nome_setor}/>}
                        />
                    )}    

                        <a href="" className='right' onClick={this.sair.bind(this)} className="nav-link">
                       Sair
                       </a>
              
                 
                                                        
                          </Sidebar >
            </Router >
        

        );
    }
}

export default Rotas;


