import { WebsocketServer } from "y-websocket";
import http from "http";

const port = process.env.PORT || 1234;

// Create HTTP → WS bridge
const server = http.createServer();

const wss = new WebsocketServer(server, {
  // Optional: make rooms auto-clean when empty
  gc: true
});

server.listen(port, () => {
  console.log("🚀 y-websocket server running on port", port);
});
