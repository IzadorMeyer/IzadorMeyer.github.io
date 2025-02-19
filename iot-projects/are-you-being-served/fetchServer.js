// fetchServer.js file
var args = process.argv.slice(2);
const http = require("http");
const port = 8686;

http
  .createServer(async function (req, res) {
    console.log(args);
    var type = args[1];
    res.writeHead(200, { "Content-Type": "text/" + type });
    var url = args[0] ? args[0] : "https://izadormeyer.github.io";
    var fetchResponse = await fetch(url);

    if (fetchResponse.ok === true) {
      var html = await fetchResponse.text();
      res.write(html);
    } else {
      res.write(fetchResponse.statusText);
      res.write(fetchResponse.status);
    }

    res.end();
  })
  .listen(port);
