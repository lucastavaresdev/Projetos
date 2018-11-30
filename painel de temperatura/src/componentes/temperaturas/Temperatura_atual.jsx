import React , {Component } from 'react';
import axios from 'axios'



class Temperatura_Atual extends Component {
    
    constructor(props){
        super(props)
           this.state = {
            temp: this.props.state && this.props.temperatura
            }
        }
         
        componentDidUpdate(){
          axios.get(`http://localhost:3001/hcor/componente_temperatura_atual/${this.props.tempertatura_atual}`)
                    .then((res)=>{
                        this.setState({
                        temp: res.data[0].temperatura
                    })
                })
            }

    render(){
        return(
            <div className='col-md-5 tamanho text-center' >
                    <h1 className='mt-5 '>Temperatura Atual</h1>
                    <h3 className='titulo_temperatura_atual p-1'>{this.state.temp} °C</h3>
            </div>
        )
    }
}

export default Temperatura_Atual;

