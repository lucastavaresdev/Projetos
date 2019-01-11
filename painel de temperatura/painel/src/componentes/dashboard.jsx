import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area,} from 'recharts';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            nome: '',
        }
    }


    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            nome: decoded.nome,
        })
    }

    
    
    render () {
            const data = [
                {name: 'Segunda',  Temp: 23, amt: 2400},
                {name: 'Terça',  Temp: 24, amt: 2210},
                {name: 'Quarta',  Temp: 22, amt: 2290},
                {name: 'Quinta',  Temp: 21, amt: 2000},
                {name: 'Sexta',  Temp: 18, amt: 2181},
                {name: 'Sabado', Temp: 29, amt: 2500},
                {name: 'Domingo',  Temp: 22, amt: 2100},
            ];


            
                    
                    

                    document.body.classList.remove('login_body');

        return (
            <div className="container bem-vindo">
                <div className="jumbotron ">
                    <div className=" col-sm-12 col-md-12 mx-auto ">
                        <h1 className="text-center">Bem-Vindo <span>{this.state.nome}</span></h1>
                    </div>
                </div>
                <div className="row ">
                    <div className=" col-sm-12 col-md-12  col-lg-6 grafico_temperatura_1  ">
                        <p>Temperatura média diaria</p>
                        <BarChart width={600} height={300} data={data}
                                    margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend />
                            <Bar dataKey="Temp" stackId="a" fill="#8884d8" />
                            </BarChart>
                    </div>

                    <div className=" col-sm-12 col-md-12  col-lg-6 grafico_temperatura_1 ">
                    <p>Verificar Alarmes de Temperatura</p>
                            <h1>2 Setores</h1>
                            <ul>
                                <li className='text-danger'>11:00 Geladeira - Ergometria</li>
                                <li className='text-danger pt-2'>11:35 Sala1 - Vacinas</li>
                            </ul>

                    </div>
                </div>

                    
                </div>
        )
    }
}

export default Profile