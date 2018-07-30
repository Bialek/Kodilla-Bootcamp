import { connect } from 'react-redux';
import Notes from './Notes';
import * as NoteActions from '../Note/NoteActions';

const mapDispatchToProps = {
    ...NoteActions,
};

export default connect(
    null,
    mapDispatchToProps
)(Notes);