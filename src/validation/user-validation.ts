import { ZodType, z } from "zod";

export const authRequest: ZodType = z.object({
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
    password: z
        .string({
            invalid_type_error: "password must be string",
            required_error: "password is required",
        })
        .min(1, {
            message: "password can't be empty",
        })
        .max(100, {
            message: "password max character is 100",
        }),
});
