import React, {Component} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

class AboutSlider extends Component {

    render() {
        return (
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className="about-item-container">
                    <div className="about-item">
                        <img src="../../../../images/s1.jpg"/>
                        <span>Danica Smith</span>
                        <p>Coachstack is a life saver. I don't have the time or money for a collage education. My goal
                            is to become a freelance web developer, and thanks to CoachStack, i;m really close.</p>
                    </div>
                </div>
                <div className="about-item-container">
                    <div className="about-item">
                        <img src="../../../../images/s1.jpg"/>
                        <span>Danica Smith</span>
                        <p>Coachstack is a life saver. I don't have the time or money for a collage education. My goal
                            is to become a freelance web developer, and thanks to CoachStack, i;m really close.</p>
                    </div>
                </div>
                <div className="about-item-container">
                    <div className="about-item">
                        <img src="../../../../images/s1.jpg"/>
                        <span>Danica Smith</span>
                        <p>Coachstack is a life saver. I don't have the time or money for a collage education. My goal
                            is to become a freelance web developer, and thanks to CoachStack, i;m really close.</p>
                    </div>
                </div>
                <div className="about-item-container">
                    <div className="about-item">
                        <img src="../../../../images/s1.jpg"/>
                        <span>Danica Smith</span>
                        <p>Coachstack is a life saver. I don't have the time or money for a collage education. My goal
                            is to become a freelance web developer, and thanks to CoachStack, i;m really close.</p>
                    </div>
                </div>
                <div className="about-item-container">
                    <div className="about-item">
                        <img src="../../../../images/s1.jpg"/>
                        <span>Danica Smith</span>
                        <p>Coachstack is a life saver. I don't have the time or money for a collage education. My goal
                            is to become a freelance web developer, and thanks to CoachStack, i;m really close.</p>
                    </div>
                </div>
            </Carousel>
        );
    }
}

export default AboutSlider;
