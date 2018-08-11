const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints.js');

describe('calculateDistancePoints', () => {
    describe('hillSize', () => {
        it('should return error', () => {
            const actual = calculateDistancePoints(100, 4, 110);
    
            const expected = 'Incorrect data';
    
            assert.equal(actual, expected);
        });
    });

    describe('distance', () => {
        it('distance > K point normal hillSize', () => {
            const actual = calculateDistancePoints(106.5, 1, 98);

            const expected = 77.0;

            assert.equal(actual, expected);
        });

        it('distance > K point large hillSize', () => {
            const actual = calculateDistancePoints(133.5, 2, 120);

            const expected = 84.3;

            assert.equal(actual, expected);
        });

        it('distance > K point sky flying hillSize', () => {
            const actual = calculateDistancePoints(227.5, 3, 200);

            const expected = 153.0;

            assert.equal(actual, expected);
        });
    });

    describe('kPoint', () => {
        it('distance < K point normal hillSize', () => {
            const actual = calculateDistancePoints(83.0, 1, 98);

            const expected = 30.0;

            assert.equal(actual, expected);
        });
         
        it('distance < K point large hillSize', () => {
            const actual = calculateDistancePoints(114.5, 2, 120);

            const expected = 50.1;

            assert.equal(actual, expected);
        });

        it('distance < K point sky flying hillSize', () => {
            const actual = calculateDistancePoints(145.5, 3, 200);

            const expected = 54.6;

            assert.equal(actual, expected);
        });
    });

    describe('Wrong data', () => {
        it('NaN distance', () => {
            const actual = calculateDistancePoints(NaN, 1, 98);

            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });
         
        it('undefined kPoint', () => {
            const actual = calculateDistancePoints(114.5, 2, undefined);

            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });

        it('minus distance', () => {
            const actual = calculateDistancePoints(-145.5, 3, 200);

            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });

        it('distance as a string', () => {
            const actual = calculateDistancePoints('asfasf', 3, 200);
            
            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });
    });
    
});