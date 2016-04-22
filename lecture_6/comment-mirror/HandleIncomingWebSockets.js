module.exports = (request) => {
  if (!originIsAllowed(request.origin)) {
    request.reject();
    console.log("Rejected connection from origin" + request.origin);
    return;
  }

  var connection = request.accept('echo-protocol', request.origin);
  console.log("Connection accepted");

  handleConnection(connection)
}

function originIsAllowed(origin) {
  return true; // Replace in a non-dev environment
}

var liveConnections = [];

const handleConnection = (connection) => {
  liveConnections.push(connection);
  connection.on('message', handleMessage(connection))

  connection.on('close', (reasonCode, description) => {
    console.log(`Peer ${connection.remoteAddress} disconnected: ${reasonCode}, ${description}`);
    removeConnection(connection);
  });
}

const handleMessage = connection => message => {
  broadCast(connection, message.utf8Data)
}

function removeConnection(connection) {
  const index = liveConnections.indexOf(connection);
  if (index > -1) {
    liveConnections.splice(index, 1);
  }
}

function broadCast(originConnection, utf8Data) {
  liveConnections.filter(
    (connection) => connection !== originConnection
  ).forEach(
    (connection) => { connection.sendUTF(utf8Data) }
  )
}

