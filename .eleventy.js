module.exports = function(eleventyConfig) {
  // Allow custom CSS and images to pass through to the output folder
  eleventyConfig.addPassthroughCopy("src/custom.css");
  eleventyConfig.addPassthroughCopy("src/images");

  // 📚 Blog Posts Collection
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  // 🖼 Infinite Journey Gallery Collection
  eleventyConfig.addCollection("gallery_ij", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/gallery/infinite-journey/*.md");
  });

  // 🔥 Rings of Chaos Gallery Collection
  eleventyConfig.addCollection("gallery_troc", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/gallery/troc/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "docs"
    },
    pathPrefix: "/TheInfiniteBlog/"
  };
};
