// fetchServer.js file
const http = require("http");
const fetch = require("fetch");
const port = 8686;

http
  .createServer(async function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var fetchResponse = fetch("https://izadormeyer.github.io");

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
