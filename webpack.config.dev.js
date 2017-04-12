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
                use: [
                'style-loader',
                'css-loader?sourceMap',
                ],
                include: [
                path.resolve(__dirname, 'src'),
                ]
            },
            {
                test: /\.module\.css$/,
                use: [
                'style-loader',
                'css-loader?modules&importLoaders=1',
                'postcss-loader',
                ],
                exclude: /node_modules/
            },
        ]
    }
})