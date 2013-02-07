/**
 * md.js v0.1.0 - AMD Multiple Dependency Loader
 * Copyright 2013 Kenneth Powers
 * Released under the MIT License
 */

/*global define:true*/
define({
  load: function (name, req, load) {
    // Split dependencies
    var reqs = name.split(';'),
        aliases = [];

    // Parse aliases
    for (var i = 0, l = reqs.length; i < l; i++) {
      var m = reqs[i].split(':');
      if (m.length > 1) {
        reqs[i] = m[0];
        aliases[i] = m[1];
      }
    }

    // Load dependencies
    req(reqs, function () {
      var args = Array.prototype.slice.call(arguments, 0);
      // Assign aliases
      for (var i = 0, l = aliases.length; i < l; i++) {
        if (aliases[i]) {
          args[aliases[i]] = args[i];
        }
      }
      // Hand off to caller
      load(args);
    });
  }
});
