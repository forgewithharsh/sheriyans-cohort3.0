import { Router } from "express";
import { registerValidation } from "../validator/auth.validator.js";
import { register } from "../controller/auth.controller.js";

const router = Router();

// * @POST /api/auth/register
router.post("/register", registerValidation, register);

export default router;
