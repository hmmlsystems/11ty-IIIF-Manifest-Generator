# 11ty IIIF Manifest Generator

[TL;DR](#tldr)<br>
[Description](#description)<br>
[Requirements](#requirements)<br>
[Assumptions](#assumptions)<br>
[Installation](#installation)<br>
[Adding your own images](#adding-your-own-images)<br>
[Cleanup](#cleanup)<br>
[Gotchas](#gotchas)<br>
[Other information](#other-information)<br>

## TL;DR
Too busy to read? Here are some simple instructions to get started.
- Install Node and NPM - [Nodejs.org LTS installation](https://nodejs.org/en/)
- Download the code
- Install the application `npm install`
- Build the site `npx @11ty/eleventy`
- Use [Netlify Drop](https://app.netlify.com/drop) to deploy the site

## Description
Using this program and the below process, you can generate a [IIIF manifest](https://iiif.io) (Level 0) for an image or images, deploy to the web, and share. All without deploying your own [IIIF Image Server](https://iiif.io/apps-demos/#image-servers).  

The program utilizes the power of [11ty](https://www.11ty.dev/), a static site generator (SSG), and the [11ty Image plugin](https://www.11ty.dev/docs/plugins/image/) to generate an overview page, a separate Mirador 3 IIIF Image Viewing Client page for each image(s) set, and a IIIF manifest for each image(s) set.

<img src="/src/docs/11ty-iiif-final-list.png" alt="results of program" width="400"/>

## Requirements
The goal of this project was to create a relatively simple process to generate IIIF Level 0 manifests on the web without a IIIF image server. You will need a [Netlify account](https://www.netlify.com/), a computer, and some basic knowledge to work on the command line. Each step is documented to provide help and guidance along the way.

## Assumptions
We’re assuming you know what [IIIF](https://iiif.io/) is and why you may want a manifest for an image(s). The process also assumes some familiarity with the [Mirador 3 IIIF Image Viewing Client](https://projectmirador.org/).

## Installation
First, you need the Node and NPM applications. These can both be installed via the [Nodejs.org LTS installation](https://nodejs.org/en/). Follow the installation instructions on that page. Once installed, confirm that they are working by asking your computer what version of Node and NPM you have (`node -v` and `npm -v`). If you see something like this (actual version may vary), they are installed correctly.

<img src="/src/docs/node-npm.png" alt="node and npm" width="400"/>

On a Windows PC, make sure you run PowerShell as an Administrator.

<img src="/src/docs/windows-run-as-admin.JPG" alt="windows run as admin" width="400"/>

Windows, checking Node and NPM:

<img src="/src/docs/node-npm-windows-new.JPG" alt="node and npm" width="200"/>

### Download
Next, download the ZIP file of this [Github repository](https://github.com/hmmlsystems/11ty-IIIF-Manifest-Generator).

![download code](/src/docs/download-code-github.png "download code")

### Extract
<br>Extract or unzip the download file.

<img src="/src/docs/extract-download.png" alt="extract download" width="300"/>

On Windows:<br>
<img src="/src/docs/zip-extract-windows.JPG" alt="extract download" width="500"/>

<br>In Terminal (Mac) or PowerShell (Windows), navigate to the `/11ty-IIIF-Manifest-Generator/src/` directory.

<img src="/src/docs/terminal-src.png" alt="terminal" width="400"/>

### NPM Install
Next install the application using `npm install`.

<img src="/src/docs/npm-install-1.png" alt="npm installing" width="500"/>

On Windows:<br>
<img src="/src/docs/npm-install-new.JPG" alt="npm installing Windows" width="600"/><br>

> **What is this doing?** Basically, the application needs other software to help it function and run (11ty and 11ty Image Plugin). With the `npm install` command, your computer is going out to the web, getting these programs, and installing them on your computer. They are only being installed to this `/src` directory and you can see their folders and files in the `node_modules` directory. You’ll never have to worry about these files but just know that they are there to help build your site.

<br>![npm installed](/src/docs/npm-install-2.png "npm installed")

### 11ty Build
With the application installed, you can run `npx @11ty/eleventy` to generate or build your site. You will also see a list of files that 11ty has generated for you.

<img src="/src/docs/run-11ty.png" alt="build site with 11ty" width="400"/>

On Windows:<br>
<img src="/src/docs/11ty-run.JPG" alt="build site with 11ty Windows" width="500"/>

> **What is this doing?** This command is asking 11ty to build your site from the files that are already in the project. The application is ‘seeded’ with 3 examples: a single image, multiple images, and a fully detailed example with multiple images. For reference, you can find these in the `/src/images/` folder.
>
> The `npx @11ty/eleventy` command takes the information in each folder’s index.html file and uses it to build the main site’s page, a Mirador 3 Viewer page for each folder, a manifest.json file for each folder, and thumbnails of each image. For reference, you can find the 'compiled' site in the `/src/_site/` folder.

### 11ty Serve

To view your site locally, change the `/src/_data/siteURL.json` file to “http://localhost:8080”. Then use the `npx @11ty/eleventy --serve` command. The “-- serve” asks 11ty to also create a webserver in memory so you can see your application.

<img src="/src/docs/11ty-serve-terminal.png" alt="11ty serve terminal" width="500"/>

Or on Windows:<br>
<img src="/src/docs/11ty-serve.JPG" alt="11ty serve terminal Windows" width="500"/>

<br>Open your favorite browser and open <a href="http://localhost:8080">http://localhost:8080</a>.

<img src="/src/docs/11ty-serve-browser.png" alt="11ty serve browser" width="400"/>

> FYI, to quit the 11ty serve command, press control+c in the terminal or PowerShell.

### Deploy to Netlify
Next, log in to your <a href="https://app.netlify.com">Netlify account</a>. Then visit <https://app.netlify.com/drop> and drag your `src/_site` folder into the 'drop box' in your browser.

![Netlify Deploy](/src/docs/netlify-deploy.gif "Netlify Deploy")<br><br>

> **What is this doing?** Netlify will publish the static assets in this folder. They will also give you a public website and URL.

<br><br>![Netlify Site Deploy](/src/docs/netlify-deploy-site.png "Netlify Site Deploy")

<br>With your pages deployed, you may want to change the URL to something more meaningful. Click the "Site Settings" button.<br>

![site settings](/src/docs/site-settings.png "site settings")

<br>Next, click the "Change site name" button.<br>

<img src="/src/docs/change-site-name.png" alt="Change site name" width="400"/>

<br>Save, and you should have your new site URL.<br>

![New Site Name](/src/docs/new-site-name.png "New Site Name")

<br>Because the IIIF manifest needs the entire URL to work, we need to take this new URL and put it in as the siteURL. Even if you didn't change the URL, you should update the siteURL with your site's URL. This will make sure that the application knows where the website lives on the web. Update `_data/siteURL.json`<br>

<img src="/src/docs/siteURL.png" alt="siteURL" width="400"/>

<br>Now, rebuild your site locally (`npx @11ty/eleventy`) again and deploy again. To deploy this time, click the **Deploys** option in your menu and drag your `src/_site` folder into the 'drop box' in your browser.<br>

![Netlify Deploys for existing site](/src/docs/site-deploys-option.png "Netlify Deploys for existing site")

<br>Once the site has been built and processed by Netlify, click on the site URL and it should open a new browser tab with your site (the overview page). The main landing page is a quick list of all the image sets the application created.

You can open the Mirador page (click on the single Mirador link) or even send the link to friends, students, or scholars. The manifest URL can also be used elsewhere but only in Mirador 3 viewers. For example, [Mirador par Biblissima](https://iiif.biblissima.fr/mirador3/?theme=light) or
[Project Mirador](https://mirador-dev.netlify.app/__tests__/integration/mirador/)

Going forward, if you make changes to images and/or metadata, you'll only need to re-build your site. Updating the siteURL need only happen this one time.

## Adding your own images

To add your own image file(s), first begin by creating a folder under `/src/images/`. Make sure it is URL friendly with no spaces or special characters. Then copy the `index.html` from the `full` folder and paste it in this new  directory. Finally, add your image file(s).

<img src="/src/docs/add-folder-image-file.png" alt="Add folder" width="800"/>

Next, open the `index.html` file in edit mode (try using [Atom](https://atom.io/)) from your new folder. In this file, you will describe your image file(s) which the application uses when it builds your site.

<img src="/src/docs/index-file-contents.png" alt="Index file" width="800"/>

The full list of possible metadata options may be overwhelming, but really there are only four required fields to get you started.

| Field | Description | Required |
| --- | ----------- | -------- |
| layout | This tells 11ty what template to use. DO NOT CHANGE. | YES |
| tags | This helps 11ty parse your content. DO NOT CHANGE. | YES |
| folder | The name of the folder where this file resides | YES |
| images | An array of your image file(s) | YES |
| label | The label that will appear in the upper left of the Mirador 3 Viewer | NO |
| description | A description that will be in the manifest | NO |
| rights | Rights statement for your image file(s) | NO |
| logo | A logo that will be displayed as part of the manifest | NO |
| viewingDirection | The direction the images will be displayed | NO |
| miradorTheme | The color of the Mirador Viewer | NO |
| miradorPrimary | The primary accent color for the Mirador Viewer | NO |

Try using all, some, or just remove everything except the 4 required fields.

IMPORTANT: Change the folder name to match yours, and change the image(s) array/list to match your image file(s) names.

Save the file, do a build, and deploy your application to see your image(s) and manifest(s).

## Cleanup

Once you have a folder with image file(s) working, feel free to remove the `single`, `multiple`, and `full` folders. They are only there as examples to get you up and running.

Remember, that if you want to deploy another set of image file(s) in the future, you can reinstall and setup a new site. The previous site's images stay preserved with that URL and you won’t have to continue to build and deploy a bigger and bigger distribution of image file(s) sets.

## Gotchas

- You can’t have : or colons in your text. Because the system uses a YAML format, these aren’t allowed. Unless they are in quotes. So, `label: "Test: Metadata"` is ok but not `label: Picture: Number 1`.

- Quotes can also cause problems, especially if you have quotes within quotes. In many cases substituting or eliminating quotes will help.

- Currently the application works with JPG image files only.

- Folder names and image names should be URL friendly.

- Subfolders aren't allowed. Image set folders should only be under the /images folder.

- Not seeing your changes? Make sure you save your files, re-compile (or re-generate) your site, and then re-deploy.

## Other information

**What’s the netlify.toml file doing?** This file allows other sites to see and use your manifest files. It is related to CORS. Basically, most websites try to protect their content by not letting other sites use or see it. In our case, we want them to use it. Read more about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) or the [netlify.toml file](https://docs.netlify.com/configure-builds/file-based-configuration/#headers).
