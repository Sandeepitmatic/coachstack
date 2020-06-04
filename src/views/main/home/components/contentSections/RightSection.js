import React, {Component} from 'react';

class RightSection extends Component {

    render() {
        return (
            <>
                <div className="row mb-5 py-5 pc">
                    <div className="col-md-6">
                        <h5>{this.props.heading}</h5>
                        <p>{this.props.detail}</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <img src={this.props.image} alt="logos"/>
                    </div>
                </div>

                <div className="row mb-5 py-5 mobile">
                    <div className="col-md-6 col-sm-12">
                        <img className="res-100" src={this.props.image} alt="logos"/>
                        <img className="centerLine" src="../../../../../../images/centerLine.png" alt="user"/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h5>{this.props.heading}</h5>
                        <p>{this.props.detail}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default RightSection;
