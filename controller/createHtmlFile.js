import fs from "fs";

export async function createHtmlFile(req, res, next) {
  // Assign variables to the received data
  let headerTitle = req.body.headerTitle;
  // express-fileupload will put any file received from the frontend as req.files
  let imageFile = req.files.image;
  let srcImage = "/files/" + imageFile.name;
  let altImage = req.body.altImage;
  // define folder path to store the files and user input
  let path = "./upload" + req.body.folderName + "/files/";

  // create HTML file from the user input
  // This is the website the app is making
  // included CSS styling in the style tag
  let htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
      rel="stylesheet"
    />
    <title>Web3 decentralized website</title>
  </head>
  <body>
    <header>
      <div class="logo-title">Web3 Decentralized Website</div>
    </header>
    <main>
      <h1>${headerTitle}</h1>
      <br />
      <img src=${srcImage} alt="${altImage}" />
    </main>
    <footer>made with <span class="heart">&hearts;</span></footer>
  </body>
  <style>
    /* Box sizing rules */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* Make images easier to work with */
    img,
    picture {
      max-width: 80%;
    }

    :root {
      --font-family-header: "Merriweather Sans", sans-serif;

      --color-background-header-footer: #d1bdf7;
      --color-background-body: #ffffff;
      --color-complimentary-two-background: #fff4f9;

      --color-primary-font: #000036;
      --color-secondary-font: #ffffff;

      --font-size-sm: clamp(0.5rem, 0.5rem + 1.5vw, 2rem);
      --font-size-100: 0.775rem;
      --font-size-200: 0.875rem;
      --font-size-300: 1rem;
      --font-size-400: 1.125rem;
      --font-size-500: 1.25rem;
      --font-size-600: 1.5rem;
      --font-size-700: 1.875rem;
      --font-size-xl: clamp(2rem, 1rem + 3vw, 5.75rem);
    }

    h1 {
      font-size: var(--font-size-xl);
      line-height: 1.1;
    }

    .logo-title {
      font-size: var(--font-size-700);
    }

    /* Set Grid Layout, min-height, some color, and padding on the top and bottom */
    body {
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
      font-family: var(--font-family-header);
    }

    main {
      margin: auto;
      text-align: center;
      padding-block: 2vw;
    }

    header {
      font-size: var(--font-size-700);
    }

    header,
    footer {
      text-align: center;
      padding-block: 2vw;
      background: var(--color-background-header-footer);
    }

    .heart {
      color: red;
    }
  </style>
</html>`;

  //create html page and save html page to file folder using the FS module
  fs.writeFile(path + "index.html", htmlContent, function (err) {
    if (err) throw err;
  });

  // call next() to go to the next function on the route list
  next();
}
