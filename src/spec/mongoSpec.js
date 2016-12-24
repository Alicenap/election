'use strict';

var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/election';

describe("MongoDB", function() {
  describe("connection", function() {
    it("can be established", function(done) {
	  MongoClient.connect(url, function(error, db) {
	    expect(error).toBe(null);
		expect(db).toBeDefined();
		db.close();
		done();
	  });
    });
  });
});
