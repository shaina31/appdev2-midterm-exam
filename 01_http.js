const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url  === "/") {
    // Respond with current date and time in JSON format
    const date = new Date();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ date: date.toISOString() }));
  } else if (req.url === "/hello") {
    // Respond with a simple greeting message
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  } else {
    // Handle unknown routes with a 404 error
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});