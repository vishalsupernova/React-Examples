import React, { Component } from 'react';
//import logo from './logo.svg';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import ReactDOM from 'react-dom';
import Greeting from "./greeting";


class First extends Component {

    talk() {
    for (var speech = '', i = 0; i < 10000; i++) {
        speech += 'blah ';
    }
    alert(speech);
}

    render() {
        return (
            <div>
                <h1>Hello World this is {this.props.firstName}</h1>
                <Greeting  onClick = {this.talk}/>
            </div>
        );
    }
}

export default First;
