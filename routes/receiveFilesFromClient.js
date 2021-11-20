import dotenv from "dotenv";
dotenv.config();
import { Router } from "express";
import { storeFiles } from "../controller/storeFiles.js";
import { uploadFiles } from "../controller/uploadFiles.js";

const router = Router();

router.post("/upload-files", uploadFiles, storeFiles);

export default router;
