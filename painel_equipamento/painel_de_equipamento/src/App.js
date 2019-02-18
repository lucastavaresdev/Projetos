import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './base.scss';

import Login from './screens/Login'
import Admin from './screens/Admin'
import Usuario from './screens/Usuario'
import Localizar_Equipamento from './screens/Localizar_Equipamento'
import Listar_Equipamento from './screens/Lista_Equipamentos'
import Navbar from './components/navbar';
import Cadastro_setores from './screens/Cadastro_setores';
import Ronda_Calibracao from './screens/Ronda_Calibracao'
import Listar_Ronda from './screens/Listar_Ronda'
import Listar_Calibracao from './screens/Listar_Calibracao'



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
                  <Route exact path="/listar_ronda" component={Listar_Ronda} /> 
                  <Route exact path="/listar_calibracao" component={Listar_Calibracao} /> 
            </div>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;