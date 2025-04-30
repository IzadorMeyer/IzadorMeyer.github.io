const express = require('express'),
	cors = require('cors');
var sensorRoutes =require('./../routes/sensors')



var app = express()
app.use(cors())
app.use('/pi/sensors', sensorRoutes)

app.get("/192.168.0.178", function (req, res) {
	res.send("Some response for accessing the root");
  });

  app.get("/pi", function (req, res) {
	res.send("Some other response for accessing the root");
  });

  module.exports = app;

// i have looked through all files