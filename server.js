import { execFile } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Path to the server binary inside node_modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const serverPath = `${__dirname}/node_modules/y-websocket/bin/server.js`;

const port = process.env.PORT || "1234";

console.log("Starting y-websocket server on port", port);

// Run the official server as a subprocess
const child = execFile("node", [serverPath, port], {
  stdio: "inherit"
});

child.on("exit", (code) => {
  console.error("y-websocket server exited with code", code);
});
