import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import SectionHeading from "../../../../components/heading/SectionHeading";
import AccordinItems from "./components/AccordinItems";
import {Link} from "react-router-dom";

class FAQSection extends Component {

    render() {
        return (
            <section className="banner">
                <SectionHeading heading="Frequently Asked Questions"/>

                <Container className="">
                   <div className="float-left w-100 mt-5">
                       <AccordinItems/>
                       <div className="d-flex justify-content-center mt-3">
                           <Link to="/" className="default-button">View More</Link>
                       </div>
                   </div>
                </Container>
            </section>
        );
    }
}

export default FAQSection;
