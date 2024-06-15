import { NextFunction, Request, Response } from "express";
import { TodoService } from "../services/todo-service";
import { TodoRequest } from "../model/todo";

export class TodoController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const request = req.body;
            request.username = res.locals.session.username;
            const response = await TodoService.create(req as unknown as TodoRequest);

            res.status(201).json({
                message: "create todo success",
                data: response,
            });
        } catch (error) {
            next();
        }
    }
}
