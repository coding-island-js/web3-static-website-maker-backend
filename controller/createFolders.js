import fs from "fs";

export async function createFolders(req, res, next) {
  //create directory
  //create temp dir
  const tempDir = "./upload" + req.body.folderName;

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  const childTempDir = tempDir + "/files/";

  if (!fs.existsSync(childTempDir)) {
    fs.mkdirSync(childTempDir);
  }
  next();
}

