import { ZodType, z } from "zod";

export const createTodoRequest: ZodType = z.object({
    todo: z
        .string({
            invalid_type_error: "todo must be string",
            required_error: "todo is required",
        })
        .min(1, {
            message: "todo can't be empty",
        })
        .max(255, {
            message: "todo max character is 255",
        }),
    username: z
        .string({
            invalid_type_error: "username must be string",
            required_error: "username is required",
        })
        .min(1, {
            message: "username can't be empty",
        })
        .max(100, {
            message: "username max character is 100",
        }),
    categoryId: z
        .number({
            invalid_type_error: "categoryId must be number",
            required_error: "categoryId is required",
        })
        .min(1, {
            message: "todo can't be empty",
        }),
});
