import React, { Component } from 'react'
import Card from './cards/card'
import NavBar from './navbar/navbar'

class Consolidado extends Component {
    render() {
        return (
            <div>
                <NavBar tituloPag={'Consolidado'} />
                <div className='container-fluid'>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <Card />
                        </div>
                        <div className='col-md-4'>
                            <Card />
                        </div>
                        <div className='col-md-4'>
                            <Card />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Consolidado
