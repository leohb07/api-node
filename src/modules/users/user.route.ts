import { Router } from "express";
import { UserController } from "./user.controller";
import { validateUser } from "./utils/validations/user.validation";

const userRoutes = Router();

const userController = new UserController();

userRoutes.get("/", userController.getUser);
userRoutes.get("/:id", userController.getUserById);
userRoutes.delete("/:id", userController.deleteUser);
userRoutes.post("/", validateUser, userController.createUser);
userRoutes.put("/:id", validateUser, userController.updateUser);

export { userRoutes };
