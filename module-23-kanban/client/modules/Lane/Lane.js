import React, { PropTypes } from 'react';
import NotesContainer from '../Note/NotesContainer';
import Edit from '../../components/Edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './Lane.css';

const Lane = (props) => {
	const { connectDropTarget, lane, laneNotes, updateLane, addNote, deleteLane, editLane } = props;
	const laneId = lane.id;

	return connectDropTarget((
		<div className={styles.Lane}>
			<div className={styles.LaneHeader}>
				<div className={styles.LaneAddNote}>
					<button onClick={() => addNote({ task: 'New note'}, laneId)}><FontAwesomeIcon icon={faPlus} /></button>
				</div>
				<Edit
					className={styles.LaneName}
					editing={lane.editing}
					value={lane.name}
					onValueClick={() => editLane(lane.id)}
					onUpdate={name => updateLane({ ...lane, name, editing: false })}
				/>
				<div className={styles.LaneDelete}>
					<button onClick={() => deleteLane(laneId)}><FontAwesomeIcon icon={faTimes} /></button>
				</div>
			</div>
			<NotesContainer
				notes={laneNotes}
				laneId={laneId}
			/>
		</div>
	));
};

Lane.propTypes = {
	lane: PropTypes.object,
	laneNotes: PropTypes.array,
	addNote: PropTypes.func,
	updateLane: PropTypes.func,
	deleteLane: PropTypes.func,
	editLane: PropTypes.func,
};

export default Lane;