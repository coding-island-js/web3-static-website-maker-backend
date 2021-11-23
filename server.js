let environment = "dev";
let urlOrigin;

if (environment === "dev") {
  urlOrigin = "http://localhost:5500";
}

if (environment === "prod") {
  urlOrigin = "https://web3-website-maker.netlify.app";
}

//server setup
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

import receiveFilesFromClient from "./routes/receiveFilesFromClient.js";

const app = express();

app.use(express.json());

// enable files upload
app.use(fileUpload());

app.use(
  cors({
    origin: urlOrigin,
  })
);

app.use(receiveFilesFromClient);

// start server

const port = process.env.PORT;

app.listen(port || 8080, () => {
  console.log("all systems are a go on port " + port);
});
