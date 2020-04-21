import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import SectionHeading from "../../../../components/heading/SectionHeading";
import ChooseCourse from "./ChooseCourse";
import GoalSlider from "../../../../components/sliders/GoalSlider";

class YourGoal extends Component {

    render() {
        return (
            <section className="banner">
                <Container>
                    <SectionHeading heading="Whatever your goal -  we'll get you there"/>
                    <div className="float-left w-100 mt-4">
                        <ChooseCourse/>
                    </div>
                </Container>
                <div className="slider yourGoalSlide">
                    <GoalSlider/>
                </div>
            </section>
        );
    }
}

export default YourGoal;
