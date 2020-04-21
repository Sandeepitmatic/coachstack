import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import SectionHeading from "../../../../components/heading/SectionHeading";
import AccordinItems from "./components/AccordinItems";

class FAQSection extends Component {

    render() {
        return (
            <section className="banner">
                <SectionHeading heading="Frequently Asked Questions"/>

                <Container className="">
                   <div className="float-left w-100 mt-5">
                       <AccordinItems/>
                   </div>
                </Container>
            </section>
        );
    }
}

export default FAQSection;
