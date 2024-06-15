import { NextFunction, Request, Response } from "express";
import { CategoryRequest } from "../model/category";
import { CategoryService } from "../services/category-service";
import { ParamsRequest } from "../model";

export class CategoryController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const request = req.body as CategoryRequest;
            const response = await CategoryService.create(request);

            res.status(200).json({
                message: "create category success",
                data: response,
            });
        } catch (error) {
            next();
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await CategoryService.getAll();

            res.status(200).json({
                message: "get all category success",
                data: response,
            });
        } catch (error) {
            next();
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const request = req.params as unknown as ParamsRequest;
            const response = await CategoryService.delete(request);

            res.status(200).json({
                message: "delete category success",
                data: response,
            });
        } catch (error) {
            next();
        }
    }
}
