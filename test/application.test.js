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

var should   = require('chai').should(),
    slClient = null;

describe('SoftLayer API Node.js Client', function () {
  describe('can be instantiated', function () {
    it('should throw an exception when no valid args ', function (done) {
      try {
        slClient = require(__dirname + '/../index.js')();
      } catch (e) {
        (typeof e).should.equal('object');
        e.message.should.equal('You need to provider api username and api key');
        done();
      }
    });
    it('should be instantiated via environment variables ', function (done) {
      process.env.SOFTLAYERAPIUSERNAME = 'envUsername';
      process.env.SOFTLAYERAPIKEY      = 'envKey';
      slClient = require(__dirname + '/../index.js')();
      slClient.username.should.equal(process.env.SOFTLAYERAPIUSERNAME);
      slClient.key.should.equal(process.env.SOFTLAYERAPIKEY);
      done();
    });
    it('should be instantiated via passed arguments ', function (done) {
      var username = 'smapi',
          key      = '873c47eef3eef3d188dd122391f953dab5d9a3ef69bde61cc49c26f' +
                     'ebd9abc1e';
      slClient = require(__dirname + '/../index.js')(username, key);
      slClient.username.should.equal(username);
      slClient.key.should.equal(key);
      done();
    });
  });
  describe('can make rest api calls', function () {
    it('should ', function (done) {
      done();
    });
  });
});
// jN*@@FBCQZ3LuHJ@Gr%6
