"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadsDir = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.uploadsDir = path_1.default.join(__dirname, '../uploads');
if (!fs_1.default.existsSync(exports.uploadsDir)) {
    fs_1.default.mkdirSync(exports.uploadsDir, { recursive: true });
}
