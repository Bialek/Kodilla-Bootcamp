var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
		},

		render: function() {
			return (
				React.createElement('div', {className: 'contactItem'},
					React.createElement('img', {
						className: 'contactImage',
						src: 'https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png'
					}),
				React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
				React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
					this.props.item.email
				)
			)
		)
	},
});