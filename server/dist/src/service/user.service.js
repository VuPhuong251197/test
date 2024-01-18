"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./../entity/user.entity");
const data_source_1 = require("./../data-source");
class UserService {
    constructor() {
        this.findAll = async () => {
            return await this.Repository.find();
        };
        this.add = async (data) => {
            return await this.Repository.save(data);
        };
        this.Repository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map