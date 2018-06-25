import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments, addComment}) => 
	<ul>
		{comments.map(comment => <Comment key={comment.id} {...comment}/>)}
        <button className='add-btn'
            onClick={() => {
                let newText = prompt('Add new commentt');
                addComment(newText)}}>
                add new comment
    </button>
	</ul>;

export default CommentsList;