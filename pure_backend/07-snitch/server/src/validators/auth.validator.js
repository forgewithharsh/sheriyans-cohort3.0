import { body, validationResult } from "express-validator";

const registerValidator = [
  body("email")
    .exists()
    .withMessage("Email is Required")
    .trim()
    .isEmail()
    .withMessage("Enter valid email address"),
  body("name")
    .exists()
    .withMessage("Name is Required")
    .isString()
    .withMessage("Name must be a String")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Name length must be between 2 to 50 characters"),
  body("password")
    .exists()
    .withMessage("Password is Required")
    .isString()
    .withMessage("Password must be a String")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be minimum 6 character long"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid Request",
        errors: errors.array(),
      });
    }

    next();
  },
];

export default registerValidator;
