import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	const items = props.items.map(item =>
		<Todo item={item} remove={props.remove} />
	);
	return <ul>{items}</ul>
}


export default TodoList;

