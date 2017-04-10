const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const config = require('./webpack.config.base');

module.exports = merge.smart(config, {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    module: {
        rules: [
            {
                test: /^((?!\.module).)*\.css$/,
                loaders: [
                'style-loader',
                'css-loader?sourceMap',
                ],
                include: [
                path.resolve(__dirname, 'src'),
                ]
            },
            {
                test: /\.module\.css$/,
                loaders: [
                'style-loader',
                'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line max-len
                'postcss-loader',
                ],
                exclude: /node_modules/
            },
        ]
    }
})