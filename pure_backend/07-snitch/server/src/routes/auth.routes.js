import { Router } from "express";
import registerValidator, {
  loginValidator,
} from "../validators/auth.validator.js";
import { register, login, refresh } from "../controller/auth.controller.js";

const router = Router();

// * @POST /api/auth/register
router.post("/register", registerValidator, register);

// *@POST /api/auth/login
router.post("/login", loginValidator, login);

// *@POST /api/auth/refresh
router.post("/refresh", refresh);

export default router;
