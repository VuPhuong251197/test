"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./../controller/user.controller"));
const userRouter = (0, express_1.Router)();
userRouter.get("/", user_controller_1.default.findAll);
userRouter.post("/user", user_controller_1.default.add);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map