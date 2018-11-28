import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBotao extends Component {
    render() {
        return (
            <section className='container botao_sidenav'>
                <div className='row'>
                    <li className={`col-md-12 ${this.props.classepersonalizada}`}>
                        <div className='btn_link'>
                            <div >
                                <Link to={this.props.link} className={`fa ${this.props.iconeMDB}`} ><span>{this.props.tituloBotao}</span></Link>
                            </div>
                        </div>
                    </li>
                </div >
            </section >
        )
    }
}

export default NavBotao

