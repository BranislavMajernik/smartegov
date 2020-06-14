import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';    

export default class Menu extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
        return(
            <div>
            <Navbar style={{backgroundColor: '#3377AA'}} dark expand="md">
            <NavbarBrand href="/">Úrad pre informatizáciu SR / Úrad vlády SR</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/">Pomoc</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">O aplikácii</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
            </div>
        );
    }
}