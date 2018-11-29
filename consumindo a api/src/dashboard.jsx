import React,{Component} from "react";
import axios from "axios";

class Dashboard extends Component{

  constructor(){
		super();
		this.state={
			userMsg: []
		}
  }
  
	componentDidMount(){
		axios.get("http://localhost:3001/hcor/beacons_temperatura_atual/DAEE003F9A01",{}).then((res)=>{
				//on success
				this.setState({
			userMsg:res.data
		});
				
		}).catch((error)=>{
			//on error
			alert("Erro da API");
		});
	}

			
  //console.log(this.state.userMsg)

  render(){
    return <ul>
                {this.state.userMsg.map(data => <li key={data.mac_beacon}>{data.nome_do_beacon}</li>)}
            </ul>;
  }

}  

export default Dashboard;
