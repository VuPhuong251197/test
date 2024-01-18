import { Request, Response } from "express";
import postService from "./../service/post.service";

class PostController {
  private postService;
  constructor() {
    this.postService = postService;
  }

  findAll = async (req: Request, res: Response) => {
    try {
      let listPost = [];
      listPost = await this.postService.findAll();
      res.status(200).json(listPost);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  add = async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      let data = await this.postService.add(req.body);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
}

export default new PostController();
