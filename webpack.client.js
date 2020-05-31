const path = require('path');
const webpackBase = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const config = {
    entry: "./src/client/client.tsx",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    }
};

module.exports = webpackMerge(config, webpackBase);