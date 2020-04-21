import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import SectionHeading from "../../../../components/heading/SectionHeading";
import AboutSlider from "../../../../components/sliders/AboutSlider";

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
                    <AboutSlider/>
                </div>
            </section>
        );
    }
}

export default AboutUs;
