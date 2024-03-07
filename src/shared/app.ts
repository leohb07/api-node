import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import express from "express";
import { routes } from "./routes";

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
})

export { app }