const calculateStylePoints = (styleNotes) => {
    const remove = (array, item) => {
        const index = array.indexOf(item);
        if (index !== -1) array.splice(index, 1);
        return array;
    }

    remove(styleNotes, Math.max(...styleNotes));
    remove(styleNotes, Math.min(...styleNotes));

    return styleNotes;
  };

  module.exports = calculateStylePoints;