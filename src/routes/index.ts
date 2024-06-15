import express from "express";
import { UserService } from "../services/user-service";
import { UserController } from "../controllers/user-controller";

export const routes = express.Router();

routes.post("/api/register", UserService.register);
routes.post("/api/login", UserController.login);
