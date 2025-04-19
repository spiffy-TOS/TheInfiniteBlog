module.exports = function(eleventyConfig) {
  // 🟢 Copy CSS and images to output
  eleventyConfig.addPassthroughCopy("src/custom.css");
  eleventyConfig.addPassthroughCopy("src/images");

  // 🧠 Blog posts collection
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  // 🖼 Infinite Journey Gallery (excluding its index.md)
  eleventyConfig.addCollection("infiniteJourneyGallery", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/gallery/infinite-journey/*.md")
      .filter(item => !item.inputPath.endsWith("index.md"));
  });

  // 🔥 TROC Gallery (excluding its index.md)
  eleventyConfig.addCollection("trocGallery", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/gallery/troc/*.md")
      .filter(item => !item.inputPath.endsWith("index.md"));
  });

  // ✅ Eleventy config
  return {
    dir: {
      input: "src",
      output: "docs"
    },
    pathPrefix: "/TheInfiniteBlog/"
  };
};
