import React from 'react'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [{
        id: 1,
        Name: 'JSX'
      },
      {
        id: 2,
        Name: 'Application'
      },
      {
        id: 3,
        Name: 'Ship It'
      }
      ],
      currentTodo: ''
    }
  }

  update(e){
    this.setState({currentTodo: e.target.value})   
  }

  render() {
    console.log(this.state.todos)    
    return <div>
      <input type="text" onChange = {this.update.bind(this)}/>
      <ul>
        {this.state.todos.map(todos =>
          <li key={todos.id}>
            <input type="checkbox" />{todos.Name}
          </li>)}
      </ul>
      <h2>{this.state.currentTodo}</h2>
    </div>
  }
}

export default App

