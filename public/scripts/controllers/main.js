'use strict';

angular.module('goalsApp')
.controller('mainCtrl', function($scope, dataService){

  dataService.getGoals(function(response){
    var goals = response.data;
    $scope.goals =  goals;
    });

  $scope.addGoal = function() {
    $scope.goals.unshift({name: "This is a new goal.",
                      completed: false});
  };

})
