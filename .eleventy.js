module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/custom.css");

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};
