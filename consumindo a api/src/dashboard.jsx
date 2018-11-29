import React,{Component} from "react";
import axios from "axios";

class Dashboard extends Component{

  constructor(){
		super();
		this.state={
			userMsg: [1]
		}
  }
  
	componentDidMount(){
        const {match: { params } } = this.props;
        const { mac } = params;

		axios.get(`http://localhost:3001/hcor/beacons_temperatura_atual/ ${ mac }`,{}).then((res)=>{
				this.setState({
			userMsg:res.data
		});
				
		}).catch((error)=>{
			//on error
			alert("Erro da API");
		});
	}

            
    

  render(){
    return <ul>
        <h1> teste {this.props.zxc}</h1>
    </ul>;
  }

}  

export default Dashboard;
