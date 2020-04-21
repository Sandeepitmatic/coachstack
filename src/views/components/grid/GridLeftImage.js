import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class GridLeftImage extends Component {

    render() {
        return (
            <>
                <Row className="d-flex align-items-center pcScreen">
                    <Col md={6} className="px-0">
                        <img width={"100%"} src={this.props.banner} alt="banner"/>
                    </Col>
                    <Col md={6} className="px-0 pl-5">
                        <div className="banner-content">
                            <h1>{this.props.heading}</h1>
                            <p>{this.props.detail}</p>
                            <Link to="/" className="default-button">{this.props.button}</Link>
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mobileScreen">
                    <Col md={6} className="px-0 pl-5">
                        <div className="banner-content">
                            <h1>{this.props.heading}</h1>
                            <p>{this.props.detail}</p>
                            <Link to="/" className="default-button">{this.props.button}</Link>
                        </div>
                    </Col>
                    <Col md={6} className="px-0">
                        <img width={"100%"} src={this.props.banner}  alt="banner"/>
                    </Col>
                </Row>
            </>
        );
    }
}

export default GridLeftImage;
