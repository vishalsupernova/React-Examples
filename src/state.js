import React, { Component } from 'react';

class State extends Component{
    constructor(){
        super();
        this.state={
            title:"abcd"
        }
    }

    render(){
        return(
            <h1>{this.state.title}</h1>
        );
    }
}

export default State;