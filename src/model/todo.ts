import { Category, Todo, User } from "@prisma/client";

export type TodoRequest = {
    todo: string;
    categoryId: number;
};

export type TodoResponse = {
    id: number;
    todo: string;
    username: string;
    category: string;
};

export function toTodoResponse(todo: Todo, user: User, category: Category): TodoResponse {
    return {
        id: todo.id,
        todo: todo.todo,
        username: user.username,
        category: category.name,
    };
}
