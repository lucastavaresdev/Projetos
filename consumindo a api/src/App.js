import React,{Component} from "react";
import axios from "axios";

class App extends Component{
  


  constructor(){
		super();
		this.state={
			userMsg: []
		}
  }
  
	componentDidMount(){
		axios.get("http://localhost:3001/usuarios",{}).then((res)=>{
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
                {this.state.userMsg.map(data => <li key={data.id}>{data.nome}</li>)}
            </ul>;
  }

}  

export default App;
