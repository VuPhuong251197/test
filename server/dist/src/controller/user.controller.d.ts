import { Request, Response } from "express";
declare class UserController {
    private userService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
