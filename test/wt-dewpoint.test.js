describe('weather-tools dew point test suite', () => {

    const wt = require('../weather-tools');

    const round1 = require('./test-helpers').roundToOne;

    it('tests dew point calculation for a temperature > 0 degrees', () => {
        expect(round1(wt.dewPoint(2.5, 65))).toEqual(-3.4);
    });

    it('tests dew point calculation for a temperature < 0 degrees', () => {
        expect(round1(wt.dewPoint(-4.3, 87))).toEqual(-6.1);
    });

});