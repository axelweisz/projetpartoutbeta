const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
       'home':  './src/index.js',
                'sketches': "./src/sketches.js",
                'apropos': "./src/apropos.js"
    },
    output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, './dist'),
            publicPath: ''
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
             filename: "index.html",
            chunks: ["home"],
            title: "Home",
            description: "Home",
            template: "src/view-templates/page-template.hbs"
        }),
        new HtmlWebpackPlugin({
            filename: "sketches.html",
            chunks: ["sketches"],
            title: "Sketches",
            description: "Sketches",
            template: "src/view-templates/page-template.hbs"
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'kiwi.html',
        //     chunks: ['kiwi'],
        //     title: 'Kiwi',
        //     description: 'Kiwi',
        //     template: 'src/view-templates/page-template.hbs'
        // }),
        new HtmlWebpackPlugin({
            filename: "apropos.html",
            chunks: ["apropos"],
            title: "À Propos",
            description: "Page avec le resumé du projet",
            template: "src/view-templates/page-template.hbs"
        })    
    ]
};
