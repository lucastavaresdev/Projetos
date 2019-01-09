import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Admin from '../Paginas/Admin'
import Login from '../Paginas/Login'
import Usuario from '../Paginas/Usuario'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
            <div>
              <Route path="/" exact component={Login} />
              <Route path="/admin/" component={Admin} />
              <Route path="/usuario/" component={Usuario} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
