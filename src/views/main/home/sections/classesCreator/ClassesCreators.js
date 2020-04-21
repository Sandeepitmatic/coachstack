import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import SectionHeading from "../../../../components/heading/SectionHeading";
import ClassesSlider from "../../../../components/sliders/ClassesSlider";

class ClassesCreators extends Component {

    render() {
        return (
            <section className="classes-creator">
                <Container>
                    <SectionHeading lightBack={'lightBack'}
                                    heading="Classes Taught by Real Creators"
                                    subHeading={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     The first line of Lorem Ipsum`}
                    />
                </Container>
                <div className="slider">
                    <ClassesSlider/>
                </div>
            </section>
        );
    }
}

export default ClassesCreators;
