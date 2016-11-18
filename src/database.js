'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/code-lou-final', function(err) {
  if(err) {
    console.log('Failed connecting to Mongodb.');
  } else {
    console.log('Successfully connected to Mongodb.');
  }
});
