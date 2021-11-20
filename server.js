//server setup
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

import storeFilesWeb3Storage from "./routes/storeFilesWeb3Storage.js";

import receiveFilesFromClient from "./routes/receiveFilesFromClient.js";

const app = express();

app.use(express.json());

// enable files upload
app.use(fileUpload());

app.use(
  cors({
    origin: "*",
  })
);

//app.use(uploadFiles)
app.use(storeFilesWeb3Storage);

app.use(receiveFilesFromClient);

// start server

const port = process.env.PORT;

app.listen(port || 8080, () => {
  console.log("all systems are a go on port " + port);
});
