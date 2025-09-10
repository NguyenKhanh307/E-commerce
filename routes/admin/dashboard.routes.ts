import { Router } from "express";
import * as dashboardControllers from "../../controllers/admin/dashboard.controllers";
const router = Router();

router.get("/", dashboardControllers.dashboard);

export default router;
