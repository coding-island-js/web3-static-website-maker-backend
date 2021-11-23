//server setup
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import fileUpload from "express-fileupload";
import receiveFilesFromClient from "./routes/receiveFilesFromClient.js";

const app = express();

app.use(express.json());



// enable files upload
app.use(fileUpload());

app.use(receiveFilesFromClient);

// start server

const port = process.env.PORT;

app.listen(port || 8080, () => {
  console.log("all systems are a go on port " + port);
});
