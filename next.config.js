const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  handleImages: ["svg", "png"],
  trailingSlash: true,
});
