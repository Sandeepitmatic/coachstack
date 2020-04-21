import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import GridRightImage from "../../../../components/grid/GridRightImage";

class BannerSection extends Component {

    render() {
        return (
            <section className="banner dark-back">
                <Container>
                    <GridRightImage
                        heading={'Online courses for the mext part of your life journey.'}
                        detail={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. The first\n' +
                        '                                    line of Lorem Ipsum'}
                        button={'Learn More'}
                        banner={'../../../../images/banner.png'}
                    />

                    <Row className="d-flex flex-column align-items-center mt-5 coaches-feat">
                        <h2 className="mb-4">Coaches Featured In</h2>
                        <ul className="float-left w-100 d-flex flex-row justify-content-between">
                            <li><img height="30px" src="../../../../images/apple_download.png" alt="icon"/></li>
                            <li><img height="30px" src="../../../../images/apple_download.png" alt="icon"/></li>
                            <li><img height="30px" src="../../../../images/apple_download.png" alt="icon"/></li>
                            <li><img height="30px" src="../../../../images/apple_download.png" alt="icon"/></li>
                            <li><img height="30px" src="../../../../images/apple_download.png" alt="icon"/></li>
                            <li><img height="30px" src="../../../../images/apple_download.png" alt="icon"/></li>
                        </ul>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default BannerSection;
