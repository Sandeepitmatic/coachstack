import React, {Component} from 'react';
import Button from "@material-ui/core/Button";

class DefaultButton extends Component {

    render() {
        return (
            <Button variant="contained" color="secondary" className={this.props.className} href={this.props.link}>
                {this.props.name}
            </Button>
        );
    }
}

export default DefaultButton;
