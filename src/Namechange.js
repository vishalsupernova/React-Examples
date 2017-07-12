var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./in.js');

var Parent = React.createClass({
  getInitialState: function () {
    return {name: "Vishal" };
  },

  changeName: function (newName) {
    this.setState({
      name: newName
    });
  },

  render: function () {
    return (
      <div>
        <Child onChange={this.changeName} />
        <h1>Please call me {this.state.name}</h1>
      </div>
    );
  }

});

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);

  