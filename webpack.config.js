const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        background: "./src/javascripts/background.js",
        content: "./src/javascripts/content.js",
        popup: "./src/javascripts/popup.js",
        options: "./src/javascripts/options.js"
    },
    output: {
        path: './dist/assets/javascripts',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'src/html', to: '../html' },
        { from: 'src/stylesheets', to: '../stylesheets' },
        { from: 'manifest.json', to: '../manifest.json' }
      ])
    ],
    devtool: 'source-map'
};
