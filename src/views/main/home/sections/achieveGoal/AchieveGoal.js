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
                                <span>Get ready for a career</span>
                                <p>in high-demand fields like IT, AI and cloud engineering</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="goal-step-item">
                                <img src="../../../../../../images/SVG/patent_blue.svg" alt={'svg'}/>
                                <span>Earn a certificate or degree</span>
                                <p>from a leading university in business, computer science, and more</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="goal-step-item">
                                <img src="../../../../../../images/SVG/class_blue.svg" alt={'svg'}/>
                                <span>Upskill your organisation</span>
                                <p>with on-demand training and development programs</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="float-left w-100">
                    <Container className="mt-5">
                        <GridRightImage
                            heading={'Revive your spark. Re-kindle your fire. Feel alive again.'}
                            detail={'Its too easy to slide into a funk in the modern world. Laziness, procrastination and ' +
                            'helplessness are our enemy! Coach Stack help you start working on what makes you feel alive.'}
                            button={'Browse Projects'}
                            banner={'../../../../images/image1.png'}
                        />
                        <GridLeftImage
                            heading={'Reach your goal with the best coaches in the world.'}
                            detail={'Good coaches are rare to find. We don\'t mean to brag, but we are found them. Rest ' +
                            'assured, you will be learning from experts who have achieved remarkable victories in their ' +
                            'own lives. Not only that, but they actually know how to get others to their goals.'}
                            button={'Get Unlimited Access'}
                            banner={'../../../../images/image2.png'}
                        />
                    </Container>
                </div>
            </section>
        );
    }
}

export default AchieveGoal;
