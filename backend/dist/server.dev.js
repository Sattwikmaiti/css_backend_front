"use strict";

var express = require("express");

var app = express();

var mongoose = require("mongoose");

app.use(express.json());

var cors = require("cors");

app.use(cors());
var mongoUrl = "mongodb+srv://maitisattwik:Sattwik%402002@cluster0images.k7uxezm.mongodb.net/?retryWrites=true&w=majority";
;
mongoose.connect(mongoUrl, {
  useNewUrlParser: true
}).then(function () {
  console.log("Connected to database");
})["catch"](function (e) {
  return console.log(e);
});

var Images = require('./imageSchema');

var Todo = require('./Todo');

app.use(function (err, req, res, next) {
  if (err.name === 'DocumentNotFoundError') {
    res.status(404).json({
      error: 'Document not found'
    });
  } else {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});
app.get('/todos', function _callee(req, res) {
  var todos;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Todo.find());

        case 2:
          todos = _context.sent;
          res.json(todos);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}); //create a new data collection

app.post('/todo/new', function (req, res) {
  var todo = new Todo({
    text: req.body.text,
    timestamp: req.body.timestamp,
    author: req.body.author
  });
  todo.save();
  res.json(todo);
});
app["delete"]('/todo/delete/:id', function _callee2(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Todo.findByIdAndDelete(req.params.id));

        case 2:
          result = _context2.sent;
          if (result != null) res.json({
            result: result
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.get('/todo/complete/:id', function _callee3(req, res) {
  var todo;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Todo.findById(req.params.id));

        case 2:
          todo = _context3.sent;

          if (todo !== null) {
            todo.complete = !todo.complete;
            todo.save();
            res.json(todo);
          }

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.put('/todo/update/:id', function _callee4(req, res) {
  var todo;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Todo.findById(req.params.id));

        case 2:
          todo = _context4.sent;
          todo.text = req.body.text;
          todo.save();
          res.json(todo);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.post("/upload-image", function _callee5(req, res) {
  var base64;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          base64 = req.body.base64;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Images.create({
            image: base64
          }));

        case 4:
          res.send({
            Status: "ok"
          });
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](1);
          console.log("eerr");
          res.send({
            Status: "error",
            data: _context5.t0
          });

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 7]]);
});
app.get("/get-image", function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(Images.find({}).then(function (data) {
            res.send({
              status: "ok",
              data: data
            });
          }));

        case 3:
          _context6.next = 7;
          break;

        case 5:
          _context6.prev = 5;
          _context6.t0 = _context6["catch"](0);

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 5]]);
});
app.listen(3010, function () {
  console.log("serer started in port 3000");
});