import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import '../scss/style.scss'
import Botao from './sidenav/botao'
import ConteudoTopoNavBar from '../componentes/sidenav/SideNavConteudo'
import Navbar from './navbar/navbar';

//paginas
import Dashboard from './dashboard'
import Consolidado from './consolidado'

const mql = window.matchMedia(`(min-width: 1000px)`);

class Rotas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false,
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
                            <ConteudoTopoNavBar />
                            <Botao tituloBotao='Dashboard' iconeMDB=' fa-dashboard' link='/' classepersonalizada='espaçoPrimeiroBotao' />
                            <Botao tituloBotao='Consolidado' iconeMDB='fa-cube' link='consolidado' />
                        </div>

                    }
                >
                    <div className='container-fluid navbar-cel' light>
                        <div className='row cinzabg navbar justify-content-end  '>
                            <Navbar />
                            <div className='col-6 text-right'>
                                <a className='btn_hamburger' onClick={() => this.onSetSidebarOpen(true)}>
                                    <i className="fa fa-bars"></i>
                                </a>
                            </div >
                        </div>
                    </div>

                    <Route exact path="/" component={Dashboard} />
                    <Route path="/consolidado" component={Consolidado} />
                </Sidebar >
            </Router >
        );
    }
}

export default Rotas;