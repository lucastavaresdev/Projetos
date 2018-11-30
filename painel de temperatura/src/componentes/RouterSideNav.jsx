import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from "react-sidebar";
import '../scss/style.scss'
import Botao from './sidenav/botao'
import ConteudoTopoNavBar from '../componentes/sidenav/SideNavConteudo'
import Navbar from './navbar/navbar';
import axios from "axios";

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
                           <Botao tituloBotao='Dashboard' iconeMDB=' fa-dashboard' link='/v' classepersonalizada='espaçoPrimeiroBotao' />
                           <Botao tituloBotao='Consolidado' iconeMDB='fa-cube' link='/' />
                                       {this.state.userMsg.map(data => 
                                       <div key={data.mac_beacon}>
                                                <Botao tituloBotao= {data.nome_do_beacon} iconeMDB='fa-cube' link={`/equipamento/${data.mac_beacon}`} nome= {data.nome_do_beacon} />
                                       </div>)}
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
                 
                    <Route exact path="/" component={Consolidado} />
                    
                    {this.state.userMsg.map(data => 
                  <Route  path={`/equipamento/${data.mac_beacon}`}
                             render={props => <Dashboard {...props}  TitulodaPagina={data.nome_do_beacon} mac={data.mac_beacon} temperatura={data.temperatura} setor={data.nome_setor}/>}
                        />
                    )}                     
                          </Sidebar >
            </Router >
        

        );
    }
}

export default Rotas;