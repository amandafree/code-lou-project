'use strict';

var mongoose = require('mongoose');

//goal.name
//goal.completed

var goalSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

var model = mongoose.model('Goal', goalSchema);

module.exports = model;
