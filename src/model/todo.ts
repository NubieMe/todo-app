export type TodoRequest = {
    todo: string;
    username: string;
    categoryId: number;
};

export type TodoResponse = {
    id: number;
    todo: string;
    username: string;
    category: string;
};

export type GetTodoRequest = {
    username?: string;
    categoryId?: number;
};

export type TodoDB = {
    id: number;
    todo: string;
    username: string;
    category: {
        id: number;
        name: string;
    };
};

export type TodoDelete = {
    id: number;
    username: string;
};

export function toTodoResponse(todo: TodoDB): TodoResponse {
    return {
        id: todo.id,
        todo: todo.todo,
        username: todo.username,
        category: todo.category.name,
    };
}
