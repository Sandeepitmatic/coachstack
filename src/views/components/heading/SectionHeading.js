import React, {Component} from 'react';

class SectionHeading extends Component {

    render() {
        if (this.props.lightBack) {
            return (
                <div className="float-left w-100 d-flex flex-column align-items-center section-heading">
                    <h1 className="text-dark">{this.props.heading}</h1>
                    {this.props.subHeading &&
                    <p className="text-dark">{this.props.subHeading}</p>
                    }
                </div>
            )
        }


        return (
            <div className="float-left w-100 d-flex flex-column align-items-center section-heading">
                <h1>{this.props.heading}</h1>
                {this.props.subHeading &&
                    <p>{this.props.subHeading}</p>
                }
            </div>
        );
    }
}

export default SectionHeading;
