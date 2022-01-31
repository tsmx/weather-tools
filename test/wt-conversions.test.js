describe('weather-tools unit conversion test suite', () => {

    const wt = require('../weather-tools');

    const roundToTwo = (num) => {
        return Math.round((num + Number.EPSILON) * 100) / 100;
    }

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
        expect(roundToTwo(wt.mphToKmh(speedRefValues.mphToKmh.mph))).toEqual(roundToTwo(speedRefValues.mphToKmh.kmh));
    });

    it('tests a kmh-to-mph conversion', () => {
        expect(roundToTwo(wt.kmhToMph(speedRefValues.kmhToMph.kmh))).toEqual(roundToTwo(speedRefValues.kmhToMph.mph));
    });

    it('tests a celsius-to-fahrenheit conversion', () => {
        expect(roundToTwo(wt.celsiusToFahrenheit(tempRefValues.celsiusToFahrenheit.clesius)))
            .toEqual(roundToTwo(tempRefValues.celsiusToFahrenheit.fahrenheit));
    });

    it('tests a fahrenheit-to-celsius conversion', () => {
        expect(roundToTwo(wt.fahrenheitToCelsius(tempRefValues.fahrenheitToCelsius.fahrenheit)))
            .toEqual(roundToTwo(tempRefValues.fahrenheitToCelsius.celsius));
    });

});