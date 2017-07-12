import React from 'react'
//import PropTypes from 'prop-types'


class Apps extends React.Component{
  render(){
    let txt = this.props.txt
    return<h1>Good Evening {txt}</h1>
  }
}

App.defaultProps = {
    txt: "This is a default Props"
}

// App.propTypes = {
//    txt: PropTypes.string,
//    cat: PropTypes.number.isRequired
// }
// const App = props => <h1>Hello World {props.txt}</h1>

// const App = () => <h1>Hello World </h1>

export default Apps

