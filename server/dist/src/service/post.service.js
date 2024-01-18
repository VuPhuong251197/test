"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const receipt_entity_1 = require("./../entity/receipt.entity");
const data_source_1 = require("./../data-source");
class PostService {
    constructor() {
        this.findAll = async (userId) => {
            return await this.Repository.find();
        };
        this.add = async (data) => {
            return await this.Repository.save(data);
        };
        this.Repository = data_source_1.AppDataSource.getRepository(receipt_entity_1.Receipt);
    }
}
exports.default = new PostService();
//# sourceMappingURL=post.service.js.map