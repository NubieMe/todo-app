import { ZodType, z } from "zod";

export const createTodoRequest: ZodType = z.object({
    todo: z.string().min(1).max(255),
    username: z.string().min(1).max(100),
    categoryId: z.number().min(1),
});
