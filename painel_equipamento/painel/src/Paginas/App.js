import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './login/Login'
import Admin from '../Paginas/Admin'
import Usuario from '../Paginas/Usuario'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <div className="container">
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/usuario" component={Usuario} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;



