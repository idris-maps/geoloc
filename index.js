var isAvailable = require('./lib/is-available')
var getCurrent = require('./lib/get-current')
var setOptions = require('./lib/set-options')
var retryWatch = require('./lib/retry-watch')
var watch = require('./lib/watch')
var parsePosition = require('./lib/parse-position')

module.exports = function() {
	var self = this

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
	}
	self.stop = function() {
		navigator.geolocation.clearWatch(self.watchId)
		self.isWatching = false
	}
	self.restart = function() {
		self.isWatching = true
		self.watch()
	}
}
