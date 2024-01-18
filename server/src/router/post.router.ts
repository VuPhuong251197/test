import { Router } from "express";
import postController from "./../controller/post.controller";

const postRouter = Router();

postRouter.get("/", postController.findAll);

postRouter.post("/product", postController.add);

export default postRouter;
