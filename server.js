// server setup
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import fileUpload from "express-fileupload";

// API routes
import receiveFilesFromClient from "./routes/receiveFilesFromClient.js";

const app = express();

// enable express-filesupload
app.use(fileUpload());

// bring the API routs
app.use(receiveFilesFromClient);

// start server

const port = process.env.PORT;

app.listen(port || 8080, () => {
  console.log("all systems are a go on port " + port);
});
