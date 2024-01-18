import { Receipt } from "./../entity/receipt.entity";
import { AppDataSource } from "./../data-source";

class PostService {
  private Repository: any;
  constructor() {
    this.Repository = AppDataSource.getRepository(Receipt);
  }

  findAll = async (userId?: number) => {
    return await this.Repository.find();
  };

  add = async (data: any) => {
    return await this.Repository.save(data);
  };
}

export default new PostService();
