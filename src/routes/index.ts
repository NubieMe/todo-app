import express from "express";
import { UserController } from "../controllers/user-controller";
import { CategoryController } from "../controllers/category-controller";
import { TodoController } from "../controllers/todo-controller";

export const routes = express.Router();

// User
routes.post("/api/register", UserController.register);
routes.post("/api/login", UserController.login);

// Category
routes.post("/api/category", CategoryController.create);
routes.get("/api/category", CategoryController.getAll);
routes.delete("/api/category/:id", CategoryController.delete);

// Todo
routes.post("/api/todo", TodoController.create);
routes.get("/api/todo", TodoController.getTodo);
routes.put("/api/todo/:id", TodoController.update);
routes.delete("/api/todo/:id", TodoController.delete);
