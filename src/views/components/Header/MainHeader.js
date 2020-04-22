import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

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
                            <Nav.Link href="/" className="header-logo text-dark px-0 ">
                                <img src="../../../../images/white-logo.png" alt="logo"/>
                            </Nav.Link>

                            <Link className="header-browse nav-link effect" to={'/#section1'}>
                                Browse
                                <img width="10" src="../../../../images/down-arrow.png" alt="icon"/>
                            </Link>
                        </div>
                        <div>
                            <Nav className="mr-auto">
                                <Nav.Link href="#home" className="effect">Login</Nav.Link>
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
