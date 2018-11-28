import React, { Component } from 'react';
import './_card.scss';
import imagem from '../../img/teste.jpg'
class Card extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='card status mt-3'>
                    <div className='row '>

                        <div className=' col-sm-12 col-md-12 col-xl-5 '>
                            <img className='imagem' src={imagem} />
                        </div>

                        <div className='col-sm-12 col-md-12 col-xl-6'>
                            <p className='text-center'>Geladeira de Vacinas</p>
                            <p className='temperatura text-center   '>25,5°C</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Card;

