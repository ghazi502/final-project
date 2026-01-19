import { Router } from "express";
import {
  createTodoList,
  getAllTodoLists,
} from "../controllers/todolistController.js";

const todoListRouter = Router();

todoListRouter.get("/get-all", getAllTodoLists);
todoListRouter.post("/create", createTodoList);

export default todoListRouter;
