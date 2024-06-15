import express from "express";
import { UserController } from "../controllers/user-controller";
import { CategoryController } from "../controllers/category-controller";

export const routes = express.Router();

// User
routes.post("/api/register", UserController.register);
routes.post("/api/login", UserController.login);

// Category
routes.post("/api/category", CategoryController.create);
routes.get("/api/category", CategoryController.getAll);
