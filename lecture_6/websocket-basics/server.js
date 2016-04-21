// Running webpack dev server programmatically

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = 3000;
var host = 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true
}).listen(port, host, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at ${host}:${port}`);
});


// Running websocket server programmatically
var websocketPort = 8081;

var http = require('http');
var WebSocketServer = require('websocket').server;

var server = http.createServer(function(request, response) {
  console.log(`${new Date()} Received request for ${request.url}`);
  response.writeHead(404);
  response.end();
});


server.listen(websocketPort, function() {
    console.log(`${new Date()} Server is listening on port ${websocketPort}`);
});

var wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});

function originIsAllowed(origin) {
  return true;
}

var connections = [];

wsServer.on('request', (request) => {
  if (!originIsAllowed(request.origin)) {
    request.reject();
    console.log("Rejected connection from origin" + request.origin);
    return;
  }

  var connection = request.accept('echo-protocol', request.origin);

  console.log("Connection accepted");
  connections.push(connection);

  connection.on('message', (message) => {
    try {
      const number = JSON.parse(message.utf8Data).number;
      console.log("received", number);
      const response = parseInt(number) + 1
      connection.sendUTF(JSON.stringify({increment: response}))
    } catch(error) {
      console.log("Error parsing message", message.utf8Data);
    }
  });

  connection.on('close', (reasonCode, description) => {
    console.log(`Peer ${connection.remoteAddress} disconnected: ${reasonCode}, ${description}`);
    const index = connections.indexOf(connection);
    if (index > -1) {
      connections.splice(index, 1);
    }
  });

});
