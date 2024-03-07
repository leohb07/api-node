import { Request, Response } from "express";
import { UserService } from "./user.service";
import { IUserInterface } from "./interfaces/user.interface";

export class UserController {
  public async getUser(_: Request, response: Response) {
    const userService = new UserService();

    const users = await userService.getUsers();

    response.status(200).json({
      users,
    });
  }

  public async getUserById(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({
        status: 400,
        message: "Bad Request",
      });
    }

    const userService = new UserService();

    const user = await userService.getUserById(Number(id));

    if (!user) {
      return response.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    response.status(200).json({
      user,
    });
  }

  public async createUser(request: Request, response: Response) {
    const { email, id, name, password } = request.body;

    console.log(email, id, name, password);

    if (!email || !id || !name || !password) {
      return response.status(400).json({
        status: 400,
        message: "Bad Request",
      });
    }

    const userService = new UserService();

    await userService.createUser({
      id,
      name,
      email,
      password,
    });

    response.status(200).json({
      status: 200,
      message: "User created",
    });
  }

  public async updateUser(request: Request, response: Response) {
    const { id: userId } = request.params;

    const { email, id, name, password } = request.body as IUserInterface;

    if (!email || !id || !name || !password) {
      return response.status(400).json({
        status: 400,
        message: "Bad Request",
      });
    }

    const userService = new UserService();

    await userService.updateUser(Number(userId), {
      id,
      name,
      email,
      password,
    });

    response.status(200).json({
      status: 200,
      message: "User updated",
    });
  }

  public async deleteUser(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({
        status: 400,
        message: "Bad Request",
      });
    }

    const userService = new UserService();
    await userService.deleteUser(Number(id));

    response.status(200).json({
      status: 200,
      message: "User deleted",
    });
  }
}
