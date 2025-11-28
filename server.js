import http from "http";
import WebSocket from "ws";
import setupWSConnection from "y-websocket/bin/utils.js";

const port = process.env.PORT || 1234;

const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });

server.on("upgrade", (req, socket, head) => {
  const handleAuth = () => {
    wss.handleUpgrade(req, socket, head, (ws) => {
      setupWSConnection(ws, req);
    });
  };
  handleAuth();
});

server.listen(port, () => {
  console.log(`🚀 y-websocket server running on port ${port}`);
});
