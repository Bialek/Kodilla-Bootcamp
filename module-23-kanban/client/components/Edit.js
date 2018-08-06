import React, { Component, PropTypes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser } from '@fortawesome/free-solid-svg-icons'
import styles from './Edit.css';

export default class Edit extends Component {
  	checkEnter = (e) => {
    	if (e.key === 'Enter') {
        	this.finishEdit(e);
    	}
  	}
  	finishEdit = (e) => {
    	const value = e.target.value;

    	if (this.props.onUpdate) {
        	this.props.onUpdate(value.trim());
    	}
  	}
  	renderDelete = () => {
    	return <button className={styles.delete} onClick={this.props.onDelete}><FontAwesomeIcon icon={faEraser} /></button>;
  	}
  	renderValue = () => {
    	const { value, onDelete, onValueClick } = this.props;

    	return (
        	<div>
				 <span className={styles.value} onClick={onValueClick}>
				 	{value}
					<span className={styles.tiptool}>Click to change text</span>
				</span>
        		{onDelete ? this.renderDelete() : null}
        	</div>
    	);
  	}
  	renderEdit = () => {
    	return (
        	<textarea
          		type="text"
          		autoFocus
          		defaultValue={this.props.value}
          		onBlur={this.finishEdit}
          		onKeyPress={this.checkEnter}
        	/>
    	);
  	}
  	render() {
    	return (
        	<div className={this.props.className}>
          		{this.props.editing ? this.renderEdit() : this.renderValue()}
        	</div>
      	);
  	}
}

Edit.propTypes = {
  	value: PropTypes.string,
  	onUpdate: PropTypes.func,
  	onValueClick: PropTypes.func,
  	onDelete: PropTypes.func,
  	editing: PropTypes.bool,
};