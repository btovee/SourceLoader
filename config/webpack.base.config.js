const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: [ /node_modules/, /.\/src\/exampleFiles\/\.js$/ ],
            use: {
                loader: 'babel-loader'
            }
        }
        // ,
        // {
        //     test: /.\/src\/exampleFiles\/\.js$/,
        //     exclude: /node_modules/,
        //     use: {
        //         loader: 'file-loader'
        //     }
        // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            filename: './index.html' 
        }),
        new CopyWebpackPlugin([
            { from: 'src/exampleFiles/*', to: '', force: true }
          ])
    ]
}