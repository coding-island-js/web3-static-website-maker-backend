import dotenv from "dotenv";
dotenv.config();
import { Router } from "express";
import { storeFiles } from "../controller/storeFiles.js";

const router = Router();

router.post("/store-files-web3-storage", storeFiles);

export default router;
