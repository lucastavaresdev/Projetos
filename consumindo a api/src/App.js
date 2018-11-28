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
		axios.get("http://localhost:3001/agendamento",{}).then((res)=>{
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
                {this.state.userMsg.map(data => <li key={data.id}>{data.ATENDENTE}</li>)}
            </ul>;
  }

}  

export default App;

            
                    const {match: { params } } = this.props;
                    const { mac } = params;
                    var zxc;
                    
                        axios.get(`http://localhost:3001/hcor/beacons_temperatura_atual/${mac}`)
                            .then(function (response) {
                                            console.log(response.data[0].nome_do_beacon);
                                            zxc = response.data[0].nome_do_beacon
                                            return zxc
                         })
                      
                         .catch(function (error) {
                            console.log(error);
                          })

                          console.log(this.props)
						  
						  
						  
						  
						  
						  -----------
						              axios.get(`http://localhost:3001/hcor/beacons_temperatura_atual/${this.props.match.params.mac}`)
            .then(function (response) {
                            console.log(response.data[0].nome_do_beacon);
                            this.setState({
                                value: response.data[0].nome_do_beacon
                            });
            })
      
         .catch(function (error) {
            console.log(error);
          })

   