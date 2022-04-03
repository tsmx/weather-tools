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

    const temperatureRefValues = {
        celsiusToFahrenheit: {
            clesius: 21.0,
            fahrenheit: 69.8
        },
        fahrenheitToCelsius: {
            fahrenheit: 72,
            celsius: 22.222
        }
    }

    const lengthRefValues = {
        inchToMillimeter: {
            inch: 17,
            millimeter: 431.8
        },
        millimeterToInch: {
            millimeter: 57,
            inch: 2.24409
        }
    }

    it('tests a mph-to-kmh conversion', () => {
        expect(round2(wt.mphToKmh(speedRefValues.mphToKmh.mph))).toEqual(round2(speedRefValues.mphToKmh.kmh));
    });

    it('tests a kmh-to-mph conversion', () => {
        expect(round2(wt.kmhToMph(speedRefValues.kmhToMph.kmh))).toEqual(round2(speedRefValues.kmhToMph.mph));
    });

    it('tests a celsius-to-fahrenheit conversion', () => {
        expect(round2(wt.celsiusToFahrenheit(temperatureRefValues.celsiusToFahrenheit.clesius)))
            .toEqual(round2(temperatureRefValues.celsiusToFahrenheit.fahrenheit));
    });

    it('tests a fahrenheit-to-celsius conversion', () => {
        expect(round2(wt.fahrenheitToCelsius(temperatureRefValues.fahrenheitToCelsius.fahrenheit)))
            .toEqual(round2(temperatureRefValues.fahrenheitToCelsius.celsius));
    });

    it('tests a inch-to-millimeter conversion', () => {
        expect(round2(wt.inchToMillimeter(lengthRefValues.inchToMillimeter.inch)))
            .toEqual(round2(lengthRefValues.inchToMillimeter.millimeter));
    });

    it('tests a millimeter-to-inch conversion', () => {
        expect(round2(wt.millimeterToInch(lengthRefValues.millimeterToInch.millimeter)))
            .toEqual(round2(lengthRefValues.millimeterToInch.inch));
    });

});