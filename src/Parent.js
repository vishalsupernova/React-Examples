var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child.js');

var Parent = React.createClass({
        
        getInitialState: function(){
          return{name: 'Don'}
        },      

        render: function(){
            return<Child name = {this.state.name} />;
                        
        }
});

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);


//Child.js
// var React = require('react');

// var Child = React.createClass({
//         render: function(){
//           return<h1>Please call me {this.props.name}</h1>;
//         }
// });

// module.exports = Child;