import dotenv from "dotenv";
dotenv.config();
import { Web3Storage, getFilesFromPath } from "web3.storage";
import fs from "fs";

export async function storeFiles(req, res) {
  let path = "./upload" + req.body.folderName + "/";

  const token = req.body.token;

  if (!token) {
    return console.error(
      "A token is needed. You can create one on https://web3.storage"
    );
  }

  const storage = new Web3Storage({ token });

  const files = await getFiles(path);

  console.log(`Uploading ${files.length} files`);
  try {
    // store files
    const cid = await storage.put(files);
    console.log("Content added with CID:", cid);
    //send cid in response
    //send response
    res.json({
      message: "File is uploaded",
      url: "https://" + cid + ".ipfs.dweb.link/files/index.html",
    });
  } catch (error) {
    res.status(403).json({ error: "incorrect token: " + error });
    console.error("i found error: " + error);
    return false;
  }

  try {
    //  fs.rmdirSync(removePath);
    fs.rmSync(path, { recursive: true });
  } catch (error) {
    console.error(error);
  }
}

async function getFiles(path) {
  const files = await getFilesFromPath(path);
  console.log(`read ${files.length} file(s) from ${path}`);
  return files;
}
