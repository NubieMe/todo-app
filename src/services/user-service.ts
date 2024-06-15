import { prismaClient } from "../database/prisma";
import { ResponseError } from "../errors/response-error";
import { UserRequest, UserResponse, toUserResponse } from "../model/user";
import { authRequest } from "../validation/user-validation";
import { validate } from "../validation/validate";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserService {
    static async register(req: UserRequest): Promise<UserResponse> {
        const validated = validate(authRequest, req);

        const isUsernameExist = await prismaClient.user.count({
            where: {
                username: validated.username,
            },
        });

        if (isUsernameExist != 0) throw new ResponseError(400, "username already exists");

        const hashed = await bcrypt.hash(validated.password, 10);

        const user = await prismaClient.user.create({
            data: {
                username: validated.username,
                password: hashed,
            },
        });

        return toUserResponse(user);
    }

    static async login(req: UserRequest): Promise<UserResponse> {
        const validated = validate(authRequest, req);

        let user = await prismaClient.user.findUnique({
            where: {
                username: validated.username,
            },
        });

        if (!user) throw new ResponseError(400, "username not registered yet");

        const isMatch = await bcrypt.compare(validated.password, user.password);

        if (!isMatch) throw new ResponseError(401, "username/password is invalid");

        const token = jwt.sign({ username: validated.username }, process.env.SECRET_KEY!, {
            expiresIn: "1d",
        });

        user = await prismaClient.user.update({
            where: {
                username: validated.username,
            },
            data: {
                token,
            },
        });

        return toUserResponse(user);
    }
}
