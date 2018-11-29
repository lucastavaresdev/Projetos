import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

import Dashboard from './dashboard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userMsg: []
    };

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
  


render(){
      return (
        <Router>
          <div>
            <h2>Menu</h2>
            <ul>
                  {this.state.userMsg.map(data => 
                            <div key={data.mac_beacon}>
                                    <Link to={`/equipamento/${data.mac_beacon}`}>{data.nome_do_beacon}</Link>
                     </div>)}
            </ul>

          {this.state.userMsg.map(data => 
                  <Route  path={`/equipamento/${data.mac_beacon}`}
                  render={props => <Dashboard {...props}  zxc={data.nome_do_beacon}    />}
              />
          )}

          </div>
        </Router>
      );
    }
}
export default App;