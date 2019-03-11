"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const getData_1 = require("../handlers/getData");
const postData_1 = require("../handlers/postData");
const apiRoutes = express.Router();
apiRoutes.get('/data', getData_1.get);
apiRoutes.post('/register', postData_1.post);
exports.default = apiRoutes;
//# sourceMappingURL=router.js.map