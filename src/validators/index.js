import { body } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("email is invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("user name is required")
      .isLowercase()
      .withMessage("user name must be in lower case")
      .isLength({ min: 3 })
      .withMessage("user name must be at least 3 characters long"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("password should not be empty"),
    body("fullName").optional().trim(),
  ];
};
const userLoginValidator = () => {
  return [
    body("email").optional().isEmail().withMessage("email is invalid"),
    body("password").notEmpty().withMessage("password is required"),
  ];
};

export { userRegisterValidator };
