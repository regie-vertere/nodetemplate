import * as debug from "debug";
import app from './server';

import { port } from './settings';

const PORT = port;

const log = debug("server");

app.set("port", PORT);

app.listen(PORT);
app.on("error", (err: any) => {
  onError(err)
});
app.on("listening", onListening);

function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== "listen") {
      throw error;
    }
  
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        log(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        log(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
}

function onListening() {
  const addr = app.name;
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + PORT;
  log("Listening on " + bind);
}