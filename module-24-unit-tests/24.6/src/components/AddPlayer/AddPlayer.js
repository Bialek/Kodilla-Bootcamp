import React from 'react';
import './AddPlayer.css';

const AddPlayer = (props) => {   
    let input;

    const onSubmit = (event) => {
        event.preventDefault();
        props.onPlayerAdd(input.value);
        input.value = '';
    };
    
    return (
        <form onSubmit={onSubmit} className="AddPlayer">
            <input type="text" placeholder="New Player" className="AddPlayer__input" ref={(node) => input = node} />
            <input type="submit" className="AddPlayer__submit" value="Add" />
        </form>
    )
};

export default AddPlayer;