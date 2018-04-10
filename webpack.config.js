/*eslint-disable*/
const path = require('path');
const indexHtml = path.join(__dirname, "src/index.html");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: "source-map",
    target: "web",
    entry: [
        "./src/index.js",
        indexHtml,
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        alias: {
            Components: path.resolve(__dirname, "src/components"),
            StyledComponents: path.resolve(__dirname, "src/styled-components"),
            Utils: path.resolve(__dirname, "src/utils"),
            Pages: path.resolve(__dirname, "src/pages"),
            Assets: path.resolve(__dirname, "src/assets"),
            Store: path.resolve(__dirname, "src/store"),
        }
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 8080,
        open: true,
        watchContentBase: true,
        inline: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: indexHtml,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src", "link:href"],
                            interpolate: true,
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png)$/,
                loaders: [
                    {
                        loader: "file-loader"
                    },
                ],
            },
        ]
    },
    plugins: [
        //if you want to pass in options, you can do so:
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
}