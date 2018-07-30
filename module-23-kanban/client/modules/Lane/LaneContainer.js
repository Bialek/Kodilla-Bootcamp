import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';
import { connect } from 'react-redux';
import Lane from './Lane';

const mapStateToProps = (state, ownProps) => {
    return {
        laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId))
    };
};

const mapDispatchToProps = {
    ...laneActions,
    addNote: createNote,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Lane);