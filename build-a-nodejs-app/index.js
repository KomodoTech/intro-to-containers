//import the core http module
const http = require("http");

// create an http server on port 3000
http
  .createServer(function(request, response){
    // Upon receiving request print that you received it
    console.log("request received");
    // Display a custom response
    response.end("omg hi", "utf-8");
  })
  .listen(3000);

console.log("server started");

