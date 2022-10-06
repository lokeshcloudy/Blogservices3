const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'blog': './src/blog/index.tsx',
        'nft': './src/nft/index.tsx',
        'crypto': './src/crypto/index.tsx',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            automaticNameDelimiter: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.(js|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog'],
            minimize: false ,
            title: 'Blog',
            description: 'some description',
            template: 'src/blog/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'nft.html',
            chunks: ['nft'],
            title: 'nft',
            description: 'some',
            template: 'src/nft/nft.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'crypto.html',
            chunks: ['crypto'],
            title: 'crypto',
            description: 'some',
            template: 'src/crypto/crypto.html'
        })
    ]
};
