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
- Install Node and NPM [Nodejs.org LTS installation](https://nodejs.org/en/)
- Download the code
- Install the application `npm install`
- Build the site `npx @11ty/eleventy`
- Use [Netlify Drop](https://app.netlify.com/drop) to deploy the site

## Description
Using this program and the below process, you can generate a IIIF manifest (Level 0) for an image or images, deploy them to the web, and share or use around the web. All without deploying your own [IIIF Image Server](https://iiif.io/apps-demos/#image-servers).  

The program utilizes the power of [11ty](https://www.11ty.dev/), a static site generator (SSG), and the [11ty Image plugin](https://www.11ty.dev/docs/plugins/image/) to generate an overview page, a separate Mirador 3 IIIF Image Viewing Client page for each image(s) set, and a IIIF manifest for each image(s) set.

<img src="/src/docs/11ty-iiif-final-list.png" alt="results of program" width="400"/>

## Requirements
The goal of this project was to create a relatively simple process to generate IIIF Level 0 manifests on the web without a IIIF image server. You will need a [Netlify account](https://www.netlify.com/), a computer, and some basic knowledge of working on the command line. Each step is documented to provide help and guidance along the way.

## Assumptions
We’re assuming you know what [IIIF](https://iiif.io/) is and why you may want a manifest for an image(s). The process also assumes some familiarity with the [Mirador 3 IIIF Image Viewing Client](https://projectmirador.org/).

## Installation
First you need the Node and NPM applications. These can both be installed via the [Nodejs.org LTS installation](https://nodejs.org/en/). Follow the installation instructions. Once installed, confirm that they are working by asking your computer what version of Node and NPM you have (`node -v` and `npm -v`). If it is able to tell you a version, they are installed correctly.

<img style="border: 3px solid black;" src="/src/docs/node-npm.png" alt="node and npm" width="400"/>

Next, download the ZIP of this [Github repository](https://github.com/hmmlsystems/11ty-IIIF-Manifest-Generator). If you are adept at Git, you could also clone the repository.

![download code](/src/docs/download-code-github.png "download code")

<br>Extract or unzip the download file.

<img style="border: 3px solid black;" src="/src/docs/extract-download.png" alt="extract download" width="300"/>

<br>In Terminal, navigate to the `/11ty-IIIF-Manifest-Generator/src/` directory.

<img style="border: 3px solid black;" src="/src/docs/terminal-src.png" alt="terminal" width="400"/>

Next install the application using `npm install`.

<img style="border: 3px solid black;" src="/src/docs/npm-install-1.png" alt="npm installing" width="500"/>

> **What is this doing?** Basically, the application needs other things to help it do what it wants to do (11ty and 11ty Image Plugin). With the NPM install command, your computer is going out to the web, getting these programs, and installing them on your computer. They are only being installed to this /src directory and you can see their folders and files in the node_modules directory. You’ll never have to worry about these files but just know that they are there to help build your site.

<br>![npm installed](/src/docs/npm-install-2.png "npm installed")

<br>With the application installed, you can run `npx @11ty/eleventy` to generate or build your site. You will also see a list of files that 11ty has generated for you.

<img style="border: 3px solid black;" src="/src/docs/run-11ty.png" alt="build site with 11ty" width="400"/>

> **What is this doing?** This command is asking 11ty to build your site from the files that are already in the project. The application is ‘seeded’ with 3 examples: a single image, multiple images, and a fully detailed with multiple images example. For reference, you can find these in the `/src/images/` folder.
>
> The `npx @11ty/eleventy` command takes the information in each folder’s index.html file and uses it to build the main site’s page with a list of separate image folders, a Mirador 3 Viewer page for each folder, a manifest.json file for each folder, and thumbnails of each image. For reference, you can find the 'compiled' site in the `/src/_site/` folder.

<br>To view your site locally, change the `/src/_data/siteURL.json` file to “http://localhost:8080”. Then use the `npx @11ty/eleventy --serve` command. The “-- serve” asks 11ty to also create a webserver in memory so you can see your application.

<img style="border: 3px solid black;" src="/src/docs/11ty-serve-terminal.png" alt="11ty serve terminal" width="500"/>

<br>And here is the application.

<img style="border: 3px solid black;" src="/src/docs/11ty-serve-browser.png" alt="11ty serve browser" width="400"/>

> FYI, to quit the 11ty serve command, press control+c in the terminal.

Next, login to your Netlify account. Then visit <https://app.netlify.com/drop> and drag your `src/_site` folder into the 'drop box' in your browser.

![Netlify Deploy](/src/docs/netlify-deploy.gif "Netlify Deploy")<br><br>

> **What is this doing?** Netlify will publish the static assets that the application created. This will give you a public website, URL as host the pages and resources.

<br><br>![Netlify Site Deploy](/src/docs/netlify-deploy-site.png "Netlify Site Deploy")

<br>With your pages deployed, if you want you can change the URL to something more meaningful. Click the "Site Settings" button.<br>

![site settings](/src/docs/site-settings.png "site settings")

<br>Next, click the "Change site name" button.<br>

<img style="border: 3px solid black;" src="/src/docs/change-site-name.png" alt="Change site name" width="400"/>

<br>Save, and you should have your new site URL.<br>

![New Site Name](/src/docs/new-site-name.png "New Site Name")

<br>Because the IIIF manifest needs the entire new URL to work, and in order for our website to work, we need to take this new URL and put it in as the siteURL. This will make sure that the application knows where it lives on the web. Update `_data/siteURL.json`<br>

<img style="border: 3px solid black;" src="/src/docs/siteURL.png" alt="siteURL" width="400"/>

<br>Now, rebuild your site locally (`npx @11ty/eleventy`) and deploy again. To deploy this time, click the **Deploys** option in your menu and drag your `src/_site` folder into the 'drop box' in your browser.<br>

![Netlify Deploys for existing site](/src/docs/site-deploys-option.png "Netlify Deploys for existing site")

<br>Once the site has been built and processed, click on the site URL and it should open an new browser tab with your site (the overview page). This is a quick list of all the image sets the application created.

You can open the Mirador page (click on the single Mirador link) or even send the link to friends, students, or scholars. The manifest URL can also be used elsewhere but only in Mirador 3 viewers. For example, [Mirador par Biblissima](https://iiif.biblissima.fr/mirador3/?theme=light) or
[Project Mirador](https://mirador-dev.netlify.app/__tests__/integration/mirador/)

## Adding your own images

To add your own image file(s), first begin by creating a folder under `/src/images/`. Make sure it is URL friendly with no spaces or special characters. Then copy the `index.html` from the `full` folder and paste it in this directory. Finally, add your image file(s).

<img style="border: 3px solid black;" src="/src/docs/add-folder-image-file.png" alt="Add folder" width="800"/>

Next, open the index.html file in edit mode (try using [Atom](https://atom.io/)) from your new folder. In this file, you will describe your image(s) so that the application can build the manifest etc.

<img style="border: 3px solid black;" src="/src/docs/index-file-contents.png" alt="Index file" width="800"/>

The full list of possible options may be overwhelming but really there are only a few required fields to get you started.

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

Try using all, some, or just remove everything except for the required fields. You'll need to leave the first 2 lines which are used by the application. Change the folder name to match yours, and change the image(s) array/list to match your image file(s) names.

With this saved, do a build and then deploy your application to see your images and manifests.

## Cleanup

Once you have a folder with image file(s) working, feel free to remove the `single`, `multiple`, and `full` folders. They are only there as examples to get you up and running.

Remember that if you want to deploy another set of image file(s) in the future, you can just reinstall and setup a new site for those. The previous site's images stay ‘minted’ and you won’t continue to build and deploy a bigger and bigger distribution of image files.

## Gotchas

- You can’t have : or colons in your text. Because the system uses a YAML format, these aren’t allowed. Unless in quotes.
<image>

- Quotes can also cause a problem, especially if you have quotes within quotes. In many cases substituting or eliminating quotes will help.

<image>

- Currently the application works with JPG image files only.

- Folder names and image names should be URL friendly

<image this not this>

- Subfolders aren't allowed. Keep your folders under the /images folder

<image this not this>

- Not seeing your changes? Make sure you save your files, re-compile (generate) your site, and then deploy.

## Other information

**What’s the netlify.toml file doing?** This file allows other sites to see and use your manifest files. It has to do with CORS. Basically, most websites try to protect their content by not letting others use it. In our case, we want them to use it. If you want you can read more about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) or the [netlify.toml file](https://docs.netlify.com/configure-builds/file-based-configuration/#headers).

------------------

Add ability to theme? light/dark? primary color?

Mac and Windows install and run screen prints. for node and building application

Make repo public!
