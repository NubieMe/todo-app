import { NextFunction, Request, Response } from "express";
import { UserRequest } from "../model/user";
import { UserService } from "../services/user-service";

export class UserController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request = req.body as UserRequest;
            const response = await UserService.register(request);

            res.status(201).json({
                message: "create account success",
                data: response,
            });
        } catch (error) {
            next();
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const request = req.body as UserRequest;
            const response = await UserService.login(request);

            res.status(200).json({
                message: "login success",
                data: response,
            });
        } catch (error) {
            next();
        }
    }
}
