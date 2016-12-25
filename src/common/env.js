'use strict';

const config = require('./config.json');

exports.config = function(){
	const env = process.env.NODE_ENV || "dev";
	return config[env];
};