const path = require('path');
const webpackBase = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    target: "node",

    entry: "./src/index.ts",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    externals: [webpackNodeExternals()]
};

module.exports = webpackMerge(config, webpackBase);