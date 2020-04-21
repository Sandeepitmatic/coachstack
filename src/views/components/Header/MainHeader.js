import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";

class MainHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }
    }

    render() {
        return (
            <header className={this.state.active ? 'header show' : 'header'}>
                <div className="container">
                    <Navbar bg="transparent" variant="dark" className="justify-content-between px-0">
                        <div className="d-flex align-items-center">
                            <Nav.Link href="/" className="header-logo text-dark px-0 mr-5">
                                <img src="../../../../images/white-logo.png" alt="logo"/>
                            </Nav.Link>
                        </div>
                        <div>
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Login</Nav.Link>
                                <Nav.Link href="#link" className="header-button">Start Now</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar>
                </div>
            </header>
        );
    }
}

export default MainHeader;
