import React from 'react';
//import PropTypes from 'prop-types';

class App extends React.Component{
constructor(){
  super();
  this.state = {currentEvent: 'No Event is passed'}
  this.update = this.update.bind(this)
}

update(e){
  this.setState({currentEvent: e.type})
}

updating(e){
  this.setState({currentEvent: e.target.value})
}
//binding is used to convert method to functiob or variable

  render(){
    return<div>
    <textarea 
    onKeyPress = {this.updating.bind(this)} //Can use Directly here are can use at line no: 8(this.update)
    onCopy = {this.update}
    onPaste = {this.update}
    onCut = {this.update}
    onClick = {this.update}
    cols = "30" 
    rows = "10" />
    <h1>{this.state.currentEvent}</h1>
    </div>
  }
}

export default App