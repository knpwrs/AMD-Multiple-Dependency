/**
 * md.js - AMD Multiple Dependency Loader
 * Copyright 2013 Kenneth Powers
 * Released under the MIT License
 */

/*global define:true*/
define({
  load: function (name, req, load) {
    req(name.split(';'), function () {
      load(Array.prototype.slice.call(arguments, 0));
    });
  }
});
