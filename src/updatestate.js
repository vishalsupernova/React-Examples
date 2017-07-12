import React from 'react'

class App extends React.Component{
  //State
  constructor(){
    super();
    this.state = {
      stating: 'state txt',
      cat: 0
    }
  }

  update(e) {
    this.setState({stating: e.target.value})
  }

  render(){
    return(
      <div>
      <h1>This is a {this.state.stating}---{this.state.cat}</h1>
      <input type = "text" onChange = {this.update.bind(this)} /> //
    </div>
    );
  }
}

export default App