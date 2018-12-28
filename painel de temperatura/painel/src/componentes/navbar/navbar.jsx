import React ,{Component}from 'react';
import './navbar'
class Titulo extends Component {
    render() {
        return (
            <p className="cinza-text text-center text-top">{this.props.titulo}</p>
 
        );
    }
}

export default Titulo