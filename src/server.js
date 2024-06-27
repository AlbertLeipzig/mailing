import express from "express";
import dotenv from "dotenv";
import { router } from "./router.js";
import { errorMiddleware } from "./errorMiddleware.js";
import { connectDb } from "./connectDb.js";
import cors from "cors";
dotenv.config()
const port = process.env.PORT || 7000;
const dbUrl = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use(errorMiddleware);

const startServer = () => {
  try {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

connectDb(dbUrl)
  .then(() => startServer())
  .catch((e) => console.error(e));
