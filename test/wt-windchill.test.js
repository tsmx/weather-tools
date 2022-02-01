describe('weather-tools wind chill test suite', () => {

    const wt = require('../weather-tools');

    const round1 = require('./test-helpers').roundToOne;

    it('tests windchill calculation for celsius/kmh', () => {
        expect(round1(wt.windchillCelsius(2, 11))).toEqual(-1.2);
    });

    it('tests windchill calculation for celsius/kmh with a too high temperature', () => {
        expect(isNaN(wt.windchillCelsius(10.1, 11))).toBeTruthy();
    });

    it('tests windchill calculation for celsius/kmh with a too low wind speed', () => {
        expect(round1(wt.windchillCelsius(2, 3.2))).toEqual(2);
    });

    it('tests windchill calculation for fahrenheit/mph with a too high temperature', () => {
        expect(isNaN(wt.windchillFahrenheit(51, 4))).toBeTruthy();
    });

    it('tests windchill calculation for fahrenheit/mph with a too low wind speed', () => {
        expect(round1(wt.windchillFahrenheit(15, 2))).toEqual(15);
    });

});