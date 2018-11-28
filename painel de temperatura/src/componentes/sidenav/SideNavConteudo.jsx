import React, { Component } from 'react'
import logo2 from '../../img/logo.png';


class Logo extends Component {
    render() {
        return (
            <div>
                <div className='row logo-bg '>
                    <div className='col-12'>
                        <img src={logo2} width='220px' alt='Logo' className='logo_imagem' />
                    </div>
                </div>
            </div>
        )
    }
}




export default Logo

