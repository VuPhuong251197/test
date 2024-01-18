import { Router } from "express";
import userController from "./../controller/user.controller";

const userRouter = Router();

userRouter.get("/", userController.findAll);

userRouter.post("/user", userController.add);

export default userRouter;
