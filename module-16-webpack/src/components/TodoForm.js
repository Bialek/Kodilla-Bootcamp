import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	constructor(){
        super();
		this.state = {
			value: ''
		}
	}

	updateInput(event) {
		var newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}

	render() {
		return (
			<form onSubmit={() => this.props.addTodo(this.state.value)}>
				<input type="text" name="value" onChange={this.updateInput.bind(this)} value={this.state.value} placeholder="New Task" />
				<button type="submit">Add Task</button>
			</form>
		)
	}
}

export default TodoForm;

