const Image = require("@11ty/eleventy-img");
const sharp = require('sharp');
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("imageGen", imageGenShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("imageGenSharp", imageGenSharpShortcode);

  eleventyConfig.setTemplateFormats([
    "njk",
    "liquid",
    "html",
    "jpg",
    "ico",
    "toml"
  ]);
};

async function imageGenShortcode(src, folder, alt) {
  //https://www.11ty.dev/docs/plugins/image/
  if(alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [600],
    formats: ["jpeg"],
    outputDir: "./_site/images/"+folder,
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `sm-${name}.jpg`;
    }
  });

  let data = metadata.jpeg.pop();
  //console.log( data );

  let metadataFull = await Image(src, {
    widths: [null],
    formats: ["jpeg"]
  });

  let dataFull = metadataFull.jpeg[metadataFull.jpeg.length - 1];
  //console.log( dataFull );
  //return `<img src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async">`;
  return `"width": ${dataFull.width}, "height": ${dataFull.height},`;
  //"height": 1800,"width": 1200,
  //return ``;
}

async function imageGenSharpShortcode(src, folder, alt) {
  //https://www.11ty.dev/docs/plugins/image/
  if(alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }
  const extension = path.extname(src);
  const fileName = path.basename(src, extension);
  sharp(src)
    .resize({ height: 150 })
    .toFile("./images/"+folder+"/"+'sm-'+fileName+'.jpg')
    .catch(err => { console.log(err+" "+fileName) });

  /*let metadata = await Image(src, {
    widths: [600],
    formats: ["jpeg"],
    outputDir: "./images/"+folder,
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `sm-${name}.jpg`;
    }
  });*/

  //let data = metadata.jpeg.pop();
  //console.log( data );
  return fileName;
}
