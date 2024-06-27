import { Router } from "express";
import letterRoute from "./letterRoute";

const router = Router();

router.use(letterRoute)

export default router