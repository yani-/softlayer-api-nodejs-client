/**
 * SoftLayer API Node.js Client
 *
 * Copyright (c) 2013 Yani Iliev <yani@iliev.me>
 * Licensed under the MIT license.
 *
 * @author    Yani Iliev <yani@iliev.me>
 * @copyright 2013 Yani Iliev
 * @license   https://github.com/yani-/blog/master/softlayer-api-nodejs-client
 * @version   GIT: 1.0.0
 * @link      https://github.com/yani-/softlayer-api-nodejs-client
 */
'use strict';

/**
 * Application constructor
 *
 * @return {Object} The application object
 */
var Application = function (username, key) {
  if (this.areArgumentsValid(username, key)) {
    this.username = username;
    this.key      = key;
  } else if (this.areEnvironmentVariablesProvided()) {
    this.username = process.env.SOFTLAYERAPIUSERNAME;
    this.key      = process.env.SOFTLAYERAPIKEY;
  } else {
    throw new Error('You need to provider api username and api key');
  }
};

/**
 * Define setter/getter for api username
 */
Object.defineProperty(
  Application.prototype,
  'username',
  {
    enumerable: true,

    set: function (value) {
      this._username = value;
      return this;
    },
    get: function () {
      return this._username;
    }
  }
);

/**
 * Define setter/getter for api key
 */
Object.defineProperty(
  Application.prototype,
  'key',
  {
    enumerable: true,

    set: function (value) {
      this._key = value;
      return this;
    },
    get: function () {
      return this._key;
    }
  }
);

/**
 * Validates if provided arguments are set
 *
 * @param  {mixed} u variable to check
 * @param  {mixed} k variable to check
 *
 * @return {boolean} if arguments are set
 */
Application.prototype.areArgumentsValid = function (u, k) {
  if (u === undefined && k === undefined) {
    return false;
  } else {
    return true;
  }
};

/**
 * Validates if environment variables are set
 *
 * @return {boolean} if environment varibles are set
 */
Application.prototype.areEnvironmentVariablesProvided = function () {
  if (
    process.env.hasOwnProperty('SOFTLAYERAPIUSERNAME') &&
    process.env.hasOwnProperty('SOFTLAYERAPIKEY')
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * Creates a new application object and passes variables to its constructor
 *
 * @param  {mixed} username API username or undefined
 * @param  {mixed} key      API key or undefined
 *
 * @return {Object}         Application object
 */
var createApplication = function (username, key) {
  return new Application(username, key);
};

module.exports = createApplication;
