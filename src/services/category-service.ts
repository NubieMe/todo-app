import { prismaClient } from "../database/prisma";
import { ResponseError } from "../errors/response-error";
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
}
