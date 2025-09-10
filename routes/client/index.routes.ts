import { Router } from "express";
import homeRoutes from "./home.Routes";
const router = Router();

router.use("/", homeRoutes);

export default router;
