// var React = require('react');
// import 

// var Child = React.createClass({

//     handleChange: function (e) {
//         var name = e.target.value;
//         this.props.onChange(name);
//     },

    

//     render: function () {
//         return(
//             <div>
                
//         </div>
//         );
//     }
// });

// module.exports = Child;



















// var React = require('react');
// var ReactDOM = require('react-dom');

// var MyComponentClass = React.createClass({
//   render: function () {
//     return <h1>Hello world</h1>;
//   }
// });

// ReactDOM.render(
//   <MyComponentClass />,
//   document.getElementById('root')
// );


// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // //import First from './first';
// // import State from './state';
// // import registerServiceWorker from './registerServiceWorker';
// // import './index.css';


// // ReactDOM.render(
// //     //<First firstName="Vishal" lastName = "L" />,
// //     <State />,
// //  document.getElementById('root')
// //  );

// // registerServiceWorker();


// //Hello World
// // var React = require('react');
// // var ReactDOM = require('react-dom');

// // var MyComponentClass = React.createClass({
// //   render: function () {
// //     return <h1>Hello world</h1>;
// //   }
// // });

// // ReactDOM.render(
// //   <MyComponentClass />,
// //   document.getElementById('root')
// // );


import React from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
//var data = require('../public/data.json')

let languages = [];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class App extends React.Component {
  constructor() {
    super();
    axios.get('./data.json')
      .then(function (response) {
        languages = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    this.state = {
      value: '',
      suggestions: [],
      languages: languages
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Please Enter",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

//Coloumns Task 1
// import React, { Component } from 'react';
// //import logo from './logo.svg';
// import './App.css';
// //import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// //import ReactDOM from 'react-dom';
// import { Row, Col } from 'react-flexbox-grid';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <div>
//         <Row>
          
//           <Col className = "columns">
//           Hello
//           </Col>

//           <Col className = "columns">
//           World
//           </Col>

//           <Col className = "columns">
//           HelloWorld
//           </Col>

//           <Col className = "columns">
//           Hello
//           </Col>

//           <Col className = "columns">
//           World
//           </Col>

//           <Col className = "columns">
//           HelloWorld
//           </Col>

//         </Row>
//       </div>
//       <div>
//         <button type = "button" onClick = {function (){window.print()} }>Print</button>
//       </div>

//       </div>
//     );
//   }
// }

// export default App;



//Promise in ES6

// var d  = new Promise((resolve, reject) =>
// {
//   if(true)
//   resolve("Output has come")
//   else
//   reject("CATCHing the Errro")
// }
// )

// // d.then((data) => console.log(data)); //Takes in DATA values

// // d.catch((error) => console.log(error)); //Takes in ERROR Values

// // d.then((data) => console.data(data), (error) => console.error("This is a new error"));

//  d.then((data) => console.log(data)). then((data) => console.log(data))

// // d.catch((error) => console.log("Error"));