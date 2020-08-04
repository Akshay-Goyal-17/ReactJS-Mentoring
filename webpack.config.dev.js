const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = "development";

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: 'bundle.js'
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    devServer: {
        contentBase:  path.resolve(__dirname, 'dist'),
        port: 3000
      },
    plugins: [
    new HtmlWebpackPlugin({
        template: "src/index.html"
    })
    ]
};