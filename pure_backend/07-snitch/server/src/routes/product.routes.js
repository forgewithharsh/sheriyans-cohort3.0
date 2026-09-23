import { Router } from "express";
import createProductValidator from "../validators/product.validator.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

// * @POST /api/products
router.post("/", authenticate, async (req, res, next) => {
  if (req.user.role !== "seller") {
    return res.status(403).json({
      message: "User is not authorize to create products",
    });
  }

  next();
});

export default router;
