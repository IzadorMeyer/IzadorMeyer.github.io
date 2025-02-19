// fetchServer.js file
var args = process.argv.slice(2);
const http = require("http");
const port = 8686;

http
  .createServer(async function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
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
