var parsePosition = require('./parse-position')

module.exports = function(self) {

	function success(position) {
		var pos = parsePosition(position)
		if(self.latestTime === null) {
			self.latestPosition = pos.coords
			self.latestTime = pos.timestamp
			self.data.push(pos)
		} else if(self.latestTime !== pos.timestamp) {
			self.latestPosition = pos.coords
			self.latestTime = pos.timestamp
			self.data.push(pos)
		}
	}

	function error(err) { 
		self.retryWatch(err) 
	}

	self.watchId = navigator.geolocation.watchPosition(success, error, self.options)
}
