import React from 'react';

class App extends React.Component{
  render(){
    return<Button>I <Ball /> React</Button> //Not an HTML Element (<Ball /> is a nested component)
  }
}

 const Button = (props) => <button></button> //HTML element can access nested values or components in a component

class Ball extends React.Component{ // Nested Component
  render(){
    return<span>&hearts;</span>
  }
}

export default App