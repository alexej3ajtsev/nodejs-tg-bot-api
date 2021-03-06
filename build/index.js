"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramApi = exports.Md = exports.Button = void 0;
const api_1 = require("./api");
Object.defineProperty(exports, "TelegramApi", { enumerable: true, get: function () { return api_1.TelegramApi; } });
const services_1 = require("./services");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return services_1.Button; } });
Object.defineProperty(exports, "Md", { enumerable: true, get: function () { return services_1.Md; } });
__exportStar(require("./@types/api"), exports);
