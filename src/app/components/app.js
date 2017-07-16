import React, { Component } from 'react';
import axios from 'axios';
import CardList from './card-list.js';
import CardDetail from './card-detail.js';
import CardListItem from './card-list-item.js'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      contactList: [],
      activeContact: null
    };

  }

  componentDidMount(){
    const url = 'https://s3.amazonaws.com/technical-challenge/Contacts_v2.json';
    axios.get(url)
  .then(response => {

    this.setState({
      contactList: response.data,
      activeContact: response.data[0]
    });

    console.log(response, 'response')
    console.log(activeContact)

  });
  }
  render() {

    return (
      <div className="container-fluid">
        <CardDetail activeContact={this.state.activeContact} />
        <CardList
        contactList={this.state.contactList}
        onContactSelect={activeContact => this.setState({activeContact})}
        />

      </div>
    );
  }
}
