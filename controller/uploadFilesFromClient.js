export async function uploadFilesFromClient(req, res, next) {
  try {
      //Use the name of the input field to retrieve the uploaded file
      let imageFile = req.files.image;

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      imageFile.mv(
        "./upload" + req.body.folderName + "/files/" + imageFile.name
      );
      // call next() to go to the next function on the route list
      next();
  } catch (err) {
    res.status(500).send(err);
  }
}
