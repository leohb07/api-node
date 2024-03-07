import { userData } from "./data/user.data";
import { IUserInterface } from "./interfaces/user.interface";

export class UserService {
  public async getUsers(): Promise<IUserInterface[]> {
    return userData;
  }

  public async getUserById(
    userId: number
  ): Promise<IUserInterface | undefined> {
    return userData.find((user) => user.id === userId);
  }

  public async createUser(user: IUserInterface): Promise<void> {
    userData.push(user);
  }

  public async updateUser(
    userId: number,
    userUpdate: IUserInterface,
  ): Promise<void> {
    console.log(userUpdate);

    const userIndex = userData.findIndex((user) => user.id === userId);
    userData[userIndex] = userUpdate;
  }

  public async deleteUser(userId: number): Promise<void> {
    const userIndex = userData.findIndex((user) => user.id === userId);
    userData.splice(userIndex, 1);
  }
}
