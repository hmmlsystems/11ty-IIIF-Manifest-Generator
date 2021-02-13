const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.setTemplateFormats([
    "njk",
    "liquid",
    "html",
    "jpg"
  ]);
};

async function imageShortcode(src, alt) {
  //https://www.11ty.dev/docs/plugins/image/
  if(alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [600],
    formats: ["jpeg"],
    outputDir: "./thumbnails/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `sm-${name}.jpg`;
    }
  });

  let data = metadata.jpeg.pop();
  //console.log( data );
  return `<img src="../../thumbnails/${data.filename}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async" hidden>`;
}
