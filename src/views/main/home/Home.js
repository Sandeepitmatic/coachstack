import React, {Component} from 'react';
import BannerSection from "./sections/bannerSection/BannerSection";
import YourGoal from "./sections/yourGoal/YourGoal";
import AchieveGoal from "./sections/achieveGoal/AchieveGoal";
import ClassesCreators from "./sections/classesCreator/ClassesCreators";
import GridSection from "./sections/gridSection/GridSection";
import AboutUs from "./sections/aboutUs/AboutUs";
import FAQSection from "./sections/faqSection/FAQSection";
import GetAccess from "./sections/getAccess/GetAccess";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }

    render() {
        return (
            <div className="mt-5">
                <BannerSection/>
                <YourGoal/>
                <AchieveGoal/>
                <ClassesCreators/>
                <GridSection/>
                <AboutUs/>
                <FAQSection/>
                <GetAccess/>
            </div>
        );
    }
}

export default Home;
