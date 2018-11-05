const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    output: {
        publicPath: '/'
    },
	node: {fs: 'empty'},	// aggiunta da Ema, copiato da webpack.config.dev.js
    module: {
        noParse: [/jszip.js$/],
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.scss$/,
                use: [
                    {
                        loader: require.resolve('style-loader')
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: require.resolve('sass-loader')
                    },
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },{
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
                query: {
                    name: 'static/media/files/[name].[hash:8].[ext]'
                }
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                query: {
                    name: 'static/media/fonts/[name].[hash:8].[ext]'
                }
            },
            // Load images.
            {
                test: /\.(gif|jpe?g|png)$/,
                loader: 'url-loader?limit=25000',
                query: {
                    limit: 10000,
                    name: 'static/media/images/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
		port: 8081	// aggiunta Ema per settare porta su cui fare il run
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('http://itarx1plivmm007.pli-petronas.com/')
        })
    ],
    externals: [
        {'./cptable': 'var cptable'},
        {'./jszip': 'jszip'}
    ]
}
;