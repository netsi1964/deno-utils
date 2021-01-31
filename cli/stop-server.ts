// deno run --allow-run stop-server.ts --port 4200
import { killPort } from "https://x.nest.land/kill-port@1.0.1/mod.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
const args = parse(Deno.args);
const DEFAULT_PORT = "8080";

// Get information about which port
let port: string | null = args.port;

if (typeof port === "number") {
  // User have specified port using --port ####
  // Get a confirmation
  let answer = window.prompt(`Will stop server running at port ${port}?`, "Y");
  let goOn = false;
  if (answer) {
    goOn = answer.toLowerCase().trim()[0] === "y";
  }
  // User answered other than "y", ask the person again for a port nummer
  if (!goOn) {
    port = getPortNumber(DEFAULT_PORT);
  }
} else {
  port = getPortNumber(DEFAULT_PORT);
}

if (port) {
  await killPort(parseInt(port, 10));
  console.log(`Server at port: ${port} stopped`);
} else {
  console.log("Error: invalid port");
}

function getPortNumber(port: string): string | null {
  let desiredPort = window.prompt("Stop server running at port?", port);
  return desiredPort ? desiredPort.replace(/[\D ]/gi, "") : null;
}
