"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_router_1 = __importDefault(require("./../router/post.router"));
const user_router_1 = __importDefault(require("./../router/user.router"));
const router = (0, express_1.Router)();
router.use("/", user_router_1.default);
router.use("/post", post_router_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map