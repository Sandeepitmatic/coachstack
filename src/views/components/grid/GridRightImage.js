import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class GridRightImage extends Component {

    render() {
        return (
            <Row className="d-flex align-items-center">
                <Col md={6} className="px-0">
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
        );
    }
}

export default GridRightImage;
