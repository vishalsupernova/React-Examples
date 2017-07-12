import React from 'react'



class App extends React.Component {

  constructor() {
    super();
    this.state = { stating: "New State" }
  }

  update(e) {
    this.setState({ stating: e.target.value })
  }

  render() {
    console.log("render")
    return <div>
      <h1>hello {this.props.message}</h1>
      <Application name="How are you" />
      <h3>This is a state {this.state.stating}</h3>
      <button onClick={this.update.bind(this)} value="State has been changed"> Change State</button>
      <input type="text" onChange={this.update.bind(this)} />
    </div>
  }
}

class Application extends React.Component {
  render() {
    return <div>
      <h1>This is a new Component {this.props.name}</h1>
    </div>
  }
}

export default App

