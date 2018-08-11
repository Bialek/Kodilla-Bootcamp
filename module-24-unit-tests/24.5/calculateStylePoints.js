const calculateStylePoints = (styleNotes) => {
    if (
        styleNotes.length !== 5 ||
        styleNotes.find( note => note < 0 || note > 20 || isNaN(note)) ||
        styleNotes[0] == null ||
        styleNotes[1] == null ||
        styleNotes[2] == null ||
        styleNotes[3] == null ||
        styleNotes[4] == null 
    ) return 'Incorrect data';

    const remove = (array, item) => {
        const index = array.indexOf(item);
        if (index !== -1) array.splice(index, 1);
        return array;
    }

    remove(styleNotes, Math.max(...styleNotes));
    remove(styleNotes, Math.min(...styleNotes));

    return styleNotes.reduce((a, b) => a + b, 0);
};

module.exports = calculateStylePoints;