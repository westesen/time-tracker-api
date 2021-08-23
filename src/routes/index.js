import { Router } from "express";
import { test } from "../controllers/index.js";

const router = Router();

router.get('/api/v1/test', test);

export default router;