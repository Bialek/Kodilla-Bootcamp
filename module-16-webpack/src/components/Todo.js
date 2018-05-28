import React from 'react';


function Todo(props) {
	return (
		<li key={props.item.id} >
			{props.item.text}
			<button onClick={() => props.remove(props.item.id)}>X</button>
		</li>
	)
}

export default Todo;

