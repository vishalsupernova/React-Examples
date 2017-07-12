import React from 'react'


class Contact extends React.Component {
    render() {
        return<li>
        {this.props.tocontact.name} {this.props.tocontact.phone}
        </li>
       

    }
}

export default Contact