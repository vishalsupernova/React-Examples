import React from 'react';
//import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      mystate: "This is the state"
    }
  }

  update(e) {
    this.setState({ mystate: e.target.value })
  }

  componentWillMount() {
    console.log('componentWillMount')
  }


  render() {
    console.log('render');
    return <div>
      <input type="text" onChange={this.update.bind(this)} />
      <h1 >{this.state.mystate}</h1>
    </div>
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUMount() {
    console.log('componentWillUnmount')
  }

}


class LifeCycle extends React.Component {
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
      <button onClick={this.unmount.bind(this)}>UnMount</button>
      <div id="a"></div>
    </div>
  }
}

export default LifeCycle