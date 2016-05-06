const handleIncomingRequest = require('./HandleIncomingWebSockets')

var websocketPort = 8081;

var http = require('http');
var WebSocketServer = require('websocket').server;

var server = http.createServer(function(request, response) {
  console.log(`${new Date()} Received request for ${request.url}`);
  response.writeHead(404);
  response.end();
});

var wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});


module.exports.start = () => {
  wsServer.on('request', handleIncomingRequest);

  server.listen(websocketPort, function() {
    console.log(`${new Date()} Server is listening on port ${websocketPort}`);
  });
}
