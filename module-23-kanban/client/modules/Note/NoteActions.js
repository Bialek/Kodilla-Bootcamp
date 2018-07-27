// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// Export Actions
export function createNote(note, laneId) {
    return {
        type: CREATE_NOTE,
        laneId,
        note: {
            id: uuid(),
            ...note,
        },
    };
}

export function updateNote(note) {
    return {
        type: UPDATE_NOTE,
        note,
    };
}

export function deleteNote(noteId, laneId) {
    return {
        type: DELETE_NOTE,
        noteId,
        laneId,
    };
}