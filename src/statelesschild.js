import React from 'react'

//Child component(Stateless) is updating the parent Component

class App extends React.Component{
    constructor(){
      super();
      this.state = {
          basic: 'First State',
          cat: 'This is not modified '
      }
    }

    update(e){ //passing an event
      this.setState({basic: e.target.value})
    }

    render(){
      return(
        <div>
        <h1>{this.state.cat} -- {this.state.basic}</h1>
        <Stateless updating = {this.update.bind(this)} />
        <Stateless updating = {this.update.bind(this)} />
        <Stateless updating = {this.update.bind(this)} />
        <Stateless updating = {this.update.bind(this)} />
        </div>
      )
    }
}

const Stateless = (props) => //passing props
<input type = "text" onChange = {props.updating} />


export default App