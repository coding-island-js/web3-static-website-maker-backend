import fs from "fs";

export async function createFolders(req, res, next) {
  //create directory
  //create temp dir
  // const folderName = "333";
  const tempDir = "./upload" + req.body.folderName;

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  next();
}
//createFolders();
