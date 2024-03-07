import { NextFunction, Request, Response } from "express";

export const validateUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id, name, email, password } = request.body;

  const errors = [];

  if (!id) {
    errors.push("id is required");
  }

  if (!name) {
    errors.push("name is required");
  }

  if (!email) {
    errors.push("email is required");
  }

  if (!password) {
    errors.push("password is required");
  }

  if (password.length < 8) {
    errors.push("password must be at least 8 chars long");
  }

  if (errors.length) {
    return response.status(422).json({
      message: "Validation failed",
      errors,
    });
  }

  next();
};
