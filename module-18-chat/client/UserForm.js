import React, {Component} from 'react';
import styles from './css/UserForm.css';

class UserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
	  		color: ''
		};
  	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onUserSubmit(this.state.name, this.state.color);
	}

	handleChange(e) {
		const randomCol = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		this.setState({ name: e.target.value });
		this.setState({ color: randomCol });
	}

	render() {
		return(
			<form className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
				<input
					className={styles.UserInput}
					placeholder='Write your nickname and press enter'
					onChange={e => this.handleChange(e)}
					value={this.state.name}
				/>
			</form>
		);
	}
}

export default UserForm;