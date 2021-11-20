import dotenv from "dotenv";
dotenv.config();

export async function uploadFiles(req, res, next) {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let imageFile = req.files.image;

      let websiteTitle = req.body.websiteTitle;

      console.log("title: " + websiteTitle);

      console.log("files: " + imageFile);
      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      imageFile.mv("./upload" + req.body.folderName + "/" + imageFile.name);
      // imageFile.mv("./files/img/image");

      next();
    }
  } catch (err) {
    res.status(500).send(err);
  }
}
