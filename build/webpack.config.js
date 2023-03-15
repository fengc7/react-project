const path = require('path')
    //首先引入我们新安装的依赖插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入html模板插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: { //添加抽离公共代码插件的配置
        splitChunks: {
            cacheGroups: {
                //打包公共模块
                commons: {
                    chunks: 'initial', //initial表示提取入口文件的公共部分
                    minChunks: 2, //表示提取公共部分最少的文件数
                    minSize: 0, //表示提取公共部分最小的大小
                    name: 'commons' //提取出来的文件命名
                }
            }
        },
    },
    plugins: [
        new CleanWebpackPlugin(), //删除上次的打包文件
        new MiniCssExtractPlugin({ // 瘦身css
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),
        new HtmlWebpackPlugin({ //实例化Html模板模块，让html引用外部文件
            template: path.resolve(__dirname, '../index.html')
        })
    ],
    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }],
            include: path.join(__dirname, '../src'),
            exclude: /node_modules/
        }, { //最后添加这个依赖插件的配置信息
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                'css-loader',
            ]
        },
        {
            test: /\.scss/, //配置sass转css
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' },
            //   {
            //     loader: 'sass-resources-loader',
            //     options: {
            //       sourceMap: true,
            //       resources: [
            //         path.resolve(__dirname, './../src/styles/main.scss'),
            //       ],
            //     },
            //   },
            ],
           },
           
        {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader'
            }, {
                loader: 'less-loader'
            }]
        }, { //配置图片静态资源的打包信息
            test: /\.(jpg|png|jpeg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    fallback: {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                }
            }]
        }, { //配置多媒体资源的打包信息
            test: /\.(mp4|webm|ogg|mp3|wav)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    fallback: {
                        loader: 'file-loader',
                        options: {
                            name: 'media/[name].[hash:8].[ext]'
                        }
                    }
                }
            }]
        }]
    },
    resolve: { //resolve核心配置
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
            images: path.join(__dirname, '../src/images')
        }
    },
    devServer: { //配置热更新模块
        compress: true, // gzip压缩
        hot: true, // 热更新
        historyApiFallback: true, // 解决启动后刷新404
        open: true,
        port: 3500,
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3500',
                pathRewrite: {
                    '^/api': '/api'
                },
                changeOrigin: true
            }
        }
    }
}