const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {

    entry: [
        path.join(__dirname, 'client/index.js')
    ],

    output: {
        path: path.join(__dirname, 'public/'),
        publicPath:  '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            //
            // {
            //     test: /\.sass$/,
            //     use: ExtractTextPlugin.extract ({
            //         fallback: 'style-loader',
            //         use: ['css-loader', 'sass-loader']
            //     })
            //
            // },

            {
                test: /\.sass$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']

            },

            {
                test: /(.woff2|.woff|.eot|.ttf|.otf)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            },

            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'client'),
                loaders:[{
                    loader: 'babel-loader',
                    query: {
                        plugins: [
                            'transform-runtime',
                            'transform-react-remove-prop-types',
                            'transform-react-constant-elements',
                            'transform-react-inline-elements'
                        ],
                        presets: ['react', 'es2015', 'stage-0']
                    }
                }]
            },

            {
                test: /\.(gif|png|jpeg|jpg|svg)$/i,
                loaders: [ {
                    loader: 'url-loader',
                    query: {
                        limit: 10000
                    }
                     },

                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,

                            mozjpeg: {
                                quality: 65
                            },

                            pngquant:{
                                quality: "65-90",
                                speed: 4
                            },

                            svgo:{
                                plugins: [
                                    {
                                        removeViewBox: false
                                    },
                                    {
                                        removeEmptyAttrs: false
                                    }
                                ]
                            },



                        },
                    }
                ]
            },

        ]
    },

    plugins: [
        // new ExtractTextPlugin('style.css'),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
        }),
        new webpack.ProvidePlugin({
            'React': 'react',
            "createReactClass": "create-react-class",
            "PropTypes": "prop-types"
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    }
}