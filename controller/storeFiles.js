import dotenv from "dotenv";
dotenv.config();
import { Web3Storage, getFilesFromPath } from "web3.storage";

export async function storeFiles(req, res) {
  let path = "./upload/";

  const token = req.body.token;

  if (!token) {
    return console.error(
      "A token is needed. You can create one on https://web3.storage"
    );
  }

  const storage = new Web3Storage({ token });

  const files = await getFiles(path);

  console.log(`Uploading ${files.length} files`);
  // store files
  const cid = await storage.put(files);
  console.log("Content added with CID:", cid);

  //send cid in response
  res.send("cid: " + cid);
}

async function getFiles(path) {
  const files = await getFilesFromPath(path);
  console.log(`read ${files.length} file(s) from ${path}`);
  return files;
}
