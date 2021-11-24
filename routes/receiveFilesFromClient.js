import dotenv from "dotenv";
dotenv.config();
import { Router } from "express";
import cors from "cors";
// import all the logic for the API routes
import { createFolders } from "../controller/createFolders.js";
import { createHtmlFile } from "../controller/createHtmlFile.js";
import { storeFilesToWeb3Storage } from "../controller/storeFilesToWeb3Storage.js";
import { uploadFilesFromClient } from "../controller/uploadFilesFromClient.js";

// used to validate the user input from the frontend
import { body } from "express-validator";

// create Express router for API routes
const router = Router();

// using CORS to restrict the origin requests to come from the Frontend only
const whitelist = [process.env.ORIGIN];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      console.log("origin: " + origin);
      callback(null, true);
    } else {
      // throw error and stop API call if the origin is forbidden
      // I'm using a Heroku which restarts the server if it stops
      // so no need to restart server in code for production
      console.log("origin: " + origin);
      throw Error("Not allowed by CORS");
    }
  },
};

router.post(
  // the route of the API
  "/upload-files",
  // check request origin
  cors(corsOptions),
  // check and sanitize any user text using express-validator
  body("headerTitle").not().isEmpty().trim().escape(),
  body("altImage").not().isEmpty().trim().escape(),
  // call these functions in order
  createFolders,
  createHtmlFile,
  uploadFilesFromClient,
  storeFilesToWeb3Storage
);

export default router;
