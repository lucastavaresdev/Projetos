import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import './base.scss';

import Login from './screens/Login'
import Admin from './screens/Admin'
import Usuario from './screens/Usuario'
import Localizar_Equipamento from './screens/Localizar_Equipamento'
import Listar_Equipamento from './screens/Lista_Equipamentos'
import Navbar from './components/navbar';
import Cadastro_setores from './screens/Cadastro_setores';
import Ronda_Calibracao from './screens/Ronda_Calibracao'
import Relatorios from './screens/Relatorios'



class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <div className="Login">
              <Route exact path="/" component={Login} />
          </div>
          <div className="container-fluid ">
            <div className="screens">
                  <Navbar />
                  <Route exact path="/admin" component={Admin} />
                  <Route exact path="/usuario" component={Usuario} /> 
                  <Route exact path="/localizarequipamentos" component={Localizar_Equipamento} /> 
                  <Route exact path="/listarequipamentos" component={Listar_Equipamento} /> 
                  <Route exact path="/cadastrosetores" component={Cadastro_setores} /> 
                  <Route exact path="/ronda_calibracao" component={Ronda_Calibracao} /> 
                  <Route exact path="/relatorios" component={Relatorios} /> 
            </div>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;