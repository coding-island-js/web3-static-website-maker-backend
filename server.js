//server setup
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { test } from "./routes/test.js";

import storeFilesWeb3Storage from "./routes/storeFilesWeb3Storage.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

//app.use(uploadFiles)
app.use(storeFilesWeb3Storage);

// start server

console.log("test: " + test);

const port = process.env.PORT;

app.listen(port || 8080, () => {
  console.log("all systems are a go on port " + port);
});
