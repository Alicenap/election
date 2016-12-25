'use strict';

const config = require('./config.json');

exports.config = function(){
	const env = process.env.NODE_ENV;
	if (env === 'test' || env === 'prod'){
		return config[env];
	} else {
		return config['dev'];
	}
};