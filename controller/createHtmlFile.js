import fs from "fs";

export async function createHtmlFile(req, res, next) {
  //sanitize website title input
  let websiteTitle = req.body.websiteTitle;

  console.log("websiteTitle: " + websiteTitle);
  //create html page

  // save html page to file folder

  next();
}
