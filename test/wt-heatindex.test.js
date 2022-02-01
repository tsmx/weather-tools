describe('weather-tools wind chill test suite', () => {

    const wt = require('../weather-tools');

    // Reference: https://www.wpc.ncep.noaa.gov/html/heatindex.shtml

    const heatIndexRefCelsius = [
        { temp: 27, humidity: 40, hi: 27 },
        { temp: 31, humidity: 65, hi: 36 },
        { temp: 30, humidity: 100, hi: 44 }
    ]

    const heatIndexRefFahrenheit = [
        { temp: 80, humidity: 40, hi: 80 },
        { temp: 87, humidity: 68, hi: 97 },
        { temp: 85, humidity: 100, hi: 107 }
    ]

    it('tests heat index calculation for celsius', () => {
        for (let { temp, humidity, hi } of heatIndexRefCelsius) {
            expect(Math.round(wt.heatIndexCelsius(temp, humidity))).toEqual(hi);
        }
    });

    it('tests heat index calculation for celsius with too low temperature', () => {
        expect(isNaN(wt.heatIndexCelsius(26, 40))).toBeTruthy();
    });

    it('tests heat index calculation for celsius with too low humidity', () => {
        expect(isNaN(wt.heatIndexCelsius(27, 39))).toBeTruthy();
    });

    it('tests heat index calculation for celsius with too low temperature and humidity', () => {
        expect(isNaN(wt.heatIndexCelsius(26, 39))).toBeTruthy();
    });

    it('tests heat index calculation for fahrenheit', () => {
        for (let { temp, humidity, hi } of heatIndexRefFahrenheit) {
            expect(Math.round(wt.heatIndexFahrenheit(temp, humidity))).toEqual(hi);
        }
    });

    it('tests heat index calculation for fahrenheit with too low temperature', () => {
        expect(isNaN(wt.heatIndexFahrenheit(79, 40))).toBeTruthy();
    });

    it('tests heat index calculation for fahrenheit with too low humidity', () => {
        expect(isNaN(wt.heatIndexFahrenheit(80, 39))).toBeTruthy();
    });

    it('tests heat index calculation for fahrenheit with too low temperature and humidity', () => {
        expect(isNaN(wt.heatIndexFahrenheit(79, 39))).toBeTruthy();
    });

});