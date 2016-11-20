'use strict';

var express = require('express');
var Goal = require('../models/goals');
//var goals = require('../../mock/goals.json');

var router = express.Router();

//router get goals
router.get('/goals', function(req, res) {
	Goal.find({}, function (err, goals) {
		if(err) {
			// do something
			return res.status(500).json({message: err.message});
		}
		res.json(goals);
	});
});


//POST route to create new goals
router.post('/goals', function(req, res) {
	var goal = req.body;
	Goal.create(goal, function(err, goal) {
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'goal': goal, message: 'Goal created.'});
	})
});

//PUT route to update existing goals
router.put('/goals/:id', function(req, res) {
	var id = req.params.id;
	var goal = req.body;
	if(goal  && goal._id !== id) {
		return res.status(500).json({err: "Ids do not match."})
	}
	Goal.findByIdAndUpdate(id, goal, {new: true}, function(err, goal) {
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'goal': goal, message: 'Goal updated.'});
	})
});

//DELETE route to remove existing entries
router.delete('/goals/:id', function (req, res) {
    var goalId = req.params.id; // This maps to the :id in the url
    Goal.findByIdAndRemove(goalId, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ message: 'Deleted Goal' });
        }
    });
});

module.exports = router;
