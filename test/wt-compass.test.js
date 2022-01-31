describe('weather-tools compass/wind direction test suite', () => {

    const wt = require('../weather-tools');

    const degreeDirectionRef = [
        { deg: 0, dir: 'N' },
        { deg: 360, dir: 'N' },
        { deg: 359.9, dir: 'N' },
        { deg: 362.51, dir: 'N' },
        { deg: 22.49, dir: 'NNE' },
        { deg: 11.24, dir: 'N' },
        { deg: 11.25, dir: 'NNE' },
        { deg: 227, dir: 'SW' },
        { deg: 236.24, dir: 'SW' },
        { deg: 236.25, dir: 'WSW' }
    ]

    it('tests dgerees to direction translation', () => {
        for (let { deg, dir } of degreeDirectionRef) {
            expect(wt.degreesToDirection(deg)).toEqual(dir);
        }
    });

});