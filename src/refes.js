class App extends React.Component {
  constructor(){
    super();
    this.state = {a: '', b: ''}
  }
  update(){
    this.setState({
      a: this.a.refs.input.value, //Actually returns a node we are referencing
      b: this.refs.b.value
    })
  }
  render(){
    return (
      <div>
        <Input
          ref={ component => this.a = component}
          update={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
          /> {this.state.b}
      </div>
    )
  }
}

class Input extends React.Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);