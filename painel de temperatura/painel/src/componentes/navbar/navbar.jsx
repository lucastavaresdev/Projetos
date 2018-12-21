import React ,{Component}from 'react';
import './navbar'
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";


class Titulo extends Component {




   

    render() {
        return (
            <p className="cinza-text text-center text-top">{this.props.titulo}</p>
 
        );
    }
}

export default Titulo