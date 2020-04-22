import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import SectionHeading from "../../../../components/heading/SectionHeading";
import ChooseCourse from "./ChooseCourse";
import GoalSlider from "../../../../components/sliders/GoalSlider";

class YourGoal extends Component {

    render() {
        return (
            <section className="banner" id={'section1'}>
                <Container>
                    <SectionHeading heading="Whatever your goal -  we'll get you there"/>
                    <ChooseCourse/>
                </Container>
                <div className="slider yourGoalSlide">
                    <GoalSlider/>
                </div>
            </section>
        );
    }
}

export default YourGoal;
