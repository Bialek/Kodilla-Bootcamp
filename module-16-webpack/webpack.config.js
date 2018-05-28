const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const plugins = [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
})];

module.exports = (env) => {
    if (env === 'production') {
        plugins.push(
            new OptimizeJsPlugin({
                sorceMap: false
            })
        )
    }
    return {
        mode: env,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },

        plugins,

        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: ["node_modules"]
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
        }
    }
};