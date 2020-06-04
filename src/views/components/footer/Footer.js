import React, {Component} from 'react';
import {Button, Col, Container, Row,} from "react-bootstrap";
import {Link} from "react-router-dom";

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    render() {
        return (
            <footer className="footer float-left w-100">
                <Container>
                    <Row>
                        <Col md={2} xs={6}>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Membership</Link></li>
                                <li><Link to="/">Coaches</Link></li>
                                <li><Link to="/">Start Learning</Link></li>
                            </ul>
                        </Col>
                        <Col md={2} xs={6}>
                            <ul>
                                <li><Link to="/">Work</Link></li>
                                <li><Link to="/">Body</Link></li>
                                <li><Link to="/">Love</Link></li>
                                <li><Link to="/">Play</Link></li>
                                <li><Link to="/">Grow</Link></li>
                            </ul>
                        </Col>
                        <Col md={2} xs={6}>
                            <ul>
                                <li><Link to="/">Testimonials</Link></li>
                                <li><Link to="/">FAQ’s</Link></li>
                                <li><Link to="/">Terms & Condition</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Jobs</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                            </ul>
                        </Col>
                        <Col md={3} xs={12}>
                            <ul className="download-app">
                                <li className="mb-2"><img src="../../../../images/appstore.png" alt="png"/></li>
                                <li><img src="../../../../images/googlepay.png" alt="png"/></li>
                            </ul>
                        </Col>
                        <Col md={3} xs={12}>
                            <ul className="signup-list">
                                <li>Subscribe to Our News</li>
                                <li>
                                    <div className="footer-form position-relative mb-3">
                                        <input className="form-control" placeholder="Your Email"/>
                                        <Button className="input-button">Subscribe</Button>
                                    </div>
                                </li>
                            </ul>
                            <ul className="d-flex flex-row social-links">
                                <li>
                                    <Link to="/">
                                        <img className="dark" src="../../../../images/social/darkinsta.png" alt="icon"/>
                                        <img className="light" src="../../../../images/social/lightnsta.png"
                                             alt="icon"/>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/">
                                        <img className="dark" src="../../../../images/social/darktweeter.png"
                                             alt="icon"/>
                                        <img className="light" src="../../../../images/social/lighttweeter.png"
                                             alt="icon"/>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/">
                                        <img className="dark" src="../../../../images/social/darkfb.png" alt="icon"/>
                                        <img className="light" src="../../../../images/social/lightfb.png" alt="icon"/>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/">
                                        <img className="dark" src="../../../../images/social/darktube.png" alt="icon"/>
                                        <img className="light" src="../../../../images/social/lightube.png" alt="icon"/>
                                    </Link>
                                </li>
                            </ul>


                            <div className="float-left w-100 mt-5 ">
                                <Button onClick={this.scrollTop} className="scroll-to-top rounded float-right">
                                    <img className="light" src="../../../../images/svg/butt_top.svg" alt="icon"/>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;
