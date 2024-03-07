import { Router } from "express";
import { userRoutes } from "../modules/users/user.route";

const routes = Router();

routes.get('/', (request, response) => {
  response.send("Hello World!");
})

routes.use('/users', userRoutes)

export { routes }