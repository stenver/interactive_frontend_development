const WebSocketServer  = require('./server/WebSocketServer')
const WebpackDevServer = require('./server/WebpackDevServer')

WebpackDevServer.start()
WebSocketServer.start()
