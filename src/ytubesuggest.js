import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

let contacts = [{
  id: 1,
  name: 'Tommy',
  phone: '111111'
},

{
  id: 2,
  name: 'Jim',
  phone: '222222'
},

{
  id: 3,
  name: 'Don',
  phone: '333333'
},

{
  id: 4,
  name: 'Scott',
  phone: '444444'
}

]

ReactDOM.render(
    <App contacts={contacts}/>,
  document.getElementById('root')
);

App.js

import React from 'react'
import ContactList from './contactList.js';

class App extends React.Component {
  render() {
    console.log(this.props.contacts);
    return <div>
      <h1>Contacts List</h1>
      <ContactList contacts={this.props.contacts} />
    </div>
  }
}

export default App