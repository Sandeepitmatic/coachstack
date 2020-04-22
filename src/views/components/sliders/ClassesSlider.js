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
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

class ClassesSlider extends Component {

    render() {
        return (
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["", ""]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className="item">
                    <img src="../../../../images/classes/coach1.png"/>
                    <div>
                        <span>Chris Voss</span>
                        <span>Teacher The Art of Nefotiation</span>
                    </div>
                </div>
                <div className="item">
                    <img src="../../../../images/classes/coach2.png"/>
                    <div>
                        <span>Chris Voss</span>
                        <span>Teacher Cooking</span>
                    </div>
                </div>
                <div className="item">
                    <img src="../../../../images/classes/coach3.png"/>
                    <div>
                        <span>Chris Voss</span>
                        <span>Teaches Acting</span>
                    </div>
                </div>
                <div className="item">
                    <img src="../../../../images/classes/coach4.png"/>
                    <div>
                        <span>Chris Voss</span>
                        <span>Teaches Filmmaking</span>
                    </div>
                </div>
                <div className="item">
                    <img src="../../../../images/classes/coach5.png"/>
                    <div>
                        <span>Chris Voss</span>
                        <span>Teaches Photography</span>
                    </div>
                </div>
                <div className="item">
                    <img src="../../../../images/classes/coach6.png"/>
                    <div>
                        <span>Chris Voss</span>
                        <span>Teaches Interior Designer</span>
                    </div>
                </div>
                <div className="item">
                    <img src="../../../../images/classes/coach7.png"/>
                    <div>
                        <span>Chris Voss</span>
                        <span>Teacher The Art of Nefotiation</span>
                    </div>
                </div>
            </Carousel>
        );
    }
}
export default ClassesSlider;
