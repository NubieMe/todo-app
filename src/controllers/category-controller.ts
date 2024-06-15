import { NextFunction, Request, Response } from "express";
import { CategoryRequest } from "../model/category";
import { CategoryService } from "../services/category-service";

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
}
