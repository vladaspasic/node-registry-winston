"use strict";

const winston = require('winston');
const debug = require('debug')('node-registry-winston');

function getTransport(type) {
	try {
		return require(type);
	} catch(e) {
		const transports = Object.keys(winston.transports);

		throw new Error(`Unknown Winston Transport '${type}'. Available Transports for Winston ` +
			`are ${transports}. \n Please include the your custom Transport in your ` +
			`package.json. npm install ${type} -S`);
	}
}

/**
 * Create a new Winston Logger instance
 * 
 * @param  {Environment} env
 * @return {Winston.Logger}
 */
module.exports = function(env) {
	const transportType = env.get('logger.transport.type', 'Console');
	const options = env.get('logger.transport.options', {});

	let Transport = winston.transports[transportType];

	if (typeof Transport !== 'function') {
		Transport = getTransport(transportType);
	}

	debug('Creating Winston logger with Transport `%s` and options `%j`', transportType, options);

	return new winston.Logger({
		level: env.get('logger.level', 'info'),
		transports: [
			new Transport(options)
		]
	});
};