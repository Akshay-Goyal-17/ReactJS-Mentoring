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
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    devServer: {
        contentBase:  path.resolve(__dirname, 'public'),
        port: 3000
      },
    plugins: [
    new HtmlWebpackPlugin({
        template: "public/index.html"
    })
    ]
};