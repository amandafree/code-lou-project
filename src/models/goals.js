'use strict';

var mongoose = require('mongoose');

//create schema
  //goal.name
  //goal.completed
var goalschema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

var model = mongoose.model('Goal', goalschema);

module.exports = model;
