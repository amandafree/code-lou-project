'use strict';

var angular = require('angular');

//main controller
angular.module('goalsApp')
.controller('mainCtrl', function($scope, dataService){

//get
  dataService.getGoals(function(response){
    var goals = response.data;
    $scope.goals =  goals;
    });

//add method
  $scope.addGoal = function() {
    $scope.goals.unshift({name: "This is a new goal.",
                      completed: false});
  };

})
