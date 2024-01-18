import { User } from "./../entity/user.entity";
import { AppDataSource } from "./../data-source";

class UserService {
  private Repository: any;
  constructor() {
    this.Repository = AppDataSource.getRepository(User);
  }

  findAll = async () => {
    return await this.Repository.find();
  };

  add = async (data: any) => {
    return await this.Repository.save(data);
  };
}

export default new UserService();
