const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  if (
    [distancePoints, stylePoints, windFactor, gateFactor].find(score => isNaN(score)) ||
    windFactor == null ||
    gateFactor == null
  ) return 'Incorrect data';

  return (parseFloat(distancePoints) + stylePoints + windFactor + gateFactor).toFixed(1);
}

module.exports = calculateTotalPoints;