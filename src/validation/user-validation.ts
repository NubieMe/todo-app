import { ZodType, z } from "zod";

export const authRequest: ZodType = z.object({
    username: z.string().min(1).max(100),
    password: z.string().min(1).max(100),
});
