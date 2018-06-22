import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(id, newText) {
    return {
        type: EDIT_COMMENT,
        id,
        text: newText
    }
}

function thumbUpComment(id, thumb) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        thumb: thumb++
    }
}

function thumbDownComment(id, thumb) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        thumb: thumb--
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditComment = (id, newText) => dispatch(editComment(id, newText));
const boundThumbUpComment = (id, thumb) => dispatch(thumbUpComment(id, thumb));
const boundThumbDownComment = (id, thumb) => dispatch(thumbDownComment(id, thumb));