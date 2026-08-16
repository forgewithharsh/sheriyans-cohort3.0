let http = require("http");

let server = http.createServer((req, res) => {
  console.log("hello i m server");
  res.end("ok mene tumharui baat sun li");
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
