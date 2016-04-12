# Install

```
$ npm install geoloc
```

# Usage 

```
var Geolocation = require('geoloc')
var geo = new Geolocation()
```

## Verify that navigator.geolocation is available

```
geo.isAvailable()
```

Returns a boolean

## Start watching position

```
geo.start()
```

Initializes the data and starts watching. 

**This will remove all previous positions**

## Stop watching position

```
geo.stop()
```

## Restart watching

```
geo.restart()
```

To use after ```geo.stop()``` to continue watching without initializing the data

## Get all positions

```
var positions = geo.data
```

## Get latest position

```
var position = geo.latestPosition
```

# Postion object

The positions are objects with the following keys:

* lat (latitude)
* lng (longitude)
* alt (altitude)
* timestamp (milliseconds since 1 January 1970 00:00:00 UTC)










