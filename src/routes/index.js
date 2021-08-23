import { Router } from "express";
import { createUser, createTask, readTasks } from "../controllers/index.js";

const router = Router();

router.post('/api/users/', createUser);

router.post('/api/tasks/create/', createTask);

router.get('/api/tasks/:userId', readTasks);

export default router;