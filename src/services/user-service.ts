import { prismaClient } from "../database/prisma";
import { ResponseError } from "../errors/response-error";
import { UserRequest, UserResponse, toUserResponse } from "../model/user";
import { authRequest } from "../validation/user-validation";
import { validate } from "../validation/validate";
import bcrypt from "bcrypt";

export class UserService {
    static async register(req: UserRequest): Promise<UserResponse> {
        const userReq = validate(authRequest, req);

        const isUsernameExist = await prismaClient.user.count({
            where: {
                username: userReq.username,
            },
        });

        if (isUsernameExist != 0) throw new ResponseError(400, "username already exists");

        const hashed = await bcrypt.hash(userReq.password, 10);

        const user = await prismaClient.user.create({
            data: {
                username: userReq.username,
                password: hashed,
            },
        });

        return toUserResponse(user);
    }
}
