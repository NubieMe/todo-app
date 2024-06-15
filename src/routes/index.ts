import express from "express";
import { UserService } from "../services/user-service";

export const routes = express.Router();

routes.post("/api/register", UserService.register);
