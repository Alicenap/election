'use strict';

const env = require('./env');

describe("enviroment", function() {
  const currNodeEnv = process.env.NODE_ENV;
  describe("application mode", function() {
	it("returns test config when NODE_ENV is provided as test - which happens on npm test", function() {
  	  const config = env.config();
  	  expect(config.app.mode).toBe("test");
    });
    it("defaults to development config when NODE_ENV is left out", function() {
      process.env.NODE_ENV = undefined;
      const config = env.config();
	  expect(config.app.mode).toBe("dev");
    });
    it("defaults to development config when NODE_ENV is an empty string", function() {
      process.env.NODE_ENV = "";
      const config = env.config();
	  expect(config.app.mode).toBe("dev");
    });
    it("defaults to development config when NODE_ENV is not test or prod", function() {
      process.env.NODE_ENV = "mode";
      const config = env.config();
	  expect(config.app.mode).toBe("dev");
    });
    it("defaults to development config when NODE_ENV is provided as dev", function() {
	  process.env.NODE_ENV = "dev";
      const config = env.config();
	  expect(config.app.mode).toBe("dev");
    });
    it("returns production config when NODE_ENV is provided as prod", function() {
	  process.env.NODE_ENV = "prod";
      const config = env.config();
	  expect(config.app.mode).toBe("prod");
    });
  });
  process.env.NODE_ENV = currNodeEnv;
});