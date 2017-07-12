import React from 'react';
//import PropTypes from 'prop-types';

class App extends React.Component{ // component Will have state 
  render(){
    return<Title text = "" />
  }
}


// component = (takes in props) => and return JSX from above
const Title = (props) => <h1>Title: {props.text}</h1> //Stateless function component

Title.propTypes ={ // Adding a property to the component Title
  //text: PropTypes.string.isRequired // is a built in validation
  text(props, propName, component){
    if(!(propName in props)){
      return new Error('missing ${propName}')
    }
    if(props[propName].length < 6){
      return new Error('${propName} Lenght is less')
    }
  }
}

export default App