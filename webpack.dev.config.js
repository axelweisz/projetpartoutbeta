const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { 
        'kiwi': "./src/kiwi.js",
        'hello-world': "./src/hello-world.js",
        'home': "./src/index.js",
        },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000,
        open: true,
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'stage-0' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                "**/*",
                path.join(process.cwd(), "build/**/*")
            ]
        }),
        new HtmlWebpackPlugin({
            filename: "kiwi.html",
            chunks: ["kiwi"],
            title: "Kiwi",
            description: "Kiwi",
            template: "src/page-template.hbs"
        }),
            new HtmlWebpackPlugin({
            filename: "hello-world.html",
            chunks: ["hello-world"],
            title: "Kiwi",
            description: "Hello",
            template: "src/page-template.hbs"
        }),
            new HtmlWebpackPlugin({
            filename: "index.html",
            chunks: ["home"],
            title: "Home",
            description: "Home",
            template: "src/page-template.hbs"
        })

    ]
};
