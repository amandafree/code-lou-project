'use strict';

var angular = require('angular');

//goal controller
angular.module('goalsApp')
.controller('goalCtrl', function($scope, dataService) {
  $scope.deleteGoal = function(goal, index) {
    $scope.goals.splice(index, 1);
    dataService.deleteGoal(goal);
  };

//save method
  $scope.saveGoals = function() {
    var filteredGoals = $scope.goals.filter(function(goal){
      if(goal.edited) {
        return goal
      };
    })
    dataService.saveGoals(filteredGoals)
    .finally($scope.resetGoalState);
  };

//reset "edit" to false
  $scope.resetGoalState = function() {
    $scope.goals.forEach(function(goal) {
      goal.edited = false;
    });
  };

//delete method
  $scope.deleteGoal = function(goal, index) {
    dataService.deleteGoal(goal).then(function() {
      $scope.goals.splice(index, 1);
    });
  };
});
