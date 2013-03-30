/*
 * junk-stream
 * https://github.com/justinabrahms/junk-stream
 *
 * Copyright (c) 2013 Justin Abrahms
 * Licensed under the MIT license.
 */
var Stream = require('stream')
;

/**
 * Given an object who's values are Number, Boolean, or String, return
 * a new object with those types filled in. Only supports one level of
 * nesting.
 */
exports.gen_fake_data = function (template) {
  var result = {};
  for (var key in template) {
    if (template[key] == Number) {
      result[key] = Math.random();
    } else if (template[key] == Boolean) {
      result[key] = Math.random() < 0.5;
    } else if (template[key] == String) {
      result[key] = Math.random().toString();
    }
  }
  return result;
};


/**
 * Example of using the junk stream.
 * 
 * var junk_tube = gen_stream(1000, {
 *   key: Number
 *   , val: String
 * });
 * 
 * junk_tube.on('data', console.log);
 * 
 * setTimeout(function () {
 *   junk_tube.destroy();
 * }, 10000);
 */
exports.junk_stream = function (ttj, template) {
  var s = new Stream;
  s.readable = true;
  s.writeable = true;

  var iv = setInterval(function () {
    s.emit('data', gen_fake_data(template));
  }, ttj);

  s.write = function (buf) {
    throw new Error("Not Implemented");
  };
  s.end = function (buf) {
    throw new Error("Not Implemented");
  };
  s.destroy = function () {
    s.writable = false;
    clearInterval(iv);
  };

  return s;
};
