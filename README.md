# [**@tsmx/weather-tools**](https://github.com/tsmx/weather-tools)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/workflow/status/tsmx/weather-tools/git-ci-build)](https://img.shields.io/github/workflow/status/tsmx/weather-tools/git-ci-build)
[![Coverage Status](https://coveralls.io/repos/github/tsmx/weather-tools/badge.svg?branch=master)](https://coveralls.io/github/tsmx/weather-tools?branch=master)

> Toolset for weather data calculations and conversions.

Provides the following functionalities: 
- Wind chill calculation (Celsius and Fahrenheit)
- Dew point calculation (Celsius)
- Heat index calculation (Celsius and Fahrenheit)
- Degree to compass direction conversion
- Fahrenheit <> Celsius conversion
- MPH <> KMH conversion

## Usage

Example: calculating the dew point in Celsius from given humidity `hum` and temperature in Fahrenheit `tempF`.

```js
const wt = require('@tsmx/weather-tools');

const tempC = wt.fahrenheitToCelsius(tempF);
const dewPoint = wt.dewPoint(tempC, hum);
```

## API

### Wind chill functions

#### windchillCelsius(temp, speed)

Calculates the wind chill temperature in degrees Celsius.

**Remark:**
Note that wind chill calculation is only feasible for low temperatures <= 10 degrees Celsius and a minimum wind speed > 4.8 km/h.

Returns:
- `NaN` if `temp` is greater than 10.0 degress Celsius
- `temp` if `speed` is less than or equal to 4.8 km/h
- the calculated wind chill otherwise

##### temp

Type: `number`

The current temperature in degrees Celsius.

##### speed

Type: `number`

The current wind speed in km/h.

#### windchillFahrenheit(temp, speed)

Calculates the wind chill temperature in degrees Fahrenheit.

**Remark:**
Note that wind chill calculation is only feasible for low temperatures <= 50 degrees Fahrenheit and a minimum wind speed > 3.0 mph.

Returns:
- `NaN` if `temp` is greater than 50.0 degress Fahrenheit
- `temp` if `speed` is less than or equal to 3.0 mph
- the calculated wind chill otherwise

##### temp

Type: `number`

The current temperature in degrees Fahrenheit.

##### speed

Type: `number`

The current wind speed in mph.

### Dew point functions

#### dewPoint(temp, humidity)

Calculates the dew point in degrees Celsius.

##### temp

Type: `number`

The current temperature in degrees Celsius.

##### humidity

Type: `number`

The current humidity in percent (0.0 - 100.0).

### Heat index functions

#### heatIndexCelsius(temp, humidity)

Calculates the heat index in degrees Celsius.

**Remark:**
Note that heat index calculation is only feasible for high temperatures >= 27 degrees Celsius and a minimum humidity >= 40%.

Returns:
- `NaN` if `temp` is lower than 27. degress Celsius or `humidity` is lower than 40.0
- the calculated heat index otherwise

##### temp

Type: `number`

The current temperature in degrees Celsius.

##### humidity 

Type: `number`

The current humidity in percent (0.0 - 100.0).

#### heatIndexFahrenheit(temp, humidity)

Calculates the heat index in degrees Fahrenheit.

**Remark:**
Note that heat index calculation is only feasible for high temperatures >= 80 degrees Fahrenheit and a minimum humidity >= 40%.

Returns:
- `NaN` if `temp` is lower than 80.0 degress Fahrenheit or `humidity` is lower than 40.0
- the calculated heat index otherwise

##### temp

Type: `number`

The current temperature in degrees Fahrenheit.

##### humidity 

Type: `number`

The current humidity in percent (0.0 - 100.0).

### Conversion functions

#### degreesToDirection(deg)

#### fahrenheitToCelsius(fahrenheit)

#### celsiusToFahrenheit(celsius)

#### mphToKmh(mph)

#### kmhToMph(kmh)

## References

The implementations in this library are based on the following references.

[Wind chill formulas](https://en.wikipedia.org/wiki/Wind_chill)

[Dew point formulas](https://www.wetterochs.de/wetter/feuchte.html)

[Heat index formulas](https://en.wikipedia.org/wiki/Heat_index)

[Wind/compass direction algorithm](https://www.campbellsci.com/blog/convert-wind-directions)