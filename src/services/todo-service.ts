import { Category, Todo } from "@prisma/client";
import { prismaClient } from "../database/prisma";
import { ResponseError } from "../errors/response-error";
import { TodoRequest, TodoResponse, toTodoResponse } from "../model/todo";
import { createTodoRequest } from "../validation/todo-validation";
import { validate } from "../validation/validate";

export class TodoService {
    static async create(req: TodoRequest): Promise<TodoResponse> {
        const validated = validate(createTodoRequest, req);

        const isCategoryExist = await prismaClient.category.count({
            where: {
                id: validated.categoryId,
            },
        });

        if (isCategoryExist != 0) throw new ResponseError(400, "category not found");

        const todo = await prismaClient.todo.create({
            data: req,
            select: {
                id: true,
                todo: true,
                username: true,
                category: true,
            },
        });

        return toTodoResponse(todo as unknown as Todo, todo.category as Category);
    }
}
