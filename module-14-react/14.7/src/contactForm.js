import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ContactForm extends React.Component {
	constructor() {
		super();

		this.state = {
			firstName: '',
			lastName: '',
			email: ''
		}
	}

	// setState(newState) {
	// 	Object.assign(this.state, newState);
	// 	this.render();
	// }

	updateInput(event) {
		var newState = {};
		newState[event.target.name] = event.target.value;

		this.setState(newState);
	}

	saveContact(event) {
		event.preventDefault();

		this.props.addContact({
			// firstName: this.state.firstName,
			// lastName: this.state.lastName,
			// email: this.state.email,
			...this.state
		});

		this.setState({
			firstName: '',
			lastName: '',
			email: ''
		});
	}


	render() {
		return (
			<form onSubmit={this.saveContact.bind(this)} className={"contactForm"}>
				<input type="text" name="firstName" onChange={this.updateInput.bind(this)} value={this.state.firstName} placeholder="Imię" />
				<input type="text" name="lastName" onChange={this.updateInput.bind(this)} value={this.state.lastName} placeholder="Nazwisko" />
				<input type="email" name="email" onChange={this.updateInput.bind(this)} value={this.state.email} placeholder="Email" />
				<button type="submit"> 
					Dodaj kontakt
				</button>
			</form>
		);
	}
	
};

// ContactForm.propTypes = {
// 	contact: PropTypes.object
// };

export default ContactForm;
