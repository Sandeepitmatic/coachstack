import React, {Component} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

class GoalSlider extends Component {

    render() {
        return (
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className="item"><img src="../../../../images/cover_art1.png"/></div>
                <div className="item"><img src="../../../../images/cover_art2.png"/></div>
                <div className="item"><img src="../../../../images/cover_art3.png"/></div>
                <div className="item"><img src="../../../../images/cover_art4.png"/></div>
                <div className="item"><img src="../../../../images/cover_art5.png"/></div>
                <div className="item"><img src="../../../../images/cover_art6.png"/></div>
                <div className="item"><img src="../../../../images/cover_art1.png"/></div>
                <div className="item"><img src="../../../../images/cover_art2.png"/></div>
            </Carousel>
        );
    }
}
export default GoalSlider;
