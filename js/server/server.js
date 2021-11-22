let http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("this is a server message");
    res.end();
  })
  .listen(3000, "localhost", () => console.log(`this is a message form the server`) );
 