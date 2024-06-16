import express from "express";
import { UserController } from "../controllers/user-controller";
import { CategoryController } from "../controllers/category-controller";
import { TodoController } from "../controllers/todo-controller";
import { auth } from "../middlewares/auth";

export const routes = express.Router();

// User
routes.post("/register", UserController.register);
routes.post("/login", UserController.login);

// Category
routes.post("/category", auth, CategoryController.create);
routes.get("/category", CategoryController.getAll);
routes.delete("/category/:id", auth, CategoryController.delete);

// Todo
routes.post("/todo", auth, TodoController.create);
routes.get("/todo", TodoController.getTodo);
routes.put("/todo/:id", auth, TodoController.update);
routes.delete("/todo/:id", auth, TodoController.delete);
