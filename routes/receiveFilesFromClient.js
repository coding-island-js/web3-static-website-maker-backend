import { Router } from "express";
import { createFolders } from "../controller/createFolders.js";
import { createHtmlFile } from "../controller/createHtmlFile.js";
import { storeFilesToWeb3Storage } from "../controller/storeFilesToWeb3Storage.js";
import { uploadFilesFromClient } from "../controller/uploadFilesFromClient.js";
import { body } from "express-validator";

const router = Router();

router.post(
  "/upload-files",
  body("headerTitle").not().isEmpty().trim().escape(),
  body("altImage").not().isEmpty().trim().escape(),
  createFolders,
  createHtmlFile,
  uploadFilesFromClient,
  storeFilesToWeb3Storage
);

export default router;
