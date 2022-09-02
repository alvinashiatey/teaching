const Image = require("@11ty/eleventy-img");

async function imageShortcode(name, src, alt) {
  let options = {
    widths: [1200],
    formats: ["png"],
    urlPath: "/assets/images/works",
    outputDir: "./dist/assets/images/works",
  };

  let metadata = await Image(src, options);
  let imageAttributes = {
    alt,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = imageShortcode;
