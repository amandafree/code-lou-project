'use strict';

var Goal = require('./models/goals.js');

var goals = [
  'Deadlift 150 pounds',
  'Squat 200 pounds',
  'Run a 5k',
  'Trim 3 inches off waist'
];

//look for goal with a name equal to string; if none, create
goals.forEach(function(goal, index) {
  Goal.find({'name': goal}, function(err, goals) {
    if(!err && !goals.length) {
      Goal.create({completed: false, name: goal});
    };
  });
});
