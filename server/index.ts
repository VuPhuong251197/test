import express from "express";
import bodyParser from "body-parser";
import router from "./src/router/router";
import cors from "cors";
import { AppDataSource } from "./src/data-source";

const app = express();

AppDataSource.initialize().then(() => {
  console.log("Connect to database!");
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("", router);
app.listen(8000, () => {
  console.log("Server is running host: http://localhost:8000");
});
