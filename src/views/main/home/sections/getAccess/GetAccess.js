import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import SectionHeading from "../../../../components/heading/SectionHeading";
import {Link} from "react-router-dom";

class GetAccess extends Component {

    render() {
        return (
            <section className="get-access" style={{
                backgroundImage: "url(" + "../../../../../../images/background_strip.png" + ")",
            }}>
                <Container>
                    <SectionHeading heading="Try Coach Stack Unlimited - Risk Free."
                                    subHeading={'Give the unlimited plan a try today, risk free. Your purchase is ' +
                                    'covered by a 30-day guarantee.'}
                    />
                    <div className="float-left w-100 d-flex align-items-center justify-content-center mt-5">
                        <Link to="/" className="default-button">Get Full Access</Link>
                    </div>
                </Container>
            </section>
        );
    }
}

export default GetAccess;
