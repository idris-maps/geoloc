module.exports = function() {
	if(navigator) {
		if ('geolocation' in navigator) { return true } 
		else { return false }
	} else { return false }
}
