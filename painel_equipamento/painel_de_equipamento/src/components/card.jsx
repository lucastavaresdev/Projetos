import React, { Component } from 'react';

class card extends Component {
    render() {
        return (
            <div className="col-md-10 offset-1">
            <div className={`card box-card ${this.props.click}`}>
                    <div className="card-body text-center">
                    <div className="icone-card pt-4 pb-4 "><i  className={`fas fa-${this.props.icone}  fa-2x`}></i></div>
                    <p className="texto-card">{this.props.qtd}</p>
                    <p className='pb-3 footer-card'>{this.props.nome}</p>
                    </div>
            </div>
     </div>
        );
    }
}

export default card;


