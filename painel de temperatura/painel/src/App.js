import React, { Component } from 'react';
import SideNav from './componentes/RouterSideNav'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './componentes/login/login'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <div className="container">
            <Route   path="/perfil" component={SideNav} />
          </div>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;