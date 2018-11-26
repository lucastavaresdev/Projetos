import React,{Component} from "react";
import axios from "axios";

class UserMsg extends Component{
	constructor(){
		super();
		this.state={
			userMsg:null
		}
	}
	componentDidMount(){
		axios.get("https://jsonplaceholder.typicode.com/posts/1",{}).then((res)=>{
				//on success
				this.setState({
			userMsg:res.data
		});
				
		}).catch((error)=>{
			//on error
			alert("There is an error in API call.");
		});
	}

render(){
	return(
			
				this.state.userMsg!=null &&
				<div>
					<h2>{this.state.userMsg.title}</h2>
					<p>{this.state.userMsg.body}</p>
				</div>
						
		);
	}
}  

export default UserMsg;