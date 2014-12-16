
/**
 * Disable sessions to free up memories due to use of JWT
 *
 * https://github.com/tarlepp/angular-sailsjs-boilerplate/issues/58
 * http://stackoverflow.com/questions/21865865/getting-rid-of-session-and-socket-pooling-sailsjs/21892112#21892112
 * @type {Object}
 */
module.exports.models = {
	middleware: {
		session: null
	}
};