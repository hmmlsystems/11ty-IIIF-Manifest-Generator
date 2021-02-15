# 11ty IIIF Manifest Generator

MENU HERE

## TL;DR
Too busy to read? Here are some simple instructions to get started.
In bulleted list. Add a folder with your images, describe them, build, deploy.

## Description
Using this program and the below process, you can generate a IIIF manifest for an image or images, deploy them to the web, and share or use them around the web. All without deploying your own [IIIF Image Server](https://iiif.io/apps-demos/#image-servers).  

The program utilizes the power of the [11ty](https://www.11ty.dev/) static site generator (SSG) and the [11ty Image plugin](https://www.11ty.dev/docs/plugins/image/) to generate an overview page, a separate Mirador 3 Viewer page for each set of images, and a IIIF manifest for each set of images.

<<Image>>

## Requirements
The goal of this project was to create a simple process to generate these manifests on the web without a IIIF image server. You will need a [Netlify account](https://www.netlify.com/), a computer, and some basic knowledge of working on the command line. Each step along the way is documented to provide help and guidance along the way.

## Assumptions
We’re assuming you know what [IIIF](https://iiif.io/) is and why you may want a manifest for an image(s). The process also assumes some familiarity with the [Mirador 3 IIIF Image Viewing Client](https://projectmirador.org/).

<<image>>

## Installation
First you need the Node and NPM applications. These can both be installed via the [Nodejs.org LTS installation](https://nodejs.org/en/). Follow the installation instructions. Once installed, confirm that they are working by asking your computer what version of Node and NPM you have (node -v and npm -v). If it is able to tell you a version, they are installed correctly.

<<image>>

Next, download the ZIP of the Github repository. If you are adept at Git, you can also clone the repository.

<image>

Extract or unzip the file

<image>

Navigate to the /11ty-IIIF-Manifest-Generator/src/ directory.

<image>

Next install the application using npm install.

<image>

> What is this doing? Basically, the application needs other things to help it do what it wants to do (11ty and 11ty Image Plugin). With the NPM install command, your computer is going out to the web, getting them, and installing them on your computer. They are only being installed to this /src directory and you can see their folders and files in the node_modules directory. You’ll never have to word about these files but just know that they are there to help build your site.

With the application installed, you can run npx @11ty/eleventy to generate or build your site.

<image>

> What is this doing? This command is asking 11ty to build your site from the files that are already in the project. The application is ‘seeded’ with 3 examples: a single image, a multiple image, and a fully detailed, multiple image example.
>
> <image of project code>
>
> This command takes the information in each folder’s index.html file and uses it to build the main site’s page with a list of separate image folders, a Mirador 3 Viewer page for each folder, a manifest.json file for each folder, and thumbnails of each image.
>
> <image of finished site>
>
> You will also see a list of files that 11ty has generated for you.

<image>

To view your site locally, change the /src/_data/siteURL.json file to “http://localhost:8080”. Then use the npx @11ty/eleventy --serve command. The “-- serve” asks 11ty to also create a webserver so you can see your application.

<images - terminal and browser>

To quit the 11ty serve command, press control+c in the terminal.

Next, login to your Netlify account. Then visit <https://app.netlify.com/drop> and drag your “_site” folder into the box in your browser.

<gif>

> What is this doing? Netlify will publish the static assets that the application created. They will give you a URL and host the pages.
>
> <image>

With your pages deployed, if you want you can change the URL to something more meaningful.

<image>

But, in order for our application to work we need to take this new URL and put it in as the siteURL.

<image>

Now, rebuild your site and deploy again.

<image>

Click on the site URL and you should see the overview page. This is a quick list of all the image sets the application created.

You can open the Mirador page or send the link to friends. The manifest URL can also be used elsewhere in Mirador 3 viewers. For example, [Mirador par Biblissima](https://iiif.biblissima.fr/mirador3/?theme=light) or
[Project Mirador](https://mirador-dev.netlify.app/__tests__/integration/mirador/)

## Adding your own images

To add your own image files, first begin by creating a folder under /src/images/. Make sure its URL friendly with now spaces or special characters.

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
