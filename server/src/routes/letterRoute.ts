import { Router } from "express";
import * as letterController from "../controllers/letterControllers";

const letterRoute = Router();

letterRoute.post("/letter", letterController.create);
letterRoute.get("/letter", letterController.getAll);
letterRoute.get("/letter/:id", letterController.getById);

export default letterRoute;
