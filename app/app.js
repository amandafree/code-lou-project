'use strict';

var angular = require('angular');

angular.module('goalsApp', []);

//require scripts for webpack
require('./scripts/controllers/main.js');
require('./scripts/controllers/goals.js');
require('./scripts/directives/goals.js');
require('./scripts/services/data.js');
