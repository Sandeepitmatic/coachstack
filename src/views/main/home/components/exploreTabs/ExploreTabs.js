import React, {Component} from 'react';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import Carousel from 'react-multi-carousel';
// const responsive = {
//     desktop: {
//         breakpoint: {max: 3000, min: 1024},
//         items: 6,
//         slidesToSlide: 1 // optional, default to 1.
//     },
//     tablet: {
//         breakpoint: {max: 1024, min: 464},
//         items: 1,
//         slidesToSlide: 1 // optional, default to 1.
//     },
//     mobile: {
//         breakpoint: {max: 464, min: 0},
//         items: 1,
//         slidesToSlide: 1 // optional, default to 1.
//     }
// };

class ExploreTabs extends Component {

    render() {
        return (
            <>
                <div className="exploreTab">
                    <ul className="d-flex flex-row">
                        <li className="active"><Link to="/">All</Link></li>
                        <li><Link to="/">Work</Link></li>
                        <li><Link to="/">Body</Link></li>
                        <li><Link to="/">Lover</Link></li>
                        <li><Link to="/">Play</Link></li>
                        <li><Link to="/">Grow</Link></li>
                    </ul>
                </div>

                <OwlCarousel
                    className="owl-theme pc"
                    items={6}
                    autoPlay={true}
                    dots={false}
                    loop={true}
                    margin={0}
                    nav={true}
                    navSpeed={1000}
                    lazyLoad={true}
                    autoplaySpeed={1000}
                    smartSpeed={1000}
                >
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img src="../../../../images/cover/cover4.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img src="../../../../images/cover/cover5.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img src="../../../../images/cover/cover3.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img src="../../../../images/cover/cover4.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img src="../../../../images/cover/cover5.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img src="../../../../images/cover/cover6.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img src="../../../../images/cover/cover5.jpg" alt="banner"/>
                    </div>

                </OwlCarousel>

                {/*<Carousel*/}
                {/*    swipeable={false}*/}
                {/*    draggable={false}*/}
                {/*    showDots={false}*/}
                {/*    responsive={responsive}*/}
                {/*    ssr={false} // means to render carousel on server-side.*/}
                {/*    infinite={true}*/}
                {/*    autoPlay={this.props.deviceType !== "mobile" ? true : true}*/}
                {/*    autoPlaySpeed={1}*/}
                {/*    keyBoardControl={true}*/}
                {/*    customTransition="all 1"*/}
                {/*    transitionDuration={1000}*/}
                {/*    containerClass="carousel-container pc"*/}
                {/*    deviceType={this.props.deviceType}*/}
                {/*    dotListClass="custom-dot-list-style"*/}
                {/*    itemClass="carousel-item-padding-40-px"*/}
                {/*>*/}
                {/*    <div className="item">*/}
                {/*        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">*/}
                {/*            <h4>Urna congue egestas</h4>*/}
                {/*            <div className="coachDetial d-flex flex-row align-items-center">*/}
                {/*                <img src="../../../../images/user.png" alt="user"/>*/}
                {/*                <p className="p-small">Coach’s Name</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <img src="../../../../images/cover/cover4.jpg" alt="banner"/>*/}
                {/*    </div>*/}
                {/*    <div className="item">*/}
                {/*        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">*/}
                {/*            <h4>Urna congue egestas</h4>*/}
                {/*            <div className="coachDetial d-flex flex-row align-items-center">*/}
                {/*                <img src="../../../../images/user.png" alt="user"/>*/}
                {/*                <p className="p-small">Coach’s Name</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <img src="../../../../images/cover/cover5.jpg" alt="banner"/>*/}
                {/*    </div>*/}
                {/*    <div className="item">*/}
                {/*        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">*/}
                {/*            <h4>Urna congue egestas</h4>*/}
                {/*            <div className="coachDetial d-flex flex-row align-items-center">*/}
                {/*                <img src="../../../../images/user.png" alt="user"/>*/}
                {/*                <p className="p-small">Coach’s Name</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <img src="../../../../images/cover/cover3.jpg" alt="banner"/>*/}
                {/*    </div>*/}
                {/*    <div className="item">*/}
                {/*        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">*/}
                {/*            <h4>Urna congue egestas</h4>*/}
                {/*            <div className="coachDetial d-flex flex-row align-items-center">*/}
                {/*                <img src="../../../../images/user.png" alt="user"/>*/}
                {/*                <p className="p-small">Coach’s Name</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <img src="../../../../images/cover/cover4.jpg" alt="banner"/>*/}
                {/*    </div>*/}
                {/*    <div className="item">*/}
                {/*        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">*/}
                {/*            <h4>Urna congue egestas</h4>*/}
                {/*            <div className="coachDetial d-flex flex-row align-items-center">*/}
                {/*                <img src="../../../../images/user.png" alt="user"/>*/}
                {/*                <p className="p-small">Coach’s Name</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <img src="../../../../images/cover/cover5.jpg" alt="banner"/>*/}
                {/*    </div>*/}
                {/*    <div className="item">*/}
                {/*        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">*/}
                {/*            <h4>Urna congue egestas</h4>*/}
                {/*            <div className="coachDetial d-flex flex-row align-items-center">*/}
                {/*                <img src="../../../../images/user.png" alt="user"/>*/}
                {/*                <p className="p-small">Coach’s Name</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <img src="../../../../images/cover/cover6.jpg" alt="banner"/>*/}
                {/*    </div>*/}
                {/*</Carousel>*/}


                <div className="exploreTab mobile">
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img className="explore-cover" src="../../../../images/cover/cover4.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img className="explore-cover" src="../../../../images/cover/cover5.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img className="explore-cover" src="../../../../images/cover/cover3.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img className="explore-cover" src="../../../../images/cover/cover4.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img className="explore-cover" src="../../../../images/cover/cover5.jpg" alt="banner"/>
                    </div>
                    <div className="item">
                        <div className="sliderOverlay d-flex flex-column justify-content-end align-items-start">
                            <h4>Urna congue egestas</h4>
                            <div className="coachDetial d-flex flex-row align-items-center">
                                <img src="../../../../images/user.png" alt="user"/>
                                <p className="p-small">Coach’s Name</p>
                            </div>
                        </div>
                        <img className="explore-cover" src="../../../../images/cover/cover6.jpg" alt="banner"/>
                    </div>


                    <div className="float-left w-100 d-flex justify-content-center my-3">
                        <Link to="/" className="float-left header-button">Load More</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default ExploreTabs;
