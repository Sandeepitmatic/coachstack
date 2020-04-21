import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import SectionHeading from "../../../../components/heading/SectionHeading";

class FAQSection extends Component {

    render() {
        return (
            <section className="banner">
                <SectionHeading heading="Frequently Asked Questions"
                />
                <Container className="mt-5">
                </Container>
            </section>
        );
    }
}

export default FAQSection;
