import { Request, Response } from "express";
declare class PostController {
    private postService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PostController;
export default _default;
