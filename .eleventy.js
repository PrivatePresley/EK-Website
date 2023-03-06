module.exports = function (config) {
  config.addPassthroughCopy("./src/css/");
  config.addPassthroughCopy("./src/img/");
  config.addPassthroughCopy("./src/js/");

  config.addFilter("getRandom", function (items) {
    let selected = items[Math.floor(Math.random() * items.length)];
    return selected;
  });

  return {
    dir: {
      input: "src",
    },
  };
};
