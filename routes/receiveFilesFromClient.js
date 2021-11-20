import { Router } from "express";
import { createFolders } from "../controller/createFolders.js";
import { storeFiles } from "../controller/storeFiles.js";
import { uploadFiles } from "../controller/uploadFiles.js";

const router = Router();

router.post("/upload-files", createFolders, uploadFiles, storeFiles);

//router.post("/upload-files", createFolders, uploadFiles);

export default router;
