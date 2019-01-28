import React , {Component}from 'react';
import './scss/_Admin.scss'
import '../components/_card.scss'
import Card from '../components/card'

class Admin extends Component {

     componentDidMount(){
        document.querySelector('.screens').style.display = 'block';
      }

    render () {
        return (
                <div>   
                        <div className="container-fluid">
                                <div className="row ">
                                        <div className="col-md-4 col-sm-12 mt-70">
                                              <Card  nome='Equipamentos' qtd='100' icone='tools'/>
                                        </div>
                                        <div className="col-md-4 col-sm-12 mt-70">
                                              <Card  nome='Em manutenção' qtd='3'/>
                                        </div>
                                        <div className="col-md-4 col-sm-12 mt-70">
                                              <Card  nome='Total de Verificados' qtd='20'/>
                                        </div>

                                </div>
                        </div>
                </div>
        )
    }
}

export default Admin