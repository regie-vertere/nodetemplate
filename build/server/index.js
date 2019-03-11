"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const router_1 = require("../routes/router");
const app = express();
app.use(helmet());
app.use(compression());
app.use('/main', router_1.default);
app.use((req, res, next) => {
    res.status(404);
    res.json({ error: 'NOT FOUND' });
    next();
});
exports.default = app;
//# sourceMappingURL=index.js.map