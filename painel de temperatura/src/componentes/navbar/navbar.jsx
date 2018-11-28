import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class NavbarFeatures extends React.Component {

    render() {
        return (
            <div className='col-6'>
                <strong className='tituloPagina text-left'>{this.props.tituloPag}</strong>
            </div>

        );
    }
}

export default NavbarFeatures