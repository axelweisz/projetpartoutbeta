const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
                entry: { 
                    'home': "./src/index.js",
                    'sketches': "./src/sketches.js",
                    'apropos': "./src/apropos.js"
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
                                test: /\.(png|jpg|jpeg|gif)$/,
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
                        template: "src/view-templates/page-sketches.hbs"
                    }),
                    // new HtmlWebpackPlugin({
                    //     filename: "kiwi.html",
                    //     chunks: ["kiwi"],
                    //     title: "Kiwi",
                    //     description: "Kiwi",
                    //     template: "src/view-templates/page-template.hbs"
                    // }),
                    new HtmlWebpackPlugin({
                        filename: "apropos.html",
                        chunks: ["apropos"],
                        title: "À Propos",
                        description: "Page avec le resumé du projet",
                        template: "src/view-templates/page-template.hbs"
                    }),       
        ]
};
