"use strict";

const winston = require('./index');

module.exports = {

	load(project, environment) {
		const custom = environment.get('logging.custom', false);
		let logger;

		if(custom) {
			logger = require(custom);
		} else {
			logger = winston(environment);
		}

		project.registerModule('logger', logger, 'singleton');
	}
};