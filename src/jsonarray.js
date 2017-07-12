import React from 'react'

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
  
  componentWillMount(){
    fetch( 'http://swapi.co/api/starships/?format=json' )
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items})) //takes results and call it items
  } 

  render(){

    // let items = this.state.items;
  
    return (
      <div>
        {this.state.items.map(item => <h4>{item.name}</h4>)}
      </div>
    )
  }
}

export default App

// https://swapi.co/api/people/?format=json