const config = {
    mode: "production",
    entry: {
        index: "./src/js/index.js",
        service: "./src/js/service.js",
        portfolio: "./src/js/portfolio.js",
        photostudio: "./src/js/photostudio.js",
    },
    output: {
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

module.exports = config;