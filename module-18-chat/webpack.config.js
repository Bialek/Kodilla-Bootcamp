const path = require('path');
var env = process.env.NODE_ENV || 'development';
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');
var webpack = require('webpack');

var plugins = [
	new HtmlWebpackPlugin({
			template: 'public/index.html',
			filename: 'index.html',
			inject: 'body',
		})
];

	if (env === 'production') {
		plugins.push(
			new webpack.optimize.UglifyJsPlugin(),
			new OptimizeJsPlugin({
			sourceMap: false
			})
		);
	}

module.exports = {
    entry: (env !== 'production' ? [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
    ] : []).concat(['./client/index.js']),

    output: {
    	filename: './bundle.js',
        path: path.resolve(__dirname, 'public'),
        
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/, 
				query: { 
					presets: ["es2015", "react", "stage-2"], 
					plugins: ["react-hot-loader/babel"] 
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}

				]
			}
		]
	},
	plugins
};