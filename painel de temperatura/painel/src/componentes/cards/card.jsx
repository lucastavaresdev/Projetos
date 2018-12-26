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
                  <div className="col-lg-5 col-md-5">
                        <h1 className='text-center pl-3 pt-4 pb-3 align_vertical'>{this.props.temperatura_atual}ºC</h1>
                    </div>
                    <div className="col-lg-7 col-md-7 info-local-setor" >
                        <h2 className='text-center  align_vertical'>{this.props.equipamento}</h2>
                        <p className='text-center  align_vertical'>{this.props.setor}</p>
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

