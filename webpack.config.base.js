const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
        },
        {
            test: /\.(png|jpg|joeg|gif)$/,
            loaders: ['url-loader?limit=20000']
        },
        {
            test: /\.svg$/,
            loaders: 'babel!svg-react'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],


    resolve: {
        alias: {
            common: `${__dirname}/src/components/common`,
            utils: `${__dirname}/src/utils` 
        }
    }
};