import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import {
  getTasks,
  getTask,
  updateTasks,
  deleteTasks,
  createTasks,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);

router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTasks
);
router.get("/tasks/:id", authRequired, getTask);

router.delete("/tasks/:id", authRequired, deleteTasks);

router.put("/tasks/:id", authRequired, updateTasks);

export default router;
