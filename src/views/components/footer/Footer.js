import React, {Component} from 'react';
import {Button, Col, Container, Row,} from "react-bootstrap";
import {Link} from "react-router-dom";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <footer className="footer float-left w-100">
                <Container>
                    <Row>
                        <Col md={2} xs={4}>
                            <ul>
                                <li>Links</li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Browse</Link></li>
                                <li><Link to="/">Classes</Link></li>
                                <li><Link to="/">Gifts</Link></li>
                                <li><Link to="/">Categories</Link></li>
                                <li><Link to="/">Start Now</Link></li>
                            </ul>
                        </Col>
                        <Col md={2} xs={4}>
                            <ul>
                                <li>Courses</li>
                                <li><Link to="/">Courses</Link></li>
                                <li><Link to="/">Membership</Link></li>
                                <li><Link to="/">Workshops</Link></li>
                                <li><Link to="/">Coaching</Link></li>
                                <li><Link to="/">Careers</Link></li>
                                <li><Link to="/">Grands</Link></li>
                                <li><Link to="/">Help</Link></li>
                            </ul>
                        </Col>
                        <Col md={2} xs={4}>
                            <ul>
                                <li>Legel</li>
                                <li><Link to="/">Testimonials</Link></li>
                                <li><Link to="/">FAQ's</Link></li>
                                <li><Link to="/">Terms & Condition</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Groups</Link></li>
                                <li><Link to="/">Support</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <ul className="download-app">
                                <li>Get Our App</li>
                                <li><img src="../../../../images/google_download.png" alt="png"/></li>
                                <li><img src="../../../../images/apple_download.png" alt="png"/></li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <ul className="signup-list">
                                <li>SIGN UP TO GET THE LATEST</li>
                                <li>
                                    <div className="footer-form position-relative mb-3">
                                        <input className="form-control" placeholder="Your Email"/>
                                        <Button className="input-button">Submit</Button>
                                    </div>
                                </li>
                                <li><img src="../../../../images/SVG/phone.svg" alt="icon"/>+888 123 4567</li>
                                <li><img src="../../../../images/SVG/mail.svg" alt="icon"/>info@coachstack.com</li>
                                <li><img src="../../../../images/SVG/live%20chat.svg" alt="icon"/>start a live chat</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container className="copyright">
                    <span>©2020 Copyright CoachStack.All rights reserved.</span>
                   <ul>
                       <li><Link><img src="../../../../images/SVG/facebook-white.svg" alt="icon"/></Link></li>
                       <li><Link><img src="../../../../images/SVG/twitter-white.svg" alt="icon"/></Link></li>
                       <li><Link><img src="../../../../images/SVG/linkedin-white.svg" alt="icon"/></Link></li>
                       <li><Link><img src="../../../../images/SVG/instagram-white.svg" alt="icon"/></Link></li>
                   </ul>
                </Container>
            </footer>
        );
    }
}

export default Footer;
