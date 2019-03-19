const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMod = process.env.NODE_ENV !=='production';

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/app/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    mode:'development',
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    devMod ? 'style-loader': MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'bundle.css'
        })
    ]
}