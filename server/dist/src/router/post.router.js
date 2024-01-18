"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("./../controller/post.controller"));
const postRouter = (0, express_1.Router)();
postRouter.get("/", post_controller_1.default.findAll);
postRouter.post("/product", post_controller_1.default.add);
exports.default = postRouter;
//# sourceMappingURL=post.router.js.map