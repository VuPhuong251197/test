import { Request, Response } from "express";
import userService from "./../service/user.service";

class UserController {
  private userService;
  constructor() {
    this.userService = userService;
  }

  findAll = async (req: Request, res: Response) => {
    try {
      let listUser = [];
      listUser = await this.userService.findAll();
      res.status(200).json(listUser);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  add = async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      let data = await this.userService.add(req.body);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
}

export default new UserController();
