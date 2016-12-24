'use strict';

// Imports
var request = require("request");

// Base url
var baseUrl = "http://localhost:80/"

describe("Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
	  request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
		done();
      });
    });
    it("returns Hello world", function(done) {
      request.get(baseUrl, function(error, response, body) {
		expect(body).toBe("Hello world");
		done();
      });
    });
  });
});