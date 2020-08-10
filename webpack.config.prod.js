const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
	
process.env.NODE_ENV = "production";

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: true,
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
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        })
    ]
};