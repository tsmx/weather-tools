const MPH_IN_KMH = 1.60934;
const COMPASS_DIRECTIONS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'];
const HEAT_INDEX_CONSTS = {
    celsius: {
        c1: -8.784695,
        c2: 1.61139411,
        c3: 2.338549,
        c4: -0.14611605,
        c5: -1.2308094e-2,
        c6: -1.6424828e-2,
        c7: 2.211732e-3,
        c8: 7.2546e-4,
        c9: -3.582e-6
    },
    fahrenheit: {
        c1: -42.379,
        c2: 2.04901523,
        c3: 10.1433127,
        c4: -0.22475541,
        c5: -6.83783e-3,
        c6: -5.481717e-2,
        c7: 1.22874e-3,
        c8: 8.5282e-4,
        c9: -1.99e-6
    }
}

/**
 * Converts MPH to KMH
 * @param {number} mph speed in MPH
 * @returns {number} speed in KMH
 */
const mphToKmh = (mph) => {
    return mph * MPH_IN_KMH;
}

/**
 * Converts KMH to MPH
 * @param {number} kmh speed in KMH
 * @returns {number} speed in MPH
 */
const kmhToMph = (kmh) => {
    return kmh / MPH_IN_KMH;
}

/**
 * Converts Fahrenheit to Celsius
 * @param {number} celsius temperature in Fahrenheit
 * @returns {number} temperature in Celsius
 */
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

/**
 * Converts Celsius to Fahrenheit
 * @param {number} celsius temperature in Celsius
 * @returns {number} temperature in Fahrenheit
 */
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

// Wind Chill functions
// Reference: https://en.wikipedia.org/wiki/Wind_chill

/**
 * Calculates the wind chill in Celsius
 * @param {number} temp temperature in Celsius
 * @param {number} speed wind speed in KMH
 * @returns {number} wind chill in Celsius
 */
const windchillCelsius = (temp, speed) => {
    if (temp > 10.0) return NaN;
    if (speed <= 4.8) return temp;
    return 13.12 + (0.6215 * temp) + ((0.3965 * temp - 11.37) * Math.pow(speed, 0.16));
}

/**
 * Calculates the wind chill in Fahrenheit
 * @param {number} temp temperature in Fahrenheit
 * @param {number} speed wind speed in MPH
 * @returns {number} wind chill in Fahrenheit
 */
const windchillFahrenheit = (temp, speed) => {
    if (temp > 50.0) return NaN;
    if (speed <= 3.0) return temp;
    return 35.74 + (0.6215 * temp) + ((0.4275 * temp - 35.75) * Math.pow(speed, 0.16));
}

// Dew Point functions
// Reference: https://www.wetterochs.de/wetter/feuchte.html

const getMagnusConstants = (temp) => {
    if (temp >= 0.0) return { a: 7.5, b: 237.3 };
    else return { a: 7.6, b: 240.7 };
}

const saturatedVaporPressure = (temp) => {
    const magnusConsts = getMagnusConstants(temp);
    return 6.1078 * Math.pow(10, ((magnusConsts.a * temp) / (magnusConsts.b + temp)));
}

const vaporPressure = (temp, humidity) => {
    return humidity / 100 * saturatedVaporPressure(temp);
}

const dewPointHelperFunction = (temp, humidity) => {
    return Math.log10(vaporPressure(temp, humidity) / 6.1078)
}

/**
 * Calculates the dew point.
 * @param {number} temp temperature in Celsius
 * @param {number} humidity humidity in percent
 * @returns {number} dew point in Celsius
 */
const dewPoint = (temp, humidity) => {
    const magnusConsts = getMagnusConstants(temp);
    const helper = dewPointHelperFunction(temp, humidity);
    return magnusConsts.b * helper / (magnusConsts.a - helper);
}

// Wind direction functions
// Reference: https://www.campbellsci.com/blog/convert-wind-directions

/**
 * Converts degrees to a compass direction
 * @param {number} deg 
 * @returns {string} the compass direction
 */
const degreesToDirection = (deg) => {
    return COMPASS_DIRECTIONS[Math.round((deg % 360) / 22.5)];
}

// Heat Index functions
// Reference: https://en.wikipedia.org/wiki/Heat_index

const heatIndex = (temp, humidity, consts) => {
    return consts.c1 +
        consts.c2 * temp +
        consts.c3 * humidity +
        consts.c4 * temp * humidity +
        consts.c5 * Math.pow(temp, 2) +
        consts.c6 * Math.pow(humidity, 2) +
        consts.c7 * Math.pow(temp, 2) * humidity +
        consts.c8 * temp * Math.pow(humidity, 2) +
        consts.c9 * Math.pow(temp, 2) * Math.pow(humidity, 2);
}

/**
 * Calculates the heat index in Celsius.
 * @param {number} temp temperature in Celsius
 * @param {number} humidity humidity in percent
 * @returns {number} heat index in Celsius
 */
const heatIndexCelsius = (temp, humidity) => {
    if (temp < 27 || humidity < 40) return NaN;
    return heatIndex(temp, humidity, HEAT_INDEX_CONSTS.celsius);
}

/**
 * Calculates the heat index in Fahrenheit.
 * @param {number} temp temperature in Fahrenheit
 * @param {number} humidity humidity in percent
 * @returns {number} heat index in Fahrenheit
 */
const heatIndexFahrenheit = (temp, humidity) => {
    if (temp < 80 || humidity < 40) return NaN;
    return heatIndex(temp, humidity, HEAT_INDEX_CONSTS.fahrenheit);
}

module.exports.fahrenheitToCelsius = fahrenheitToCelsius;
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
module.exports.windchillCelsius = windchillCelsius;
module.exports.windchillFahrenheit = windchillFahrenheit;
module.exports.mphToKmh = mphToKmh;
module.exports.kmhToMph = kmhToMph;
module.exports.dewPoint = dewPoint;
module.exports.degreesToDirection = degreesToDirection;
module.exports.heatIndexCelsius = heatIndexCelsius;
module.exports.heatIndexFahrenheit = heatIndexFahrenheit;