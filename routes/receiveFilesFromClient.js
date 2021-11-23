import { Router } from "express";
import { createFolders } from "../controller/createFolders.js";
import { createHtmlFile } from "../controller/createHtmlFile.js";
import { storeFilesToWeb3Storage } from "../controller/storeFilesToWeb3Storage.js";
import { uploadFilesFromClient } from "../controller/uploadFilesFromClient.js";
import { body } from "express-validator";
import cors from "cors";

const router = Router();

const devOrigin = "http://localhost:5500";

const prodOrigin = "https://web3-website-maker.netlify.app";

const corsOptions = {
  origin: function (origin, callback) {
    if (prodOrigin.indexOf(origin) === -1) {
      var message =
        "The CORS policy for this origin doesn't allow access from the particular origin.";
      return callback(new Error(message), false);
    }
    return callback(null, true);
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
