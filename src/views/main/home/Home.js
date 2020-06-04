import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ExploreTabs from "./components/exploreTabs/ExploreTabs";
import SectionHeading from "../../components/heading/SectionHeading";
import LeftSection from "./components/contentSections/LeftSection";
import RightSection from "./components/contentSections/RightSection";
import OfferCol from "./OfferCol";
import FaqSection from "./components/faq/FaqSection";
import {Animated} from "react-animated-css";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }

    render() {
        return (
            <>
                <div className="bannerSection">
                    <div className="bannerImage">
                        <img width={'100%'} src="../../../../images/banner.jpg" alt="banner"/>
                    </div>
                    <div className="bannerOverlay">
                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                            <div>
                                <h1>Learn from <br/> the world’s best lessons.</h1>
                                <p className="mt-2">Join Coach Stack to watch, play, learn, make, and discover.</p>
                                <Link to={'/'} className="defaultButton mt-4">Start Learning</Link>
                            </div>
                        </Animated>
                    </div>
                    <div className="bannerLogos">
                        <p>coaches featured on</p>
                        <ul className="w-100 d-flex flex-row justify-content-between">
                            <li>
                                <img src="../../../../images/logo/logo1.png" alt="logos"/>
                            </li>
                            <li>
                                <img src="../../../../images/logo/van.png" alt="logos"/>
                            </li>
                            <li>
                                <img src="../../../../images/logo/thenew.png" alt="logos"/>
                            </li>
                            <li>
                                <img src="../../../../images/logo/espn.png" alt="logos"/>
                            </li>
                            <li>
                                <img src="../../../../images/logo/van.png" alt="logos"/>
                            </li>
                            <li>
                                <img src="../../../../images/logo/logo1.png" alt="logos"/>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="exploreSection">
                    <SectionHeading
                        heading={'Explore our courses'}
                        subHeading={'Whatever is your goal, we will help you reach there through our coaches led courses'}
                    />
                    <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                        <div className="float-left w-100">
                            <ExploreTabs/>
                        </div>
                    </Animated>
                </div>

                <div className="meetCoaches">
                    <SectionHeading
                        heading={'Meet our coaches'}
                        subHeading={'Reach your goal with the best coaches in the world. All our courses ' +
                        'are taught by real creators'}
                    />
                    <div className="float-left w-100 position-relative my-4">
                        <img width={'100%'} src="../../../../images/meet.png"/>
                        <div className="sideOverLayer"></div>
                        <div className="sideOverLayer right"></div>
                    </div>
                    <div className="float-left w-100 d-flex justify-content-center">
                        <Link to="/" className="float-left header-button">View All</Link>
                    </div>
                </div>

                <div className="ourJourney">
                    <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                        <SectionHeading
                            heading={'Our Journey Together = You + Coach Stack.'}
                            subHeading={'In vitae venenatis, aliquam amet pellentesque vitae euismod. Vestibulum quis in' +
                            ' hac posuere. Commodo nulla ligula tortor, et parturient et massa. Maecenas sit donec volutpat' +
                            ' nulla volutpat facilisis iaculis aliquam.'}
                        />
                    </Animated>
                </div>

                <div className="leftRightContent">
                    <div className="sectionLine">
                        <img src="../../../../images/sectionLine.png" alt="logos"/>
                    </div>
                    <div className="container">
                        <LeftSection
                            image="../../../../images/svg/1.svg"
                            heading="Create an account with us"
                            detail="In vitae venenatis, aliquam amet pellentesque vitae euismod. Vestibulum quis in hac
                                posuere. Commodo nulla ligula tortor, et parturient et massa. Maecenas sit donec
                                volutpat nulla volutpat facilisis iaculis aliquam."
                        />

                        <RightSection
                            image="../../../../images/svg/2.svg"
                            heading="Watch beautiful 4K quality courses"
                            detail="In vitae venenatis, aliquam amet pellentesque vitae euismod. Vestibulum quis in hac
                        posuere. Commodo nulla ligula tortor, et parturient et massa. Maecenas sit donec volutpat nulla
                         volutpat facilisis iaculis aliquam."
                        />

                        <LeftSection
                            image="../../../../images/svg/3.svg"
                            heading="Mentorship by Coaches"
                            detail="In vitae venenatis, aliquam amet pellentesque vitae euismod. Vestibulum quis in hac
                        posuere. Commodo nulla ligula tortor, et parturient et massa. Maecenas sit donec volutpat nulla
                        volutpat facilisis iaculis aliquam."
                        />

                        <RightSection
                            image="../../../../images/svg/4.svg"
                            heading="Learn from anywhere"
                            detail="In vitae venenatis, aliquam amet pellentesque vitae euismod. Vestibulum quis in hac
                                posuere. Commodo nulla ligula tortor, et parturient et massa. Maecenas sit donec
                                volutpat nulla volutpat facilisis iaculis aliquam."
                        />
                        <LeftSection
                            image="../../../../images/svg/5.svg"
                            heading="Earn course completion certificate"
                            detail="In vitae venenatis, aliquam amet pellentesque vitae euismod. Vestibulum quis in hac
                                posuere. Commodo nulla ligula tortor, et parturient et massa. Maecenas sit donec
                                volutpat nulla volutpat facilisis iaculis aliquam."
                        />
                    </div>
                </div>

                <div className="waitingSection d-flex flex-column align-items-center"
                     style={{backgroundImage: `url(${'.../../../../images/what-back.jpg'})`}}>
                    <SectionHeading heading={'What are you waiting for?'}/>

                    <div className="mt-5">
                        <Link to={'/'} className="defaultButton lightButton mr-4">Start Learning</Link>
                        <Link to={'/'} className="defaultButton lightBorderButton">Contact Us</Link>
                    </div>
                </div>

                <div className="weOffer d-flex flex-column align-items-center">
                    <SectionHeading
                        heading={'Benefits We Offer'}
                        subHeading={'Felis tempor in sit congue volutpat, ac.'}
                    />
                    <div className="container mt-5">
                        <div className="row">
                            <OfferCol
                                image="../../../images/b1.png"
                                heading={'Learning you can trust'}
                                detail={'Ac phasellus quis quam mauris, maecenas. Elit nullam risus, quam at lacus, dictum' +
                                ' urna. Enim blandit proin eu turpis eget consectetur ut suspendisse faucibus.'}
                            />
                            <OfferCol
                                image="../../../images/b2.png"
                                heading={'Up-skill and re-skill'}
                                detail={'Ac phasellus quis quam mauris, maecenas. Elit nullam risus, quam at lacus, dictum' +
                                ' urna. Enim blandit proin eu turpis eget consectetur ut suspendisse faucibus.'}
                            />
                            <OfferCol
                                image="../../../images/b3.png"
                                heading={'Life-time support'}
                                detail={'Ac phasellus quis quam mauris, maecenas. Elit nullam risus, quam at lacus, dictum' +
                                ' urna. Enim blandit proin eu turpis eget consectetur ut suspendisse faucibus.'}
                            />
                        </div>
                        <div
                            className="rating mt-5 float-left w-100 d-flex flex-row justify-content-center align-items-start">
                            <span className="mr-3">Excellent</span>
                            <ul className="d-flex flex-row mb-0">
                                <li><img src="../../../../images/star-white.png" alt="star"/></li>
                                <li><img src="../../../../images/star-white.png" alt="star"/></li>
                                <li><img src="../../../../images/star-white.png" alt="star"/></li>
                                <li><img src="../../../../images/star-white.png" alt="star"/></li>
                                <li><img src="../../../../images/star-white.png" alt="star"/></li>
                            </ul>
                            <span className="review ml-3">5,229 reviews on</span>
                            <span className="review ml-3">
                                <img style={{marginRight: '5px',}} src="../../../../images/star-blue.png" alt="star"/>
                                Trustpilot
                            </span>
                        </div>
                    </div>
                </div>

                <div className="sweetNothing d-flex flex-column align-items-center"
                     style={{backgroundImage: `url(${'.../../../../images/sweet-back.png'})`}}>
                    <SectionHeading
                        heading={'Sweet Nothings'}
                        subHeading={'Our student’s love.'}
                    />
                    <p className="p-large mt-5">“In vitae venenatis, aliquam amet pellentesque vitae euismod. Vestibulum
                        quis in hac posuere.
                        Commodo nulla ligula tortor, et parturient et massa. Maecenas sit donec volutpat nulla volutpat
                        facilisis iaculis aliquam.”</p>

                    <div className="my-3">
                        <img src="../../../../images/swt-strock.png" alt="user"/>
                    </div>
                    <div className="d-flex flex-row sweetImages">
                        <ul className="d-flex flex-row">
                            <li className="mr-3">
                                <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
                                    <img src="../../../../images/sweet1.png" alt="user"/>
                                </Animated>
                            </li>
                            <li className="mr-3">
                                <img src="../../../../images/sweet2.png" alt="user"/>
                            </li>
                            <li>
                                <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
                                    <img src="../../../../images/sweet3.png" alt="user"/>
                                </Animated>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="faqSection d-flex flex-column align-items-center">
                    <SectionHeading
                        heading={'Frequently asked questions'}
                    />
                    <FaqSection/>
                </div>

                <div className="waitingSection d-flex flex-column align-items-center"
                     style={{backgroundImage: `url(${'.../../../../images/try-back.jpg'})`}}>
                    <SectionHeading
                        heading={'Try Coach Stack Unlimited - Risk Free.'}
                        subHeading={'Give the unlimited plan a try today, risk free. Your purchase is covered by a 30-day guarantee.'}
                    />

                    <div className="mt-5">
                        <Link to={'/'} className="defaultButton lightButton">Get Full Access</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
