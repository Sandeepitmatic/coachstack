import React from "react";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView} from
        "mdbreact";

const SliderOne = () => {
    return (
        <MDBCarousel
            activeItem={5}
            length={3}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            multiItem={false}
        >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img
                            className="d-block w-25"
                            src="../../../../images/cover_art1.png"
                            alt="First slide"
                        />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img
                            className="d-block w-25"
                            src="../../../../images/cover_art2.png"
                            alt="Second slide"
                        />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img
                            className="d-block w-25"
                            src="../../../../images/cover_art3.png"
                            alt="Third slide"
                        />
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
};

export default SliderOne;
