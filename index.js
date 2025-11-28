import * as yWebSocketServer from "@y-websocket/server";

const port = process.env.PORT || 1234;

yWebSocketServer.setupWSConnection(port);

console.log("Y.js WebSocket server running on port", port);
