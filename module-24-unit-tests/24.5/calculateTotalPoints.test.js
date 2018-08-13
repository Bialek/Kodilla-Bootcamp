const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('windFactor test', () => {
        it('windFactor minus', () => {
            const actual = calculateTotalPoints(227.5, 3, 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7,  -8.4);

            const expected = 208.3;

            assert.equal(actual, expected);
        });

        it('windFactor plus', () => {
            const actual = calculateTotalPoints(122.0, 2, 120, [17.5, 18.0, 17.5, 18.0, 18.0], 0,  2.0);

            const expected = 119.1;

            assert.equal(actual, expected);
        });
    });

    describe('gateFactor test', () => {
        it('gateFactor minus', () => {
            const actual = calculateTotalPoints(106.5, 1, 98, [18.5, 18.5, 18.5, 19.0, 19.0], 6.4,  -13.5);

            const expected = 125.9;

            assert.equal(actual, expected);
        });

        it('gateFactor plus', () => {
            const actual = calculateTotalPoints(225.0, 3, 200, [18.0, 18.5, 18.0, 18.0, 19.0], -8.7,  -9.9);

            const expected = 185.9;

            assert.equal(actual, expected);
        });
    });

    describe('Incorrect data test', () => {
        it('Incorrect distance', () => {
            const actual = calculateTotalPoints('asfd', 1, 98, [18.5, 18.5, 18.5, 19.0, 19.0], 6.4,  -13.5);

            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });

        it('no hillSize', () => {
            const actual = calculateTotalPoints(225.0, 200, [18.0, 18.5, 18.0, 18.0, 19.0], -8.7,  -9.9);

            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });

        it('no marks', () => {
            const actual = calculateTotalPoints(225.0, 200, -8.7,  -9.9);

            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });

        it('no windFactor', () => {
            const actual = calculateTotalPoints(225.0, 3, 200, [18.0, 18.5, 18.0, 18.0, 19.0], -9.9);

            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });

        it('windFactor as a string', () => {
            const actual = calculateTotalPoints(225.0, 3, 200, [18.0, 18.5, 18.0, 18.0, 19.0], 'asfasf',  -9.9);

            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });

        it('no gateFactor', () => {
            const actual = calculateTotalPoints(225.0, 3, 200, [18.0, 18.5, 18.0, 18.0, 19.0], -8.7);

            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });

        it('gateFactor as a string', () => {
            const actual = calculateTotalPoints(225.0, 3, 200, [18.0, 18.5, 18.0, 18.0, 19.0], -8.7,  'asfasf');

            const expected = 'Incorrect data';

            assert.equal(actual, expected);
        });
        
    });
});

