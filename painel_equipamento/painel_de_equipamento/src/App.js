import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './base.scss';

import Login from './screens/Login'
import Admin from './screens/Admin'
import Usuario from './screens/Usuario'
import Equipamentos from './screens/Equipamentos'
import Navbar from './components/navbar';

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
                  <Route exact path="/equipamentos" component={Equipamentos} /> 
            </div>
          </div>
          

        </div>
      </Router>
    );
  }
}



export default App;



