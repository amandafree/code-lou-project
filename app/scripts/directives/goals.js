'use strict';

var angular = require('angular');

angular.module('goalsApp')
.directive('goals', function(){
  return {
    templateUrl: 'templates/goal.html',
    replace: true,
    controller: 'goalCtrl'
  }
});
