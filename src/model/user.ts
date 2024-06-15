import { User } from "@prisma/client";

export type UserRequest = {
    username: string;
    password: string;
};

export type UserResponse = {
    username: string;
    token?: string;
};

export function toUserResponse(user: User): UserResponse {
    return !user.token
        ? {
              username: user.username,
          }
        : {
              username: user.username,
              token: user.token,
          };
}
