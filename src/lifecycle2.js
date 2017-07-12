import React from 'react';
//import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends React.Component{

  constructor() {
    super();
    this.state = { val: 0 }
  }

  update(e) {
    this.setState({ val: this.state.val + 1 })
  }

  componentWillMount() {
    console.log('Component Will mount')
    this.setState({m: 2}) // We will have access to state and props but we do not have access to DOM 
    //representation(because it is still not placed in DOM)
    this.inc = setInterval(this.update.bind(this),500)
    console.log("INC")
    
  }

  render(){
    console.log("render")
    return<button onClick = {this.update.bind(this)}>{this.state.val * this.state.m}</button>
  }

  componentDidMount() {
    console.log('Component Did Mount')
    
  }

  componentWillUnmount() {
    console.log('Component Will Unmount')
    clearInterval(this.inc)
  }

}

class But extends React.Component {

  mount() {
    ReactDOM.render(<App />,
      document.getElementById('a'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  } 

  render() {
    return <div>
      <button onClick={this.mount.bind(this)}>Mount</button>
      <button onClick={this.unmount.bind(this)}>Unmount</button>
      <div id="a"></div>
    </div>
  }
}


export default But