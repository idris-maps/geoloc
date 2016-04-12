module.exports = function(self, options) {
	for(k in options) { self.options[k] = options[k] }
}
