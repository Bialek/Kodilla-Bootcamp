const assert = require('assert');
const formatDate = require('./index');

describe('formatDate', () => {
    describe('seconds', () => {
        it('should return seconds', () => {
            const actual = formatDate(23);
    
            const expected = '23s';
    
            assert.equal(actual, expected);
        });

        it('should return 0 seconds if no value is passed', () => {
            const actual = formatDate();
    
            const expected = '0s';
    
            assert.equal(actual, expected);
        });
    });

    describe('minutes', () => {
        it('should work for one digit minutes and seconds', () => {
            const actual = formatDate(65);

            const expected = '1m 5s';

            assert.equal(actual, expected);
        });

        it('should work for 2 digits minutes and seconds', () => {
            const actual = formatDate(1414);

            const expected = '23m 34s';

            assert.equal(actual, expected);
        });

        it('should return only minutes', () => {
            const actual = formatDate(780);

            const expected = '13m';

            assert.equal(actual, expected);
        });
    });

    describe('hours', () => {
        it('should work for one digit hours, minutes and seconds', () => {
            const actual = formatDate(3723);

            const expected = '1h 2m 3s';

            assert.equal(actual, expected);
        });

        it('should work for 2 digit hours, minutes and seconds', () => {
            const actual = formatDate(40333);

            const expected = '11h 12m 13s';

            assert.equal(actual, expected);
        });

        it('should work for hours only', () => {
            const actual = formatDate('7200');

            const expected = '2h';

            assert.equal(actual, expected);
        });

        it('should work for hours and minutes', () => {
            const actual = formatDate(77820);

            const expected = '21h 37m';

            assert.equal(actual, expected);
        });

        it('should work for hours and seconds', () => {
            const actual = formatDate('10815');

            const expected = '3h 15s';

            assert.equal(actual, expected);
        });
    });
});