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

#### windchillFahrenheit(temp, speed)

### Dew point functions

#### dewPoint(temp, humidity)

### Heat index functions

#### heatIndexCelsius(temp, humidity)

#### heatIndexFahrenheit(temp, humidity)

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