describe('weather-tools unit conversion test suite', () => {

    const wt = require('../weather-tools');

    const round2 = require('./test-helpers').roundToTwo;
    
    const speedRefValues = {
        kmhToMph: {
            kmh: 15.0,
            mph: 9.321
        },
        mphToKmh: {
            mph: 15.0,
            kmh: 24.140
        }
    }

    const tempRefValues = {
        celsiusToFahrenheit: {
            clesius: 21.0,
            fahrenheit: 69.8
        },
        fahrenheitToCelsius: {
            fahrenheit: 72,
            celsius: 22.222
        }
    }

    it('tests a mph-to-kmh conversion', () => {
        expect(round2(wt.mphToKmh(speedRefValues.mphToKmh.mph))).toEqual(round2(speedRefValues.mphToKmh.kmh));
    });

    it('tests a kmh-to-mph conversion', () => {
        expect(round2(wt.kmhToMph(speedRefValues.kmhToMph.kmh))).toEqual(round2(speedRefValues.kmhToMph.mph));
    });

    it('tests a celsius-to-fahrenheit conversion', () => {
        expect(round2(wt.celsiusToFahrenheit(tempRefValues.celsiusToFahrenheit.clesius)))
            .toEqual(round2(tempRefValues.celsiusToFahrenheit.fahrenheit));
    });

    it('tests a fahrenheit-to-celsius conversion', () => {
        expect(round2(wt.fahrenheitToCelsius(tempRefValues.fahrenheitToCelsius.fahrenheit)))
            .toEqual(round2(tempRefValues.fahrenheitToCelsius.celsius));
    });

});