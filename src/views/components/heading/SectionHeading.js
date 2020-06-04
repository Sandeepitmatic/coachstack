import React, {Component} from 'react';

class SectionHeading extends Component {

    render() {
        return (
            <div className="float-left w-100 text-center">
                <h2>{this.props.heading}</h2>
                {this.props.subHeading &&
                <p>{this.props.subHeading}</p>
                }
            </div>
        );
    }
}

export default SectionHeading;
