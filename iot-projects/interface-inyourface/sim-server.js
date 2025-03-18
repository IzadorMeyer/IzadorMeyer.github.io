// A server that simulates a device that is taking regular temperature readings.

// Load the http module to create an http server.
const http = require("http");
const WebSocket = require("ws");
const port = 8080;

//TODO 1: Variables and generateTemperature function
var temperature = 72
var nextChange = 0

function generateTemperature(){
  let changeDiffrence = Math.random() - 0.5

  nextChange += changeDiffrence
  temperature += nextChange

  if(temperature < 0){
    temperature = 0
    nextChange = 0
  } else if(tempature > 100){
    tempature = 100
    nextChange = 0
    
  }
  console.log(tempature)
 }

 setInterval(generateTemperature, 1000);

// Configure our HTTP server.
const server = http.createServer(function (req, res) {
  /* DO NOT EDIT THIS CODE */
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  /* DO NOT EDIT THIS CODE */

  //TODO 2: Regular Polling Server
 
});

//TODO 7: WebSocket Server


/* DO NOT EDIT THIS CODE */
server.listen(port);
