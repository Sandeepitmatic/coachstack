import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import GridRightImage from "../../../../components/grid/GridRightImage";
import GridLeftImage from "../../../../components/grid/GridLeftImage";

class GridSection extends Component {

    render() {
        return (
            <section className="banner">
                <Container className="mt-5">
                    <GridRightImage
                        heading={'Beautiful 4K quality courses you will love to watch. We have turned learning into art'}
                        detail={'Its too easy to slide into a funk in the modern world. Laziness, procrastination and ' +
                        'helplessness are our enemy! Coach Stack help you start working on what makes you feel alive.'}
                        button={'Try Premium'}
                        banner={'../../../../images/image3.png'}
                    />
                    <GridLeftImage
                        heading={'Expand your horizons. 10 minutes or less'}
                        detail={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. The first\n' +
                        '                                    line of Lorem Ipsum'}
                        button={'Get Started'}
                        banner={'../../../../images/image4.png'}
                    />
                    <GridRightImage
                        heading={'Learn anywhere on-demand, on any device.'}
                        detail={'Its too easy to slide into a funk in the modern world. Laziness, procrastination and ' +
                        'helplessness are our enemy! Coach Stack help you start working on what makes you feel alive.'}
                        button={'Browse Courses'}
                        banner={'../../../../images/image5.png'}
                    />
                </Container>
            </section>
        );
    }
}

export default GridSection;
