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
        { deg: 236.25, dir: 'WSW' },
        { deg: 22.5, dir: 'NNE' },
        { deg: 45, dir: 'NE' },
        { deg: 67.5, dir: 'ENE' },
        { deg: 90, dir: 'E' },
        { deg: 112.5, dir: 'ESE' },
        { deg: 135, dir: 'SE' },
        { deg: 157.5, dir: 'SSE' },
        { deg: 180, dir: 'S' },
        { deg: 202.5, dir: 'SSW' },
        { deg: 225, dir: 'SW' },
        { deg: 247.5, dir: 'WSW' },
        { deg: 270, dir: 'W' },
        { deg: 292.5, dir: 'WNW' },
        { deg: 315, dir: 'NW' },
        { deg: 337.5, dir: 'NNW' }
    ];

    it('tests degrees to compass direction translation', () => {
        for (let { deg, dir } of degreeDirectionRef) {
            expect(wt.degreesToDirection(deg)).toEqual(dir);
        }
    });

});