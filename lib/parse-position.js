module.exports = function(position) {
	return {
		lat: position.coords.latitude,
		lng: position.coords.longitude,
		alt: position.coords.altitude,
		timestamp: Date.now()
	}
}
