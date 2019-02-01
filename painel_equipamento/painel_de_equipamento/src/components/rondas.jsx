import React, { Component } from 'react'


class Rondas extends Component {
    state = {  }


    render() {
        return (
            <div className='Container-fluid'>
                    <div className="row">
                            <div className="col-md-6">
                                    <p>Rondas</p>
                            </div>
                            <div className="col-md-6 justify-content-end" >
                                <select class="dropdown" >
                                    <option value="" selected="selected">Grafico</option>
                                    <option value="dps1">DataPoints 1</option>
                                    <option value="dps2">DataPoints 2</option>
                                    <option value="dps3">DataPoints 3</option>
                                    <option value="dps4">DataPoints 4</option>
                                </select>
                            </div>
                </div>
            </div>
        );
    }
}

export default Rondas;