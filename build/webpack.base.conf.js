/**
 * created by zhangzihao on 2018/6/20
 */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const Happypack = require('happypack');
const utils = require('./utils');

module.exports = {
  entry: utils.getEntries(),
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: utils.dir('dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.css', '.less', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': utils.dir('src'),
      api: utils.dir('src/api'),
      assets: utils.dir('src/assets'),
      class: utils.dir('src/class'),
      components: utils.dir('src/components'),
      constants: utils.dir('src/constants'),
      lib: utils.dir('src/lib'),
      mixins: utils.dir('src/mixins'),
      pingback: utils.dir('src/pingback'),
      plugins: utils.dir('src/plugins'),
      store: utils.dir('src/store'),
      utils: utils.dir('src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [utils.dir('src'), utils.dir('test')],
        options: {
          cache: true,
          formatter: require('eslint-friendly-formatter'),
        }
      }, { // vue-loader
        test: /\.vue$/,
        loader: utils.loader([
          'vue-loader'
        ]),
      }, {
        test: /\.js?$/,
        loader: utils.loader([
          'happypack/loader?id=js'
        ]),
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 2000,
          name: utils.assetDir('img/[name].[hash:9].[ext]'),
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetDir('fonts/[name].[hash:9].[ext]'),
        }
      }, {
        test: /.less$/,
        loader: utils.loader([
          utils.isProduction() ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'happypack/loader?id=style'
        ]),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {
      root: utils.dir(),
    }),
    new LodashWebpackPlugin,
    ...utils.getHtmlWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process': {
        env: {
          NODE_ENV: `"${process.env.NODE_ENV}"`,
          PRODUCTION_STATUS: `"${process.env.PRODUCTION_STATUS}"`
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: utils.assetDir('css/[name].[contenthash:9].css'),
    }),
    new FriendlyErrorsWebpackPlugin(),
    new Happypack({
      id: 'js',
      threads: 4,
      loaders: [{
          loader: 'babel-loader',
        }
      ],
    }),
    new Happypack({
      id: 'style',
      threads: 4,
      loaders: [
        'css-loader',
        'postcss-loader',
        'less-loader',
      ],
    })
  ],
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          // maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          minChunks: 1,
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
};
