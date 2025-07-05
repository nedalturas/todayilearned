module.exports = function(eleventyConfig) {
    // Copy styles folder to output
    eleventyConfig.addPassthroughCopy("styles");
    
    return {
      dir: {
        input: ".",
        output: "_site"
      }
    };
  };