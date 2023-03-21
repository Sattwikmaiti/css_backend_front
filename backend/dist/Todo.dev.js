"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var url = "https://i.stack.imgur.com/34AD2.jpg"; //making model (dabase)

var Todoschema = new Schema({
  text: {
    //objects
    type: String,
    "default": "",
    required: true
  },
  author: {
    //objects
    type: String,
    "default": "",
    required: true
  },
  complete: {
    type: Boolean,
    "default": false
  },
  timestamp: {
    type: String,
    "default": new Date().getTime()
  },
  avatar: {
    type: String,
    "default": url
  }
}); //exporting the model of todo list

var Todo = mongoose.model("Todo", Todoschema);
module.exports = Todo;