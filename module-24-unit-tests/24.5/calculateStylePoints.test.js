const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('correct marks', () => {
        const actual = calculateStylePoints([18.0, 18.5, 17.5, 18.5, 18.5]);
        
        const expected = 55.0;

        assert.equal(actual, expected);
    });

    it('same marks', () => {
        const actual = calculateStylePoints([18.0, 18.0, 18.0, 18.0, 18.0]);

        const expected = '54.0';

        assert.equal(actual, expected);
    });

    it('too many marks', () => {
        const actual = calculateStylePoints([18.0, 18.5, 17.5, 18.5, 18.5, 15.0, 12.0, 1]);

        const expected = 'Incorrect data';

        assert.equal(actual, expected);
    });

    it('not enough marks', () => {
        const actual = calculateStylePoints([18.0, 18.5, 17.5]);

        const expected = 'Incorrect data';

        assert.equal(actual, expected);
    });

    it('marks < 0', () => {
        const actual = calculateStylePoints([-18.0, 10.5, 10.5, 1245618, -124764562]);

        const expected = 'Incorrect data';

        assert.equal(actual, expected);
    });

    it('marks > 20', () => {
        const actual = calculateStylePoints([18.0, 20.5, 30.5, 1245618, 124764562]);

        const expected = 'Incorrect data';
        
        assert.equal(actual, expected);
    });

    it('marks are null', () => {
        const actual = calculateStylePoints([18.0, 10.5, 10.5, null, null]);

        const expected = 'Incorrect data';
        
        assert.equal(actual, expected);
    });

    it('marks are undefinded', () => {
        const actual = calculateStylePoints([18.0, 10.5, 10.5, undefined, undefined]);

        const expected = 'Incorrect data';
        
        assert.equal(actual, expected);
    });

    it('marks are string', () => {
        const actual = calculateStylePoints([11, 'lorem', 'iipsum', 17, 9]);

        const expected = 'Incorrect data';

        assert.equal(actual, expected);
    });
});