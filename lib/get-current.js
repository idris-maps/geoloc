module.exports = function(callback) {
	function success(position) { callback(null, position) }
	function error(err) { callback(err) } 
	navigator.geolocation.getCurrentPosition(success, error)
}		
