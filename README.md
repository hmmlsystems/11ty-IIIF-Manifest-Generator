# 11ty IIIF Manifest Generator

MENU HERE???

## TL;DR
Too busy to read? Here are some simple instructions to get started.
In bulleted list. Add a folder with your images, describe them, build, deploy.

## Description
Using this program and the below process, you can generate a IIIF manifest (Level 0) for an image or images, deploy them to the web, and share or use around the web. All without deploying your own [IIIF Image Server](https://iiif.io/apps-demos/#image-servers).  

The program utilizes the power of [11ty](https://www.11ty.dev/), a static site generator (SSG), and the [11ty Image plugin](https://www.11ty.dev/docs/plugins/image/) to generate an overview page, a separate Mirador 3 IIIF Image Viewing Client page for each image(s) set, and a IIIF manifest for each image(s) set.

![results of program](/docs/11ty-iiif-final-list.png "results of program")

## Requirements
The goal of this project was to create a relatively simple process to generate IIIF Level 0 manifests on the web without a IIIF image server. You will need a [Netlify account](https://www.netlify.com/), a computer, and some basic knowledge of working on the command line. Each step is documented to provide help and guidance along the way.

## Assumptions
We’re assuming you know what [IIIF](https://iiif.io/) is and why you may want a manifest for an image(s). The process also assumes some familiarity with the [Mirador 3 IIIF Image Viewing Client](https://projectmirador.org/).

## Installation
First you need the Node and NPM applications. These can both be installed via the [Nodejs.org LTS installation](https://nodejs.org/en/). Follow the installation instructions. Once installed, confirm that they are working by asking your computer what version of Node and NPM you have (`node -v` and `npm -v`). If it is able to tell you a version, they are installed correctly.

![node and npm](/docs/node-npm.png "node and npm")

Next, download the ZIP of this [Github repository](). If you are adept at Git, you could also clone the repository.

![download code](/docs/download-code-github.png "download code")

Extract or unzip the download file.

![extract download](/docs/extract-download.png "extract download")

In Terminal, navigate to the `/11ty-IIIF-Manifest-Generator/src/` directory.

![terminal](/docs/terminal-src.png "terminal")

Next install the application using `npm install`.

![npm installing](/docs/npm-install-1.png "npm installing")

> **What is this doing?** Basically, the application needs other things to help it do what it wants to do (11ty and 11ty Image Plugin). With the NPM install command, your computer is going out to the web, getting these programs, and installing them on your computer. They are only being installed to this /src directory and you can see their folders and files in the node_modules directory. You’ll never have to worry about these files but just know that they are there to help build your site.

![npm installed](/docs/npm-install-2.png "npm installed")

With the application installed, you can run `npx @11ty/eleventy` to generate or build your site. You will also see a list of files that 11ty has generated for you.

![build site with 11ty](/docs/run-11ty.png "build site with 11ty")

> **What is this doing?** This command is asking 11ty to build your site from the files that are already in the project. The application is ‘seeded’ with 3 examples: a single image, multiple images, and a fully detailed with multiple images example. For reference, you can find these in the `/src/images/` folder.
>
> The `npx @11ty/eleventy` command takes the information in each folder’s index.html file and uses it to build the main site’s page with a list of separate image folders, a Mirador 3 Viewer page for each folder, a manifest.json file for each folder, and thumbnails of each image. For reference, you can find the 'compiled' site in the `/src/_site/` folder.

To view your site locally, change the `/src/_data/siteURL.json` file to “http://localhost:8080”. Then use the `npx @11ty/eleventy --serve` command. The “-- serve” asks 11ty to also create a webserver in memory so you can see your application.

![11ty serve terminal](/docs/11ty-serve-terminal.png "11ty serve terminal")

And here is the application.

![11ty serve browser](/docs/11ty-serve-browser.png "11ty serve browser")

FYI, to quit the 11ty serve command, press control+c in the terminal.

Next, login to your Netlify account. Then visit <https://app.netlify.com/drop> and drag your `src/_site` folder into the box in your browser.

![Netlify Deploy](/docs/netlify-deploy.gif "Netlify Deploy")

> **What is this doing?** Netlify will publish the static assets that the application created. They will give you a URL and host the pages.

![Netlify Site Deploy](/docs/netlify-deploy-site.png "Netlify Site Deploy")

With your pages deployed, if you want you can change the URL to something more meaningful. Click the "Site Settings" button.

![site settings](/docs/site-settings.png "site settings")

Next, click the "Change site name" button.

![Change site name](/docs/change-site-name.png "Change site name")

Save, and you should have your new site URL.

![New Site Name](/docs/new-site-name.png "New Site Name")

Because the IIIF manifest needs the new URL to work, and in order for our website to work, we need to take this new URL and put it in as the siteURL. This will make sure that the application knows where it lives on the web.

![siteURL](/docs/siteURL.png "siteURL")

Now, rebuild your site (`npx @11ty/eleventy`) and deploy again. To deploy this time, click the deploy option in your menu and drag your `src/_site` folder into the box in your browser.

![Netlify Deploys for existing site](/docs/site-deploys-optionL.png "Netlify Deploys for existing site")

Once the site has been built and processed, click on the site URL and it should open an new browser tab with your site - the overview page. This is a quick list of all the image sets the application created.

You can open the Mirador page (click on the single Mirador link) or even send the link to friends, students, or scholars. The manifest URL can also be used elsewhere but only in Mirador 3 viewers. For example, [Mirador par Biblissima](https://iiif.biblissima.fr/mirador3/?theme=light) or
[Project Mirador](https://mirador-dev.netlify.app/__tests__/integration/mirador/)

## Adding your own images

To add your own image files, first begin by creating a folder under `/src/images/`. Make sure its URL friendly with now spaces or special characters.

<image>
Copy the index.html from the full directory and paste it in this directory.

<image>

Also paste in your image file(s).

<image>

Next, open the index.html file from your new folder. This is where you will describe your image(s) so that the application can build the manifest etc.

<image>

The full list may be overwhelming but really there are only a few required fields to get you started.

<TABLE OF LIST AND WHAT THEY DO AND IF REQUIRED>

Try some or just remove everything except for the first  lines. Leave the first 2 lines which are used by the application. Change the folder name to match yours, and change the image(s) list to match your image file(s).

With this saved, do a build and then serve your application to see your images and manifest.

## Gotchas

You can’t have : or colons in your text. Because the system uses a YAML format, these aren’t allowed. Unless in quotes.
<image>

Quotes can also cause a problem, especially if you have quotes within quotes. In many cases substituting or eliminating quotes will help.

<image>

Currently the application works with JPG image files only.

Folder names and image names should be URL friendly

<image this not this>

Subfolders aren't allowed. Keep your folders under the /images folder

<image this not this>

## Other information

**What’s the netlify.toml file doing?** This file allows other sites to see and use your manifest files. It has to do with CORS. Basically, most websites try to protect their content by not letting others use it. In our case, we want them to use it. If you want you can read more about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) or the [netlify.toml file](https://docs.netlify.com/configure-builds/file-based-configuration/#headers).


---------------------


Add ability to theme? light/dark? primary color?

add checks for blank. assume people will just blank out values

Mac and Windows install and run screen prints. for node and building application

For the first deploy we don't know the siteURL. Do a deploy, Gif of dragging _site folder into Netlify. This will give you a new URL. Want to change it? Tweek it now under x, x, x. With this new url, copy it and put it into your siteURL.json file (no / at the end). Rebuild your site, re-deploy your site (go to Deploys and drag _site folder) and then open your website!

Breakdown full file what each value can be.

Explain what each file is doing

Ability to add department ico/image (load in https://mirador-dev.netlify.app/__tests__/integration/mirador/ - don't see logo)

Want to deploy another site or set of manifest. Just reinstall and setup a new site for those. The previous ones stay ‘minted’ and you won’t continue to build and deploy a bigger and bigger distribution of files.

Make repo public!
