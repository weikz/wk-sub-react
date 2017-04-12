'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const request = require('request');
const bodyParser = require('body-parser');


const config = require('./webpack.config.dev');
const port = process.env.PORT || 3001;

const app = express();
const compiler = webpack(config);

compiler.apply(new DashboardPlugin());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.post('/checkout', (req, res, next) => {
    request.post({url: 'http://localhost:3000/checkout', form: req.body }, function (err, response, body){
        var body = JSON.parse(body);
        res.send(body.html);
    });
});

app.get('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');

    compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
            return next(err);
        }
        
        res.set('content-type', 'text/html');
        res.send(result);
    });
});

app.listen(port, 'localhost', err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`wk-sub-front is listening in port: ${port}`);
});