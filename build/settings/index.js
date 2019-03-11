"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizePort(val) {
    const parsedPort = parseInt(val, 10);
    if (isNaN(parsedPort)) {
        return val;
    }
    if (parsedPort >= 0) {
        return parsedPort;
    }
    return false;
}
exports.port = normalizePort(process.env.PORT || "8080");
//# sourceMappingURL=index.js.map