import { Router } from "express";
import cors from "cors";
import { createFolders } from "../controller/createFolders.js";
import { createHtmlFile } from "../controller/createHtmlFile.js";
import { storeFilesToWeb3Storage } from "../controller/storeFilesToWeb3Storage.js";
import { uploadFilesFromClient } from "../controller/uploadFilesFromClient.js";
import { body } from "express-validator";
const router = Router();

const whitelist = [process.env.ORIGIN];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      console.log("origin: " + origin);
      callback(null, true);
    } else {
      // callback(new Error("Not allowed by CORS"));
      console.log("origin: " + origin);
      throw Error("Not allowed by CORS");
    }
  },
};

router.post(
  "/upload-files",
  cors(corsOptions),
  body("headerTitle").not().isEmpty().trim().escape(),
  body("altImage").not().isEmpty().trim().escape(),
  createFolders,
  createHtmlFile,
  uploadFilesFromClient,
  storeFilesToWeb3Storage
);

export default router;
