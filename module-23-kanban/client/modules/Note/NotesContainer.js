import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteLane, updateLane, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';


const mapDispatchToProps = {
	editLane,
	deleteLane,
	updateLane,
	addNote: createNoteRequest,
  };

export default connect(null, mapDispatchToProps)(Notes);