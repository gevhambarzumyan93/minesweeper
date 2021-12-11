const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const pick = require('lodash/pick');

require('dotenv').config({ path: './.env.development' });

module.exports = {
  devServer: {
    port: 8000,
    // proxy: {
    //   '/api/*': {
    //     target: 'http://localhost:8000',
    //   },
    // },
    historyApiFallback: true,
  },
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
    alias: {
      themes: path.resolve(__dirname, 'src/themes'),
      layouts: path.resolve(__dirname, 'src/components/layouts'),
      api: path.resolve(__dirname, 'src/api'),
    },
  },
  entry: {
    // ...glob.sync(path.resolve(__dirname, './src/**/*.js')).reduce(function (obj, el) {
    //   console.log(obj, el);
    //   obj[path.parse(el).name] = el;
    //   return obj;
    // }, {}),
    index: path.resolve(__dirname, './src/index.js'),
    ...glob.sync(`${__dirname}/src/{**/*.ts,**/*.tsx}`).reduce(function (obj, el) {
      // es greladzevy mtacelu tegxa talis
      const pathPars = path.parse(el);
      const pathMap = pathPars.dir.split('/');
      const bandlerName = pathPars.name.includes('index') ? pathMap[pathMap.length - 1] : pathPars.name;
      obj[bandlerName] = el;
      return obj;
    }, {}),
    // components: glob.sync(path.resolve(__dirname, './src/components/*.js')),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'source-map-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        // use: ['style-loader', 'css-loader', 'less-loader'],
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        //   REACT_APP_HOSTNAME: JSON.stringify(process.env.REACT_APP_HOSTNAME),
        REACT_APP_BUCKET_NAME: JSON.stringify(process.env.REACT_APP_BUCKET_NAME),
        REACT_APP_BUCKET_REGION: JSON.stringify(process.env.REACT_APP_BUCKET_REGION),
        REACT_APP_COGNITO_REGION: JSON.stringify(process.env.REACT_APP_COGNITO_REGION),
        REACT_APP_COGNITO_USER_POOL_ID: JSON.stringify(process.env.REACT_APP_COGNITO_USER_POOL_ID),
        REACT_APP_COGNITO_WEB_CLIENT_ID: JSON.stringify(process.env.REACT_APP_COGNITO_WEB_CLIENT_ID),
        REACT_APP_COGNITO_IDENTITY_ID: JSON.stringify(process.env.REACT_APP_COGNITO_IDENTITY_ID),
        REACT_APP_COGNITO_DOMAIN: JSON.stringify(process.env.REACT_APP_COGNITO_DOMAIN),
        REACT_APP_COGNITO_REDIRECT_URL: JSON.stringify(process.env.REACT_APP_COGNITO_REDIRECT_URL),
        REACT_APP_HOSTNAME: JSON.stringify(process.env.REACT_APP_HOSTNAME),
        REACT_APP_ALGOLIA_APP_ID: JSON.stringify(process.env.REACT_APP_ALGOLIA_APP_ID),
        REACT_APP_ALGOLIA_SEARCH_API_KEY: JSON.stringify(process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'ProjectName',
      hash: true,
      filename: 'index.html', //relative to root of the application
      // chunks: [**'common'**, 'app'],
      path: path.resolve(__dirname, 'dist'),
      template: './src/index.html',
      templateParameters(compilation, assets, options) {
        return {
          compilation: compilation,
          webpack: compilation.getStats().toJson(),
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            files: assets,
            options: options,
          },
          process,
        };
      },
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[name].[hash:8].js',
    //   exclude: /node_modules/,
    // }),
  ],
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[id].[hash:8].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map',
};
