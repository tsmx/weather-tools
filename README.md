# [**@tsmx/weather-tools**](https://github.com/tsmx/weather-tools)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![npm (scoped)](https://img.shields.io/npm/v/@tsmx/weather-tools)
![node-current (scoped)](https://img.shields.io/node/v/@tsmx/weather-tools)
[![Build Status](https://img.shields.io/github/actions/workflow/status/tsmx/weather-tools/git-build.yml?branch=master)](https://img.shields.io/github/actions/workflow/status/tsmx/weather-tools/git-build.yml?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/tsmx/weather-tools/badge.svg?branch=master)](https://coveralls.io/github/tsmx/weather-tools?branch=master)

> Toolset for weather data calculations and conversions.

Provides the following functionalities: 
- Wind chill calculation (Celsius and Fahrenheit)
- Dew point calculation (Celsius)
- Heat index calculation (Celsius and Fahrenheit)
- Degree to compass direction conversion
- Fahrenheit <> Celsius conversion
- MPH <> KMH conversion
- Inch <> Millimeter conversion

## Usage

Example: calculating the dew point in Celsius from given humidity `hum` and temperature in Fahrenheit `tempF`.

```js
const wt = require('@tsmx/weather-tools');

const tempC = wt.fahrenheitToCelsius(tempF);
const dewPoint = wt.dewPoint(tempC, hum);
```

For details look the API descriptions for:
- [Wind Chill](#wind-chill-functions)
- [Dew Point](#dew-point-functions)
- [Heat Index](#heat-index-functions)
- [Unit conversions](#conversion-functions)

## API

### Wind chill functions

#### windchillCelsius(temp, speed)

Calculates the wind chill temperature in degrees Celsius.

**Note:** Wind chill calculation is only feasible for low temperatures <= 10 degrees Celsius and a minimum wind speed > 4.8 km/h.

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

**Note:** Wind chill calculation is only feasible for low temperatures <= 50 degrees Fahrenheit and a minimum wind speed > 3.0 mph.

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

**Note:** Heat index calculation is only feasible for high temperatures >= 27 degrees Celsius and a minimum humidity >= 40%.

Returns:
- `NaN` if `temp` is lower than 27.0 degress Celsius or `humidity` is lower than 40.0
- the calculated heat index otherwise

##### temp

Type: `number`

The current temperature in degrees Celsius.

##### humidity 

Type: `number`

The current humidity in percent (0.0 - 100.0).

#### heatIndexFahrenheit(temp, humidity)

Calculates the heat index in degrees Fahrenheit.

**Note:** Heat index calculation is only feasible for high temperatures >= 80 degrees Fahrenheit and a minimum humidity >= 40%.

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

Converts degrees to the closest matching compass direction, e.g. 0 to `N`, 35 to `NE`, 301 to `WNW` and so on.

A 32-point compass rose is used for the conversion.

| Degree | Direction / returned value|
|--------|---------------------------|
| 0.0    | `N`                       |
| 22.5   | `NNE`                     |
| 45.0   | `NE`                      |
| 67.5   | `ENE`                     |
| 90.0   | `E`                       |
| 112.5  | `ESE`                     |
| 135.0  | `SE`                      |
| 157.5  | `SSE`                     |
| 180.0  | `S`                       |
| 202.5  | `SSW`                     |
| 225.0  | `SW`                      |
| 247.5  | `WSW`                     |
| 270.0  | `W`                       |
| 292.5  | `WNW`                     |
| 315.0  | `NW`                      |
| 337.5  | `NNW`                     |

##### deg

Type: `number`

Number of degrees to be converted

#### fahrenheitToCelsius(fahrenheit)

Converts Fahrenheit to Celsius.

##### fahrenheit

Type: `number`

The value to be converted in degrees Fahrenheit

#### celsiusToFahrenheit(celsius)

Converts Celsius to Fahrenheit.

##### ceslsius

Type: `number`

The value to be converted in degrees Celsius

#### mphToKmh(mph)

Converts MPH to KMH.

##### mph

Type: `number`

The value to be converted in MPH.

#### kmhToMph(kmh)

Converts KMH to MPH.

##### kmh

Type: `number`

The value to be converted in KMH.

#### inchToMillimeter(inch)

Converts inches to millimeters.

##### inch

Type: `number`

The value to be converted in millimeters.

#### millimeterToInch(millimeter)

Converts millimeters to inches.

##### millimeter

Type: `number`

The value to be converted in inches.

## References

The implementations in this library are based on the following references.

[Wind chill formulas](https://en.wikipedia.org/wiki/Wind_chill)

[Dew point formulas](https://www.wetterochs.de/wetter/feuchte.html)

[Heat index formulas](https://en.wikipedia.org/wiki/Heat_index)

[Wind/compass direction algorithm](https://www.campbellsci.com/blog/convert-wind-directions)