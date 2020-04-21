import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ChooseCourse extends Component {

    render() {
        return (
            <div className="float-left w-100 d-flex flex-column align-items-center choose-course">
                <ul className="d-flex flex-row">
                    <li className="active"><Link onClick={this.props.click}>All</Link></li>
                    <li><Link onClick={this.props.click}>Work</Link></li>
                    <li><Link onClick={this.props.click}>Body</Link></li>
                    <li><Link onClick={this.props.click}>Love</Link></li>
                    <li><Link onClick={this.props.click}>Play</Link></li>
                    <li><Link onClick={this.props.click}>Grow</Link></li>
                </ul>
            </div>
        );
    }
}

export default ChooseCourse;

