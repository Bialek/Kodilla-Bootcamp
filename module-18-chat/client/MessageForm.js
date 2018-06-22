import React, {Component} from 'react';

import styles from './css/MessageForm.css';

class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}

	handleSubmit(e) {
		e.preventDefault();
		const message = {
			from : this.props.name,
			text : this.state.text,
			color: this.props.color
		};
		this.props.onMessageSubmit(message);
		this.setState({ text: '' });
	}

	changeHandler(e) {
		this.setState({ text : e.target.value });
	}

	render() { 
		return(
			<form className={styles.MessageForm} onSubmit={e => this.handleSubmit(e)}>
				<input
					className={styles.MessageInput}
					onChange={e => this.changeHandler(e)}
					value={this.state.text}
					placeholder='Message'
				/>
				<input
					className={styles.MessageBtn}
					type='submit'
					value='send'
				/>
			</form>
		);
	}
}

export default MessageForm;