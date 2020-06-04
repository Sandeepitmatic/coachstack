import React, {Component} from 'react';

class OfferCol extends Component {

    render() {
        return (
            <div className="col-md-4 text-center">
                <div className="w-75">
                    <img className="mb-5" src={this.props.image} alt="logos"/>
                    <h4>{this.props.heading}</h4>
                    <p className="p-small" style={{lineHeight: '20px',}}>{this.props.detail}</p>
                </div>
            </div>
        );
    }
}

export default OfferCol;
