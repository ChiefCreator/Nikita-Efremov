const config = {
    mode: "production",
    entry: {
        index: "./src/js/index.js",
        portfolio: "./src/js/portfolio.js",
    },
    output: {
        filename: "[name].bundle.js",
    },
};

module.exports = config;