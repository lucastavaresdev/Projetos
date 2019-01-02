import React, { Component } from 'react';
import SideNav from './componentes/RouterSideNav'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './componentes/login/login'
import Registrar from './componentes/registrar'
class App extends Component {
  

  render() {

    return (
      <Router>
        <div>
            <div className='App '>
              <Route exact path="/" component={Login} />
              <Route exact path="/registrar" component={Registrar} />
          </div>
          
          <div className="container ">
          
            <Route   path="/perfil" component={SideNav} />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;