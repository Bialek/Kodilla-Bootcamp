const calculateDistancePoints = (distance, hillSize, kPoint) => {
    switch (hillSize) {
        //normal hillSize
        case 0:
            return (60 + ((distance - kPoint) * 2));
        //large hillSize
        case 1:
            return (60 + ((distance - kPoint) * 1.8));
        //ski flying hillSize
        case 2:
            return (120 + ((distance - kPoint) * 1.2));
        default:
            return "wrong hillSize";
    }
  };

  module.exports = calculateDistancePoints;