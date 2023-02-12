const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackDevServer = require('webpack-dev-server');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    devServer: {
        watchFiles: ["src/**/*"],
        port: 3000,
        hot: true,
        compress: true,
        open: "chrome",
        static: {
            directory: path.join(__dirname, "/src/client")
        }
    },
    output: {
        libraryTarget: 'var',
        library: 'Client',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
            scriptLoading: "blocking",
            inject: "body"
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]

}
