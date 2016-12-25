'use strict';

var config = require('./config.json');

exports.config = function(){
	var env = process.env.NODE_ENV || "dev";
	return config[env];
};