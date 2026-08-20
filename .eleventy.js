module.exports = function (eleventyConfig) {
  // Static assets copied as-is into the build output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  eleventyConfig.addFilter("upper", function (value) {
    return (value || "").toString().toUpperCase();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
