import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Lanes from '../Lane/Lanes';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import styles from './Kanban.css';

const Kanban = (props) => (
    <div className={styles.appDiv}>
    	<button className={styles.AddLane} onClick={() => props.createLane({ name: 'New lane' })}><FontAwesomeIcon icon={faFileAlt} /> New lane</button>
    	<Lanes lanes={props.lanes} />
  	</div>
);

Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  	lanes: PropTypes.array,
  	createLane: PropTypes.func,
};

const mapStateToProps = state => ({
  	lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  	createLane: createLaneRequest,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
  	DragDropContext(HTML5Backend)
)(Kanban);