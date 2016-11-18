'use strict';

var mongoose = require('mongoose');

//goal.name
//goal.completed

//create schema
var goalschema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

var model = mongoose.model('Goal', goalschema);

module.exports = model;
