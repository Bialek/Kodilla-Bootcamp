import React, { Component } from 'react';
import Contact from './contact.js';
import PropTypes from 'prop-types';
import './style.css';

class Contacts extends React.Component {
	render() {
		var contacts = this.props.items.map(function(contact) {
      		return React.createElement(Contact, {item: contact, key: contact.id});
    	});

		return (
			<ul className="contactsList">
				{contacts}
			</ul>
		);
	}
};

Contacts.propTypes = {
	items: PropTypes.array
};

	

export default Contacts;
