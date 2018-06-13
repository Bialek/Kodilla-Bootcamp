const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const CopyWebpackPlugin = require('Copy-Webpack-Plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const plugins = [
    new CopyWebpackPlugin([
        { from: 'src/images', to: 'images/'}
      ]),
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body',
    }),
    new HtmlWebpackIncludeAssetsPlugin({
        assets: ['src/style.css'],
        append: true
    })
];

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
        entry: (env !== 'production' ? [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
        ] : []).concat(['./client/index.js']),
        output: {
            filename: './bundle.js',
            path: path.resolve(__dirname, 'public'),
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