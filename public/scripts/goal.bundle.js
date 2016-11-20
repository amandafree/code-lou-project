webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('goalsApp', []);

	//require scripts for webpack
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('goalsApp')
	.directive('goals', function(){
	  return {
	    templateUrl: 'templates/goal.html',
	    replace: true,
	    controller: 'goalCtrl'
	  }
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	//get mock goals
	angular.module('goalsApp')
	.service('dataService', function($http, $q) {
	  this.getGoals = function(cb) {
	    $http.get('/mock/goals.goals').then(cb);
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


/***/ }
]);