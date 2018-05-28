import React from 'react';


function Todo(props) {
	return (
		<li key={props.item.id} onClick={() => props.remove(props.item.id)}>
			{props.item.text}
		</li>
	)
}

export default Todo;

