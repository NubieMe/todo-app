import { ZodType, z } from "zod";

export const createCategoryRequest: ZodType = z.object({
    name: z.string().min(1).max(100),
});
