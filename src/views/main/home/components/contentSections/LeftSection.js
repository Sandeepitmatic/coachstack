import React, {Component} from 'react';

class LeftSection extends Component {

    render() {
        return (
            <div className="row mb-5 py-5">
                <div className="col-md-6 col-sm-12">
                    <img className="res-100" src={this.props.image} alt="logos"/>
                    <img className="centerLine" src="../../../../../../images/centerLine.png" alt="user"/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h5>{this.props.heading}</h5>
                    <p>{this.props.detail}</p>
                </div>
            </div>
        );
    }
}

export default LeftSection;
