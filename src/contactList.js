import React from 'react'
import Contact from './contact.js'

class ContactList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    updateSearch(e) {
        //    console.log(e.target.value); //target is input and value is this.state.search

        this.setState({ search: e.target.value }) //.substr(0, 20) >> to limit the values
    }

    render() {
        let filteredContacts = this.props.contacts.filter( //filter is a predefined function
            (contact) => {
            return contact.name.toLowerCase().indexOf(this.state. //contact(individual contact).name.indexOf(index of particular contact)
            search.toLocaleLowerCase()) !== -1;
            }
  
        );
        return <div>
            <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
            <ul>
                {filteredContacts.map((contact) => { //this.props.contacts.map(similar to this.props.contacts.name or phone)
                    //this.props.contacts.map((contact) >> contact is a function in which takes all the individual items and make
                    //available in the return
                    return <Contact tocontact={contact} key={contact.id} /> //passing the above contact to Contact via tocontact
                })
                }
            </ul>
        </div>
    }
}

export default ContactList