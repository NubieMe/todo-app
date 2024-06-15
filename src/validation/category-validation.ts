import { ZodType, z } from "zod";

export const createCategoryRequest: ZodType = z.object({
    name: z
        .string({
            invalid_type_error: "category name must be string",
            required_error: "category name is required",
        })
        .min(1, {
            message: "category name can't be empty",
        })
        .max(100, {
            message: "category name's max character is 100",
        }),
});
