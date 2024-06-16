import { NextFunction, Request, Response } from "express";
import { TodoService } from "../services/todo-service";
import { GetTodoRequest, TodoRequest } from "../model/todo";

export class TodoController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const request = req.body;
            request.username = res.locals.session.username;
            const response = await TodoService.create(request as TodoRequest);

            res.status(201).json({
                message: "create todo success",
                data: response,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const request = req.query as GetTodoRequest;
            !!request.categoryId && (request.categoryId = Number(request.categoryId));
            const response = await TodoService.getTodo(request);

            res.status(200).json({
                message: "get todo success",
                data: response,
            });
        } catch (error) {
            next(error);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const request = req.body;
            request.username = res.locals.session.username;

            const params = {
                id: Number(req.params.id),
            };
            const response = await TodoService.update(request as TodoRequest, params);

            res.status(200).json({
                message: "update todo success",
                data: response,
            });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const request = {
                id: Number(req.params.id),
                username: res.locals.session.username,
            };
            const response = await TodoService.delete(request);

            res.status(200).json({
                message: "delete todo success",
                data: response,
            });
        } catch (error) {
            next(error);
        }
    }
}
