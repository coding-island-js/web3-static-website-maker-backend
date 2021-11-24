import fs from "fs";

export async function createFolders(req, res, next) {
  //create directory
  //create temp dir
  // use the folder name received from the Frontend
  const tempDir = "./upload" + req.body.folderName;

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  // create a sub directory to store the file received from the Frontend
  const childTempDir = tempDir + "/files/";

  if (!fs.existsSync(childTempDir)) {
    fs.mkdirSync(childTempDir);
  }
  // call next() to go to the next function on the route list
  next();
}
