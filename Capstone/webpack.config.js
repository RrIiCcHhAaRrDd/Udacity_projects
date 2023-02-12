const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
            scriptLoading: "blocking",
            inject: "body"
        })
    ]
}