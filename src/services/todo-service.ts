import { Category, Todo } from "@prisma/client";
import { prismaClient } from "../database/prisma";
import { ResponseError } from "../errors/response-error";
import { GetTodoRequest, TodoDB, TodoRequest, TodoResponse, toTodoResponse } from "../model/todo";
import { createTodoRequest } from "../validation/todo-validation";
import { validate } from "../validation/validate";
import { ParamsRequest } from "../model";

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

        return toTodoResponse(todo);
    }

    static async getTodo(req?: GetTodoRequest): Promise<TodoResponse[]> {
        const todo = await prismaClient.todo.findMany({
            where: req,
            select: {
                id: true,
                todo: true,
                username: true,
                category: true,
            },
        });

        return todo.map((val) => toTodoResponse(val));
    }

    static async update(req: TodoRequest, todoId: ParamsRequest): Promise<TodoResponse> {
        const validated = validate(createTodoRequest, req);

        const todo = await prismaClient.todo.findUnique({
            where: todoId,
        });

        if (!todo) throw new ResponseError(400, "todo not found");

        if (todo.username !== validated.username) throw new ResponseError(400, "cannot update others todo");

        const category = await prismaClient.category.findUnique({
            where: {
                id: validated.categoryId,
            },
        });

        if (!category) throw new ResponseError(400, "category not found");

        const updated = await prismaClient.todo.update({
            where: todoId,
            data: validated,
            select: {
                id: true,
                todo: true,
                username: true,
                category: true,
            },
        });

        return toTodoResponse(updated);
    }
}
