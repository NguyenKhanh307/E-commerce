import { Router } from "express";
import * as homeControllers from "../../controllers/client/home.controllers";

const router = Router();

router.get("/", homeControllers.home);

export default router;
