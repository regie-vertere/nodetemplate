"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const server_1 = require("./server");
const settings_1 = require("./settings");
const PORT = settings_1.port;
const log = debug("server");
server_1.default.set("port", PORT);
server_1.default.listen(PORT);
server_1.default.on("error", (err) => {
    onError(err);
});
server_1.default.on("listening", onListening);
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof settings_1.port === "string" ? "Pipe " + settings_1.port : "Port " + settings_1.port;
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
    const addr = server_1.default.name;
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + PORT;
    log("Listening on " + bind);
}
//# sourceMappingURL=index.js.map