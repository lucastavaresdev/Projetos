import React ,{Component}from 'react';
import jwt_decode from 'jwt-decode'

class Navbar extends Component {

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

    }

    sair(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div className='col-6'>
                <strong className='tituloPagina text-left'>  {this.props.setor} {this.props.sinal} {this.props.tituloPag}
                </strong>
                       <a href="" className='left' onClick={this.sair.bind(this)} className="nav-link">
                       X
                </a>
            </div>
        );
    }
}

export default Navbar