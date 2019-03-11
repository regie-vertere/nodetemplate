"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
//@ts-ignore
var getData_1 = __importDefault(require("../handlers/getData"));
//@ts-ignore
var postData_1 = __importDefault(require("../handlers/postData"));
var apiRoutes = express.Router();
apiRoutes.get('/data', getData_1.default);
apiRoutes.post('/register', postData_1.default);
exports.default = apiRoutes;
