"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_service_1 = __importDefault(require("./../service/post.service"));
class PostController {
    constructor() {
        this.findAll = async (req, res) => {
            try {
                let listPost = [];
                listPost = await this.postService.findAll();
                res.status(200).json(listPost);
            }
            catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        };
        this.add = async (req, res) => {
            try {
                console.log(req.body);
                let data = await this.postService.add(req.body);
                res.status(201).json(data);
            }
            catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        };
        this.postService = post_service_1.default;
    }
}
exports.default = new PostController();
//# sourceMappingURL=post.controller.js.map