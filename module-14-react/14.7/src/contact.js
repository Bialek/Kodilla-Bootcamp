import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Contact extends React.Component {
	render() {
		return (
			<div className={"contactItem"}>
   				<img className={"contactImage"} src={"https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png"}/>
			    <p className={"contactLabel"}>
			       Imię: {this.props.item.firstName}
			    </p>
			    <p className={"contactLabel"}>
			       Nazwisko: {this.props.item.lastName}
			    </p>
			    <a href={"mailto:" + this.props.item.email} className={"contactEmail"}>
			        {this.props.item.email}
			    </a>
			</div>	
		);
	}
	
};

Contact.propTypes = {
		item: PropTypes.object
};

export default Contact;