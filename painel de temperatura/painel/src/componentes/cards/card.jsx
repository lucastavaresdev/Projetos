import React, { Component } from 'react';
import './card.scss';
import imagem from '../../img/teste.jpg'
class Card extends Component {
    render() {
        return (
        <section>
            <div className="container py-3">
              <div className="card background-color">
                <div className="row ">
                  <div className="col-lg-4 col-md-5">
                        <h1 className='text-center pl-3 pt-4 pb-3 align_vertical'>21ºC</h1>
                    </div>
                    <div className="col-lg-8 col-md-7 info-local-setor" >
                        <h2 className='text-center  align_vertical'>Geladeira</h2>
                        <p className='text-center  align_vertical'>Sala de Medicamentos</p>
                    </div>
                 
                </div>
                <div class="card-footer text-muted"></div>
              </div>
            </div>
        </section>
        )
    }
}

export default Card;

