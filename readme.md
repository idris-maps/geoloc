# Install

```
$ npm install browser-geolocation
```

# Usage 

```
var Geolocation = require('browser-geolocation')
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

# Position object

The positions are objects with the following keys:

* ```lat``` (latitude)
* ```lng``` (longitude)
* ```alt``` (altitude)
* ```timestamp``` (milliseconds since 1 January 1970 00:00:00 UTC)

# Events

Listen to the following events 

* 'start'
* 'stop'
* 'restart'
* 'position' (callback argument is the new position)

with

```
geo.on(<event-name>, function() {  })
```

For example

```
geo.on('position', function(pos) {
	console.log(pos)
	// logs latest postion
})
```

# Convert to GPX

There is a separate library to convert ```geo.data``` to GPX: [geolocation-to-gpx](https://www.npmjs.com/package/geolocation-to-gpx)







