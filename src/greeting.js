import React, { Component } from 'react';


class Greeting extends Component {

    render() {
        return (
            <button onClick = {this.props.onClick}> Submit </button>
        );
    }
}

export default Greeting;
