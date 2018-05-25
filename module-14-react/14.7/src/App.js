import React, { Component } from 'react';
import './style.css';
import Contact from './contact.js';
import ContactForm from './contactForm.js';
import Contacts from './contacts.js'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
	constructor(model) {
		super();

		this.state = {
			contacts: [
				{
					id: 1,
					firstName: 'Jan',
					lastName: 'Nowak',
					email: 'jan.nowak@example.com',
				},
				{
					id: 2,
					firstName: 'Adam',
					lastName: 'Kowalski',
					email: 'adam.kowalski@example.com',
				},
				{
					id: 3,
					firstName: 'Zbigniew',
					lastName: 'Koziol',
					email: 'zbigniew.koziol@example.com',
				}
			]
		}
	}

	addContact(contactObject) {
		this.setState({
			contacts: [...this.state.contacts, Object.assign(contactObject, {id: this.state.contacts.length + 1})]
		});
	}

	render() {
		return (
		  <div className="app">
		    <ContactForm addContact={this.addContact.bind(this)}/>
		    <Contacts items={this.state.contacts}/>
		  </div>
		);
	}
};


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();