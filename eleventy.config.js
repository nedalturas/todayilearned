module.exports = function (eleventyConfig) {
  // Copy styles folder to output
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};