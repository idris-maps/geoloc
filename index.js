var isAvailable = require('./lib/is-available')
var getCurrent = require('./lib/get-current')
var setOptions = require('./lib/set-options')
var retryWatch = require('./lib/retry-watch')
var watch = require('./lib/watch')
var parsePosition = require('./lib/parse-position')
var Emitter = require('events').EventEmitter

module.exports = function() {
	var self = this
	
	var e = new Emitter()
	self.e = e
	self.options = {
  enableHighAccuracy: true, 
  maximumAge: 10000, 
  timeout: 9000
	}
	self.data = []
	self.latestPosition = null
	self.latestTime = null
	self.watchId = null
	self.isWatching = false
	self.errorWatching = null

	self.isAvailable = function() { return isAvailable() }
	self.getCurrent = function(callback) { getCurrent(function(position) { return parsePosition(position) }) }
	self.setOptions = function(o) { setOptions(self, o) }
	self.watch = function() { watch(self) }
	self.retryWatch = function(err) { retryWatch(self, err) }

	self.start = function() {
		self.isWatching = true
		self.data = []
		self.watch()
		self.e.emit('start')
	}
	self.stop = function() {
		navigator.geolocation.clearWatch(self.watchId)
		self.isWatching = false
		self.e.emit('stop')
	}
	self.restart = function() {
		self.isWatching = true
		self.watch()
		self.e.emit('restart')
	}
	self.on = function(evt, callback) {
		if(evt === 'start') { self.e.on('start', function() { callback() }) }
		else if(evt === 'stop') { self.e.on('stop', function() { callback() }) }
		else if(evt === 'restart') { self.e.on('restart', function() { callback() }) }
		else if(evt === 'position') { self.e.on('position', function(pos) { callback(pos) }) }
	} 
}
