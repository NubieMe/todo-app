import { prismaClient } from "../database/prisma";
import { ResponseError } from "../errors/response-error";
import { ParamsRequest } from "../model";
import { CategoryRequest, CategoryResponse, toCategoryResponse } from "../model/category";
import { createCategoryRequest } from "../validation/category-validation";
import { validate } from "../validation/validate";

export class CategoryService {
    static async create(req: CategoryRequest): Promise<CategoryResponse> {
        const validated = validate(createCategoryRequest, req);

        const isNameExist = await prismaClient.category.count({
            where: {
                name: validated.name,
            },
        });

        if (isNameExist != 0) throw new ResponseError(400, "category already exists");

        const category = await prismaClient.category.create({
            data: validated,
        });

        return toCategoryResponse(category);
    }

    static async getAll(): Promise<CategoryResponse[]> {
        return await prismaClient.category.findMany();
    }

    static async delete(req: ParamsRequest): Promise<CategoryResponse> {
        const category = await prismaClient.category.count({
            where: req,
        });

        if (category === 0) throw new ResponseError(400, "category not found");

        const isCategoryInUse = await prismaClient.todo.count({
            where: {
                categoryId: req.id,
            },
        });

        if (isCategoryInUse != 0) throw new ResponseError(400, "category in used by todo");

        return await prismaClient.category.delete({
            where: req,
        });
    }
}
