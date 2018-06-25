import {connect} from 'react-redux';
import CommentsList from './CommentsList';

import {addComment} from './actions.js';

const mapStateToProps = state => ({
	comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text))
});



export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);