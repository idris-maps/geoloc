module.exports = function(self, err) {
	self.errorWatching = err
	navigator.geolocation.clearWatch(self.watchId)
	self.watch()
}
