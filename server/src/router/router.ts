import { Router } from "express";
import postRouter from "./../router/post.router";
import userRouter from "./../router/user.router";

const router = Router();

router.use("/", userRouter);

router.use("/post", postRouter);

export default router;
