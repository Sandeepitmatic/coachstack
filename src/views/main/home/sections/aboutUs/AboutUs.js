import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import SectionHeading from "../../../../components/heading/SectionHeading";

class AboutUs extends Component {

    render() {
        return (
            <section className="classes-creator">
                <Container>
                    <SectionHeading lightBack={'lightBack'}
                                    heading="What People Say About Us"
                    />
                </Container>
                <div className="slider">

                </div>
            </section>
        );
    }
}

export default AboutUs;
