"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("./../service/user.service"));
class UserController {
    constructor() {
        this.findAll = async (req, res) => {
            try {
                let listUser = [];
                listUser = await this.userService.findAll();
                res.status(200).json(listUser);
            }
            catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        };
        this.add = async (req, res) => {
            try {
                console.log(req.body);
                let data = await this.userService.add(req.body);
                res.status(201).json(data);
            }
            catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        };
        this.userService = user_service_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map