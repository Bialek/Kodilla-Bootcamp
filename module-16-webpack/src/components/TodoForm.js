import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	constructor(){
        super();
		this.state = {
			value: ''
		};
	}

	addTodo (event) {
		event.preventDefault();
		this.props.addTodo(this.state.value);
		this.setState ({
			value: ''
		});
	}

	updateInput(event) {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.addTodo.bind(this)}>
				<input type="text" onChange={this.updateInput.bind(this)} value={this.state.value} placeholder="New Task" />
				<button type="submit">Add Task</button>
			</form>
		)
	}
}

export default TodoForm;

