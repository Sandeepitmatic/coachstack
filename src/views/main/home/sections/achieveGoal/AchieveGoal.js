import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import SectionHeading from "../../../../components/heading/SectionHeading";
import Col from "react-bootstrap/Col";
import GridRightImage from "../../../../components/grid/GridRightImage";
import GridLeftImage from "../../../../components/grid/GridLeftImage";

class AchieveGoal extends Component {

    render() {
        return (
            <section className="banner">
                <Container>
                    <div className="float-left w-100 mb-5">
                        <SectionHeading heading="Achieve your goals with CoachStack"/>
                    </div>
                    <Row className="goal-step">
                        <Col md={3}>
                            <div className="goal-step-item">
                                <img src="../../../../../../images/SVG/settings_blue.svg" alt={'svg'}/>
                                <span>Learn the latest skills</span>
                                <p>Like business analytics. graphic design, Python, and more</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="goal-step-item">
                                <img src="../../../../../../images/SVG/career_blue.svg" alt={'svg'}/>
                                <span>Learn the latest skills</span>
                                <p>Like business analytics. graphic design, Python, and more</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="goal-step-item">
                                <img src="../../../../../../images/SVG/patent_blue.svg" alt={'svg'}/>
                                <span>Learn the latest skills</span>
                                <p>Like business analytics. graphic design, Python, and more</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="goal-step-item">
                                <img src="../../../../../../images/SVG/class_blue.svg" alt={'svg'}/>
                                <span>Learn the latest skills</span>
                                <p>Like business analytics. graphic design, Python, and more</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-5">
                    <GridRightImage
                        heading={'Revive your spark. Re-Kindle your fire. Feel alive again.'}
                        detail={'Its too easy to slide into a funk in the modern world. Laziness, procrastination and ' +
                        'helplessness are our enemy! Coach Stack help you start working on what makes you feel alive.'}
                        button={'Browse Projects'}
                        banner={'../../../../images/image1.png'}
                    />
                    <GridLeftImage
                        heading={'Online courses for the next part of your life journey.'}
                        detail={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. The first\n' +
                        '                                    line of Lorem Ipsum'}
                        button={'Learn More'}
                        banner={'../../../../images/image2.png'}
                    />
                </Container>
            </section>
        );
    }
}

export default AchieveGoal;
