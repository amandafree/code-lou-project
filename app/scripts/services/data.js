'use strict';

var angular = require('angular');

//get mock goals
angular.module('goalsApp')
.service('dataService', function($http, $q) {
  this.getGoals = function(cb) {
    $http.get('/mock/goals.json').then(cb);
  };

//delete
  this.deleteGoal = function(goal) {
      if (!goal._id) {
          return $q.resolve();
      }
      return $http.delete('/api/goals/' + goal._id).then(function () {
          console.log("I deleted the " + goal.name + " goal!");
      });
  };

//save
  this.saveGoals = function(goals) {
    var queue = [];
    goals.forEach(function(goal) {
      var request;
      if(!goal._id) {
        request = $http.post('/api/goals', goal)
      } else {
        request = $http.put('/api/goals/' + goal._id , goal).then(function(result) {
          goal = result.data.goal;
          return goal;
        })
      };
      queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + goals.length + " goals.")
    });
  };
});
