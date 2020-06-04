import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import classnames from "classnames";

class MainHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const {prevScrollpos} = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            <>
                <header className={classnames("header show pc", {"stickyHeader": !this.state.visible})}>
                    <div className="container">
                        <Navbar bg="transparent" variant="dark" className="justify-content-between px-0">
                            <div className="d-flex align-items-center">
                                <Nav.Link href="/" className="headerLogo text-dark px-0 ">
                                    Coach stack<span>.</span>
                                </Nav.Link>

                                <span className="header-browse nav-link effect">
                                    Browse
                                    <img width="8" style={{marginLeft: 5}} src="../../../../images/down-arrow-white.png"
                                         alt="icon"/>
                                    <ul className="header-links__dropdown__content">
                                        <li>
                                            <Link to="/">
                                                Work
                                                 <img width="8" style={{marginLeft: 5}}
                                                      src="../../../../images/right-blue.png" alt="arrow"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                            Body, Love
                                                 <img width="8" style={{marginLeft: 5}}
                                                      src="../../../../images/right-blue.png" alt="arrow"/>
                                           </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Play
                                                 <img width="8" style={{marginLeft: 5}}
                                                      src="../../../../images/right-blue.png" alt="arrow"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Grow
                                                 <img width="8" style={{marginLeft: 5}}
                                                      src="../../../../images/right-blue.png" alt="arrow"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div>
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home" className="effect">Login</Nav.Link>
                                    <Nav.Link href="#link" className="header-button">Start Learning</Nav.Link>
                                </Nav>
                            </div>
                        </Navbar>
                    </div>
                </header>

                <header className={classnames("header show mobile", {"stickyHeader": !this.state.visible})}>
                    <div className="container">
                        <Navbar bg="transparent" variant="dark" className="justify-content-between p-0">
                            <div className="d-flex align-items-center">
                                <Nav.Link href="/" className="headerLogo text-dark px-0 ">
                                    <img width="80" style={{marginLeft: 5}} src="../../../../images/logo-mobile.png"
                                         alt="logog"/>
                                </Nav.Link>
                            </div>
                            <div>
                                <span className="header-browse nav-link effect">
                                    Menu
                                    <img width="8" style={{marginLeft: 5}} src="../../../../images/down-arrow-white.png"
                                         alt="icon"/>
                                    <ul className="header-links__dropdown__content">
                                        <li><Link to="/">Browse</Link></li>
                                        <li><Link to="/">Login</Link></li>
                                        <li><Link to="/" className="header-button">Start Learning</Link></li>
                                        <li><Link to="/">Grow</Link></li>
                                    </ul>
                                </span>
                            </div>
                        </Navbar>
                    </div>
                </header>
            </>
        );
    }
}

export default MainHeader;
