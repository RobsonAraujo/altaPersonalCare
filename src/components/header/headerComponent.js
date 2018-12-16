import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, Container, HamburgerToggler } from 'mdbreact';
import "./header.scss"

const logo = require('../../images/logo.jpeg')


class NavbarPage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            collapse1: false,
            collapseID: ''
        }
    }


    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    toggleSingleCollapse = collapseId => {
        this.setState({
            ...this.state,
            [collapseId]: !this.state[collapseId]
        });
    }

    render() {
        return (

            <Router>
                <Navbar light>
                    <Container>
                        <NavbarBrand>
                            <img className="logo" src={logo} />
                        </NavbarBrand>
                        <HamburgerToggler color="#2c346a" id="hamburger1" onClick={() => this.toggleSingleCollapse('collapse1')} />


                        <Collapse isOpen={this.state.collapse1} navbar>
                            <NavbarNav left>
                                <NavItem active>
                                    <NavLink to="#!">Meus Agendamentos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#!">Sobre</NavLink>
                                </NavItem>

                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Router >
        );
    }
}

export default NavbarPage;