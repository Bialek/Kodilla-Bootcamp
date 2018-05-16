import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ContactForm extends React.Component {
	render() {
		return (
			<form className={"contactForm"}>
				<input type="text" placeholder="Imię" />
				<input type="text" placeholder="Nazwisko" />
				<input type="email" placeholder="Email" />
				<button type="submit"> 
					Dodaj kontakt
				</button>
			</form>
		);
	}
	
};

ContactForm.propTypes = {
	contact: PropTypes.object
};

export default ContactForm;
