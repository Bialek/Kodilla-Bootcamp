import React, { PropTypes } from 'react';
import NotesContainer from '../Note/NotesContainer';

// Import Style
import styles from './Lane.css';

const Lane = (props) => {
  const { lane, laneNotes, updateLane, addNote, deleteLane } = props;
  const laneId = lane.id;

  return (
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <button onClick={() => addNote({ task: `New Note`}, laneId)}>Add note</button>
      </div>
      <h4>{lane.name}</h4>
      <div className={styles.LaneDelete}>
        <button onClick={() => deleteLane(laneId)}>Remove Lane</button>
      </div>
      <NotesContainer
        notes={laneNotes}
        laneId={laneId}
      />
    </div>
  );
};

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
};

export default Lane;
