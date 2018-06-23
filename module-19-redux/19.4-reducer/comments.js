function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0 
                    }
                    , ...state]
            });

        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });

        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(comment => {
                    if (comment.id === action.id) {
                        return { text : action.newText}
                    }
                })       
            });
            
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(comment => {
                    if (comment.id === action.id) {
                        return { votes : action.votes}
                    }
                    return comment;
                })       
            });

        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(comment => {
                    if (comment.id === action.id) {
                        return { votes : action.votes}
                    }
                    return comment;
                })     
            });
            
        default:
            return state;
    }
}

export default comments;