import React from 'react';

class TodoForm extends React.Component {
	constructor(){
        super();
		this.state = {
			value: ''
		}
	}

	render() {

		return (
			<form onSubmit={() => this.props.addTodo(this.state.value)}>
				<input type="text" onChange={this.state.value} placeholder="New task" />
				<button type="submit">test</button>
			</form>
		)
	}
}

export default TodoForm;

