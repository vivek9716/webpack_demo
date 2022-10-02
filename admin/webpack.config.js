const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'), // the bundle output path
        filename: "bundle.js", // the name of the bundle
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", // to import index.html file inside index.js
        }),
    ],
    devServer: {
        port: 3030, // you can change the port
        historyApiFallback: true,
        allowedHosts: ['www.vivek.com'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                    loader: "babel-loader",
                },
                include: path.join(__dirname, 'src')

            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, // to import images and fonts
                use: {
                    loader: "url-loader"
                }
            },
        ],
    },
};