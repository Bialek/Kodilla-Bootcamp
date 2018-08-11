const calculateDistancePoints = (distance, hillSize, kPoint) => {
    if  (
        isNaN(kPoint) ||
        isNaN(distance) ||
        distance < 0 ||
        hillSize < 0 ||
        kPoint < 0 ||
        distance == null ||
        hillSize == null ||
        kPoint == null
    ) return 'Incorrect data';


    switch (hillSize) {
        //normal hillSize
        case 1:
            return (60 + ((distance - kPoint) * 2)).toFixed(1);
        //large hillSize
        case 2:
            return (60 + ((distance - kPoint) * 1.8)).toFixed(1);
        //ski flying hillSize
        case 3:
            return (120 + ((distance - kPoint) * 1.2)).toFixed(1);
        default:
            return 'Incorrect data';
    }
  };

  module.exports = calculateDistancePoints;