// import the web3.storage library
import { Web3Storage, getFilesFromPath } from "web3.storage";
import fs from "fs";

export async function storeFilesToWeb3Storage(req, res) {
  // define folder path where the files are located
  let parentPath = "./upload" + req.body.folderName;
  let path = "./upload" + req.body.folderName + "/files/";

  const token = req.body.token;

  // Use API token to start the storage process
  const storage = new Web3Storage({ token });

  // get the files that the user uploaded
  const files = await getFiles(path);

  console.log(`Uploading ${files.length} files`);
  try {
    // store files
    // Store the files in web3.storage, if successful it will return a cid - address where the files are stored
    const cid = await storage.put(files);
    console.log("Content added with CID:", cid);
    // remove the temp folders so we don't store anything the user sent on the backend server
    await removeDir(parentPath);
    //send new website URL in response
    res.json({
      message: "File is uploaded",
      url: "https://" + cid + ".ipfs.dweb.link/files/index.html",
    });
  } catch (error) {
    // if the token is incorrect, catch the error and send status to client
    res.status(403).json({ error: "incorrect token: " + error });
    console.error("i found error: " + error);
    await removeDir(parentPath);
    return false;
  }
}

// function that gets the files stored in the file folder
async function getFiles(path) {
  const files = await getFilesFromPath(path);
  console.log(`read ${files.length} file(s) from ${path}`);
  return files;
}
// function to remove file directory
async function removeDir(path) {
  try {
    //  fs.rmdirSync(removePath);
    fs.rmSync(path, { recursive: true });
  } catch (error) {
    console.error(error);
  }
}
